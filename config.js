//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "256786061395";
global.owner = process.env.OWNER_NUMBER || "256786061395";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJuaXVjR3dGcVo4VXpGdjBRZTVwT2xtY2owSHZoeXM0K0tyaW4zbllFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1hnY2RwcldXbmJkc0gwRExUclA3eW95TlU2am9ydS9KV0JaV01rSXB4ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSVZSK1c4WEE1aVFRYnMrWTYveFVPaWFZYUV3VGpkM3kvcEhSMVNZQ1VnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwYk5yeFE4c2hFZGQyMnc4TDgrL0Zsc2RQVnQ5UVN3RTdDUUxKdjBGa0gwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMU1BmYkgreDNsd2lLdVNDaWpnVVIxTlBXTGNTaHZPbjdrNitHTUZSSHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV2NHBvZ21JS2o0cjVHb1BsUVJYWGxPL2d5YWZqUmhYRkFXQ1JqVlNnV2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEErVlJRUHozc2RpYWNMbUJCRUdOQ2pPUUNuOEJHa2trMTUxZ2FOa1kxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmFyN0oydFVJVW9UcnZUVGJoVUF3ajJMQmtwWHkrQU53SWxjN2hDd1ZWOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImozaWFnWXdKYXA4V1lCa0c5dTM0ME5VUGU1UGh6OVFWbFZnVzcxSzU1MVRVeEloblZ5V29KSjRSQXkyRit3TFBhSE0vdThOWjg3SUl2dFpEYUZ3dEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI1LCJhZHZTZWNyZXRLZXkiOiJlV1VPVE9MdE1jVzNUWE8zK0E2Q1l4aEZRbDRNaDlNZHE4RWpZcDZ1SWVvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKbFZVTlpMM1JuV1kyRGZ4bkNJUW93IiwicGhvbmVJZCI6IjdjY2ZkZWRmLWNjMTItNGQ0Yy1hNzQzLWFlNTdhOGI2ZmI1OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUaU9Ccms4OGxnUEZDR3FuTzc1L25xZ1pWZXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnhZSXA2dEpaVWx1cGxXZFFRQ3FwMGZkMC84PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik4yWEpDWFlNIiwibWUiOnsiaWQiOiIyNTY3ODYwNjEzOTU6NTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS0FCT0kifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wzOHJOTUVFTGFhaExVR0dDb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVJNDNNaHhTNzNvZUVZS0s4RHA0K1pvVWlONHJHN0hqckdoTzdteDNUVFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InFLNm55MW1idnV4SXNqcVdwczVOREFuNVZOeTYxdUEwQ3U0a0JoclgzdHhNcmF5a0FBbjNSU2VNYlcwcjlUS21NMjFVOHprR3h2RTF4U3ZuRTVURUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXVHhIY3dWNHEvMGtMczdyODh0eWc5aXNOQUI2cE80MXIwSWVhMmFacWVsMm5MNVY0YzFHQTV2d05jMTJPTVd3UVkvNlhwTDdzcUI1MnlCMFhxczhDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc4NjA2MTM5NTo1MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlU09OekljVXU5NkhoR0NpdkE2ZVBtYUZJamVLeHV4NDZ4b1R1NXNkMDAxIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxODMwNzI0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhJSyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "kaboitech",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
