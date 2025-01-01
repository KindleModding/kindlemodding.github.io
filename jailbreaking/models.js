// Kindle model info
/**
 * release_year - The year this particular model was released (number)
 * release_firmware - The semvar of the firmware this model was originally released with
 * generation_nickname - The community nickname for the Kindle
 * amazon_name - What Amazon calls the Kindle (specifically amazon.co.uk (British))
 * last_firmware - If the Kindle is unsupported, what's the latest firmware available for it (If the Kindle is still supported this field shoudl read "LATEST")
 * platform - The platform/hostname of the Kindle (it is the hostname right?)
 * board - The "board" of the Kindle
 * jailbreak - The jailbreak method for the Kindle
 * kindletool_name - What KindleTool internally calls this Kindle
 * nicknames - an array of additional nicknames for the Kindle, includes generation_nickname and can have additional nicknames for the specific variant (like white/black or storage variants)
 *
 * 
 * serial_version - The version of the serial number snippet, should be 1 for all newly added Kindles
 *      0 - Serial number starts with "B" or "9", the snippet is the 2nd and 3rd characters in the serial
 *      1 - Serial number starts with "G", the snipper is the 3rd, 4th and 4th characters in the serial
 * Note: Serial snippet should ALWAYS be capitalised
 */

const kindleModels = [
  {
    "release_year": 2007,
    "release_firmware": "???",
    "generation_nickname": "K1",
    "amazon_name": "Kindle (1st Generation)",
    "last_firmware": "1.2.1",
    "platform": "N/A",
    "board": "Fiona",
    "jailbreak": "LEGACY",
    "nicknames": [
      "K1"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "01": "Kindle1"
    }
  },
  {
    "release_year": 2009,
    "release_firmware": "???",
    "generation_nickname": "K2",
    "amazon_name": "Kindle (2nd Generation)",
    "last_firmware": "2.5.8",
    "platform": "Mario/MarioDeprecated",
    "board": "Mario",
    "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=88004\">https://www.mobileread.com/forums/showthread.php?t=88004</a>",
    "nicknames": [
      "K2"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "02": "Kindle2US"
    }
  },
  {
    "release_year": 2009,
    "release_firmware": "???",
    "generation_nickname": "K2",
    "amazon_name": "Kindle (2nd Generation)",
    "last_firmware": "2.5.8",
    "platform": "Mario/MarioDeprecated",
    "board": "Mario",
    "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=88004\">https://www.mobileread.com/forums/showthread.php?t=88004</a>",
    "nicknames": [
      "K2",
      "K2I"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "03": "Kindle2International"
    }
  },
  {
    "release_year": 2009,
    "release_firmware": "???",
    "generation_nickname": "DX",
    "amazon_name": "Kindle DX (2nd Generation)",
    "last_firmware": "2.5.8",
    "platform": "???",
    "board": "Nell/NellSL/NellWW",
    "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=88004\">https://www.mobileread.com/forums/showthread.php?t=88004</a>",
    "nicknames": [
      "DX"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "04": "KindleDXUS",
    }
  },
  {
    "release_year": 2009,
    "release_firmware": "???",
    "generation_nickname": "DX",
    "amazon_name": "Kindle DX (2nd Generation)",
    "last_firmware": "2.5.8",
    "platform": "???",
    "board": "Nell/NellSL/NellWW",
    "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=88004\">https://www.mobileread.com/forums/showthread.php?t=88004</a>",
    "nicknames": [
      "DX",
      "DXI"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "05": "KindleDXInternational"
    }
  },
  {
    "release_year": 2010,
    "release_firmware": "???",
    "generation_nickname": "K3",
    "amazon_name": "Kindle Keyboard (3rd Generation)",
    "last_firmware": "3.4.3",
    "platform": "Luigi",
    "board": "Shasta",
    "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=88004\">https://www.mobileread.com/forums/showthread.php?t=88004</a>",
    "nicknames": [
      "K3",
      "K3G"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "06": "Kindle3WiFi3G"
    }
  },
  {
    "release_year": 2010,
    "release_firmware": "???",
    "generation_nickname": "K3",
    "amazon_name": "Kindle Keyboard (3rd Generation)",
    "last_firmware": "3.4.3",
    "platform": "Luigi",
    "board": "Shasta",
    "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=88004\">https://www.mobileread.com/forums/showthread.php?t=88004</a>",
    "nicknames": [
      "K3",
      "K3W"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "08": "Kindle3WiFi"
    }
  },
  {
    "release_year": 2009,
    "release_firmware": "???",
    "generation_nickname": "DX",
    "amazon_name": "Kindle DX (2nd Generation)",
    "last_firmware": "2.5.8",
    "platform": "???",
    "board": "Nell/NellSL/NellWW",
    "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=88004\">https://www.mobileread.com/forums/showthread.php?t=88004</a>",
    "nicknames": [
      "DX",
      "DXG"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "09": "KindleDXGraphite"
    }
  },
  {
    "release_year": 2010,
    "release_firmware": "???",
    "generation_nickname": "K3",
    "amazon_name": "Kindle Keyboard (3rd Generation)",
    "last_firmware": "3.4.3",
    "platform": "Luigi",
    "board": "Shasta",
    "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=88004\">https://www.mobileread.com/forums/showthread.php?t=88004</a>",
    "nicknames": [
      "K3",
      "K3GB"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "0A": "Kindle3WiFi3GEurope"
    }
  },
  {
    "release_year": 2011,
    "release_firmware": "???",
    "generation_nickname": "K4",
    "amazon_name": "Kindle (4th Generation)",
    "last_firmware": "4.1.4",
    "platform": "Yoshi",
    "board": "Tequila",
    "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=191158\">NiLuJe's K4 JB</a>",
    "nicknames": [
      "K4",
      "K4S"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "0E": "Kindle4NonTouch"
    }
  },
  {
    "release_year": 2011,
    "release_firmware": "???",
    "generation_nickname": "KT",
    "amazon_name": "Kindle Touch (4th Generation)",
    "last_firmware": "5.3.7.3",
    "platform": "Yoshi",
    "board": "Whitney",
    "jailbreak": "LEGACY",
    "nicknames": [
      "KT",
      "K5"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "0F": "Kindle5TouchWiFi3G",
      "10": "Kindle5TouchWiFi3GEurope",
      "11": "Kindle5TouchWiFi",
      "12": "Kindle5TouchUnknown"
    }
  },
  {
    "release_year": 2012,
    "release_firmware": "5.2.0",
    "generation_nickname": "PW",
    "amazon_name": "Kindle Paperwhite (5th Generation)",
    "last_firmware": "5.6.1.1",
    "platform": "Wario",
    "board": "Pinot",
    "jailbreak": "LEGACY",
    "nicknames": [
      "PW",
      "PWG"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "1B": "KindlePaperWhiteWiFi3G",
      "1C": "KindlePaperWhiteWiFi3GCanada",
      "1D": "KindlePaperWhiteWiFi3GEurope",
      "1F": "KindlePaperWhiteWiFi3GJapan",
      "20": "KindlePaperWhiteWiFi3GBrazil",
      "24": "KindlePaperWhiteWiFi"
    }
  },
  {
    "release_year": 2012,
    "release_firmware": "???",
    "generation_nickname": "K4",
    "amazon_name": "Kindle (5th Generation)",
    "last_firmware": "4.1.4",
    "platform": "Yoshi",
    "board": "Sauza",
    "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=191158\">NiLuJe's K4 JB</a>",
    "nicknames": [
      "K4",
      "K4B"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "23": "Kindle4NonTouchBlack"
    }
  },
  {
    "release_year": 2013,
    "release_firmware": "5.4.0",
    "generation_nickname": "PW2",
    "amazon_name": "Kindle Paperwhite (6th Generation)",
    "last_firmware": "5.12.2.2",
    "platform": "Wario",
    "board": "Pinot",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "PW2",
      "PW2J"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "5A": "KindlePaperWhite2WiFiJapan",
      "D4": "KindlePaperWhite2WiFi",
      "D5": "KindlePaperWhite2WiFi3G",
      "D6": "KindlePaperWhite2WiFi3GCanada",
      "D7": "KindlePaperWhite2WiFi3GEurope",
      "D8": "KindlePaperWhite2WiFi3GRussia",
      "F2": "KindlePaperWhite2WiFi3GJapan",
      "17": "KindlePaperWhite2WiFi4GBInternational",
      "5F": "KindlePaperWhite2WiFi3G4GBCanada",
      "60": "KindlePaperWhite2WiFi3G4GBEurope",
      "61": "KindlePaperWhite2WiFi3G4GBBrazil",
      "62": "KindlePaperWhite2WiFi3G4GB",
      "F4": "KindlePaperWhite2Unknown_0xF4",
      "F9": "KindlePaperWhite2Unknown_0xF9",
    }
  },
  {
    "release_year": 2014,
    "release_firmware": "5.5.0",
    "generation_nickname": "KV",
    "amazon_name": "Kindle Voyage (7th Generation)",
    "last_firmware": "5.13.6",
    "platform": "Wario",
    "board": "Icewine",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "KV"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "13": "KindleVoyageWiFi",
      "54": "KindleVoyageWiFi3G",
      "2A": "KindleVoyageWiFi3GJapan",
      "4F": "KindleVoyageUnknown_0x4F",
      "52": "KindleVoyageWiFi3GMexico",
      "53": "KindleVoyageWiFi3GEurope"
    }
  },
  {
    "release_year": 2014,
    "release_firmware": "5.5.0",
    "generation_nickname": "KT2",
    "amazon_name": "Kindle (7th Generation)",
    "last_firmware": "5.12.2.2",
    "platform": "Wario",
    "board": "Bourbon",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "KT2",
      "BASIC"
    ],
    "serial_version": 0,
    "serial_snippets": {
      "C6": "KindleBasic",
      "DD": "KindleBasicKiwi"
    }
  },
  {
    "release_year": 2015,
    "release_firmware": "5.6.1",
    "generation_nickname": "PW3",
    "amazon_name": "Kindle Paperwhite (7th Generation)",
    "last_firmware": "5.16.2.1.1",
    "platform": "Wario",
    "board": "Muscat",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "PW3"
    ],
    "serial_version": 1,
    "serial_snippets": {
      "0G1": "KindlePaperWhite3WiFi",
      "0G2": "KindlePaperWhite3WiFi3G",
      "0G4": "KindlePaperWhite3WiFi3GMexico",
      "0G5": "KindlePaperWhite3WiFi3GEurope",
      "0G6": "KindlePaperWhite3WiFi3GCanada",
      "0G7": "KindlePaperWhite3WiFi3GJapan",
      "0KB": "KindlePaperWhite3WhiteWiFi",
      "0KC": "KindlePaperWhite3WhiteWiFi3GJapan",
      "0KD": "KindlePW3WhiteUnknown_0KD",
      "0KE": "KindlePaperWhite3WhiteWiFi3GInternational",
      "0KF": "KindlePaperWhite3WhiteWiFi3GInternationalBis",
      "0KG": "KindlePW3WhiteUnknown_0KG",
      "0LK": "KindlePaperWhite3WiFi32GBJapanBlack",
      "0LL": "KindlePaperWhite3WiFi32GBJapanWhite",
      "TTT": "KindlePW3Unknown_TTT"
    }
  },
  {
    "release_year": 2016,
    "release_firmware": "5.7.1.1",
    "generation_nickname": "KOA",
    "amazon_name": "Kindle Oasis (8th Generation)",
    "last_firmware": "5.16.2.1.1",
    "platform": "Duet",
    "board": "Whisky",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "KOA"
    ],
    "serial_version": 1,
    "serial_snippets": {
      "0GC": "KindleOasisWiFi",
      "0GD": "KindleOasisWiFi3G",
      "0GR": "KindleOasisWiFi3GInternational",
      "0GS": "KindleOasisUnknown_0GS",
      "0GT": "KindleOasisWiFi3GChina",
      "0GU": "KindleOasisWiFi3GEurope",
    }
  },
  {
    "release_year": 2016,
    "release_firmware": "5.8.0",
    "generation_nickname": "KT3",
    "amazon_name": "Kindle (8th Generation)",
    "last_firmware": "5.16.2.1.1",
    "platform": "Heisenberg",
    "board": "Eanab",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "KT3"
    ],
    "serial_version": 1,
    "serial_snippets": {
      "0DU": "KindleBasic2Unknown_0DU",
      "0K9": "KindleBasic2",
      "0KA": "KindleBasic2White"
    }
  },
  {
    "release_year": 2017,
    "release_firmware": "5.9.0.6",
    "generation_nickname": "KOA2",
    "amazon_name": "Kindle Oasis (9th Generation)",
    "last_firmware": "5.16.2.1.1",
    "platform": "Zelda",
    "board": "Cognac",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "KOA2"
    ],
    "serial_version": 1,
    "serial_snippets": {
      "0LM": "KindleOasis2Unknown_0LM",
      "0LN": "KindleOasis2Unknown_0LN",
      "0LP": "KindleOasis2Unknown_0LP",
      "0LQ": "KindleOasis2Unknown_0LQ",
      "0P1": "KindleOasis2WiFi32GBChampagne",
      "0P2": "KindleOasis2Unknown_0P2",
      "0P6": "KindleOasis2Unknown_0P6",
      "0P7": "KindleOasis2Unknown_0P7",
      "0P8": "KindleOasis2WiFi8GB",
      "0S1": "KindleOasis2WiFi3G32GB",
      "0S2": "KindleOasis2WiFi3G32GBEurope",
      "0S3": "KindleOasis2Unknown_0S3",
      "0S4": "KindleOasis2Unknown_0S4",
      "0S7": "KindleOasis2Unknown_0S7",
      "0SA": "KindleOasis2WiFi32GB"
    }
  },
  {
    "release_year": 2018,
    "release_firmware": "5.10.0.1/5.10.0.2",
    "generation_nickname": "PW4",
    "amazon_name": "Kindle Paperwhite (10th Generation)",
    "last_firmware": "LATEST",
    "platform": "Rex",
    "board": "Jaeger",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "PW4"
    ],
    "serial_version": 1,
    "serial_snippets": {
      "0PP": "KindlePaperWhite4WiFi8GB",
      "0T1": "KindlePaperWhite4WiFi4G32GB",
      "0T2": "KindlePaperWhite4WiFi4G32GBEurope",
      "0T3": "KindlePaperWhite4WiFi4G32GBJapan",
      "0T4": "KindlePaperWhite4Unknown_0T4",
      "0T5": "KindlePaperWhite4Unknown_0T5",
      "0T6": "KindlePaperWhite4WiFi32GB",
      "0T7": "KindlePaperWhite4Unknown_0T7",
      "0TJ": "KindlePaperWhite4Unknown_0TJ",
      "0TK": "KindlePaperWhite4Unknown_0TK",
      "0TL": "KindlePaperWhite4Unknown_0TL",
      "0TM": "KindlePaperWhite4Unknown_0TM",
      "0TN": "KindlePaperWhite4Unknown_0TN",
      "102": "KindlePaperWhite4WiFi8GBIndia",
      "103": "KindlePaperWhite4WiFi32GBIndia",
      "16Q": "KindlePaperWhite4WiFi32GBBlue",
      "16R": "KindlePaperWhite4WiFi32GBPlum",
      "16S": "KindlePaperWhite4WiFi32GBSage",
      "16T": "KindlePaperWhite4WiFi8GBBlue",
      "16U": "KindlePaperWhite4WiFi8GBPlum",
      "16V": "KindlePaperWhite4WiFi8GBSage",
      "0PL": "KindlePW4Unknown_0PL"
    }
  },
  {
    "release_year": 2019,
    "release_firmware": "5.1x.y",
    "generation_nickname": "KT4",
    "amazon_name": "Kindle (10th Generation)",
    "last_firmware": "LATEST",
    "platform": "Rex",
    "board": "Moonshine",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "KT4"
    ],
    "serial_version": 1,
    "serial_snippets": {
      "10L": "KindleBasic3",
      "0WF": "KindleBasic3White8GB",
      "0WG": "KindleBasic3Unknown_0WG",
      "0WH": "KindleBasic3White",
      "0WJ": "KindleBasic3Unknown_0WJ",
      "0VB": "KindleBasic3KidsEdition",
    }
  },
  {
    "release_year": 2019,
    "release_firmware": "5.12.0",
    "generation_nickname": "KOA3",
    "amazon_name": "Kindle Oasis (10th Generation)",
    "last_firmware": "LATEST",
    "platform": "Zelda",
    "board": "Stinger",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "KOA3",
      "KOA3W32C"
    ],
    "serial_version": 1,
    "serial_snippets": {
      "11L": "KindleOasis3WiFi32GBChampagne",
      "0WQ": "KindleOasis3WiFi4G32GBJapan",
      "0WP": "KindleOasis3WiFi4G32GBIndia",
      "0WN": "KindleOasis3WiFi4G32GB",
      "0WM": "KindleOasis3WiFi32GB",
      "0WL": "KindleOasis3WiFi8GB",
    }
  },
  {
    "release_year": 2021,
    "release_firmware": "5.14.0",
    "generation_nickname": "PW5",
    "amazon_name": "Kindle Paperwhite (11th Generation)",
    "last_firmware": "LATEST",
    "platform": "Bellatrix",
    "board": "Malbec",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "PW5SE"
    ],
    "serial_version": 1,
    "serial_snippets": {
      "1LG": "KindlePaperWhite5SignatureEdition",
      "1Q0": "KindlePaperWhite5Unknown_1Q0",
      "1PX": "KindlePaperWhite5",
      "1VD": "KindlePaperWhite5Unknown_1VD",
      "219": "KindlePaperWhite5Unknown_219",
      "21A": "KindlePaperWhite5Unknown_21A",
      "2BH": "KindlePaperWhite5SE_2BH",
      "2BJ": "KindlePaperWhite5Unknown_2BJ",
      "2DK": "KindlePaperWhite5Kids_2DK"
    }
  },
  {
    "release_year": 2022,
    "release_firmware": "5.15.0",
    "generation_nickname": "KT5",
    "amazon_name": "Kindle (11th Generation) - 2022 Release",
    "last_firmware": "LATEST",
    "platform": "Bellatrix",
    "board": "Cava",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "KT5"
    ],
    "serial_version": 1,
    "serial_snippets": {
      "22D": "KindleBasic4Unknown_22D",
      "25T": "KindleBasic4Unknown_25T",
      "23A": "KindleBasic4Unknown_23A",
      "2AQ": "KindleBasic4_2AQ",
      "2AP": "KindleBasic4_2AP",
      "1XH": "KindleBasic4Unknown_1XH",
      "22C": "KindleBasic4Unknown_22C"
    }
  },
  {
    "release_year": 2022,
    "release_firmware": "5.16.0",
    "generation_nickname": "KS",
    "amazon_name": "Kindle Scribe (1st Generation)",
    "last_firmware": "LATEST",
    "platform": "Bellatrix3",
    "board": "Barolo",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "KS"
    ],
    "serial_version": 1,
    "serial_snippets": {
      "27J": "KindleScribeUnknown_27J",
      "2BL": "KindleScribeUnknown_2BL",
      "263": "KindleScribeUnknown_263",
      "227": "KindleScribe16GB_227",
      "2BM": "KindleScribeUnknown_2BM",
      "23L": "KindleScribeUnknown_23L",
      "23M": "KindleScribe64GB_23M",
      "270": "KindleScribeUnknown_270"
    }
  },
  {
    "release_year": 2024,
    "release_firmware": "5.16.20",
    "generation_nickname": "KT6",
    "amazon_name": "Kindle (11th Generation) - 2024 Release",
    "last_firmware": "LATEST",
    "platform": "Bellatrix",
    "board": "Rossini",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "KT6"
    ],
    "serial_version": 1,
    "serial_snippets": {
      '3L5': 'KindleBasic5Unknown_3L5',
      '3L6': 'KindleBasic5Unknown_3L6',
      '3L4': 'KindleBasic5Unknown_3L4',
      '3L3': 'KindleBasic5Unknown_3L3',
      'A89': 'KindleBasic5Unknown_A89',
      '3L2': 'KindleBasic5Unknown_3L2',
      '3KM': 'KindleBasic5Unknown_3KM'
    }
  },
  {
    "release_year": 2024,
    "release_firmware": "5.17.0",
    "generation_nickname": "PW6",
    "amazon_name": "Kindle Paperwhite (12th Generation) - 2024 Release",
    "last_firmware": "LATEST",
    "platform": "Bellatrix4",
    "board": "Sangria",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "PW6"
    ],
    "serial_version": 1,
    "serial_snippets": {
      '349': 'KindlePaperWhite6Unknown_349',
      '346': 'KindlePaperWhite6Unknown_346',
      '33X': 'KindlePaperWhite6Unknown_33X',
      '33W': 'KindlePaperWhite6Unknown_33W',
      '3HA': 'KindlePaperWhite6Unknown_3HA',
      '3H5': 'KindlePaperWhite6Unknown_3H5',
      '3H3': 'KindlePaperWhite6Unknown_3H3',
      '3H8': 'KindlePaperWhite6Unknown_3H8',
      '3J5': 'KindlePaperWhite6Unknown_3J5',
      '3JS': 'KindlePaperWhite6Unknown_3JS'
    }
  },
  {
    "release_year": 2024,
    "release_firmware": "5.18.0.1.0.1",
    "generation_nickname": "CS",
    "amazon_name": "Kindle Colorsoft (12th Generation)",
    "last_firmware": "LATEST",
    "platform": "Bellatrix4",
    "board": "Seabreeze",
    "jailbreak": "<a href=\"WinterBreak\">WinterBreak</a>",
    "nicknames": [
      "CS"
    ],
    "serial_version": 1,
    "serial_snippets": {
      '3H7': "KindleColorsoftUnknown_3H7"
    }
  }
]