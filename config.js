//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/2347061062548 , https://wa.me/2349011185484";
global.sudo = process.env.SUDO || "50931461936 , 2347061062548";
global.owner = process.env.OWNER_NUMBER || "2349011185484";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhLS0NpcjNERjF3eFFPNlZFaEs0Q2EvQVptNHlIMU1LQnNKbkZEQ0JsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmxIYlRTdE03Skl0OHl5NW1hSnZVUXdEbXlSRDRTUzkxRVRUdkloeXdYQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Q3JYcVZVYWJSU2JDdjJuUnJ2d2dRVUhsdzlpQjNad3VHZVBrbFdYaFh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuYk1Ua3NvaU1IYURESTFmamFUNWc3OVUwRkYyL3l3V0swUXYxRFg3c1VZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhEbkFTQVYwcnd4aGVDUmZTU2l6MWNMQ3RwM1g2ZFNkTGZVbzdJVVUxMzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR3L3JlUThKaDlaQWdkY0cveXNBZkMrQ0hleFZ3cEVNS3c2b1VacFNqd2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUx0aUxiUnEyb2htSU9Jd0N5Vm1aVmZMMDV2VmNOdjM2enRmNGdMNTlIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEhWeGN1Qk45eEZsa0Nkd1lCdWhHSnRocG9qZkkzdUpDMmxySmF5Y2tCTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxLNlQ0VTNPNjZmaHQ5Z3Fmc1JSVGRsaEtMZFZJVFFvU2NKbGNlWXNYUHRXdXcvYTNZNit2NUhnNzY2QnlobExQaGJ4dUkrM05qdUEvVlQzb0paVUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6IlIyOUtRZW1NZzFtTnorNDFDYVYrRW9ndDFhbzNzc0s3bkdPZHZQQWd1emM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRfYlYzZ2dWVHhPSkFxSWs5R1FEOFEiLCJwaG9uZUlkIjoiZmJkNjBmOTgtMGUxNy00YjY2LWFmZTUtMmJhNGExNTNhMmYyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVsNmUxSGhBSTVEN2VpZ1lQSU5KbEF4VE5wND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEWFk2NWt3dWZoUklKdWJUeXI2ZzZMVmpTREU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRTlENjROVzMiLCJtZSI6eyJpZCI6IjIzNDkwMTExODU0ODQ6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOCgCDwnZWL8J2VlvCdlZ7wnZWh8J2VlvCdlaTwnZWlIPCdlLnwnZWd8J2VkvCdlZXwnZWWIPCTgoAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xMcnZ2NEVFTGoyMnJrR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpOY293cGw1WnBqVHdJd1hJR1NQbGcwZ1BUaEZ1NllIMGpmd2RJeTBGMFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InNRTTQyWUlLWlpwR3VGZHAvZlI1OVRCYjczYUluMy9kZURCenBOZ1NHbi9PMGZSYktKMTR0WHRkOEZMc0lyc1BFN1liNGxJdUxWaFNJWEkyc2ZBVEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsR29sUHdFUk5rWXUzMC8xd2hiaGt5WmVQZFk0dlRXVWlKMjhFM0F0VHdqTkIxazNhT0VvMWg1RWEveFZmdkNPVkltYjlqeFdMREllTCtocFk2bzZEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMTExODU0ODQ6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXpYS01LWmVXYVkwOENNRnlCa2o1WU5JRDA0UmJ1bUI5STM4SFNNdEJkRiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTY0MDEzNH0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "^",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || "𓂀 𝕋𝕖𝕞𝕡𝕖𝕤𝕥 𝔹𝕝𝕒𝕕𝕖 𓂀",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝔹𝕝𝕒𝕕𝕖 𓂀",
  ownername: process.env.OWNER_NAME || "𓂀 𝕋𝕖𝕞𝕡𝕖𝕤𝕥 𝔹𝕝𝕒𝕕𝕖 𓂀",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
