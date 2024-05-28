const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256774985738";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_48_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyLFxuICAgICAgICA2OSxcbiAgICAgICAgNjksXG4gICAgICAgIDk2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2LFxuICAgICAgICA1NyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICA2NSxcbiAgICAgICAgNixcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NixcbiAgICAgICAgMTA3LFxuICAgICAgICA2NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDksXG4gICAgICAgIDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTczLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk3LFxuICAgICAgICA0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3LFxuICAgICAgICAxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM0LFxuICAgICAgICA1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc3LFxuICAgICAgICA1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2NWZJUTBVTnVqL2ROOFhvQnZQbXhERld5YjhFZFVUYmZMaG51MHZPNUs0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOWlV4WkV1RVNjeU9LdmVJalZ0bWhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM0NjNkZDZiLTdlODMtNDMwYS1iMDk2LTU2N2FmMzY1YzIyN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICAxNjUsXG4gICAgICAyMyxcbiAgICAgIDEzNixcbiAgICAgIDI0NCxcbiAgICAgIDE4OCxcbiAgICAgIDU0LFxuICAgICAgMjUxLFxuICAgICAgMTk3LFxuICAgICAgMTExLFxuICAgICAgMjA4LFxuICAgICAgMjQzLFxuICAgICAgMjM4LFxuICAgICAgMTQ2LFxuICAgICAgMjEsXG4gICAgICA3NSxcbiAgICAgIDE4MyxcbiAgICAgIDUwLFxuICAgICAgMjE1LFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAxNDgsXG4gICAgICAyNDUsXG4gICAgICAxMTcsXG4gICAgICAxODAsXG4gICAgICA5MixcbiAgICAgIDU3LFxuICAgICAgMjUzLFxuICAgICAgNDYsXG4gICAgICA0NSxcbiAgICAgIDQxLFxuICAgICAgMjQsXG4gICAgICA1OSxcbiAgICAgIDg1LFxuICAgICAgMTMzLFxuICAgICAgMCxcbiAgICAgIDEyNyxcbiAgICAgIDExNCxcbiAgICAgIDM2LFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFM5MlJXVEdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc3NDk4NTczODoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJpY2t5RGFkZHlEM3NpZ25zXCIsXG4gICAgXCJsaWRcIjogXCIyMDYyNjU5ODg5OTMxNjQ6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkxyd3Q4Q0VKNkoxN0lHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpOUo2NGQ4OWl4ZmgrQXdGNnIwWlkvMlgyR0lTOElmZkIybXVoaEdwUHd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldLVlcvNEppTmwvYlVybmpEZW5ZbUduV0tkSEJmVEhNM2o3VG5HbDhLMEMrdXpvcjhGbVJyV09HeXg5ZDVDY2IrdTlWcXJpU1VUcTRlSmU2RkJBZEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpCQ0FPQXVaK2ZMSktuZXBiUjkvdktZd3lHckkzRUZzbm00VG9TdmNFeHFteDlkemlSeVJ6MDVyaURVSXlKTmdpZlRXQlJZSnpOUnJKWUc1SGpIeWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc3NDk4NTczODoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY4OTY5MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNS3ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1Ldi5qc29uIjogIntcImtleURhdGFcIjpcImZjVUtNY0djOWIrWDVWMmV1bVU2akRWMmo0N0cvSThzdlFwbWpEQzRVMUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzM3MTk1NDc0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY3MjE4MTkzMjRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
