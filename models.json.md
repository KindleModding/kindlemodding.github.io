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
