const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="leonisrosemond509@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_28_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDcyLFxuICAgICAgICA5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMixcbiAgICAgICAgNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NixcbiAgICAgICAgOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2LFxuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0b2tCT3h1NHp6WkM0WkpkUmc2SkxzNlY5UklyaEJwTVJ5bmVrQTRiM0dNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOMmlYS0ZrNFFGUzJCNTYwMkxsSkZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYwYWZmNGFiLWYxNmItNDEyYi1hMWEwLTRlZGUxZjUyZTYyMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICA0NyxcbiAgICAgIDExLFxuICAgICAgMTMxLFxuICAgICAgNTIsXG4gICAgICAyMjcsXG4gICAgICAyNDIsXG4gICAgICA4NyxcbiAgICAgIDE3MyxcbiAgICAgIDE3NyxcbiAgICAgIDE2OCxcbiAgICAgIDIwOSxcbiAgICAgIDEzOCxcbiAgICAgIDEzOSxcbiAgICAgIDMwLFxuICAgICAgMjQ1LFxuICAgICAgMyxcbiAgICAgIDE1OCxcbiAgICAgIDE0NSxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDE0NCxcbiAgICAgIDQ3LFxuICAgICAgMjM4LFxuICAgICAgMTY3LFxuICAgICAgNjcsXG4gICAgICAzLFxuICAgICAgNzQsXG4gICAgICAyMjcsXG4gICAgICAyMSxcbiAgICAgIDI1NSxcbiAgICAgIDIzNCxcbiAgICAgIDU5LFxuICAgICAgMjEyLFxuICAgICAgMjI3LFxuICAgICAgMyxcbiAgICAgIDM2LFxuICAgICAgNzcsXG4gICAgICAyNTUsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyTFpGN1FNR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTg0OTQ0MDkxOTU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTg4ODMwNDg4ODY0MTE6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKeko1SzBDRU1PZnhMb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNZVHFxV2JhL0JaRUl4eW5MaVJ6L2o5T29pZGxPa0ptUk1qbVA1a0N1a009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSUIzclRSamJ6ZmpZK1I1OGZFdUJlUTdBbDJhZjRXZTI0anFRMWp2YUJuMTVCTGJzL3VYc2dNbDdMdW1NSURIRURjZUFWR0I1MzM5WTkxN3FTVHIvQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWDBJaDRYWitLNUZnSXJSdE04NDdIVkhsTk9rNjZoRXJUbHA3dHZnbFhzazMrbDlhMXhSWEJIL1pmMGROVjg4OW83LzkvYTlQTzhFYklWL3E4RC94aXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTg0OTQ0MDkxOTU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMzY1NzAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmRYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKZFguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFMjdNd3F6L3hKNXZQQkJlZ2JhVEhubklDbEkramlUVXcvUWhadDJRZUZvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYzMjg5MDUyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzI2NzU4NjI3MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
