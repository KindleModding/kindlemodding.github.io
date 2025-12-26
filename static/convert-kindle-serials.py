# Taken from KindleTool
# Commit 708d71a
model_tuples = [
	('Kindle1',						0x01,	'ATVPDKIKX0DER'),
	('Kindle2US',						0x02,	'A3UN6WX5RRO2AG'),
	('Kindle2International',				0x03,	'A1F83G8C2ARO7P'),
	('KindleDXUS',						0x04,	'A1PA6795UKMFR9'),
	('KindleDXInternational',				0x05,	'A13V1IB3VIYZZH'),
	('ValidKindleUnknown_0x07',				0x07,	'A2EUQ1WTGCTBG2'),
	('Kindle3WiFi3G',					0x06,	'A1VC38T7YXB528'),
	('Kindle3WiFi',						0x08,	'A3AEGXETSR30VB'),
	('KindleDXGraphite',					0x09,	'A3P5ROKL5A1OLE'),
	('Kindle3WiFi3GEurope',					0x0A,	'A3JWKAKR8XB7XF'),
	('ValidKindleUnknown_0x0B',				0x0B,	'A1X6FK5RDHNB96'),
	('ValidKindleUnknown_0x0C',				0x0C,	'AN1VRQENFRJN5'),
	('ValidKindleUnknown_0x0D',				0x0D,	'A3DWYIK6Y9EEQB'),
	('Kindle4NonTouch',					0x0E,	'A3R76HOPU0Z2CB'),
	('Kindle5TouchWiFi3G',					0x0F,	'A1IM4EOPHS76S7'),
	('Kindle5TouchWiFi3GEurope',				0x10,	'A138L1TOL8PIJT'),
	('Kindle5TouchWiFi',					0x11,	'A3T4TT2Z381HKD'),
	('Kindle5TouchUnknown',					0x12,	'A3LJ5WMKNRFKQS'),
	('KindlePaperWhiteWiFi3G',				0x1B,	'A1JYRMDPD0WRC1'),
	('KindlePaperWhiteWiFi3GCanada',			0x1C,	'A1U5RCOVU0NYF2'),
	('KindlePaperWhiteWiFi3GEurope',			0x1D,	'A1I7TFXKDRQDZL'),
	('KindlePaperWhiteWiFi3GJapan',				0x1F,	'A1K21FY43GMZF8'),
	('KindlePaperWhiteWiFi3GBrazil',			0x20,	'A3RN7G7QC5MWSZ'),
	('Kindle4NonTouchBlack',				0x23,	'AMMK0LS9EDNM8'),
	('KindlePaperWhiteWiFi',				0x24,	'A3VSAZHKW7EWVH'),
	('KindlePaperWhite2WiFiJapan',				0x5A,	'A1XFE4LQM16OSW'),
	('KindlePaperWhite2WiFi',				0xD4,	'A2X1JOFWQIYV75'),
	('KindlePaperWhite2WiFi3G',				0xD5,	'A2LTUGSV2JQ93O'),
	('KindlePaperWhite2WiFi3GCanada',			0xD6,	'A3CG2RMGG8NQEJ'),
	('KindlePaperWhite2WiFi3GEurope',			0xD7,	'A2RWEQK36M6DUE'),
	('KindlePaperWhite2WiFi3GRussia',			0xD8,	'A3DM9ZTSZGUSMW'),
	('KindlePaperWhite2WiFi3GJapan',			0xF2,	'A36L7QE2V0XKCZ'),
	('KindlePaperWhite2WiFi4GBInternational',		0x17,	'A3I3CR3NPZFVHY'),
	('KindlePaperWhite2WiFi3G4GBCanada',			0x5F,	'A16EMENY0O3Z2H'),
	('KindlePaperWhite2WiFi3G4GBEurope',			0x60,	'A3D1N3J5SXSYPF'),
	('KindlePaperWhite2WiFi3G4GBBrazil',			0x61,	'A3NRQ2KXEO33BF'),
	('KindlePaperWhite2WiFi3G4GB',				0x62,	'A3QT0UFVNUDPAE'),
	('KindlePaperWhite2Unknown_0xF4',			0xF4,	'A3JI3C11GUW6OM'),
	('KindlePaperWhite2Unknown_0xF9',			0xF9,	'A148QFVDZ3MQ8V'),
	('KindleVoyageWiFi',					0x13,	'A3FE7AD5N5R11'),
	('KindleVoyageWiFi3G',					0x54,	'A1VHVRSIVA49BF'),
	('KindleVoyageWiFi3GJapan',				0x2A,	'A2KSI370ME58SV'),
	('KindleVoyageWiFi3G_0x4F',					0x4F,	'AEK24W3B90XSI'),
	('KindleVoyageWiFi3GMexico',				0x52,	'A66ZTOXC8UWFP'),
	('KindleVoyageWiFi3GEurope',				0x53,	'A26JMGYIXWMKGL'),
	('KindleBasic',						0xC6,	'A2TNPB8EVLW5FA'),
	('ValidKindleUnknown_0x99',				0x99,	'A2I96HKA5TK143'),
	('KindleBasicKiwi',					0xDD,	'A9N06WOIL49CA'),
	('ValidKindleUnknown_0x16',				0x16),
	('ValidKindleUnknown_0x21',				0x21),
	('KindlePaperWhite3WiFi',				0x201,	'A21RY355YUXQAF'),	# 0G1
	('KindlePaperWhite3WiFi3G',				0x202,	'A6S0KGW65V1TV'),	# 0G2
	('KindlePaperWhite3WiFi3GMexico',			0x204,	'A3P87LH4DLAKE2'),	# 0G4
	('KindlePaperWhite3WiFi3GEurope',			0x205,	'A3OLIINW419WLP'),	# 0G5
	('KindlePaperWhite3WiFi3GCanada',			0x206,	'AOPKCG97868D2'),	# 0G6
	('KindlePaperWhite3WiFi3GJapan',			0x207,	'A3MTNJ7FDYZOPO'),	# 0G7
	('KindlePaperWhite3WhiteWiFi',				0x26B,	'A21RY355YUXQAF'),	# 0KB
	('KindlePaperWhite3WhiteWiFi3GJapan',			0x26C,	'A3MTNJ7FDYZOPO'),	# 0KC
	('KindlePW3WhiteUnknown_0KD',				0x26D,	'AOPKCG97868D2'),	# 0KD?
	('KindlePaperWhite3WhiteWiFi3GInternational',		0x26E,	'A3OLIINW419WLP'),	# 0KE
	('KindlePaperWhite3WhiteWiFi3GInternationalBis',	0x26F,	'A6S0KGW65V1TV'),	# 0KF
	('KindlePW3WhiteUnknown_0KG',				0x270,	'A3P87LH4DLAKE2'),	# 0KG?
	('KindlePaperWhite3WiFi32GBJapanBlack',			0x293,	'A2T9E09EBKRBWU'),	# 0LK
	('KindlePaperWhite3WiFi32GBJapanWhite',			0x294,	'A2T9E09EBKRBWU'),	# 0LL
	('KindlePW3Unknown_TTT',				0x6F7B,	'A21RY355YUXQAF'),	# TTT?
	('KindleOasisWiFi',					0x20C,	'A2NP90AR02CXEG'),	# 0GC
	('KindleOasisWiFi3G',					0x20D,	'A370DV3BFIHFD3'),	# 0GD
	('KindleOasisWiFi3GInternational',			0x219,	'A21R12JDS0I7HR'),	# 0GR
	('KindleOasisUnknown_0GS',				0x21A,	'A2G9XCYZJMNLQK'),	# 0GS?
	('KindleOasisWiFi3GChina',				0x21B,	'AIOUHGSC1FXK5'),	# 0GT
	('KindleOasisWiFi3GEurope',				0x21C,	'A1VYPQEAEVB479'),	# 0GU
	('KindleBasic2Unknown_0DU',				0x1BC),				# 0DU?
	('KindleBasic2',					0x269,	'A363JBKK6AP29Q'),	# 0K9
	('KindleBasic2White',					0x26A,	'A363JBKK6AP29Q'),	# 0KA
	('KindleOasis2Unknown_0LM',				0x295,	'A2AVNKP6ZINL5'),	# 0LM?
	('KindleOasis2Unknown_0LN',				0x296,	'A1SZ6LXIZK7826'),	# 0LN?
	('KindleOasis2Unknown_0LP',				0x297,	'A3M646A6GS49CA'),	# 0LP?
	('KindleOasis2Unknown_0LQ',				0x298,	'A39S6AFBERWZOH'),	# 0LQ?
	('KindleOasis2WiFi32GBChampagne',			0x2E1,	'A1SZ6LXIZK7826'),	# 0P1
	('KindleOasis2Unknown_0P2',				0x2E2,	'A2AVNKP6ZINL5'),	# 0P2?
	('KindleOasis2Unknown_0P6',				0x2E6,	'A3M646A6GS49CA'),	# 0P6
	('KindleOasis2Unknown_0P7',				0x2E7,	'A39S6AFBERWZOH'),	# 0P7?
	('KindleOasis2WiFi8GB',					0x2E8,	'A1SZ6LXIZK7826'),	# 0P8
	('KindleOasis2WiFi3G32GB',				0x341,	'A2AVNKP6ZINL5'),	# 0S1
	('KindleOasis2WiFi3G32GBEurope',			0x342,	'A3M646A6GS49CA'),	# 0S2
	('KindleOasis2Unknown_0S3',				0x343,	'A39S6AFBERWZOH'),	# 0S3?
	('KindleOasis2Unknown_0S4',				0x344,	'A1SZ6LXIZK7826'),	# 0S4?
	('KindleOasis2Unknown_0S7',				0x347,	'A1SZ6LXIZK7826'),	# 0S7?
	('KindleOasis2WiFi32GB',				0x34A,	'A1SZ6LXIZK7826'),	# 0SA
	('KindlePaperWhite4WiFi8GB',				0x2F7,	'AJRLVDTOPT1LE'),	# 0PP
	('KindlePaperWhite4WiFi4G32GB',				0x361,	'A3IT5K46YEJ8DG'),	# 0T1
	('KindlePaperWhite4WiFi4G32GBEurope',			0x362,	'A2J0U8ZY7AYQWV'),	# 0T2
	('KindlePaperWhite4WiFi4G32GBJapan',			0x363,	'AV9Q59KU8EJQE'),	# 0T3
	('KindlePaperWhite4Unknown_0T4',			0x364,	'A27ME72Q2PS699'),	# 0T4?
	('KindlePaperWhite4Unknown_0T5',			0x365,	'A3IT5K46YEJ8DG'),	# 0T5?
	('KindlePaperWhite4WiFi32GB',				0x366,	'AJRLVDTOPT1LE'),	# 0T6
	('KindlePaperWhite4Unknown_0T7',			0x367,	'AJRLVDTOPT1LE'),	# 0T7?
	('KindlePaperWhite4Unknown_0TJ',			0x372,	'AJRLVDTOPT1LE'),	# 0TJ?
	('KindlePaperWhite4Unknown_0TK',			0x373,	'AJRLVDTOPT1LE'),	# 0TK?
	('KindlePaperWhite4Unknown_0TL',			0x374,	'A2J0U8ZY7AYQWV'),	# 0TL?
	('KindlePaperWhite4Unknown_0TM',			0x375,	'AV9Q59KU8EJQE'),	# 0TM?
	('KindlePaperWhite4Unknown_0TN',			0x376,	'A27ME72Q2PS699'),	# 0TN?
	('KindlePaperWhite4WiFi8GBIndia',			0x402,	'AJRLVDTOPT1LE'),	# 102
	('KindlePaperWhite4WiFi32GBIndia',			0x403,	'A2J0U8ZY7AYQWV'),	# 103
	('KindlePaperWhite4WiFi32GBBlue',			0x4D8,	'AJRLVDTOPT1LE'),	# 16Q
	('KindlePaperWhite4WiFi32GBPlum',			0x4D9,	'AJRLVDTOPT1LE'),	# 16R
	('KindlePaperWhite4WiFi32GBSage',			0x4DA,	'AJRLVDTOPT1LE'),	# 16S
	('KindlePaperWhite4WiFi8GBBlue',			0x4DB,	'AJRLVDTOPT1LE'),	# 16T
	('KindlePaperWhite4WiFi8GBPlum',			0x4DC,	'AJRLVDTOPT1LE'),	# 16U
	('KindlePaperWhite4WiFi8GBSage',			0x4DD,	'AJRLVDTOPT1LE'),	# 16V
	('KindlePW4Unknown_0PL',				0x2F4,	'A3IT5K46YEJ8DG'),	# 0PL?
	('KindleBasic3',					0x414,	'AHU5VU98ZZYIL'),	# 10L
	('KindleBasic3White8GB',				0x3CF,	'AHU5VU98ZZYIL'),	# 0WF
	('KindleBasic3Unknown_0WG',				0x3D0,	'AHU5VU98ZZYIL'),	# 0WG?
	('KindleBasic3White',					0x3D1,	'AHU5VU98ZZYIL'),	# 0WH
	('KindleBasic3Unknown_0WJ',				0x3D2,	'AHU5VU98ZZYIL'),	# 0WJ?
	('KindleBasic3KidsEdition',				0x3AB,	'AHU5VU98ZZYIL'),	# 0VB
	('KindleOasis3WiFi32GBChampagne',			0x434,	'A2NW3VDYR5P8Z0'),	# 11L
	('KindleOasis3WiFi4G32GBJapan',				0x3D8,	'A28MDQJEP7D12S'),	# 0WQ
	('KindleOasis3WiFi4G32GBIndia',				0x3D7,	'A2M7UZTFTYKRHM'),	# 0WP
	('KindleOasis3WiFi4G32GB',				0x3D6,	'AB6KN53ZYVL6D'),	# 0WN
	('KindleOasis3WiFi32GB',				0x3D5,	'A2NW3VDYR5P8Z0'),	# 0WM
	('KindleOasis3WiFi8GB',					0x3D4,	'A2NW3VDYR5P8Z0'),	# 0WL
	('KindlePaperWhite5SignatureEdition',			0x690,	'A328XUBPG464LQ'),	# 1LG
	('KindlePaperWhite5Unknown_1Q0',			0x700,	'A328XUBPG464LQ'),	# 1Q0?
	('KindlePaperWhite5',					0x6FF,	'A328XUBPG464LQ'),	# 1PX
	('KindlePaperWhite5Unknown_1VD',			0x7AD,	'A328XUBPG464LQ'),	# 1VD?
	('KindlePaperWhite5SE_219',				0x829,	'A328XUBPG464LQ'),	# 219
	('KindlePaperWhite5_21A',				0x82A,	'A328XUBPG464LQ'),	# 21A
	('KindlePaperWhite5SE_2BH',				0x971,	'A328XUBPG464LQ'),	# 2BH
	('KindlePaperWhite5Unknown_2BJ',			0x972,	'A328XUBPG464LQ'),	# 2BJ?
	('KindlePaperWhite5_2DK',				0x9B3,	'A328XUBPG464LQ'),	# 2DK
	('KindleBasic4Unknown_22D',				0x84D,	'A1S35GJCTB6VUN'),	# 22D?
	('KindleBasic4Unknown_25T',				0x8BB,	'A1S35GJCTB6VUN'),	# 25T?
	('KindleBasic4Unknown_23A',				0x86A,	'A1S35GJCTB6VUN'),	# 23A?
	('KindleBasic4_2AQ',					0x958,	'A1S35GJCTB6VUN'),	# 2AQ
	('KindleBasic4_2AP',					0x957,	'A1S35GJCTB6VUN'),	# 2AP
	('KindleBasic4Unknown_1XH',				0x7F1,	'A1S35GJCTB6VUN'),	# 1XH?
	('KindleBasic4Unknown_22C',				0x84C,	'A1S35GJCTB6VUN'),	# 22C?
	('KindleScribeUnknown_27J',				0x8F2,	'A12KI9K1KHHBVF'),	# 27J?
	('KindleScribeUnknown_2BL',				0x974,	'A12KI9K1KHHBVF'),	# 2BL?
	('KindleScribeUnknown_263',				0x8C3,	'A12KI9K1KHHBVF'),	# 263?
	('KindleScribe16GB_227',				0x847,	'A12KI9K1KHHBVF'),	# 227
	('KindleScribeUnknown_2BM',				0x975,	'A12KI9K1KHHBVF'),	# 2BM?
	('KindleScribe_23L',					0x874,	'A12KI9K1KHHBVF'),	# 23L
	('KindleScribe64GB_23M',				0x875,	'A12KI9K1KHHBVF'),	# 23M
	('KindleScribeUnknown_270',				0x8E0,	'A12KI9K1KHHBVF'),	# 270?
	('KindleBasic5Unknown_3L5',				0xE85,	'A2AJ1N357FEMTV'),	# 3L5?
	('KindleBasic5Unknown_3L6',				0xE86,	'A2AJ1N357FEMTV'),	# 3L6?
	('KindleBasic5Unknown_3L4',				0xE84,	'A2AJ1N357FEMTV'),	# 3L4?
	('KindleBasic5Unknown_3L3',				0xE83,	'A2AJ1N357FEMTV'),	# 3L3?
	('KindleBasic5Unknown_A89',				0x2909,	'A2AJ1N357FEMTV'),	# A89?
	('KindleBasic5Unknown_3L2',				0xE82,	'A2AJ1N357FEMTV'),	# 3L2?
	('KindleBasic5Unknown_3KM',				0xE75,	'A2AJ1N357FEMTV'),	# 3KM
	('KindlePaperWhite6Unknown_349',			0xC89,	'A1BF5SA90HOYO2'),	# 349?
	('KindlePaperWhite6Unknown_346',			0xC86,	'A1BF5SA90HOYO2'),	# 346?
	('KindlePaperWhite6Unknown_33X',			0xC7F,	'A1BF5SA90HOYO2'),	# 33X
	('KindlePaperWhite6Unknown_33W',			0xC7E,	'A1BF5SA90HOYO2'),	# 33W?
	('KindlePaperWhite6Unknown_3HA',			0xE2A,	'A1BF5SA90HOYO2'),	# 3HA?
	('KindlePaperWhite6Unknown_3H5',			0xE25,	'A1BF5SA90HOYO2'),	# 3H5?
	('KindlePaperWhite6Unknown_3H3',			0xE23,	'A1BF5SA90HOYO2'),	# 3H3?
	('KindlePaperWhite6Unknown_3H8',			0xE28,	'A1BF5SA90HOYO2'),	# 3H8?
	('KindlePaperWhite6Unknown_3J5',			0xE45,	'A1BF5SA90HOYO2'),	# 3J5?
	('KindlePaperWhite6Unknown_3JS',			0xE5A,	'A1BF5SA90HOYO2'),	# 3JS?
	('KindleScribe2Unknown_3V0',				0xFA0,	'A3TY6T3X94EBV6'),  # 3V0?
	('KindleScribe2Unknown_3V1',				0xFA1,	'A3TY6T3X94EBV6'),  # 3V1?
	('KindleScribe2Unknown_3X5',				0xFE5,	'A3TY6T3X94EBV6'),  # 3X5?
	('KindleScribe2Unknown_3UV',				0xF9D,	'A3TY6T3X94EBV6'),  # 3UV?
	('KindleScribe2Unknown_3X4',				0xFE4,	'A3TY6T3X94EBV6'),  # 3X4?
	('KindleScribe2Unknown_3X3',				0xFE3,	'A3TY6T3X94EBV6'),  # 3X3?
	('KindleScribe2Unknown_41E',				0x102E,	'A3TY6T3X94EBV6'),  # 41E?
	('KindleScribe2Unknown_41D',				0x102D,	'A3TY6T3X94EBV6'),  # 41D?
	('KindleColorSoftUnknown_3H9',				0xE29,	'A2CU9ZQDNZFID4'),	# 3H9?
	('KindleColorSoftUnknown_3H4',				0xE24,	'A2CU9ZQDNZFID4'),	# 3H4?
	('KindleColorSoftUnknown_3HB',				0xE2B,	'A2CU9ZQDNZFID4'),	# 3HB?
	('KindleColorSoftUnknown_3H6',				0xE26,	'A2CU9ZQDNZFID4'),	# 3H6?
	('KindleColorSoftUnknown_3H2',				0xE22,	'A2CU9ZQDNZFID4'),	# 3H2?
	('KindleColorSoftUnknown_34X',				0xC9F,	'A2CU9ZQDNZFID4'),	# 34X?
	('KindleColorSoftUnknown_3H7',				0xE27,	'A2CU9ZQDNZFID4'),	# 3H7
	('KindleColorSoftUnknown_3JT',				0xE5B,	'A2CU9ZQDNZFID4'),	# 3JT?
	('KindleColorSoftUnknown_3J6',				0xE46,	'A2CU9ZQDNZFID4'),	# 3J6?
	('KindleColorSoftUnknown_456',				0x10A6,	'A2CU9ZQDNZFID4'),	# 456?
	('KindleColorSoftUnknown_455',				0x10A5,	'A2CU9ZQDNZFID4'),	# 455?
	('KindleColorSoftUnknown_4EP',				0x11D7,	'A2CU9ZQDNZFID4'),	# 4EP?
    ('ValidKindleUnknown_53C',					0x1463,	'A1956ZWD74DEPW'),	# 53C?
	('ValidKindleUnknown_KVR',					0x4FB9,	'A2C8F0TJH71TA1'),	# KVR?
	('KindleScribe3Unknown_4PG',				0x12F0,	'A2PZKJK345L1G8'),	# 4PG?
	('KindleScribe3Unknown_4PE',				0x12EE,	'A2PZKJK345L1G8'),	# 4PE?
	('KindleScribe3Unknown_4PL',				0x12F4,	'AC66OWFZXI53A'),	# 4PL?
	('KindleScribe3Unknown_4F8',				0x11E8,	'A2PZKJK345L1G8'),	# 4F8?
	('KindleScribe3Unknown_4FA',				0x11EA,	'A2PZKJK345L1G8'),	# 4FA
	('KindleScribe3Unknown_454',				0x10A4,	'A2PZKJK345L1G8'),	# 454?
	('KindleScribeColorSoftUnknown_4VX',			0x13BF,	'A3PXY43G91LWNT'),	# 4VX?
	('KindleScribeColorSoftUnknown_4PF',			0x12EF,	'A3PXY43G91LWNT'),	# 4PF?
	('KindleScribeColorSoftUnknown_4PH',			0x12F1,	'A3PXY43G91LWNT'),	# 4PH
	('KindleScribeColorSoftUnknown_4F9',			0x11E9,	'A3PXY43G91LWNT'),	# 4F9?
	('KindleScribeColorSoftUnknown_4FB',			0x11EB,	'A3PXY43G91LWNT'),	# 4FB?
	('KindleScribeColorSoftUnknown_46P',			0x10D7,	'A3PXY43G91LWNT'),	# 46P?
	('KindleUnknown', 0x00),
]

# Janky Solution to add the kindle x Migu to match the manually updated json.
lineToInsertAfter = list(filter(lambda x: x[0] == "KindleBasic2White", model_tuples))[0]
itemToInsert = ('UNSUPPORTED', 0x2d0, 'UNKNOWN')
model_tuples.insert(model_tuples.index(lineToInsertAfter) + 1, itemToInsert)


import json

### KindleTool serial number magic int reverser katadelos
CHARS = "0123456789ABCDEFGHJKLMNPQRSTUVWX"
def sn_chr(num):
    return CHARS[num]

def sn_ord(char):
    return CHARS.index(char)

def serial_to_int(sn):
    return ((sn_ord(sn[0]) << 10) + (sn_ord(sn[1]) << 5) + sn_ord(sn[2]))

def get_index(sn_int, factor):
    return (sn_int >> factor), (sn_int - ((sn_int >> factor) << factor))

def int_to_serial(sn_int):
    pos0, p_next = get_index(sn_int, 10)
    pos1, pos2 = get_index(p_next, 5)
    return "{}{}{}".format(sn_chr(pos0), sn_chr(pos1), sn_chr(pos2))



def cammelToSpace(text):
    finalString = ""

    for letter in text:
        if (letter.isupper() and (len(finalString) == 0 or not finalString[-1].isupper())):
            finalString += ' '
        finalString += letter

    return finalString.strip()






generationMap = [
    {
        "kindletool_names": ["KindleScribeColorSoft"],
        "release_year": 2025,
        "release_firmware": "5.19.x",
        "generation_nicknames": ["KSC"],
        "amazon_name": "Kindle Scribe Colorsoft (1st Generation)",
        "last_firmware": "Not Yet Discontinued",
        "platform": "Platcs8",
        "board": "Calvados",
        "jailbreak": "None Available",
    },
    {
        "kindletool_names": ["KindleScribe3"],
        "release_year": 2025,
        "release_firmware": "5.19.x",
        "generation_nicknames": ["KS3"],
        "amazon_name": "Kindle Scribe (3rd Generation)",
        "last_firmware": "Not Yet Discontinued",
        "platform": "Platpa6",
        "board": "Paloma",
        "jailbreak": "None Available",
    },
    {
        "kindletool_names": ["KindleBasic5"],
        "release_year": 2024,
        "release_firmware": "5.16.20",
        "generation_nicknames": ["KT6"],
        "amazon_name": "Kindle (11th Generation) - 2024 Release",
        "last_firmware": "Not Yet Discontinued",
        "platform": "Bellatrix",
        "board": "Rossini",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak < 5.18.1</a><br/><br/><a href=\"/jailbreaking/AdBreak\">AdBreak 5.18.1 - 5.18.5.0.1</a>",
    },
    {
        "kindletool_names": ["KindlePaperWhite6"],
        "release_year": 2024,
        "release_firmware": "5.17.0",
        "generation_nicknames": ["PW6"],
        "amazon_name": "Kindle Paperwhite (12th Generation) - 2024 Release",
        "last_firmware": "Not Yet Discontinued",
        "platform": "Bellatrix4",
        "board": "Sangria",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak < 5.18.1</a><br/><br/><a href=\"/jailbreaking/AdBreak\">AdBreak 5.18.1 - 5.18.5.0.1</a>",
    },
    {
        "kindletool_names": ["KindleScribe2"],
        "release_year": 2024,
        "release_firmware": "5.17.0",
        "generation_nicknames": ["KS2"],
        "amazon_name": "Kindle Scribe - 2024 Release",
        "last_firmware": "Not Yet Discontinued",
        "platform": "Bellatrix3",
        "board": "Pisco",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak < 5.18.1</a>",
    },
    {
        "kindletool_names": ["KindleColorSoft"],
        "release_year": 2024,
        "release_firmware": "5.18.0",
        "generation_nicknames": ["CS"],
        "amazon_name": "Kindle Colorsoft (1st Generation)",
        "last_firmware": "Not Yet Discontinued",
        "platform": "Bellatrix4",
        "board": "Seabreeze",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak < 5.18.0.2</a>",
    },
    # Kindle Scribe, released December 2022 on FW 5.16.0
    {
        "kindletool_names": ["KindleScribe"],
        "release_year": 2022,
        "release_firmware": "5.16.0",
        "generation_nicknames": ["KS"],
        "amazon_name": "Kindle Scribe (1st Generation)",
        "last_firmware": "Not Yet Discontinued",
        "platform": "Bellatrix3",
        "board": "Barolo",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak < 5.18.1</a><br/><br/><a href=\"/jailbreaking/AdBreak\">AdBreak 5.18.1 - 5.18.5.0.1</a>"
    },
    # Kindle Basic 4, released October 12 2022 on FW 5.15.0
    {
        "kindletool_names": ["KindleBasic4"],
        "release_year": 2022,
        "release_firmware": "5.15.0",
        "generation_nicknames": ["KT5"],
        "amazon_name": "Kindle (11th Generation)",
        "last_firmware": "Not Yet Discontinued",
        "platform": "Bellatrix",
        "board": "Cava",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak < 5.18.1</a><br/><br/><a href=\"/jailbreaking/AdBreak\">AdBreak 5.18.1 - 5.18.5.0.1</a>"
    },
    # Kindle PaperWhite 5, released October 27 2021 on FW 5.14.0
    {
        "kindletool_names": ["KindlePaperWhite5"],
        "release_year": 2021,
        "release_firmware": "5.14.0",
        "generation_nicknames": ["PW5", "PW5SE"],
        "amazon_name": "Kindle Paperwhite (11th Generation)",
        "last_firmware": "Not Yet Discontinued",
        "platform": "Bellatrix",
        "board": "Malbec",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak < 5.18.1</a><br/><br/><a href=\"/jailbreaking/AdBreak\">AdBreak 5.18.1 - 5.18.5.0.1</a>"
    },
    # Kindle Oasis 3, released July 24 2019 on FW 5.12.0
    {
        "kindletool_names": ["KindleOasis3"],
        "release_year": 2019,
        "release_firmware": "5.12.0",
        "generation_nicknames": ["KOA3", "KOA3W32C"],
        "amazon_name": "Kindle Oasis (10th Generation)",
        "last_firmware": "Not Yet Discontinued",
        "platform": "Zelda",
        "board": "Stinger",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak < 5.18.1</a><br/><br/><a href=\"/jailbreaking/AdBreak\">AdBreak 5.18.1+</a>"
    },
    # Kindle Basic 3, released April 10 2019 on FW 5.1x.y
    {
        "kindletool_names": ["KindleBasic3"],
        "release_year": 2019,
        "release_firmware": "5.1x.y",
        "generation_nicknames": ["KT4"],
        "amazon_name": "Kindle (10th Generation)",
        "last_firmware": "Not Yet Discontinued",
        "platform": "Rex",
        "board": "Moonshine",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak < 5.18.1</a><br/><br/><a href=\"/jailbreaking/AdBreak\">AdBreak 5.18.1+</a>"
    },
    # Kindle PaperWhite 4, released November 7 2018 on FW 5.10.0.1/5.10.0.2
    {
        "kindletool_names": ["KindlePaperWhite4", "KindlePW4"],
        "release_year": 2018,
        "release_firmware": "5.10.0.1/5.10.0.2",
        "generation_nicknames": ["PW4"],
        "amazon_name": "Kindle Paperwhite (10th Generation)",
        "last_firmware": "Not Yet Discontinued",
        "platform": "Rex",
        "board": "Jaeger",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak < 5.18.1</a><br/><br/><a href=\"/jailbreaking/AdBreak\">AdBreak 5.18.1+</a>"
    },
    # Kindle x Migu, released 2017 on FW 5.7.2.8 (Based on Android 5.1.1?)
    {
        "kindletool_names": ["UNSUPPORTED"],
        "release_year": 2017,
        "release_firmware": "5.7.2.8 (Based on Android 5.1.1?)",
        "generation_nicknames": ["KM"],
        "amazon_name": "Kindle x Migu",
        "last_firmware": "5.7.2.8 (Based on Android 5.1.1?)",
        "platform": "Heisenberg",
        "board": "Eanab",
        "jailbreak": "Runs Android - Try traditional Android JB methods"
    },
    # Kindle Oasis 2, released winter 2017 on FW 5.9.0.6
    {
        "kindletool_names": ["KindleOasis2"],
        "release_year": 2017,
        "release_firmware": "5.9.0.6",
        "generation_nicknames": ["KOA2"],
        "amazon_name": "Kindle Oasis (9th Generation)",
        "last_firmware": "5.16.2.1.1",
        "platform": "Zelda",
        "board": "Cognac",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak</a>"
    },
    # Kindle Basic 2, released summer 2016 on FW 5.8.0
    {
        "kindletool_names": ["KindleBasic2"],
        "release_year": 2016,
        "release_firmware": "5.8.0",
        "generation_nicknames": ["KT3"],
        "amazon_name": "Kindle (8th Generation)",
        "last_firmware": "5.16.2.1.1",
        "platform": "Heisenberg",
        "board": "Eanab",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak</a>"
    },
    # Kindle Oasis, released late spring 2016 on FW 5.7.1.1
    {
        "kindletool_names": ["KindleOasis"],
        "release_year": 2016,
        "release_firmware": "5.7.1.1",
        "generation_nicknames": ["KOA"],
        "amazon_name": "Kindle Oasis (8th Generation)",
        "last_firmware": "5.16.2.1.1",
        "platform": "Duet",
        "board": "Whisky",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak</a>"
    },
    # Kindle PaperWhite 3, White, appeared w/ FW 5.7.3.1, released summer 2016 on FW 5.7.x?
    {
        "kindletool_names": ["KindlePaperWhite3White", "KindlePW3White"],
        "release_year": 2016,
        "release_firmware": "5.7.x",
        "generation_nicknames": ["PW3"],
        "amazon_name": "Kindle Paperwhite (7th Generation)",
        "last_firmware": "5.16.2.1.1",
        "platform": "Wario",
        "board": "Muscat",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak</a>"
    },
    # Kindle PaperWhite 3, released summer 2015 on FW 5.6.1
    {
        "kindletool_names": ["KindlePaperWhite3", "KindlePW3"],
        "release_year": 2015,
        "release_firmware": "5.6.1",
        "generation_nicknames": ["PW3"],
        "amazon_name": "Kindle Paperwhite (7th Generation)",
        "last_firmware": "5.16.2.1.1",
        "platform": "Wario",
        "board": "Muscat",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak</a>"
    },
    # Kindle Voyage, released fall 2014 on FW 5.5.0
    {
        "kindletool_names": ["KindleVoyage"],
        "release_year": 2014,
        "release_firmware": "5.5.0",
        "generation_nicknames": ["KV"],
        "amazon_name": "Kindle Voyage (7th Generation)",
        "last_firmware": "5.13.6",
        "platform": "Wario",
        "board": "Icewine",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak</a>"
    },
    # Kindle Basic (Pearl, Touch), released fall 2014 on FW 5.6.0
    {
        "kindletool_names": ["KindleBasic"],
        "release_year": 2014,
        "release_firmware": "5.5.0",
        "generation_nicknames": ["KT2", "BASIC"],
        "amazon_name": "Kindle (7th Generation)",
        "last_firmware": "5.12.2.2",
        "platform": "Wario",
        "board": "Bourbon",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak</a>"
    },
    # Kindle PaperWhite 2 (black bezel), released fall 2013 on FW 5.4.0
    {
        "kindletool_names": ["KindlePaperWhite2"],
        "release_year": 2013,
        "release_firmware": "5.4.0",
        "generation_nicknames": ["PW2", "PW2J"],
        "amazon_name": "Kindle Paperwhite (6th Generation)",
        "last_firmware": "5.12.2.2",
        "platform": "Wario",
        "board": "Pinot",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak</a>"
    },
    # Kindle PaperWhite (black bezel), released fall 2012 on FW 5.2.0
    {
        "kindletool_names": ["KindlePaperWhite"],
        "release_year": 2012,
        "release_firmware": "5.2.0",
        "generation_nicknames": ["PW", "PWG"],
        "amazon_name": "Kindle Paperwhite (5th Generation)",
        "last_firmware": "5.6.1.1",
        "platform": "Wario",
        "board": "Pinot",
        "jailbreak": "<a href=\"/jailbreaking/WinterBreak\">WinterBreak</a>"
    },
    # Kindle 5 touch
    {
        "kindletool_names": ["Kindle5Touch"],
        "release_year": 2011,
        "release_firmware": "???",
        "generation_nicknames": ["KT", "K5"],
        "amazon_name": "Kindle Touch (4th Generation)",
        "last_firmware": "5.3.7.3",
        "platform": "Yoshi",
        "board": "Whitney",
        "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=225030\">K5 JailBreak (5.0.x - 5.4.4.2)</a>"
    },
    # Kindle 4 with a black bezel, released fall 2012
    {
        "kindletool_names": ["Kindle4NonTouchBlack"],
        "release_year": 2012,
        "release_firmware": "???",
        "generation_nicknames": ["K4", "K4B"],
        "amazon_name": "Kindle (5th Generation)",
        "last_firmware": "4.1.4",
        "platform": "Yoshi",
        "board": "Sauza",
        "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=191158\">NiLuJe's K4 JB</a>"
    },
    # Kindle 4 with a silver bezel, released fall 2011
    {
        "kindletool_names": ["Kindle4NonTouch"],
        "release_year": 2011,
        "release_firmware": "???",
        "generation_nicknames": ["K4", "K4S"],
        "amazon_name": "Kindle (4th Generation)",
        "last_firmware": "4.1.4",
        "platform": "Yoshi",
        "board": "Tequila",
        "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=191158\">NiLuJe's K4 JB</a>"
    },
    # Kindle 3 (Kindle Keyboard)
    {
        "kindletool_names": ["Kindle3"],
        "release_year": 2010,
        "release_firmware": "???",
        "generation_nicknames": ["K3", "K3G"],
        "amazon_name": "Kindle Keyboard (3rd Generation)",
        "last_firmware": "3.4.3",
        "platform": "Luigi",
        "board": "Shasta",
        "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=88004\">NiLuJe Kindle Hacks</a>"
    },
    # Kindle DX
    {
        "kindletool_names": ["KindleDX"],
        "release_year": 2009,
        "release_firmware": "???",
        "generation_nicknames": ["DX"],
        "amazon_name": "Kindle DX (2nd Generation)",
        "last_firmware": "2.5.8",
        "platform": "???",
        "board": "Nell/NellSL/NellWW",
        "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=88004\">NiLuJe Kindle Hacks</a>"
    },
    # Kindle 2
    {
        "kindletool_names": ["Kindle2"],
        "release_year": 2009,
        "release_firmware": "???",
        "generation_nicknames": ["K2"],
        "amazon_name": "Kindle (2nd Generation)",
        "last_firmware": "2.5.8",
        "platform": "Mario/MarioDeprecated",
        "board": "Mario",
        "jailbreak": "<a href=\"https://www.mobileread.com/forums/showthread.php?t=88004\">NiLuJe Kindle Hacks</a>"
    },
    # Kindle
    {
        "kindletool_names": ["Kindle1"],
        "release_year": 2007,
        "release_firmware": "???",
        "generation_nicknames": ["K1"],
        "amazon_name": "Kindle (1st Generation)",
        "last_firmware": "1.2.1",
        "platform": "N/A",
        "board": "Fiona",
        "jailbreak": "LEGACY"
    }
]

newModelMap = []
for model in model_tuples:
    modelName   =   model[0]
    modelInt    =   model[1]
    modelId     =   None
    if len(model) > 2:
        modelId     =   model[2]

    # Load data for this generation
    foundGeneration = False
    for generation in generationMap:
        for name in generation["kindletool_names"]:
            if (name in modelName):
                foundGeneration = True
                modelData = generation.copy()
                break

        if (foundGeneration):
            break

    if (not foundGeneration):
        print("[ERR] Could not find Kindle:", modelName)
        continue



    del modelData["kindletool_names"]
    filtered = tuple(filter(lambda x: x["amazon_name"] == modelData["amazon_name"], newModelMap))
    index = newModelMap.index(filtered[0]) if filtered != () else None

    if (index is None):
        modelData.update({
            "generation_nickname": modelData["generation_nicknames"][0],
            "nicknames": modelData["generation_nicknames"],             # The community nickname(s) for the Kindle ([PW4-32, PW4LGB] vs PW4)
            "serial_version": -1,                                        # -1: unknown, 0: old version, 1: base32 version (it's an int godforbid amazon changes it again)
            "device_codes": {},
        })
        del modelData["generation_nicknames"]

        if (len(hex(modelInt)) < 5): # Models which have 2-digit hex codes (0x01) rather than 3-digit hex codes (0x8E0)
            modelData["serial_version"] = 0
            print(modelName, '(old style) -', modelInt)
            serial = hex(modelInt).split('x')[-1].upper().rjust(2, '0')
            modelData["device_codes"][serial] = { "kindletool_name": modelName, "amazon_model_id": modelId }
            print(f"[OLD] {modelName} - {serial} | {modelInt}")
        else:
            modelData["serial_version"] = 1
            serial = int_to_serial(modelInt)
            newMagicInt = serial_to_int(serial)
            modelData["device_codes"][serial] = { "kindletool_name": modelName, "amazon_model_id": modelId }

            if (modelInt != newMagicInt):
                print("[FAIL]", modelName, '-', serial, '|', modelInt, '==', newMagicInt)
            else:
                print("[PASS]", modelName, '-', serial, '|', modelInt, '==', newMagicInt)
        newModelMap.append(modelData)
    else:
        if (newModelMap[index]["serial_version"] == 1):
            serial = int_to_serial(modelInt)
        else:
            serial = hex(modelInt).split('x')[-1].upper().rjust(2, '0')
        newModelMap[index]["device_codes"][serial] = { "kindletool_name": modelName, "amazon_model_id": modelId }

with open('./models.json', 'w') as file:
    file.write(json.dumps(newModelMap, indent=2))