const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="anonysilk663@proton.me"
global.location="Africa,Lagos."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sphinxdefi:akinyemi2209@sphinxproject.fuhen63.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Perspex22/Sphinx-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JXy2nr9L4qJ4i1IC4Xqqh3";
global.website=process.env.GURL || "https://chat.whatsapp.com/JXy2nr9L4qJ4i1IC4Xqqh3" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "2348075119740" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348075119740";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_00_05_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMixcbiAgICAgICAgMjE1LFxuICAgICAgICA2NixcbiAgICAgICAgMTMzLFxuICAgICAgICA3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQzLFxuICAgICAgICA5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDcwLFxuICAgICAgICA5NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzLFxuICAgICAgICA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcyLFxuICAgICAgICA1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkxLFxuICAgICAgICA4LFxuICAgICAgICAxMixcbiAgICAgICAgMTUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyLFxuICAgICAgICA3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZVF4OElDLy9XN0c2dnlOSmlQK0VzNERXQytDTE1CMFI2cUJFOEhJbUdjRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDc1MTE5NzQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNjFCN0EzNTBBOEI0OEExMEZFMjZEOUNERDUyQjdCQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTUwMjkyNTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiamZnOG5QYVZTQ0tza1pCV0F1MWwzd1wiLFxuICBcInBob25lSWRcIjogXCJjZGM4NDY0MS04ZmY4LTQ3NTgtYjA0NC0zOTU0ODljMzM5ZmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMTM2LFxuICAgICAgNjcsXG4gICAgICAyMjcsXG4gICAgICAxODQsXG4gICAgICAxMDUsXG4gICAgICAxNjIsXG4gICAgICAyMDIsXG4gICAgICAyMjAsXG4gICAgICA0MSxcbiAgICAgIDIzMSxcbiAgICAgIDEyNCxcbiAgICAgIDEyMSxcbiAgICAgIDE4MyxcbiAgICAgIDEzNCxcbiAgICAgIDk4LFxuICAgICAgMjgsXG4gICAgICA0NSxcbiAgICAgIDEzMixcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDUsXG4gICAgICA0LFxuICAgICAgMTA2LFxuICAgICAgNjIsXG4gICAgICAxOTUsXG4gICAgICA0LFxuICAgICAgMTY3LFxuICAgICAgNSxcbiAgICAgIDIxMCxcbiAgICAgIDc4LFxuICAgICAgOTYsXG4gICAgICAyMzYsXG4gICAgICAxMjgsXG4gICAgICAyMzksXG4gICAgICAxMTIsXG4gICAgICAxNDQsXG4gICAgICAyNDQsXG4gICAgICAxNDYsXG4gICAgICA3MSxcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09lNis0OERFUHVKNWJFR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwickZBT29sTExrZFdKYnRkOWNyTnBxamY1a01oUXd4VDZEdi8wWVhDcWtDZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNNVBPSXlRNjEranViTXVuOXBmOUxGTHpUSjhJNUpLQ1p5U24yN2taUTVCc1lzUXFIQ1NMQStjeXlUWnN6Nko2R2J6emJpR2JsYXBBVlViZDVrV0FCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1T2ZLbDdMYnVjSHJFeTBOSmNCcHNwdHZBekhUcVg2S0wrMFRxZEdxaUxtQ1VSSWVENjZSUktPQlluM3d4UFVxWEV6MlhtTVhHOFB4RlJPV2JXRnJpZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzUxMTk3NDA6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzOTg2NTc0NDI0NDc3MDoyN0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJXZWIzU2NyaWJlXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc1MTE5NzQwOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1MDI5MjQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkp6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCSnouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKS1F6L2dPMFNyM2xkLy9jYUNFYnhuUUNVamF6VWRDR2VTN09OSm40NzVvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzODc4NjQwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1MDA3ODY5NDAwXCJ9Igp9
"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "🆂🅿🅷🅸🅽🆇 🅼🅳" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🆂🅿🅷🅸🅽🆇 🅼🅳",
  packname: process.env.PACK_NAME || "🆂🅿🅷🅸🅽🆇 🅼🅳",
  botname : process.env.BOT_NAME  || "🆂🅿🅷🅸🅽🆇 🅼🅳",
  ownername:process.env.OWNER_NAME|| "🆂🅿🅷🅸🅽🆇",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "🆂🅿🅷🅸🅽🆇 🅼🅳"  ).toUpperCase(),



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
