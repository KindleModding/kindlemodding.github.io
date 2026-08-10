###
# This file was used to generate the mermaid code for the upstart diagram

outPath = "./upstart.md"
upstartPath = "./mnt/etc/upstart"

import os
print("Parsing upstart...")

jobReferenceEventTypes = ["started", "stopped", "starting", "stopping"] # Events that reference another job
parameterEventTypes = jobReferenceEventTypes + ["runlevel"] # Events that have a parameter

class StartOn:
    eventName: str # started, starting, stopped, stopping, runlevel, the event's name
    eventParam: str # Parameter for specific event types
    eventExtras: str

    def __init__(self, eventName, eventParam="", eventExtras=""):
        self.eventName = eventName
        self.eventParam = eventParam
        self.eventExtras = eventExtras

jobs: list[str] = [] # List of job files
eventRegister: dict[str, str] = {} # event name -> Job name
jobStarts: dict[str, list[StartOn]] = {} # Job name -> StartOn[]

def parseStartOn(statementList):
    startOnList = [] # List of tuples of type (eventType, eventName) where eventType = started|stopped|starting|stopping|None

    i=0

    # Go through each section of the statement
    while i < len(statementList):
        # Filter out AND/OR
        if (statementList[i] in ['and', 'or']):
            modifiers = statementList[i] + '_'
            i += 1

        # Recursive parsing
        if ('(' in statementList[i]):
            j = i
            while True:
                j += 1
                if (')' in statementList[j]):
                    break
            startOnList.extend(parseStartOn(' '.join(statementList[i:j+1]).replace('(', '').replace(')', '').strip().split(' ')))
            i=j+1
            continue

        # If the statement is a raw event or an event with a parameter
        eventName = statementList[i]
        i += 1

        eventParameter = ''
        if (eventName in parameterEventTypes):
            eventParameter = statementList[i]
            i += 1

        # If it cares about the result
        eventExtras = ""
        if (i < len(statementList) and 'RESULT' in statementList[i]):
            #print("Result detected")
            eventExtras = statementList[i]
            i += 1 # Skip the result and move onto the next one
            
        startOnList.append(StartOn(eventName, eventParameter, eventExtras))
    return startOnList

#print(parseStartOn("devcap_ready and ( session_keeper_ready or session_keeper_skipped )".split(' ')))
#exit(0)

upstartFiles = os.listdir(upstartPath)
for fileName in upstartFiles:
    if (fileName[-5:] == '.conf'):
        # Add the file as a job
        jobName = '.'.join(fileName.split('.')[:-1])
        jobs.append(jobName)
        
        # Parse the file
        with open(os.path.join(upstartPath, fileName), 'r') as file:
            line = file.readline()
            gotStart = False
            while line != "":
                line = line.split('#')[0].strip()
                if (line[:len("start on")] == "start on"):
                    startStatement = line[len("start on "):].strip().split(' ')
                    
                    jobStarts[fileName] = parseStartOn(startStatement)
                    gotStart = True
                elif (line[:len("emits")] == "emits"):
                    eventRegister[line[len("emits "):].strip()] = jobName
                else:
                    if (('f_emit' in line or 'initctl emit' in line) and line[0] != '#'):
                        eventRegister[line.split(' ')[-1]] = jobName

                line = file.readline()

# Write jobs
with open(outPath, 'w', encoding='utf-8') as file:
    file.write("```mermaid\nflowchart TD\n")

    for job in jobs:
        file.write(f"\t{job}({job})\n")
    file.write("\n\n")

    for job in jobStarts.keys():
        jobName = '.'.join(job.split('.')[:-1])
        for startEvent in jobStarts[job]:
            #if (startEvent[0] == 'event'):
            #    if (startEvent[1] in list(events.keys())):
            #        file.write(f"\t{events[startEvent[1]]} -->|{startEvent[0]}| {jobName}\n")
            #    else:
            #        print(f"WARN: Cannot find event handler {startEvent[1]}")
            #        file.write(f"\t{startEvent[1]} -->|{startEvent[0]}| {jobName}\n")
            #else:
            #    file.write(f"\t{startEvent[1]} -->|{startEvent[0]}| {jobName}\n")

            parsedParam = ""
            if (len(startEvent.eventParam) > 0):
                parsedParam += '_' + startEvent.eventParam.replace('[', '').replace(']', '')

            eventSource = ""
            if (startEvent.eventName in jobReferenceEventTypes):
                eventSource = startEvent.eventParam
                parsedParam = ""
            else:
                eventSource = eventRegister.get(startEvent.eventName, startEvent.eventName)

            eventExtras = ""
            if (len(startEvent.eventExtras) > 0):
                eventExtras = " - " + startEvent.eventExtras

            file.write(f"{eventSource} \t-->|{startEvent.eventName}{parsedParam}{eventExtras}| {jobName}\n")

    file.write("```")