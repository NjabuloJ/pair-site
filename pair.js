const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: Browsers.macOS('Chrome') // Changed from ["Chrome (Linux)", "", ""] to Browsers.macOS('Chrome')
             });
             if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: '' + b64data });                 
           
               let GIFTED_MD_TEXT = `

*ɴᴊᴀʙᴜʟᴏ_ᴊʙ-ᴡᴀʙᴏᴛ sᴇssɪᴏɴ ᴄᴏɴɴᴇᴄᴛᴇᴅ*
━━━━━━━━━━━━━━━━━━━━━

⚡ *sᴛᴀʏ ᴜᴘᴅᴀᴛᴇᴅ!* ⚡
*Join our official channel for:*
    *Latest features*
    *Exclusive updates*
    *Pro tips & tricks*
🔗 » https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T

━━━━━━━━━━━━━━━━━━━━━
  *ᴅᴇᴠᴇʟᴏᴘᴇʀ ʀᴇsᴏᴜʀᴄᴇs*
📌 *GITHUB*: https://github.com/NjabuloJ/Njabulo-Jb
🌟 Don't forget to ⭐ star & fork the repo!

📃 *ɴᴇᴇᴅ ʜᴇʟᴘ?* 📄
💬 *Contact Developer: https://wa.me/26777821911*

━━━━━━━━━━━━━━━━━━━━━`
 await Pair_Code_By_Gifted_Tech.
     sendMessage(Pair_Code_By_Gifted_Tech.user.id,{
    image: { url: img },
     text: GIFTED_MD_TEXT,
   contextInfo: {
        externalAdReply: {
          title: "Njabulo Jb",
          body: "Message session Id !",
          thumbnailUrl: "https://whatsapp.com/channel/0029VbAckOZ7tkj92um4KN3u",
          sourceUrl: "https://whatsapp.com/channel/0029VbAckOZ7tkj92um4KN3u",
          mediaType: 1,
          showAdAttribution: true
    },
 },
},{quoted:session})

           let infoMsgs =  `
  *Loading session Id* 
*╭─❖*
*┋🕵️ ɴᴀᴍᴇ : ɴᴊᴀʙᴜʟᴏ ᴊʙ*
*╰─❖*

> sir Njabulo Jb`;
text:
await Pair_Code_By_Gifted_Tech.
     sendMessage(Pair_Code_By_Gifted_Tech.user.id,{
       text: infoMsgs,
        contextInfo: {
        externalAdReply: {
          title: "Njabulo Jb",
          body: "Message session Id !",
          thumbnailUrl: "https://whatsapp.com/channel/0029VbAckOZ7tkj92um4KN3u",
          sourceUrl: "https://whatsapp.com/channel/0029VbAckOZ7tkj92um4KN3u",
          mediaType: 1,
          showAdAttribution: true
      },
   },
},{quoted:session})

        await delay(100);
        await Pair_Code_By_Gifted_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await GIFTED_MD_PAIR_CODE()
});
module.exports = router








