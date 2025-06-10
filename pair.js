const PastebinAPI = require('pastebin-js'), 
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL') 
const {makeid} = require('./id'); 
const express = require('express'); 
const fs = require('fs'); 
let router = express.Router() 
const pino = require("pino"); 
const { default: Gifted_Tech, useMultiFileAuthState, delay, makeCacheableSignalKeyStore, Browsers } = require("@whiskeysockets/baileys"); 

function removeFile(FilePath){ 
    if(!fs.existsSync(FilePath)) return false; 
    fs.rmSync(FilePath, { recursive: true, force: true }) 
}; 

router.get('/', async (req, res) => { 
    const id = makeid(); 
    let num = req.query.number; 

    async function GIFTED_MD_PAIR_CODE() { 
        const { state, saveCreds } = await useMultiFileAuthState('./temp/'+id) 
        try { 
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({ 
                auth: { 
                    creds: state.creds, 
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})), 
                }, 
                printQRInTerminal: false, 
                logger: pino({level: "fatal"}).child({level: "fatal"}), 
                browser: Browsers.macOS('Chrome') 
            }); 

            if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) { 
                await delay(1500); 
                num = num.replace(/[^0-9]/g,''); 
                const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num) 
                if(!res.headersSent){ 
                    await res.send({code}); 
                } 
            } 

const PastebinAPI = require('pastebin-js'), 
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL') 
const {makeid} = require('./id'); 
const express = require('express'); 
const fs = require('fs'); 
let router = express.Router() 
const pino = require("pino"); 
const { default: Gifted_Tech, useMultiFileAuthState, delay, makeCacheableSignalKeyStore, Browsers } = require("@whiskeysockets/baileys"); 

function removeFile(FilePath){ 
    if(!fs.existsSync(FilePath)) return false; 
    fs.rmSync(FilePath, { recursive: true, force: true }) 
}; 

router.get('/', async (req, res) => { 
    const id = makeid(); 
    let num = req.query.number; 

    async function GIFTED_MD_PAIR_CODE() { 
        const { state, saveCreds } = await useMultiFileAuthState('./temp/'+id) 
        try { 
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({ 
                auth: { 
                    creds: state.creds, 
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})), 
                }, 
                printQRInTerminal: false, 
                logger: pino({level: "fatal"}).child({level: "fatal"}), 
                browser: Browsers.macOS('Chrome') 
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
                const { connection, lastDisconnect } = s; 
                if (connection == "open") { 
                    await delay(5000); 
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`); 
                    await delay(800); 
                    let b64data = Buffer.from(data).toString('base64'); 
                    let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: '' + b64data }); 

                    let img = "https:                          
                    let GIFTED_MD_TEXT = `https:                                                  
                    let buttons = [ 
                        { 
                            buttonId: 'id1', 
                            buttonText: {displayText: 'Join Channel'}, 
                            type: 1, 
                            buttonParamsJson: JSON.stringify({ 
                                display_text: 'Join Channel', 
                                url: 'https:                                                 
                            }) 
                        } 
                    ]; 

                    await Pair_Code_By_Gifted_Tech.sendMessage( 
                        Pair_Code_By_Gifted_Tech.user.id, 
                        { 
                            image: { url: img }, 
                            caption: GIFTED_MD_TEXT, 
                            buttons: buttons, 
                            contextInfo: { 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: "//example.com/image.jpg"; 
                    let GIFTED_MD_TEXT = `https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T`; 
                    let buttons = [ 
                        { 
                            buttonId: 'id1', 
                            buttonText: {displayText: 'Join Channel'}, 
                            type: 1, 
                            buttonParamsJson: JSON.stringify({ 
                                display_text: 'Join Channel', 
                                url: 'https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T' 
                            }) 
                        } 
                    ]; 

                    await Pair_Code_By_Gifted_Tech.sendMessage( 
                        Pair_Code_By_Gifted_Tech.user.id, 
                        { 
                            image: { url: img }, 
                            caption: GIFTED_MD_TEXT, 
                            buttons: buttons, 
                            contextInfo: { 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: "120363345407274799@newsletter", 
                                    newsletterName: "╭••➤®Njabulo Jb", 
                                    serverMessageId: -1 
                                }, 
                                forwardingScore: 999, 
                                externalAdReply: { 
                                    title: "this season ld work on Njabulo Jb and Alec Jb", 
                                    body: "session working on heroku", 
                                    thumbnailUrl: img, 
                                    sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T", 
                                    mediaType: 1, 
                                    renderLargerThumbnail: true 
                                }, 
                            }, 
                        }
                    ); 
                } 
            }); 
        } catch (error) { 
            console.error("Error in GIFTED_MD_PAIR_CODE:", error); 
            if(!res.headersSent){ 
                res.status(500).send({ error: "Internal￼Enter            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds) 

            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => { 
                const { connection, lastDisconnect } = s; 
                if (connection == "open") { 
                    await delay(5000); 
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`); 
                    await delay(800); 
                    let b64data = Buffer.from(data).toString('base64'); 
                    let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: '' + b64data }); 

                    let img = "https:                          
                    let GIFTED_MD_TEXT = `https:                                                  
                    let buttons = [ 
                        { 
                            buttonId: 'id1', 
                            buttonText: {displayText: 'Join Channel'}, 
                            type: 1, 
                            buttonParamsJson: JSON.stringify({ 
                                display_text: 'Join Channel', 
                                url: 'https:                                                 
                            }) 
                        } 
                    ]; 

                    await Pair_Code_By_Gifted_Tech.sendMessage( 
                  Pair_Code_By_Gifted_Tech.user.id, 
                        { 
                            image: { url: img }, 
                            caption: GIFTED_MD_TEXT, 
                            buttons: buttons, 
                            contextInfo: { 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: "//example.com/image.jpg"; 
                    let GIFTED_MD_TEXT = `https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T`; 
                    let buttons = [ 
                        { 
                            buttonId: 'id1', 
                            buttonText: {displayText: 'Join Channel'}, 
                            type: 1, 
                            buttonParamsJson: JSON.stringify({ 
                                display_text: 'Join Channel', 
                                url: 'https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T' 
                            }) 
                        } 
                    ]; 

                    await Pair_Code_By_Gifted_Tech.sendMessage( 
                        Pair_Code_By_Gifted_Tech.user.id, 
                        { 
                            image: { url: img }, 
