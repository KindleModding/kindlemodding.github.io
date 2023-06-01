def generateTable(rows):
    newRows = [
        ["ID", "Type", "R/W/RW", "Value", "Description"]
    ]

    for row in rows:
        newRows.append([
            row[2],
            row[1],
            row[0],
            row[3],
            "TODO"
        ])

    rows = newRows

    columnLengths = []
    for row in rows:
        while (len(columnLengths) < len(row)):
            columnLengths.append(0)

        for i in range(len(row)):
            columnLengths[i] = max(len(row[i]), columnLengths[i])

    tableLines = []
    
    # Add header
    tableLine = '|'
    for i in range(len(rows[0])):
        while len(rows[0][i]) < columnLengths[i]:
            rows[0][i] += ' '
        tableLine += ' ' + rows[0][i] + ' |'
    tableLines.append(tableLine)

    # Add header seperator
    tableLine = '|'
    for columnLength in columnLengths:
        tableLine += ':' + '-'*columnLength + ':|'
    tableLines.append(tableLine)

    for row in rows[1:]:
        tableLine = '|'

        for i in range(len(row)):
            while len(row[i]) < columnLengths[i]:
                row[i] += ' '
            tableLine += ' ' + row[i] + ' |'

        tableLines.append(tableLine)

    return '\n'.join(tableLines)

apps = {}

print("Parsing LIPC dump")
with open('./_lipc.txt', 'r', encoding='utf8') as file:
    appName = ""

    i = 0
    lines = list(file.readlines())
    for i in range(len(lines)):
        line = lines[i]
        if (len(line.split('.')) >= 2 and not (' ' in line or '[' in line or ']' in line)):
            print(line.strip())
            apps[line.strip()] = []
            appName = line.strip()
        elif (line[0] == '\t' and line[1] in ('w', 'r')):
            line = line.split('\t')
            if ('[' in line[-1]):
                appInfo = [line[1].strip(), line[2].strip(), line[3].strip()]

                serviceValue = ""
                countedOpenings = 0
                countedClosings = 0
                while True:
                    line = lines[i].split('\t')
                    valueData = line[-1].strip()

                    serviceValue += valueData

                    countedOpenings += valueData.count('[')
                    countedClosings += valueData.count(']')

                    if (countedOpenings == countedClosings):
                        break
                    i += 1

                appInfo.append(serviceValue)
                apps[appName].append(appInfo)
            else:
                apps[appName].append([line[1].strip(), line[2].strip(), line[3].strip(), ""])

        i += 1


print("Generating documentation files")
template = ""
with open('./_template.md', 'r', encoding='utf8') as file:
    template = file.read()

for appService in list(apps.keys()):
    with open('./' + appService + '.md', 'w', encoding='utf8') as file:
        # Load thingy
        parameterTable = generateTable(apps[appService])

        if (len(apps[appService]) == 0):
            parameterTable = "`APP/SERVICE DOES NOT USE LIPC`"

        file.write(template.replace('<TITLE>', appService).replace('<LIPC>', parameterTable))