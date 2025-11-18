const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// 🔧 Utility Function
const stringToBool = (str) => str.toLowerCase() === 'true';

// ⚡ ARSLAN-MD CONFIGURATION - ULTRA STYLISH WITH DESCRIPTIONS
module.exports = {
    // 🔐 SESSION & AUTHENTICATION
    SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVWL3BvVWpIK1lsZW8rS3dtY1VyQnZKOUpULzMyanZienJJOHU1UFJGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUxLTFljL3FhM0FTcFppYTFlU1NBNlZpZk40K0pEK3VCUktQZGZRTlBrTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QzJQaWtTK21ybE5sNlFqK04wb0R5d2gwRGo3cTl5VG93d3JxY2VFdVVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4bGhlQWZxdVRmMEZKYWRMb2NQNGxucXBRdHduQ25CT3NHdm1HUVNqVXlvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNDQnRtWWROcGw4ODRWY2JKZHFlVlNEaDhGNFBRMnNMVnFEZS93ekZ5RVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhHMk53RHYzY2RtZHhZdjRiOWJ5Q3JTR1d1a0tKbUR0TzB1ZDlsTGx1Z3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU90ZDhabnZ3dDBvUWJHeUdFV0U2VDhKWnZtVHV2VlBDRUlsZmdodzhYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1B6QlV5TjRXdG1nOGZIcUpLZFQrQkRoWCt4S1psSmFjeG9rUFpNUHMyQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJMQ1pvNWxPSDRLbWF2OHE0RzhzclJYRi84eVI1WlFmYy8rSitkb2Q4TStuOWg5T3lCU1RvaGlNYzRVbUlXWUNVejBYS2ZkczZVTGMyVHRmSlN0cWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJtQkpqc0Q4TWxQK0NrL2NPRXlpcWhOK2dUQjN0NW9CbG1JbkRyaENwSTV3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkzNzAxMDc0MDM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQzJCMjBEQkRGREM2NjI2MUE5NzQ2MEQ0NEYyN0U1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjM0NTIyMTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdhZV9RQjVNU0gySU5QS2dqU2NOWHciLCJwaG9uZUlkIjoiNTZmMjI3NTUtOGEyOC00NzU1LWE0MDEtZTVkMGU5MjlkYmNmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZKd21xL28venh2NCtiRUVvbkYzU1R2akxLcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVHhxM2c4anJyMDdxMDJ0Z1VLUEVpZU5pS2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNzUyWDRMQUgiLCJtZSI6eyJpZCI6IjkzNzAxMDc0MDM2OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI3MTExNjg0MDI4ODM2NToxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSytxNjY4Q0VLTEs4TWdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNjRHYnYzVk56NEFnL1BWd3hDWEpxQXczZ0l1SFl4M3NKYVFncFFOejNTST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYTF5RkxUNDBrenJZTU5SdklRVVNWbG5GZWtNYk5jM2VIZ1N2T3JadVJqVUNwcDJpWks2c0xaSnlCbFVFdTl1Q0RnVVBtb2VDYzhUOVZ6OUN6Y3VzREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImdlU2R4dnByY3FHOXZvaG9WM1B3UGtEUTc4VnNhQkxTQy9lZzhRRXdqT21tUzRYeVBrWHd2MjZYMWNZME43SkZsWjNzUXdvTkhLN2x3TXYrR2F1RWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTM3MDEwNzQwMzY6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJldUJtNzkxVGMrQUlQejFjTVFseWFnTU40Q0xoMk1kN0NXa0lLVURjOTBpIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRWdnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjM0NTIyMDksImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSnczIn0=", // Your WhatsApp session ID - keep this secure!

    // 🎯 SECURITY & MODERATION
    DELETE_LINKS: stringToBool(process.env.DELETE_LINKS || "true"), // Auto delete non-whitelisted links
    LINK_WHITELIST: "youtube.com,github.com", // Allowed domains - separate with commas
    LINK_WARN_LIMIT: 3, // Number of warnings before taking action
    LINK_ACTION: "kick", // Action for link violators: "kick", "mute", or "none"
    ANTI_BAD: stringToBool(process.env.ANTI_BAD || "false"), // Block bad words in group
    ANTI_LINK: stringToBool(process.env.ANTI_LINK || "true"), // Prevent sharing links in group
    ANTI_BOT: stringToBool(process.env.ANTI_BOT || "true"), // Block other bots from group
    ANTI_DELETE: stringToBool(process.env.ANTI_DELETE || "true"), // Prevent message deletion in group
    ANTI_VV: stringToBool(process.env.ANTI_VV || "true"), // Anti-view once feature
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // Path for anti-delete logs

    // 🤖 BOT CORE FEATURES
    PREFIX: process.env.PREFIX || ".", // Bot command prefix (e.g., .,!,/,#)
    BOT_NAME: process.env.BOT_NAME || "✦[ᴀʀꜱʟᴀɴ-ᴍᴅ]✦", // Your bot's display name
    MODE: process.env.MODE || "public", // Bot mode: "public" or "private"
    chatbotEnabled: stringToBool(process.env.chatbotEnabled || "true"), // Enable AI chatbot feature
    version: process.env.version || "4.0.0", // Bot version number

    // 💬 MESSAGE HANDLING
    READ_MESSAGE: stringToBool(process.env.READ_MESSAGE || "false"), // Mark messages as read automatically
    READ_CMD: stringToBool(process.env.READ_CMD || "false"), // Read command messages only
    AUTO_REPLY: stringToBool(process.env.AUTO_REPLY || "false"), // Auto-reply to messages

    // 🎭 REACTIONS & INTERACTIONS
    CUSTOM_REACT: stringToBool(process.env.CUSTOM_REACT || "false"), // Enable custom reactions
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍", // Emojis for custom reactions
    AUTO_REACT: stringToBool(process.env.AUTO_REACT || "false"), // Auto-react to messages
    HEART_REACT: stringToBool(process.env.HEART_REACT || "false"), // Auto-heart react to messages
    OWNER_REACT: stringToBool(process.env.OWNER_REACT || "true"), // React to owner's messages

    // 👑 OWNER SETTINGS
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919", // Bot owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || "✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦", // Bot owner's display name
    king: process.env.king || "ᴀʀꜱʟᴀɴ-ᴍᴅ", // Bot king/developer name
    DEV: process.env.DEV || "923237045919", // Developer contact number

    // 🎨 MEDIA & APPEARANCE
    STICKER_NAME: process.env.STICKER_NAME || "✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦", // Default sticker pack name
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/16i1l7.jpg", // Alive command image URL
    DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴛᴇᴄʜ 🇵🇰*", // Bot description

    // 📱 STATUS FEATURES
    AUTO_STATUS_SEEN: stringToBool(process.env.AUTO_STATUS_SEEN || "true"), // Auto-see status updates
    AUTO_STATUS_REPLY: stringToBool(process.env.AUTO_STATUS_REPLY || "false"), // Auto-reply to status
    AUTO_STATUS_REACT: stringToBool(process.env.AUTO_STATUS_REACT || "true"), // Auto-react to status
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🎉👀 Status Seen by ✦ᴀʀꜱʟᴀɴ-ᴍᴅ 🚀🔥✦*", // Status reply message
    CURRENT_STATUS: stringToBool(process.env.CURRENT_STATUS || "true"), // Show current status

    // 🚀 ADVANCED AUTOMATION
    AUTO_VOICE: stringToBool(process.env.AUTO_VOICE || "false"), // Convert text to voice automatically
    AUTO_STICKER: stringToBool(process.env.AUTO_STICKER || "false"), // Convert images to stickers automatically
    AUTO_TYPING: stringToBool(process.env.AUTO_TYPING || "true"), // Show typing indicator
    AUTO_RECORDING: stringToBool(process.env.AUTO_RECORDING || "false"), // Show recording indicator
    FAKE_RECORDING: stringToBool(process.env.FAKE_RECORDING || "false"), // Fake recording indicator
    FAKE_TYPING: stringToBool(process.env.FAKE_TYPING || "false"), // Fake typing indicator
    ALWAYS_ONLINE: stringToBool(process.env.ALWAYS_ONLINE || "true"), // Show bot as always online
    PUBLIC_MODE: stringToBool(process.env.PUBLIC_MODE || "true"), // Public or private bot mode

    // 💌 BOT MESSAGES
    LIVE_MSG: process.env.LIVE_MSG || "> 🤖 ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦ ғʀᴏᴍ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴛᴇᴄʜ ɪɴᴄ⚡\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*\n> 🌐 *ɢɪᴛʜᴜʙ :* github.com/Arslan-MD/Arslan_MD", // Alive message

    // 🎊 STARTUP MESSAGE
    START_MSG: process.env.START_MSG || `*Hᴇʟʟᴏ ᴛʜᴇʀᴇ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴄᴏɴɴᴇᴄᴛᴇᴅ! 👋🏻* 

   *ᴋᴇᴇᴘ ᴏɴ ᴜsɪɴɢ ᴀʀꜱʟᴀɴ-ᴍᴅ 🇵🇰* 

> 😘Joɪɴ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ (ᴀ ᴍᴜsᴛ): ⤵️  
* *~_https://whatsapp.com/channel/0029VarfjW04tRrmwfb8x306_~*

> ♻️sᴜʙsᴄʀɪʙᴇ ʏᴛ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴛᴜᴛᴏʀɪᴀʟs
* *~_https://youtube.com/@arslanmdofficial_~*

    🫣- *ʏᴏᴜʀ ʙᴏᴛ ᴘʀᴇғɪx: ➡️[ . ]*
> - ʏᴏᴜ ᴄᴀɴ ᴄʜᴀɴɢᴇ ᴜʀ ᴘʀᴇғɪx ᴜsɪɴɢ ᴛʜᴇ .ᴘʀᴇғɪx ᴄᴏᴍᴍᴀɴᴅ

> ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sʜᴀʀᴇ, sᴛᴀʀ &ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ ⬇️ 
* *~_https://github.com/Arslan-MD/Arslan_MD_~*

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀꜱʟᴀɴ-ᴍᴅ ☣️` // Bot startup message
};

// 💫 ARSLAN-MD STYLE GUIDE
global.ARS_STYLE = {
    EMOJIS: {
        SUCCESS: "✅", // Success operation emoji
        ERROR: "❌", // Error operation emoji  
        WARNING: "⚠️", // Warning message emoji
        LOADING: "⏳", // Loading indicator emoji
        SPARKLE: "✨", // Sparkle effect emoji
        ROCKET: "🚀", // Rocket/speed emoji
        FIRE: "🔥", // Fire/hot emoji
        CROWN: "👑" // Crown/royalty emoji
    },
    COLORS: {
        PRIMARY: "#FF0000", // Primary brand color
        SECONDARY: "#00FF00", // Secondary brand color  
        ACCENT: "#0000FF" // Accent brand color
    }
};
