require('./lib/listmenu')
const {
	downloadContentFromMessage,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    InteractiveMessage,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const { download } = require('aptoide-scraper');
const scp2 = require('./lib/scraper2') 
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js')
const pkg = require('imgur')
const { ImgurClient } = pkg
const uploadImage = require('./lib/uploadImage')
const client = new ImgurClient({ clientId: "a0113354926015a" })
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase
} = require('./lib/myfunc')
const { xeon_antispam } = require('./lib/antispam')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')

//store
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list')


//cooldone
let lastUsed = 0;

//data
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//media
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonsticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonimage.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvideo.json'))
const DocXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/apk.json'))

//bug database
const { xeontext1 } = require('./src/data/function/XBug/xeontext1')
const { xeontext2 } = require('./src/data/function/XBug/xeontext2')
const { xeontext3 } = require('./src/data/function/XBug/xeontext3')
const { xeontext4 } = require('./src/data/function/XBug/xeontext4')
const { xeontext5 } = require('./src/data/function/XBug/xeontext5')
const { xeontext6 } = require('./src/data/function/XBug/xeontext6')
const { variance } = require('mathjs')
const { title } = require('process')
const wkwk = fs.readFileSync(`./src/data/function/XBug/x.mp3`)
const xsteek = fs.readFileSync(`./src/data/function/XBug/x.webp`)
const {menuimg1} = fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`)

//owner-images
const ownerimage1 = fs.readFileSync('./XeonMedia/owner_images/ownerimage1.png')
const ownerimage2 = fs.readFileSync('./XeonMedia/owner_images/ownerimage2.png')
const ownerimage3 = fs.readFileSync('./XeonMedia/owner_images/ownerimage3.png')
const ownerimage4 = fs.readFileSync('./XeonMedia/owner_images/ownerimage4.jpg')
const ownerimage5 = fs.readFileSync('./XeonMedia/owner_images/ownerimage5.png')

const ownerimages = [ownerimage1, ownerimage2, ownerimage3, ownerimage4, ownerimage5]
const { gameSlot, gameCasinoSolo, gameMerampok, gameTangkapOr, daily, transferLimit, transferUang, buy, setLimit, setUang } = require('./lib/game');
const { toLower } = require('lodash')
const { time } = require('console')

//store database
const db_respon_list = JSON.parse(fs.readFileSync('./src/store/list.json'))
const xeonverifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//function
const reSize = async(buffer, ukur1, ukur2) => {
          return new Promise(async(resolve, reject) => {
             let jimp = require('jimp')
             var baper = await jimp.read(buffer);
             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
          })
       }
       
module.exports = XeonBotInc = async (XeonBotInc, m, msg, chatUpdate, store) => {
          try {
              const {
                  type,
                  quotedMsg,
                  mentioned,
                  now,
                  fromMe
              } = m
             var body = (
        m.mtype === 'conversation' ? m.message.conversation :
        m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
        m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
        m.mtype === 'emojimessage' ? m.message.includes(randomreact) :
        m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
        m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
        m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
        m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
        m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
        m.mtype === 'messageContextInfo' ?
          m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
          m.text :
        ''
      );
              var budy = (typeof m.text == 'string' ? m.text : '')
              //prefix 1
              var prefix = ['.', '/',''] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
              const isCmd = body.startsWith(prefix)
              //prefix2 and command2 particulary for auto download
              const prefix2 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
              const isCmd2 = body.startsWith(prefix2)
              const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
              const args = body.trim().split(/ +/).slice(1)
              const full_args = body.replace(command, '').slice(1).trim()
              const pushname = m.pushName || "D.DEY"
              const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
              const sender = m.sender
              const text = q = args.join(" ")
              const from = m.key.remoteJid
              const xeonymisc = (m.quoted || m)
              const quoted = (xeonymisc.mtype == 'buttonsMessage') ? xeonymisc[Object.keys(xeonymisc)[1]] : (xeonymisc.mtype == 'templateMessage') ? xeonymisc.hydratedTemplate[Object.keys(xeonymisc.hydratedTemplate)[1]] : (xeonymisc.mtype == 'product') ? xeonymisc[Object.keys(xeonymisc)[0]] : m.quoted ? m.quoted : m
              const mime = (quoted.msg || quoted).mimetype || ''
              const qmsg = (quoted.msg || quoted)
              //media
              const isMedia = /image|video|sticker|audio/.test(mime)
              const isImage = (type == 'imageMessage')
              const isVideo = (type == 'videoMessage')
              const isAudio = (type == 'audioMessage')
              const isDocument = (type == 'documentMessage')
              const isLocation = (type == 'locationMessage')
              const isContact = (type == 'contactMessage')
              const isSticker = (type == 'stickerMessage')
              const isText = (type == 'textMessage')
              const isEmoji = type === 'textmessage' && content.match(randomreact)
              const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
              const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
              const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
              const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
              const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
              const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
              const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
              const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
             //prefix 2
              const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
              const xeonybody = body.startsWith(pric)
              const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
             //group
              const isGroup = m.key.remoteJid.endsWith('@g.us')
              const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
              const groupName = m.isGroup ? groupMetadata.subject : ''
              const participants = m.isGroup ? await groupMetadata.participants : ''
              const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
              const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
              global.isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
              const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
              const groupOwner = m.isGroup ? groupMetadata.owner : ''
              const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
              const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
              
              //anti media
              const isXeonMedia = m.mtype
              //user status
              const isUser = xeonverifieduser.includes(sender)
              const XeonTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
              const isPremium= XeonTheCreator || checkPremiumUser(m.sender, premium)
              expiredPremiumCheck(XeonBotInc, m, premium)
 //universal hidetag function
 let  taggrp
 if(isGroup)
 {
   taggrp = participants.map(a => a.id)
 }
 else{}

 //fake whatsapp status reply
 const fwasreply = { key: 
   { fromMe: false, 
     participant: '0@s.whatsapp.net', 
     remoteJid:'status@broadcast'},
    message: {extendedTextMessage: 
             { text: body.replace(prefix, '').trim()}
   }
 }
 let fdisturb
 if(m.mtype === 'extendedTextMessage')
 {
   fdisturb ={key: 
   {fromMe: false,
   participant : m.sender,
   remoteJid:'status@broadcast'},
   message: {extendedTextMessage:
     {text: body}
   }
 }
}
else {
 fdisturb = m
}
//theme txt
function picRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}

let setv = picRandom(global.listv)
 //--------------------------------------------------------------------------------------------------------------------- 
 //theme sticker reply
 const XeonStickWait = () => {
 let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/wait.webp')
 XeonBotInc.sendMessage(from, { sticker: XeonStikRep, mentions: taggrp}, { quoted: fwasreply })
 }
 const XeonStickAdmin = () => {
 let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/admin.webp')
 XeonBotInc.sendMessage(from, { sticker: XeonStikRep, mentions: taggrp }, { quoted: fwasreply })
 }
 const XeonStickBotAdmin = () => {
 let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/botadmin.webp')
 XeonBotInc.sendMessage(from, { sticker: XeonStikRep, mentions: taggrp }, { quoted: fwasreply })
 }
 const XeonStickOwner = () => {
 let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/owner.webp')
 XeonBotInc.sendMessage(from, { sticker: XeonStikRep, mentions: taggrp }, { quoted: fwasreply })
 }
 const XeonStickGroup = () => {
 let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/group.webp')
 XeonBotInc.sendMessage(from, { sticker: XeonStikRep, mentions: taggrp }, { quoted: fwasreply })
 }
 const XeonStickPrivate = () => {
 let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/private.webp')
 XeonBotInc.sendMessage(from, { sticker: XeonStikRep, mentions: taggrp }, { quoted: fwasreply })
 }
 const disturb = () => {
   let ownersticker = fs.readFileSync('./XeonMedia/theme/sticker_reply/boudi.webp')
   XeonBotInc.sendMessage(from, {sticker : ownersticker}, { quoted: fdisturb })
 }
 //profile images
 const {fbimg} = fs.readFileSync('./XeonMedia/fbimg.jpg')
 const {igimg} = fs.readFileSync('./XeonMedia/igimg.jpg')
    //reply
    async function replygcxeon(teks) {
          if (typereply === 'v1') {
              m.reply(teks)
          } else if (typereply === 'v2') {
              XeonBotInc.sendMessage(m.chat, {
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true,
                          title: botname,
                          body: ownername,
                          previewType: "PHOTO",
                          thumbnail: fs.readFileSync('./XeonMedia/theme/thumb.png'),
                          sourceUrl: websitex
                      }
                  },
                  text: teks
              }, {
                  quoted: m
              });
          } else if (typereply === 'v3') {
            let quote = { key: 
              { fromMe: false, 
                participant: m.sender, 
                remoteJid: 'status@broadcast' },
               message: {extendedTextMessage: 
                        { text: m}
              }
            }
             XeonBotInc.sendMessage(m.chat, {
                text: teks,
                contextInfo: {
                   externalAdReply: {
                      showAdAttribution: true,
                      title: botname,
                      body: ownername,
                      thumbnail: fs.readFileSync('./XeonMedia/theme/thumb.png'),
                      sourceUrl: wagc,
                      mediaType: 2,
                      renderLargerThumbnail: false
                   }
                }
             }, { quoted: quote })
          } else if (typereply === 'v4') {
              replygcxeon2(teks)
          }
      }
//--------------------------------------------------------------------------------------------------------------------- 
//my reply

async function introduction ()
{
  let intro = { key: 
    { fromMe: false, 
      participant: m.sender, 
      remoteJid: m.sender },
     message: {extendedTextMessage: 
              { text: `Hi`}
    }}
    let user=m.sender
    let username =XeonBotInc.getName(user)

    var xeonlod = [
        `Hi`,
        `Hi ${username}`,
        `Hi ${username} this`,
        `Hi ${username} this is`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also follow`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also follow me`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also follow me on`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also follow me on my` ,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also follow me on my social`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also follow me on my social media`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also follow me on my social media profiles 🛜`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also follow me on my social media profiles 🛜 \n Facebook :`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also follow me on my social media profiles 🛜 \n 📌Facebook : https://www.facebook.com/Debashi.Dey.X2/ \n 🔑 Instagram :`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also follow me on my social media profiles 🛜 \n 📌Facebook : https://www.facebook.com/Debashi.Dey.X2/ \n 🔑 Instagram : https://www.instagram.com/debashis_x1/`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also follow me on my social media profiles 🛜 \n 📌Facebook : https://www.facebook.com/Debashi.Dey.X2/ \n 🔑 Instagram : https://www.instagram.com/debashis_x1/ \n 🦄 GitHub : `,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also follow me on my social media profiles 🛜 \n 📌Facebook : https://www.facebook.com/Debashi.Dey.X2/ \n 🔑 Instagram : https://www.instagram.com/debashis_x1/ \n 🦄 GitHub : https://github.com/DebashisX1/`,
        `Hi ${username} this is ꧁﴿·⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙»✥«·-𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙-·»✥«⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙.·﴾꧂ created by 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶. To know more send .Allmenu \n\n Also follow me on my social media profiles 🛜 \n 📌Facebook : https://www.facebook.com/Debashi.Dey.X2/ \n 🔑 Instagram : https://www.instagram.com/debashis_x1/ \n 🦄 GitHub : https://github.com/DebashisX1/ \n WhatsApp : 👇`,
	    

    ]
    
let { key } = await XeonBotInc.sendMessage(from, {text: 'Hi'} ,
{
    quoted: intro
})

for (let i = 0; i < xeonlod.length; i++) {
await XeonBotInc.sendMessage(from, {text: xeonlod[i], edit: key })
await sleep(400)
}
}
	    async function handle(){
		    var xeonlod = [
			    `)✊======>`,
			    `)=✊=====>`,
			    `)==✊====>`,
			    `)===✊===>`,
			    `)====✊==>`,
			    `)=====✊=>`,
			    `)======✊>`,
			    `)=====✊=>`,
			    `)====✊==>`,
			    `)===✊===>`,
			    `)==✊====>`,
			    `)=✊=====>`,
			    ]
		    let { key } = await XeonBotInc.sendMessage(from, {text: 'Oh yeah, lets start 🥵'})

	for (let j=0; j<10; j++){
for (let i = 0; i < xeonlod.length; i++) {
await XeonBotInc.sendMessage(from, {text: xeonlod[i], edit: key })
await sleep(400)
}
}
		    var hand = [
			    `)✊======> 💦`,
	
			    `)✊=====>  💦`,
			    
			    `)✊======> 💦 💦`,
	
			    `)✊=====>  💦 💦`,

			    `)✊======> 💦 💦 💦`,

			    ]
		    for (let k = 0; k < hand.length; k++) {
await XeonBotInc.sendMessage(from, {text: hand[k], edit: key })
await sleep(200)
		    }
	    }

		

async function teddy () {
    var xeonlod = [
`‎‎ ∩_∩
(  ° • ° )
| > > 🥰 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 😍 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 😻 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 💌 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 💘 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 💗 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 💖 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 💓 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 💞 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > ❣️ 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > ❤️‍🔥 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > ❤️‍🩹 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > ❤️ 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 🩷 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 🧡 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 💛 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 💚 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 💙 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 🩵 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 💜 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 🤎 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 🖤 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 🩶 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 🤍 
|_^_|`, 
`‎‎ ∩_∩
( ° • ° )
| > > 💕 
|_^_|`,
`‎‎ ∩_∩
( ° • ° )
| > > 💞 
|_^_|`,
   
    ]
    
let { key } = await XeonBotInc.sendMessage(from, {text: 'emojies are loading'})

for (let i = 0; i < xeonlod.length; i++) {
await XeonBotInc.sendMessage(from, {text: xeonlod[i], edit: key })
await sleep(200)
}
}
async function replybot(teks){
let grouplink
let rquote = { key: 
  { fromMe: false, 
    participant: m.sender, 
    remoteJid: 'status@broadcast' },
   message: {extendedTextMessage: 
            { text: body}
  }
}
if(isGroup)
{
  if(isBotAdmins)
    {
      groupaddress = await XeonBotInc.groupInviteCode(m.chat)
      grouplink = `https://chat.whatsapp.com/${groupaddress}`
    }
    else 
    {
      grouplink =wagc
    }

XeonBotInc.sendMessage(from, {
  text: teks,
  contextInfo:{
    externalAdReply:{
      showAdAttribution: true,
      title: botname,
      body: `Follow Me On Facebook`,
      previewType: ` PHOTO`,
      thumbnail: fs.readFileSync('./XeonMedia/theme/thumb.png'),
      sourceUrl: grouplink,
      renderLargerThumbnail: false,
    }
  }
}, {quoted: rquote})
}
else if (!isGroup)
{
  XeonBotInc.sendMessage(from, {
    text: teks,
    contextInfo:{
      externalAdReply:{
        showAdAttribution: true,
        title: botname,
        body: `Follow Me On Facebook`,
        previewType: ` PHOTO`,
        thumbnail: fs.readFileSync('./XeonMedia/theme/thumb.png'),
        sourceUrl: websitex,
        renderLargerThumbnail: false,
      }
    }
  }, {quoted: rquote})
}
}
//---------------------------------------------------------------------------------------------------------------------        
      //fake reply with channel link embedded
async function replygcxeon2(txt) {
const xeonnewrep = {      
contextInfo:{
  externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnail: fs.readFileSync('./XeonMedia/theme/thumb.png'),
      sourceUrl: wagc,
      mediaType: 0,
      renderLargerThumbnail: false

  }},
text: txt,
}

return XeonBotInc.sendMessage(from, xeonnewrep, {
quoted: m,
})
}
const pickRandom = (arr) => {
          return arr[Math.floor(Math.random() * arr.length)]
          }
 
        //database
        try {
          let isNumber = x => typeof x === 'number' && !isNaN(x)
          let limitUser = isPremium ? 1000 : 100
          let user = global.db.data.users[sender]
          if (typeof user !== 'object') global.db.data.users[sender] = {}
          if (user) {
              if (!isNumber(user.afkTime)) user.afkTime = -1
              if (!('badword' in user)) user.badword = 0
              if(!('reaction' in user)) user.reaction = false
              if (!('title' in user)) user.title = ''
              if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
              if (!('afkReason' in user)) user.afkReason = ''
              if (!('nick' in user)) user.nick = XeonBotInc.getName(sender)
              if (!isPremium) user.premium = false
              if (!('totalLimit' in user)) user.totalLimit = 0
              if (!isNumber(user.limit)) user.limit = limitUser
          } else global.db.data.users[sender] = {
             serialNumber: randomBytes(16).toString('hex'),
             title: `${isPremium ? 'Premium' : 'User'}`,
             afkTime: -1,
             badword: 0,
             reaction: false,
             afkReason: '',
             nick: XeonBotInc.getName(sender),
             premium: `${isPremium ? 'true' : 'false'}`,
             limit: limitUser,
             totalLimit: 0
          }
          
             let chats = global.db.data.chats[from]
             if (typeof chats !== 'object') global.db.data.chats[from] = {}
             if (chats) {
                if (!('badword' in chats)) chats.badword = false
                if(!('reaction' in chats)) chats.reaction = false
                if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                if (!('antibot' in chats)) chats.antibot = false
                if (!('antipromote' in chats)) chats.antipromote = false
                if (!('antiviewonce' in chats)) chats.antiviewonce = true
                if (!('antispam' in chats)) chats.antispam = false
                if (!('antimedia' in chats)) chats.media = false
                if (!('antivirtex' in chats)) chats.antivirtex = false
                if (!('antiimage' in chats)) chats.antiimage = false
                if (!('antivideo' in chats)) chats.video = false
                if (!('antiaudio' in chats)) chats.antiaudio = false
                if (!('antipoll' in chats)) chats.antipoll = false
                if (!('antisticker' in chats)) chats.antisticker = false
                if (!('anticontact' in chats)) chats.anticontact = false
                if (!('antilocation' in chats)) chats.antilocation = false
                if (!('antidocument' in chats)) chats.antidocument = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkgc' in chats)) chats.antilinkgc = false
                if (!('antidelete' in chats)) chats.antidelete = true
                if (!('antipromotion' in chats)) chats.antipromotion = false
             } else global.db.data.chats[from] = {
                badword: false,
                reaction: false,
                antiforeignnum: false,
                antibot: false,
                antiviewonce: true,
                antipromote: false,
                antispam: false,
                antivirtex: false,
                antimedia: false,
                antiimage: false,
                antivideo: false,
                antiaudio: false,
                antipoll: false,
                antisticker: false,
                antidelete: true,
                antilocation: false,
                antidocument: false,
                anticontact: false,
                antilink: false,
                antipromotion: false,
                antilinkgc: false
             }
          
          let setting = global.db.data.settings[botNumber]
          if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
          if (setting) {
             if (!('totalhit' in setting)) setting.totalhit = 0
             if (!('totalError' in setting)) setting.totalError = 0
             if (!('online' in setting)) setting.online = false 
             if (!('autosticker' in setting)) setting.autosticker = false 
             if (!('autodownload' in setting)) setting.autodownload = false 
             if (!('autobio' in setting)) setting.autobio = false 
             if (!('autoread' in setting)) setting.autoread = true
             if (!('autorecordtype' in setting)) setting.autorecordtype = false
             if (!('autorecord' in setting)) setting.autorecord = false
             if (!('autotype' in setting)) setting.autotype = false
             if (!('autoblocknum' in setting)) setting.autoblocknum = false
             if (!('onlyindia' in setting)) setting.onlyindia = false
             if (!('onlyindo' in setting)) setting.onlyindo = false
             if (!('onlygrub' in setting)) setting.onlygrub = false
             if (!('onlypc' in setting)) setting.onlypc = false
             if (!('watermark' in setting)) setting.watermark = { packname , author }
             if (!('about' in setting)) setting.about = { bot: { nick: XeonBotInc.getName(botNumber), alias: botname}, owner: { nick: XeonBotInc.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
          } else global.db.data.settings[botNumber] = {
             totalhit: 0,
             totalError: 0,
             online: false,
             autosticker: false,
             autodownload: false,
             autobio: false,
             autoread: true,
             autoblocknum: false,
             onlyindia: false,
             onlyindo: false,
             onlygrub: false,
             onlypc: false,
             autorecordtype: false,
             autorecord: false,
             autotype: false,
             watermark: {
                packname: global.packname, 
                author: global.author
             },
             about: {
                bot: {
                   nick: XeonBotInc.getName(botNumber), 
                   alias: botname
                },
                owner: {
                   nick: XeonBotInc.getName(global.ownernumber + '@s.whatsapp.net'), 
                   alias: global.ownernumber
                }
             }
          }
          
      } catch (err) {
          console.log(err)
      }

      async function loading () {
          var xeonlod = [
          "《 █▒▒▒▒▒▒▒▒▒》10%",
          "《 ██▒▒▒▒▒▒▒▒》20%",
          "《 ███▒▒▒▒▒▒▒》30%",
          "《 ████▒▒▒▒▒▒》40%",
          "《 █████▒▒▒▒▒》50%",
          "《 ██████▒▒▒▒》60%",
          "《 ███████▒▒▒》70%",
          "《 ████████▒▒》80%",
          "《 █████████▒》90%",
          "《 ██████████》100%",
          "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
          ]
          let { key } = await XeonBotInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})
          
          for (let i = 0; i < xeonlod.length; i++) {
          await XeonBotInc.sendMessage(from, {text: xeonlod[i], edit: key })
          }
          } 
          
          const xeonimun = (texto) => {
          XeonBotInc.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
          return m.reply("Erro..")
          })
          }

          switch (isCommand) {
            case 'reaction':{
              if (args[0] === 'on') {
                 db.data.chats[from].reaction = true
                 replygcxeon(`${command} is enabled`)
              } else if (args[0] === 'off') {
                 db.data.chats[from].reaction = false
                 replygcxeon(`${command} is disabled`)
              }}
              break
                    case 'antipromote':
                              {
                                if(!m.isGroup) return XeonStickGroup()
                                if(!XeonTheCreator) return XeonStickOwner()
                                  if(args[0] === 'on')
                                    {
                                      db.data.chats[from].antipromote = true
                                      replygcxeon(`${command} is enabled`)
                                    }
                                  else if(args[0] === 'off')
                                    {
                                      db.data.chats[from].antipromote = false
                                      replygcxeon(`${command} is disabled`)
                                    }
                              }
                              break
                    case 'meter':
                              {
                                if(!text) return replygcxeon(`Example ${prefix + command} height_in_inches`)
                                let inch = text.replace(/[^0-9]/g, '')
                                let meter = inch*0.0254
                                replybot(`${pushname} Your Height is ${meter} meters`)
                              }
                              break
                            case 'bmi':
                              {
                                if(!text) return replygcxeon(`Example: ${prefix + command} weight(kg) height(m)\nIf you don't know your height in meters, use ${prefix}meter height_in_inches\nExample: ${prefix + command} 12`)
                                let weight = text.split(" ")[0]
                                let height = text.split(" ")[1]
                                let bmi = weight/(height*height)
                                let reply 
                                if(bmi<18.5) reply = `Underweight`
                                else if (bmi>=18.5 && bmi<=24.9) reply = `Normal`
                                else if(bmi>=25 && bmi<=29.9) reply = `Overweight`
                                else if(bmi>=30) reply = `Obese`
                                try {
                                  ppuser = await XeonBotInc.profilePictureUrl(m.sender, 'image')
                              } catch (err) {
                                ppuser = 'https://www.shutterstock.com/image-illustration/leather-background-jpeg-version-260nw-101031550.jpg'
                              }
                          XeonWlcm = await getBuffer(ppuser)
                                await XeonBotInc.sendMessage(from, 
                                  {text : `Hello ${pushname} Your BMI is ${bmi}\nPhysical Condition : ${reply}`,
                                    contextInfo:{
                                      externalAdReply:{
                                        showAdAttribution: true,
                                        title: botname,
                                        body: ownername,
                                        thumbnail: XeonWlcm,
                                        sourceUrl: websitex,
                                        mediaType: 1,
                                        renderLargerThumbnail: false,
                                      }
                                    }}
                                )
                              }
                              break
                          case 'ginfo' : case 'groupinfo': 
                          {
                            if(!isGroup) return XeonStickGroup()
                            let groupAdmins = participants.filter(p => p.admin)
                            let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
                            let admincount = groupAdmins.length
                            let pp = await XeonBotInc.profilePictureUrl(m.chat, 'image') || 'https://www.shutterstock.com/image-illustration/leather-background-jpeg-version-260nw-101031550.jpg'        
                            let groupicon = await getBuffer(pp)
                            let ginfoquote = { key: 
                              { fromMe: false, 
                                participant: m.sender, 
                                remoteJid: from },
                               message: {extendedTextMessage: 
                                        { text: `Group Info : ${groupName}\n${botname}`}
                              }
                            }
                            let groupcreater =groupOwner || `owner_not_found@null`
                            let msg = `
❑━────━▒ ╭──╯ ۞ ╰──╮ ▒━────━❑
     *꧁༒༻☬ད 𝙂𝙍𝙊𝙐𝙋 𝙄𝙉𝙁𝙊 ཌ☬༺༒꧂*
❑━────━▒ ╰──╮ ۞ ╭──╯ ▒━────━❑ 
                
                
             _░▒▓█►─═ 𝐁𝐀𝐒𝐈𝐂 𝐈𝐍𝐅𝐎 ═─◄█▓▒░_
      ✯────────────✯────────────✯
📌 ➩ *GROUP NAME* : ${groupMetadata.subject}
📌 ➩ *NO OF PARTICIPANTS* : ${groupMetadata.participants.length}
📌 ➩ *NO OF ADMINS* : ${admincount}
📌 ➩ *ADMINS* : 
${listAdmin}
📌 ➩ *IS BOT ADMIN* : ${isBotAdmins? 'YES ✅' : 'NO ❎'}
📌 ➩ *WELCOME MESSAGE* : ${welcome? 'ON ✅' : 'OFF ❎'}
📌 ➩ *ID* : ${groupMetadata.id}
📌 ➩ *GROUP DESCRIPTION* : ${groupMetadata.desc}
📌 ➩ *GROUP CREATOR* : @${groupcreater.split("@")[0]}
                
                
 _░▒▓█►─═  𝐆𝐑𝐎𝐔𝐏 𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐓𝐈𝐎𝐍𝐒 ═─◄█▓▒░_  
✯───────────────✯───────────────✯
📌 ➩ *ANTI BADWORD* : ${db.data.chats[from].badword? 'on ✅': 'off ❎'}
📌 ➩ *ANTI PROMOTE* : ${db.data.chats[from].antipromote? 'on ✅': 'off ❎'}
📌 ➩ *ANTI FOREIGN NUMBER* : ${db.data.chats[from].antiforeignnum? 'on ✅': 'off ❎'}
📌 ➩ *ANTI BOT* : ${db.data.chats[from].antibot? 'on ✅': 'off ❎'}
📌 ➩ *ANTI VIEW ONCE* : ${db.data.chats[from].antiviewonce? 'on ✅': 'off ❎'}
📌 ➩ *ANTI SPAM* : ${db.data.chats[from].antispam? 'on ✅': 'off ❎'}
📌 ➩ *ANTI VERTEX* : ${db.data.chats[from].antivirtex? 'on ✅': 'off ❎'}
📌 ➩ *ANTI MEDIA* : ${db.data.chats[from].antimedia? 'on ✅': 'off ❎'}
📌 ➩ *ANTI IMAGE* : ${db.data.chats[from].antiimage? 'on ✅': 'off ❎'}
📌 ➩ *ANTI VIDEO* : ${db.data.chats[from].antivideo? 'on ✅': 'off ❎'}
📌 ➩ *ANTI AUDIO* : ${db.data.chats[from].antiaudio? 'on ✅': 'off ❎'}
📌 ➩ *ANTI POLL* : ${db.data.chats[from].antipoll? 'on ✅': 'off ❎'}
📌 ➩ *ANTI STICKER* : ${db.data.chats[from].antisticker? 'on ✅': 'off ❎'}
📌 ➩ *ANTI LOCATION* : ${db.data.chats[from].antilocation? 'on ✅': 'off ❎'}
📌 ➩ *ANTI DOCUMENT* : ${db.data.chats[from].antidocument? 'on ✅': 'off ❎'}
📌 ➩ *ANTI CONTACT* : ${db.data.chats[from].anticontact? 'on ✅': 'off ❎'}
📌 ➩ *ANTI LINKS* : ${db.data.chats[from].antilink? 'on ✅': 'off ❎'}
📌 ➩ *ANTI GROUP LINK* : ${db.data.chats[from].antilinkgc? 'on ✅': 'off ❎'}
📌 ➩ *BOT AUTO REACTION* : ${db.data.chats[from].reaction? 'on ✅': 'off ❎'}`
                            
                XeonBotInc.sendMessage(from,
                  {image : groupicon, caption : `_GROUP ICON_`},{quoted:m})
                await sleep(1000)
                XeonBotInc.sendMessage(from,
                  {
                    text : msg,
                    contextInfo:{
                      mentionedJid: [...groupAdmins.map(v => v.id), owner,groupOwner],
                      externalAdReply:{
                        showAdAttribution: true,
                                        title: `Hello ${pushname} \nThis is ${botname} 👑`,
                                        body: ownername,
                                        thumbnail: groupicon,
                                        sourceUrl: websitex,
                                        mediaType: 1,
                                        renderLargerThumbnail: false
                      }
                    }
                  }, {quoted:ginfoquote})
                  
                
                          }
                          break
                          
                          case 'dup': case 'duplicate': case 'simulate':
                            {
                              if(!isGroup) return replygcxeon(`only group can use this command`)
                              if(args[0] ===`join` ||args[0] ===`joined` )
                              {
                
                                let joined = m.mentionedJid[0] ? m.mentionedJid[0] : args[1].replace(/[^0-9]/g, '') + `@s.whatsapp.net`               
                                let xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
                                        let xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                                let userabout = await XeonBotInc.fetchStatus(joined) || `Bio Is Private`
                                let metadata = await XeonBotInc.groupMetadata(from)
                                let xmembers = metadata.participants.length
                                let joingrp = { key: 
                                  { fromMe: false, 
                                    participant: '0@s.whatsapp.net', 
                                    remoteJid:'status@broadcast'},
                                    message: {extendedTextMessage: 
                                            { 
                                              text : `A new friend Has Joined Our Group 🥳🥳🥳`}
                                  }
                                }
                                let reply = `
                ┌────────❖ 𝕮𝖍𝖊𝖊𝖒𝖘 𝕭𝖔𝖙 ❖────────┐
                │「 𝗛𝗶 👋 」
                └┬❖ 「  @${joined.split("@")[0]}  」
                   │✑  𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝕿𝖔 : ${metadata.subject}
                   │✑  𝕸𝖊𝖒𝖇𝖊𝖗 : ${xmembers}th
                   │✑  𝕬𝖇𝖔𝖚𝖙 : ${userabout} 
                   │✑  𝕵𝖔𝖎𝖓𝖊𝖉 𝖔𝖓 : 
                   │                𝕯𝖆𝖙𝖊 : ${xdate} 
                   │                𝕿𝖎𝖒𝖊 : ${xtime} 
                   │                𝕵𝖔𝖎𝖓𝖊𝖉 𝖇𝖞 : This is A Fake Joining Message
                   │
                    |✑ 𝕮𝖔𝖓𝖌𝖗𝖆𝖙𝖚𝖑𝖆𝖙𝖎𝖔𝖓𝖘
                    |     @${joined.split("@")[0]} 𝘽𝙧𝙤/𝙎𝙞𝙨, 
                    |                  𝙔𝙤𝙪 𝙖𝙧𝙚 𝙣𝙤𝙬 𝙖 𝙢𝙚𝙢𝙗𝙚𝙧 𝙤𝙛 𝙤𝙪𝙧
                    | ${metadata.subject} 𝙁𝙖𝙢𝙞𝙡𝙮❤️🤝
                    |
                    |✑ 𝕲𝖗𝖔𝖚𝖕 𝕯𝖊𝖘𝖈𝖗𝖎𝖕𝖙𝖎𝖔𝖓:- 
                    |  𝐑𝐄𝐀𝐃 𝐆𝐑𝐎𝐔𝐏 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍 𝐂𝐀𝐑𝐄𝐅𝐔𝐋𝐋𝐘 : 
                           *${metadata.desc}*
                   └────────────────────────┈ ⳹`
                   let msgs = generateWAMessageFromContent(from, {
                    viewOnceMessage: {
                      message: {
                          "messageContextInfo": {
                            "deviceListMetadata": {},
                            "deviceListMetadataVersion": 2
                          },
                          interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                              text: reply
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                              text: botname
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: false,
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                              buttons: [{
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"GO TO INBOX","url":'https://wa.me/${joined.split("@")[0]}',"merchant_url":"https://www.google.com"}`
                              },
                             {
                              "name": "quick_reply",
                                "buttonParamsJson": `{\"display_text\":\"WELCOCME 💐\",\"id\":\"\"}`
                              }],
                            }),
                            contextInfo: {
                              externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                previewType: "PHOTO",
                                thumbnail: fs.readFileSync('./XeonMedia/theme/thumb.png'),
                                sourceUrl: websitex
                            },
                                    mentionedJid: [joined], 
                                    forwardingScore: 999,
                                    isForwarded: true
                                  }
                         })
                      }
                    }
                  },{
                    quoted: joingrp,
                    })
                  XeonBotInc.relayMessage(from, msgs.message, {})
                  
                              }
                              else if(args[0] === 'left'||args[0] ===`leave`){
                                if(args.length < 2) return replygcxeon(`please enter text`)
                                let joined = m.mentionedJid[0] ? m.mentionedJid[0] : args[1].replace(/[^0-9]/g, '') + `@s.whatsapp.net`               
                                let xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
                                        let xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                                let metadata = await XeonBotInc.groupMetadata(from)
                                let xmembers = metadata.participants.length
                                let joingrp = { key: 
                                  { fromMe: false, 
                                    participant: '0@s.whatsapp.net', 
                                    remoteJid:'status@broadcast'},
                                   message: {extendedTextMessage: 
                                            { text: `Good By Message`}
                                  }
                                }
                                let reply = `
                ┌────────❖ 𝕮𝖍𝖊𝖊𝖒𝖘 𝕭𝖔𝖙 ❖────────┐
                │「 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 👋 」
                └┬❖ 「 @${joined.split("@")[0]}  」
                   │✑  𝕷𝖊𝖋𝖙 𝕱𝖗𝖔𝖒: ${metadata.subject}
                   │✑  𝕸𝖊𝖒𝖇𝖊𝖗 :  ${xmembers}th
                    | 𝕷𝖊𝖋𝖙 𝕺𝖓 :
                   │✑        𝕯𝖆𝖙𝖊: ${xtime} 
                   │✑        𝕿𝖎𝖒𝖊: ${xdate} 
                   │
                   │✑  He/She is no more in this group 😔
                   └────────────────────────┈ ⳹`
                   let msgs = generateWAMessageFromContent(from, {
                    viewOnceMessage: {
                      message: {
                          "messageContextInfo": {
                            "deviceListMetadata": {},
                            "deviceListMetadataVersion": 2
                          },
                          interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                              text: reply
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                              text: botname
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: false,
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                              buttons: [{
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"GO TO INBOX","url":'https://wa.me/${joined.split("@")[0]}',"merchant_url":"https://www.google.com"}`
                              },
                              {
                                "name": "quick_reply",
                                  "buttonParamsJson": `{\"display_text\":\"GOOD BYE 👋\",\"id\":\"\"}`
                                }],
                            }),
                            contextInfo: {
                              externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                previewType: "PHOTO",
                                thumbnail: fs.readFileSync('./XeonMedia/theme/thumb.png'),
                                sourceUrl: websitex
                            },
                                    mentionedJid: [joined], 
                                    forwardingScore: 999,
                                    isForwarded: true
                                  }
                         })
                      }
                    }
                  },{
                    quoted: joingrp,
                    })
                  XeonBotInc.relayMessage(from, msgs.message, {})
                              }
                              else if(args[0] === `promote`||args[0] === `promoted`){
                            let promotee = m.mentionedJid[0] ? m.mentionedJid[0] : text.replace(/[^0-9]/g, '') + `@s.whatsapp.net`     
                            let xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
                            let xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                            let ppuser
                            let XeonWlcm
                            
                          try {
                            ppuser = await XeonBotInc.profilePictureUrl(target_profpic, 'image')
                            XeonWlcm = await getBuffer(ppuser)
                            } catch (err) {
                              ppuser = 'https://www.shutterstock.com/image-illustration/leather-background-jpeg-version-260nw-101031550.jpg'
                              XeonWlcm = await getBuffer(ppuser)
                            }
                            let promoted =  promotee.split('@')[0]
                            let reply  = ` 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉 @${promoted}, you have been *promoted* to *admin*\n> Time:  ${xeontime} \n> Date:  ${xeondate}`
                
                            XeonBotInc.sendMessage(from,
                              { text: reply,
                               contextInfo:{
                                      mentionedJid:[promotee],
                                       "externalAdReply": {"showAdAttribution": true,
                                       "containsAutoReply": true,
                                       "title": ` ${global.botname}`,
                                       "body": `${ownername}`,
                                       "previewType": "PHOTO",
                                      "thumbnailUrl": ``,
                                      "thumbnail": XeonWlcm,
                                       "sourceUrl": `${websitex}`}
                                          }
                              })
                              }
                              else if(args[0] === `demote`||args[0] === `demoted`){
                                
                            let xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
                            let xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                            let demotee = m.mentionedJid[0] ? m.mentionedJid[0] : text.replace(/[^0-9]/g, '') + `@s.whatsapp.net`     
                            let ppuser
                            let XeonWlcm
                            
                          try {
                            ppuser = await XeonBotInc.profilePictureUrl(target_profpic, 'image')
                            XeonWlcm = await getBuffer(ppuser)
                            } catch (err) {
                              ppuser = 'https://www.shutterstock.com/image-illustration/leather-background-jpeg-version-260nw-101031550.jpg'
                              XeonWlcm = await getBuffer(ppuser)
                            }
                
                            let demoted =  demotee.split('@')[0]
                            let reply  = ` *Oops!!* @${demoted}, you have been *Demoted* from *Admin* \n> Time:  ${xeontime} \n> Date:  ${xeondate}`
                
                            XeonBotInc.sendMessage(from,
                              { text: reply,
                               contextInfo:{
                                      mentionedJid:[demotee],
                                       "externalAdReply": {"showAdAttribution": true,
                                       "containsAutoReply": true,
                                       "title": ` ${global.botname}`,
                                       "body": `${ownername}`,
                                       "previewType": "PHOTO",
                                      "thumbnailUrl": ``,
                                      "thumbnail": XeonWlcm,
                                       "sourceUrl": `${websitex}`}
                                          }
                              })
                              }
                            }
                            break
          
        case 'disturb':
          {
            if (!XeonTheCreator) return XeonStickOwner()
              if(args[0] === `on`)
              {
                disturbgirls = true
                replybot(`Disturbing is turned on 😜`)
              }
              else if (args[0] === `off`)
              {
                disturbgirls = false
                replybot(`Disturbing is turned off `)
              }
          }
          break
          case 'gpp':
            {
  let pp = await XeonBotInc.profilePictureUrl(m.chat, 'image')|| 'https://images.app.goo.gl/5kHFgvSatAYWunaw9'
  let ppgroup = await getBuffer(pp)
  XeonBotInc.sendMessage(from,
    {
      image: ppgroup,
      caption: `Group Icon of ${groupName} Group`,
      mentions: taggrp 
      
    }
  )
            }
              break
          case 'global-reation':
            {
              if(!XeonTheCreator) return XeonStickOwner()
                if(args[0] === 'on')
                  {
                    reactions = true
                    replygcxeon(`${command} is enabled`)
                  }
                  else if(args[0] === 'off') 
                {
                  reactions = false
                  replygcxeon(`${command} is disabled`)
                }
            }
            break
          case 'emoji-send':
            {
              react = randomreact
                await XeonBotInc.sendMessage(from, {text : react[i]})
            }
              break
              case 'emoji':
                {
                  if(isEmoji) return replygcxeon('yes')
                }
                break
            case 'alive': //alive response message
              {
                await XeonBotInc.sendMessage(m.chat, { react: { text: `🦄`, key: m.key}}) // reaction to alive message
                //alive message fake quote reply
                let q_alive = { key: 
                  { fromMe: false, 
                    participant: m.sender, //sent by sender(alive) 
                    remoteJid: `status@broadcast` },  //sent through whatsapp status
                   message: {extendedTextMessage: 
                            { text: `${botname} 🤖 \nCheck Bot is Running Or Not 📡🛰️`} //fake message assosiated with quote
                  }
                }

                //alive audio fake quote reply
                let alive_audio = { key: 
                  { fromMe: false, 
                    participant: m.sender, //sent by sender(alive) 
                    remoteJid: `status@broadcast` },//sent through whatsapp status
                   message: {extendedTextMessage: 
                            { text: `Alive Response Audio Message 🎵\n ${botname}`}//fake message assosiated with quote
                  }
                }
                //anyone of these emojies will be send along alive message, placed after owner name, selection is randomized
                let imagesuffle  = ownerimages[Math.floor(Math.random() * ownerimages.length)] //random image selection(defined in line no 161) 
                let good_react =['😀','😃','😄','😁','😆','🥹','☺️','😊','😇','🙂','🙃','😉','😍','😌','🥰','😘','😗','😙','😚','😋','😛','😝','🤓','😎','🤩','🥳','🙂‍↕️','🥺','🤗','🤔','🫣','🤭','🫢','🫡','🤫','🫠','🤠','😺','🎃','💜','❤️','💚','🖤','♥️','🤎','❤️‍🩹','❣','💕','💝','🫀','💖','💗','❤️‍🔥','💜','💌']
                let emoji = pickRandom(good_react)  // random selection
                
                //alive message for groups
              if(!isGroup)
                {
                  let img1 = fs.readFileSync('./XeonMedia/alive_img/img1.jpg')
                  let img2 = fs.readFileSync('./XeonMedia/alive_img/img2.jpg')
                  let img3 = fs.readFileSync('./XeonMedia/alive_img/img3.jpg')
                  let img4 = fs.readFileSync('./XeonMedia/alive_img/img4.jpg')
                  let img5 = fs.readFileSync('./XeonMedia/alive_img/img5.jpg')
                  let img6 = fs.readFileSync('./XeonMedia/alive_img/img6.jpg')
                  let img7 = fs.readFileSync('./XeonMedia/alive_img/img7.jpg')
                  let img8 = fs.readFileSync('./XeonMedia/alive_img/img8.jpg')
                  let img9 = fs.readFileSync('./XeonMedia/alive_img/img9.jpg')
                  let img10 = fs.readFileSync('./XeonMedia/alive_img/img10.jpg')
                  let img11 = fs.readFileSync('./XeonMedia/alive_img/img11.jpg')
                  let img12 = fs.readFileSync('./XeonMedia/alive_img/img12.jpg')
                  let img13 = fs.readFileSync('./XeonMedia/alive_img/img13.jpg')
                  let img14 = fs.readFileSync('./XeonMedia/alive_img/img14.jpg')
                  let img15 = fs.readFileSync('./XeonMedia/alive_img/img15.jpg')
                  let img16 = fs.readFileSync('./XeonMedia/alive_img/img16.jpg')
                  let img17 = fs.readFileSync('./XeonMedia/alive_img/img17.jpg')
                  let img18 = fs.readFileSync('./XeonMedia/alive_img/img18.jpg')
                  let img19 = fs.readFileSync('./XeonMedia/alive_img/img19.jpg')
                  let img20 = fs.readFileSync('./XeonMedia/alive_img/img20.jpg')
                  let img21 = fs.readFileSync('./XeonMedia/alive_img/img21.jpg')
                  let img22 = fs.readFileSync('./XeonMedia/alive_img/img22.jpg')
                  let img23 = fs.readFileSync('./XeonMedia/alive_img/img23.jpg')
                  let img24 = fs.readFileSync('./XeonMedia/alive_img/img24.jpg')
                  let img25 = fs.readFileSync('./XeonMedia/alive_img/img25.jpg')
                  let img26 = fs.readFileSync('./XeonMedia/alive_img/img26.jpg')
                  let img27 = fs.readFileSync('./XeonMedia/alive_img/img27.jpg')
                  let img28 = fs.readFileSync('./XeonMedia/alive_img/img28.jpg')
                  let img29 = fs.readFileSync('./XeonMedia/alive_img/img29.jpg')
                  let img30 = fs.readFileSync('./XeonMedia/alive_img/img30.jpg')
                  let img31 = fs.readFileSync('./XeonMedia/alive_img/img31.jpg')
                  let img32 = fs.readFileSync('./XeonMedia/alive_img/img32.jpg')
                  let img33 = fs.readFileSync('./XeonMedia/alive_img/img33.jpg')
                  let img34 = fs.readFileSync('./XeonMedia/alive_img/img34.jpg')
                  let img35 = fs.readFileSync('./XeonMedia/alive_img/img35.jpg')
                  let aliveimg = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35]
                  let alive_img = pickRandom(aliveimg)
                  let {key} = await XeonBotInc.sendMessage(from,
                  {
                    image : alive_img, //random image selection part(defined in line no 161)
                    caption : alive,
                    contextInfo:
                    {
                      externalAdReply:
                      {
                        showAdAttribution: true,
                        title: `Hello ${pushname} ${emoji} \nThis is ${botname} 👑`,
                        body: ownername,
                        thumbnail: fs.readFileSync('./XeonMedia/theme/thumb.png'),
                        sourceUrl: wagc,
                        mediaType: 1,
                        renderLargerThumbnail: true
                      }
                    }
                  },
                  {quoted: q_alive}
                )
                await XeonBotInc.sendMessage(m.chat, { react: { text: `🫀`, key: key }})
              }
              //alive message for personal chat
              else if(isGroup)
              {
                let pp = await XeonBotInc.profilePictureUrl(m.chat, 'image')|| fs.readFileSync('./XeonMedia/fbimg.jpg') //group icon link
                let Icon = await getBuffer(pp) //group icon image
                 //invite link of that group in which aliv message is sent
                let groupaddress 
                 let grouplink 
                 if(isBotAdmins)
                 {
                   groupaddress = await XeonBotInc.groupInviteCode(m.chat)
                   grouplink = `https://chat.whatsapp.com/${groupaddress}`
                 }
                 else 
                 {grouplink =wagc} //group link associated with alive message(when alive response message is sent to a group, response message will contain invite link of that group)
                
                 let {key} = await XeonBotInc.sendMessage(from,
                  {
                    image : Icon,
                    caption : alive,
                    contextInfo:
                    {
                      externalAdReply:
                      {
                        showAdAttribution: true,
                        title: `Hello ${pushname} ${emoji} \nThis is ${botname} 👑`,
                        body: ownername,
                        thumbnail: fs.readFileSync('./XeonMedia/theme/thumb.png'), //thumbnail image associated with alive message link
                        sourceUrl: grouplink,
                        mediaType: 1,
                        renderLargerThumbnail: true //thumbnail image will be shown in big size
                      }
                    }
                  },{quoted: q_alive}
                )
              await XeonBotInc.sendMessage(m.chat, { react: { text: `🫀`, key: key }}) // reaction to alive response message
              }
              //alive message audio response, same for personal chat and group chat
              let aud1 = fs.readFileSync('./XeonMedia/alive_aud/Alive.mp3')
              let aud2 = fs.readFileSync('./XeonMedia/alive_aud/Babu.mp3')
              let aud3 = fs.readFileSync('./XeonMedia/alive_aud/Bot.mp3')
              let aud4 = fs.readFileSync('./XeonMedia/alive_aud/Bot1.mp3')
              let aud5 = fs.readFileSync('./XeonMedia/alive_aud/Bot2.mp3')
              let aud6 = fs.readFileSync('./XeonMedia/alive_aud/Bot3.mp3')
              let aud7 = fs.readFileSync('./XeonMedia/alive_aud/Bot4.mp3')
              let aud8 = fs.readFileSync('./XeonMedia/alive_aud/Bot5.mp3')
              let aud9 = fs.readFileSync('./XeonMedia/alive_aud/Bot6.mp3')
              let aud10 = fs.readFileSync('./XeonMedia/alive_aud/Bot7.mp3')
              let aud11 = fs.readFileSync('./XeonMedia/alive_aud/Bot8.mp3')
              let aud12 = fs.readFileSync('./XeonMedia/alive_aud/Bot9.mp3')
              let aud13 = fs.readFileSync('./XeonMedia/alive_aud/Bot10.mp3')
              let aud14 = fs.readFileSync('./XeonMedia/alive_aud/Bot11.mp3')
              let aud15 = fs.readFileSync('./XeonMedia/alive_aud/Bot12.mp3')
              let aud16 = fs.readFileSync('./XeonMedia/alive_aud/Bot13.mp3')
              let aud17 = fs.readFileSync('./XeonMedia/alive_aud/Bot14.mp3')
              let aud18 = fs.readFileSync('./XeonMedia/alive_aud/Bot15.mp3')
              let aud19 = fs.readFileSync('./XeonMedia/alive_aud/Bot16.mp3')
              let aud20 = fs.readFileSync('./XeonMedia/alive_aud/Bot17.mp3')
              let aud21 = fs.readFileSync('./XeonMedia/alive_aud/Bot18.mp3')
              let aud22 = fs.readFileSync('./XeonMedia/alive_aud/Bot19.mp3')
              let aud23 = fs.readFileSync('./XeonMedia/alive_aud/Bot20.mp3')
              let aud24 = fs.readFileSync('./XeonMedia/alive_aud/Bot21.mp3')
              let aud25 = fs.readFileSync('./XeonMedia/alive_aud/Bot22.mp3')
              let aud26 = fs.readFileSync('./XeonMedia/alive_aud/Bot23.mp3')
              let aud27 = fs.readFileSync('./XeonMedia/alive_aud/Bot24.mp3')
              let aud28 = fs.readFileSync('./XeonMedia/alive_aud/Bot25.mp3')
              let aud29 = fs.readFileSync('./XeonMedia/alive_aud/Bot26.mp3')
              let aud30 = fs.readFileSync('./XeonMedia/alive_aud/Guru.mp3')
              let aud31 = fs.readFileSync('./XeonMedia/alive_aud/Guru1.mp3')
              let aud32 = fs.readFileSync('./XeonMedia/alive_aud/Guru2.mp3')
              let aud33 = fs.readFileSync('./XeonMedia/alive_aud/Guru3.mp3')
              let aud34 = fs.readFileSync('./XeonMedia/alive_aud/Guru4.mp3')
              let audio = [aud1, aud2, aud3, aud4, aud5, aud6, aud7, aud8, aud9, aud10, aud11, aud12, aud13, aud14, aud15, aud16, aud17, aud18, aud19, aud20, aud21, aud22, aud23, aud24, aud25, aud26, aud27, aud28, aud29, aud30, aud31, aud32, aud33, aud34]  
              let aud_msg = pickRandom(audio)
               XeonBotInc.sendMessage(m.chat, {
                  audio: aud_msg,
                  mimetype: 'audio/mpeg',
                  seconds: 36000000,
                  ptt: true //audio will be sent in voice message format
              }, {
                  quoted: alive_audio
              })
              await XeonBotInc.sendMessage(m.chat, { react: { text: `✅`, key:m.key}})// reaction to alive message
              }
              break

              case 'getvar': case 'allvar': //command to get all important variable values of this bot
              {
                let variables = 
                `1. 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐜𝐡𝐚𝐧𝐧𝐞𝐥 𝐥𝐢𝐧𝐤 : ${ytname} 
        2. 𝐆𝐢𝐭𝐡𝐮𝐛 𝐩𝐫𝐨𝐟𝐢𝐥𝐞 : ${socialm}
        3. 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : ${location}
        4. 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐩𝐫𝐨𝐟𝐢𝐥𝐞 : ${fbprofile}
        5. 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 𝐩𝐫𝐨𝐟𝐢𝐥𝐞 : ${igprofile}
        6. 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 𝐩𝐫𝐨𝐟𝐢𝐥𝐞 : ${tg}
        7. 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐧𝐮𝐦𝐛𝐞𝐫 : ${walink}
        8. 𝐓𝐡𝐮𝐦𝐛𝐧𝐚𝐢𝐥 𝐈𝐦𝐚𝐠𝐞 : ${thumbimage_url}
        9. 𝐁𝐨𝐭𝐧𝐚𝐦𝐞 : ${botname}
        10. 𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : ${ownername}
        11. 𝐎𝐰𝐧𝐞𝐫 𝐍𝐮𝐦𝐛𝐞𝐫 : ${ownernumber.split('@')[0]}
        12. 𝐖𝐞𝐛𝐬𝐢𝐭𝐞 : ${websitex}
        13. 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐆𝐫𝐨𝐮𝐩 : ${wagc}
        14. 𝐓𝐡𝐞𝐦𝐞 𝐞𝐦𝐨𝐣𝐢 : ${themeemoji}
        15. 𝐎𝐰𝐧𝐞𝐫 𝐫𝐞𝐚𝐜𝐭𝐢𝐨𝐧 : ${owner_react}
        16. 𝐑𝐞𝐩𝐨 𝐥𝐢𝐧𝐤 : ${botscript}
        17. 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐩𝐚𝐜𝐤 𝐧𝐚𝐦𝐞 : ${packname}
        18. 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐀𝐮𝐭𝐡𝐨𝐫 𝐧𝐚𝐦𝐞 : ${author}
        19. 𝐂𝐫𝐞𝐚𝐭𝐞𝐫 : ${creator}
        20. 𝐏𝐫𝐞𝐟𝐢𝐱 : ${xprefix}
        21. 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫 : ${premium}
        22. 𝐌𝐞𝐧𝐮 𝐭𝐲𝐩𝐞 : ${typemenu}
        23. 𝐑𝐞𝐩𝐥𝐲 𝐭𝐲𝐩𝐞 : ${typereply}
        24. 𝐒𝐡𝐨𝐰 𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 : ${welcome}
        25. 𝐀𝐧𝐭𝐢𝐜𝐚𝐥𝐥 : ${anticall}
        26. 𝐀𝐮𝐭𝐨 𝐬𝐭𝐚𝐭𝐮𝐬 𝐯𝐢𝐞𝐰 : ${autoswview}`
        
        let good_react =['😀','😃','😄','😁','😆','🥹','☺️','😊','😇','🙂','🙃','😉','😍','😌','🥰','😘','😗','😙','😚','😋','😛','😝','🤓','😎','🤩','🥳','🙂‍↕️','🥺','🤗','🤔','🫣','🤭','🫢','🫡','🤫','🫠','🤠','😺','💜','❤️','💚','🖤','♥️','🤎','❤️‍🩹','❣','💕','💝','🫀','💖','💗','❤️‍🔥','💜','💌'] //sample reactions
        let emoji = good_react[Math.floor(Math.random() * good_react.length)] //select anyone emoji from the above list randomly
            XeonBotInc.sendMessage(from,
              {
                text : variables,
                contextInfo:
                {
                  externalAdReply:
                  {
                    showAdAttribution: true,
                    title: `Hello ${pushname} ${emoji}\nHere Are All The Variables Of This BOT`,
                    thumbnail: fs.readFileSync('./XeonMedia/theme/thumb.png'),
                    sourceUrl: fbprofile,
                    mediaType: 1,
                    renderLargerThumbnail : true
                  }
                }
              },{quoted: m}
            )
              }
              break
              case 'money':{
                    
                    if (args.length < 1) return replygcxeon('Ammount?')
                      let mony = args[0]
                    money = mony*1000
                      XeonBotInc.relayMessage(from,  {
                         requestPaymentMessage: {
                            currencyCodeIso4217: 'INR',
                            amount1000: money,
                            requestFrom: m.sender,
                            noteMessage: {
                               extendedTextMessage: {
                                  text: `Money Request Message Of Rs. ${mony} `,
                                  
                               }
                            }
                         }
                      }, {quoted :m})
                      await XeonBotInc.sendMessage(m.chat, { react: { text: `💵`, key: m.key }})
                  }
                  break
                  
          case 'username': case 'u' :
            {
              await XeonBotInc.sendMessage(m.chat, { react: { text: `⁉️`, key: m.key }})
              let user= m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
              let username = global.db.data.users[user].nick
              let ppuser
          try {
            ppuser = await XeonBotInc.profilePictureUrl(user, 'image')
            } catch (err) {
            ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
               let XeonWlcm = await getBuffer(ppuser)
          
          let message =`your username is ${username}`
          await XeonBotInc.sendMessage(m.chat, { react: { text: `👤`, key: m.key }})
          XeonBotInc.sendMessage(m.chat,
            { text: message,
             contextInfo:{
                    externalAdReply: {showAdAttribution: true,
                    containsAutoReply: true,
                    title:  global.botname,
                    body: ownername,
                    previewType: "PHOTO",
                    thumbnailUrl: XeonWlcm,
                    thumbnail: '',
                    sourceUrl: websitex
                  }
                        }
            })
            }
            break
              case 'teddy':
                  await teddy()
                  break
        
                  case 'mywhatsapp': case 'mywa': { 
        
                    let waprof = { key: 
                      { fromMe: false, 
                        participant: m.sender, 
                        remoteJid:'status@broadcast' },
                       message: {extendedTextMessage: 
                                { text: 'Save my no. for more updates' }
                      }
                    }
                    let XeonWlcm = fs.readFileSync('./XeonMedia/theme/thumb.png')
                      let mywhatsapp = walink
                      await XeonBotInc.sendMessage(m.chat, { react: { text: `🎮`, key: m.key }})
                    XeonBotInc.sendMessage(m.chat,
                    { text: 'click on the context info to get redirected to my Whatsapp ',
                      contextInfo:{
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnail: XeonWlcm,
                            sourceUrl: mywhatsapp,
                            mediaType: 1,
                            renderLargerThumbnail: false,
                            mentions: taggrp 
        
                        }}}, {
                            quoted: waprof
                        }
                    )
              
                  }
                  break
        
                  case 'myfb':{ 
                    let fbprof = { key: 
                      { fromMe: false, 
                        participant: m.sender, 
                        remoteJid:'status@broadcast' },
                       message: {extendedTextMessage: 
                                { text: 'follow me on facebook' }
                      }
                    }
                    let XeonWlcm = fs.readFileSync('./XeonMedia/theme/thumb.png')
                    let face = fbprofile
                    await XeonBotInc.sendMessage(m.chat, { react: { text: `🎮`, key: m.key }})
                    XeonBotInc.sendMessage(m.chat,
                      { text: 'click on the context info to get redirected to my Facebook ',
                      contextInfo:{
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnail: fs.readFileSync('./XeonMedia/fbimg.jpg'),
                            sourceUrl: face,
                            mediaType: 1,
                            renderLargerThumbnail: false,
                            mentions: taggrp 
        
                        }}}, {
                            quoted: fbprof
                        }
                    )
              
                  }
                  break
                  case 'myig':{ 
                    let igprof = { key: 
                      { fromMe: false, 
                        participant: m.sender, 
                        remoteJid:'status@broadcast' },
                       message: {extendedTextMessage: 
                                { text: 'Follow me on Instagram' }
                      }
                    }
                    let XeonWlcm = fs.readFileSync('./XeonMedia/theme/thumb.png')
                    let myig = igprofile
                    await XeonBotInc.sendMessage(m.chat, { react: { text: `🎮`, key: m.key }})
                    XeonBotInc.sendMessage(m.chat,
                      { text: 'click on the context info to get redirected to my Instagram ',
                      contextInfo:{
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnail: fs.readFileSync('./XeonMedia/igimg.jpg'),
                            sourceUrl: myig,
                            mediaType: 1,
                            renderLargerThumbnail: false,
                            mentions: taggrp 
        
                        }}}, {
                            quoted: igprof
                        }
                    )
              
                  }
                  break 
                  case 'mygithub':{  
                     let gitprof = { key: 
                    { fromMe: false, 
                      participant: m.sender, 
                      remoteJid:'status@broadcast' },
                     message: {extendedTextMessage: 
                              { text: 'My github profile' }
                    }
                  }
                  let XeonWlcm = fs.readFileSync('./XeonMedia/theme/thumb.png')
                    let mygithub = gitprof
                    await XeonBotInc.sendMessage(m.chat, { react: { text: `🎮`, key: m.key }})
                    XeonBotInc.sendMessage(m.chat,
                      { text: 'click on the context info to get redirected to my GitHub ',
                      contextInfo:{
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnail: XeonWlcm,
                            sourceUrl: mygithub,
                            mediaType: 1,
                            renderLargerThumbnail: true,
                            mentions: taggrp 
        
                        }}}, {
                            quoted: gitprof
                        }
                    )
              
                  }
                  break
                  case 'mytelegram': case 'mytg':{ 
                    
                    let tgprof = { key: 
                      { fromMe: false, 
                        participant: m.sender, 
                        remoteJid:'status@broadcast' },
                       message: {extendedTextMessage: 
                                { text: 'Click to get my Telegram contact no.' }
                      }
                    }
                    let XeonWlcm = fs.readFileSync('./XeonMedia/theme/thumb.png')
                    let mytelegram = tg
                    
                    await XeonBotInc.sendMessage(m.chat, { react: { text: `🎮`, key: m.key }})
                    XeonBotInc.sendMessage(m.chat,
                      { text: 'click on the context info to get redirected to my Telegram ',
                      contextInfo:{
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnail: XeonWlcm,
                            sourceUrl: mytelegram,
                            mediaType: 2,
                            renderLargerThumbnail: false,
                            mentions: taggrp 
        
                        }}}, {
                            quoted: tgprof
                        }
                    )
              
                  }
                  break
                  case 'fakeaudio' : case 'fa': case 'fvn':
                    {
                      if (!text) return replygcxeon(`Example: ${prefix + command} audio length`)
                    
                        let audio_length =text.replace(/[^0-9]/g, '')  
                        XeonBotInc.sendMessage(m.chat, {
                        audio: fs.readFileSync('./XeonMedia/audio/Pritam.mp3'),
                        mimetype: 'audio/mpeg',
                        seconds: audio_length,
                        ptt: true //audio will be sent in voice message format
                    }, {
                        quoted: m
                    })
                    }
                    break
                  
            case 'fakedoc' :
              {
                if (!text) return replygcxeon(`Example: ${prefix + command} docname, size`)
                  if (!/,/.test(text)) return replygcxeon(`The data you provided is invalid!, Example: \n ${prefix + command} docname, size`)
                    let docname = q.split(",")[0]
                    let docsize = q.split(",")[1]
                    
                    let quotedoc = { key: 
                      { fromMe: false, 
                        participant:'0@s.whatsapp.net', 
                        remoteJid:'status@broadcast' },
                       message: {documentMessage: 
                                { title: `Send ${docname}`,}}
                    }
                    let key = {}
                    try {
                      key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
                     key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
                     key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
                      key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
                    } catch (e) {
                      console.error(e)
                    }
                    await XeonBotInc.sendMessage(m.chat, { react: { text: `📄`, key: m.key }})
                    XeonBotInc.sendMessage(m.chat, { delete: key })
                XeonBotInc.sendMessage(m.chat, {
                  
                document: {
                  url: thumbimage_url
               },
                  
                  mimetype: `application/ZIP`,
                  fileName: docname,
                  fileLength: docsize})
            }
        
        break
          case 'family': case 'fm' : {
              if (!m.isGroup) return XeonStickGroup()
              function getRandomPercentage() {
                  return Math.floor(Math.random() * 100) + 1;
              }
              await XeonBotInc.sendMessage(m.chat, { react: { text: `👥`, key: m.key }})
              let ps = groupMetadata.participants.map(v => v.id);
              let b,c,d,e,f,g,h,j,k,l,n,o,p,q,
              a= m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
              b= ps[Math.floor(Math.random() * ps.length)]
              c= ps[Math.floor(Math.random() * ps.length)]
              d= ps[Math.floor(Math.random() * ps.length)]
              e= ps[Math.floor(Math.random() * ps.length)]
              f= ps[Math.floor(Math.random() * ps.length)]
              g= ps[Math.floor(Math.random() * ps.length)]
              h= ps[Math.floor(Math.random() * ps.length)]
              i= ps[Math.floor(Math.random() * ps.length)]
              k= ps[Math.floor(Math.random() * ps.length)]
              l= ps[Math.floor(Math.random() * ps.length)]
              n= ps[Math.floor(Math.random() * ps.length)]
              o= ps[Math.floor(Math.random() * ps.length)]
              p= ps[Math.floor(Math.random() * ps.length)]
              q= ps[Math.floor(Math.random() * ps.length)]
          
          
                  b= ps[Math.floor(Math.random() * ps.length)]
              do {
              b= ps[Math.floor(Math.random() * ps.length)]
              } while (a==b);
          
              do {
               c= ps[Math.floor(Math.random() * ps.length)]
              } while (c==b||c==a);
          
              do{
               d= ps[Math.floor(Math.random() * ps.length)]
              } while (d==c||d==b||d==a);
          
              do{
               e= ps[Math.floor(Math.random() * ps.length)]
              } while (e==d||e==c||e==b||e==a);
          
              do{
               f= ps[Math.floor(Math.random() * ps.length)]
              } while (f==e||f==d||f==c||f==b||f==a);
               
              do{
               g= ps[Math.floor(Math.random() * ps.length)]
              } while (g==f||g==e||g==d||g==c||g==b||g==a);
          
              do { 
               h= ps[Math.floor(Math.random() * ps.length)]
              } while (h==a||h==b||h==c||h==d||h==f||h==g);
          
              do {
               i= ps[Math.floor(Math.random() * ps.length)]
              } while (i==a||i==b||i==c||i==d||i==e||i==f||i==g||i==h);
              do {
               j= ps[Math.floor(Math.random() * ps.length)]
              } while (j==a||j==b||j==c||j==d||j==e||j==f||j==g||j==h||j==i);
          
              do {
               k= ps[Math.floor(Math.random() * ps.length)]
              } while (k==a||k==b||k==c||k==d||k==e||k==f||k==g||k==h||k==i||k==j);
          
               do {
               l= ps[Math.floor(Math.random() * ps.length)]
               } while (l==a||l==b||l==c||l==d||l==e||l==f||l==g||l==h||l==i||l==j||l==k);
               
               do {
               n= ps[Math.floor(Math.random() * ps.length)]
              } while (n==a||n==b||n==c||n==d||n==e||n==f||n==g||n==h||n==i||n==j||n==k||n==l);
          
              do {
               o= ps[Math.floor(Math.random() * ps.length)]
              } while (o==a||o==b||o==c||o==d||o==e||o==f||o==g||o==h||o==i||o==j||o==k||o==l||o==n);
               p= ps[Math.floor(Math.random() * ps.length)]
               q= ps[Math.floor(Math.random() * ps.length)]
             
          
              const percentage = getRandomPercentage();
              xeonbody = `গোপন সূত্র থেকে পাওয়া @${a.split("@")[0]} চৌদ্দগুষ্টির বিবরণ:\n
          মা :‌-        @${b.split("@")[0]}🫃
          বাবা :-       @${c.split("@")[0]}💦
          ভাই/বোন :-  @${d.split("@")[0]}💆
          বর/বউ :-    @${e.split("@")[0]}👫
          Bf/Gf :-     @${f.split("@")[0]} 👩‍❤‍💋‍👨
          Ex :-        @${g.split("@")[0]} 🤡
          ঘটক :-       @${h.split("@")[0]} 😁
          শশুর :-      @${i.split("@")[0]}🧚
          শাশুরি:-      @${j.split("@")[0]} 🧚
          ক্রাশ :-      @${k.split("@")[0]} 🥵
          বাচ্চা:        ${percentage} টি \n
          1st বাচ্চা:    @${l.split("@")[0]}👶🏼
          
          @${a.split("@")[0]} এই হল তোমার আসল পরিচয় কাল সবাইকে নিয়ে নবান্ন দেখা কর।🤸‍♂`
          try {
                  ppuser = await XeonBotInc.profilePictureUrl(a, 'image')
              } catch (err) {
              ppuser = 'https://www.shutterstock.com/image-illustration/leather-background-jpeg-version-260nw-101031550.jpg'
              }
          XeonWlcm = await getBuffer(ppuser)
          await XeonBotInc.sendMessage(m.chat, { react: { text: `👩‍❤️‍👨`, key: m.key }})
          XeonBotInc.sendMessage(m.chat,
              { text: xeonbody,
                  image: XeonWlcm,
              contextInfo:{
              mentionedJid:[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],
              externalAdReply: {
                  showAdAttribution: true,
                  title: botname,
                  body: ownername,
                  thumbnail: XeonWlcm,
                  sourceUrl: websitex,
                  mediaType: 1,
                  renderLargerThumbnail: false,
              }}}, {
                  quoted: m
              })
           }
          break
          case 'fake' :case 'fakereply' :case 'fl' :{
            if (!text) return replygcxeon(`Example: ${prefix + command} message,sender,reply`)
              if (!/,/.test(text)) return replygcxeon(`The data you provided is invalid!, Example: \n ${prefix + command} message,sender,reply`)
                let message = q.split(",")[0]
                let sndr = q.split(",")[1]
                let tagsender = sndr.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                let fakesender = sndr.replace(/[^0-9]/g, '')
                let reply = q.split(",")[2]
        
                let fakereply = { key: 
                  { fromMe: false, 
                    participant: tagsender, 
                    remoteJid: tagsender },
                   message: {extendedTextMessage: 
                            { text: message}
                  }
                }
                let key = {}
                try {
                  key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
                 key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
                 key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
                  key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
                } catch (e) {
                  console.error(e)
                }
                XeonBotInc.sendMessage(m.chat, { delete: key })
                XeonBotInc.sendMessage(m.chat, {
                  text: reply,
                },{quoted:fakereply},
              )
        
          }
            break
            
            case 'fakepay':{
              if (!text) return replygcxeon(`Example: ${prefix + command} requester,ammount,reaction`)
                if (!/,/.test(text)) return replygcxeon(`The data you provided is invalid!, Example: \n ${prefix + command} requester,ammount,requested from,reaction`)
                  
                  let requester = q.split(",")[0]
                  let tagrequester = requester.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        
                  let ammount = q.split(",")[1]
                  let trueammount = ammount.replace(/[^0-9]/g, '')
                  let realammount = trueammount*1000
        
                  
        
                  let replymsg = q.split(",")[2]
                  let tagtext = `Payment Request Message of Rs. ${trueammount}`
        
              
          
                  let fpay = { 
                    key: 
                    { 
                       remoteJid: tagrequester, 
                       fromMe: false, 
                       id:global.botname, 
                       participant: tagrequester}, 
                       message: { requestPaymentMessage: 
                                   { currencyCodeIso4217: "INR", 
                                   amount1000: realammount, 
                                   requestFrom: tagrequester, 
                                   noteMessage: { 
                                      extendedTextMessage: { 
                                         text: tagtext
                                        
                                         }
                                      }, 
                                         expiryTimestamp: 999999999, 
                                         amount: { value: 91929291929, 
                                         offset: 1000, 
                                         currencyCode: "USD"
                                                  }
                                      }
                                }
                          }
                  let key = {}
                  try {
                    key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
                   key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
                   key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
                    key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
                  } catch (e) {
                    console.error(e)
                  }
                  
                  XeonBotInc.sendMessage(m.chat, {
                    text: replymsg,
                    mentionedJid: [tagrequester],
                  },{quoted:fpay},
                )
          
            }
            break
            case 'fakevnq': case 'fvnq':{
              if (!text) return replygcxeon(`Example: ${prefix + command} sender,time in second,reply`)
                if (!/,/.test(text)) return replygcxeon(`The data you provided is invalid!, Example: \n ${prefix + command}  sender,time,reply `)
                  
                  let sender = q.split(",")[0]
                  let tagsender = sender.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        
                  let vntime = q.split(",")[1]
                  let reply = q.split(",")[2]
              let fvn = 
              {key: 
              {participant: tagsender, 
              ...(m.chat ? 
                { remoteJid: tagsender } : {})},
              message: { "audioMessage": 
              {"mimetype":"audio/ogg; codecs=opus",
              "seconds":vntime,
              "ptt": 
              "true"}
              } 
              } 
              let key = {}
              try {
                key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
               key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
               key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
                key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
              } catch (e) {
                console.error(e)
              }
              
              XeonBotInc.sendMessage(m.chat, { delete: key })
              XeonBotInc.sendMessage(m.chat, {
                text: reply,
              },{quoted:fvn},
            )
        
        
            }
            break
            case 'fakevid':{
              const fvideo = 
              {key: 
              { fromMe: false,
              participant: `0@s.whatsapp.net`,
               ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },
               message: { "videoMessage": 
               { "title":botname, 
               "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 
               'jpegThumbnail': thumb}
               }
               }
               let reply = 'hello world'
        
               XeonBotInc.sendMessage(m.chat, {
                text: reply,
              },{quoted:fvn},
            )
            }
            break
          case 'familymembers': case 'family2' : {
              if (!m.isGroup) return XeonStickGroup()
              function getRandomPercentage() {
                  return Math.floor(Math.random() * 100) + 1;
              }
              let ps = groupMetadata.participants.map(v => v.id);
              let b,c,d,e,f,g,h,j,k,l,n,o,p,q,
              a= m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
              b= ps[Math.floor(Math.random() * ps.length)]
              c= ps[Math.floor(Math.random() * ps.length)]
              d= ps[Math.floor(Math.random() * ps.length)]
              e= ps[Math.floor(Math.random() * ps.length)]
              f= ps[Math.floor(Math.random() * ps.length)]
              g= ps[Math.floor(Math.random() * ps.length)]
              h= ps[Math.floor(Math.random() * ps.length)]
              i= ps[Math.floor(Math.random() * ps.length)]
              k= ps[Math.floor(Math.random() * ps.length)]
              l= ps[Math.floor(Math.random() * ps.length)]
              n= ps[Math.floor(Math.random() * ps.length)]
              o= ps[Math.floor(Math.random() * ps.length)]
              p= ps[Math.floor(Math.random() * ps.length)]
              q= ps[Math.floor(Math.random() * ps.length)]
          
          
                  b= ps[Math.floor(Math.random() * ps.length)]
              do {
              b= ps[Math.floor(Math.random() * ps.length)]
              } while (a==b);
          
              do {
               c= ps[Math.floor(Math.random() * ps.length)]
              } while (c==b||c==a);
          
              do{
               d= ps[Math.floor(Math.random() * ps.length)]
              } while (d==c||d==b||d==a);
          
              do{
               e= ps[Math.floor(Math.random() * ps.length)]
              } while (e==d||e==c||e==b||e==a);
          
              do{
               f= ps[Math.floor(Math.random() * ps.length)]
              } while (f==e||f==d||f==c||f==b||f==a);
               
              do{
               g= ps[Math.floor(Math.random() * ps.length)]
              } while (g==f||g==e||g==d||g==c||g==b||g==a);
          
              do { 
               h= ps[Math.floor(Math.random() * ps.length)]
              } while (h==a||h==b||h==c||h==d||h==f||h==g);
          
              do {
               i= ps[Math.floor(Math.random() * ps.length)]
              } while (i==a||i==b||i==c||i==d||i==e||i==f||i==g||i==h);
              do {
               j= ps[Math.floor(Math.random() * ps.length)]
              } while (j==a||j==b||j==c||j==d||j==e||j==f||j==g||j==h||j==i);
          
              do {
               k= ps[Math.floor(Math.random() * ps.length)]
              } while (k==a||k==b||k==c||k==d||k==e||k==f||k==g||k==h||k==i||k==j);
          
               do {
               l= ps[Math.floor(Math.random() * ps.length)]
               } while (l==a||l==b||l==c||l==d||l==e||l==f||l==g||l==h||l==i||l==j||l==k);
               
               do {
               n= ps[Math.floor(Math.random() * ps.length)]
              } while (n==a||n==b||n==c||n==d||n==e||n==f||n==g||n==h||n==i||n==j||n==k||n==l);
          
              do {
               o= ps[Math.floor(Math.random() * ps.length)]
              } while (o==a||o==b||o==c||o==d||o==e||o==f||o==g||o==h||o==i||o==j||o==k||o==l||o==n);
               p= ps[Math.floor(Math.random() * ps.length)]
               q= ps[Math.floor(Math.random() * ps.length)]
             
          
              const percentage = getRandomPercentage();
              maa=XeonBotInc.getName(a),
              baba=XeonBotInc.getName(b),
              vai=XeonBotInc.getName(c),
              bou=XeonBotInc.getName(d),
              bf=XeonBotInc.getName(e),
              bariwala=XeonBotInc.getName(f),
              ex=XeonBotInc.getName(j),
              sosur=XeonBotInc.getName(g),
              sasuri=XeonBotInc.getName(h),
              crush=XeonBotInc.getName(i),
          
              xeonbody = `গোপন সূত্র থেকে পাওয়া @${a.split("@")[0]} চৌদ্দগুষ্টির বিবরণ:\n
          মা :‌-        ${maa}🫃
          বাবা :-       ${baba}💦
          ভাই/বোন :-  ${vai}💆
          বর/বউ :-    ${bou}👫
          Bf/Gf :-     ${bf} 👩‍❤‍💋‍👨
          Ex :-        ${ex} 🤡
          বাড়িওয়ালা :-  ${bariwala} 🏟
          শশুর :-      ${sosur}🧚
          শাশুরি:-      ${sasuri} 🧚
          ক্রাশ :-      ${crush} 🥵
          বাচ্চা:        ${percentage} টি \n
          @${a.split("@")[0]} এই হল তোমার আসল পরিচয় কাল সবাইকে নিয়ে নবান্ন দেখা কর।🤸‍♂`
          try {
                  ppuser = await XeonBotInc.profilePictureUrl(a, 'image')
              } catch (err) {
              ppuser = 'https://www.shutterstock.com/image-illustration/leather-background-jpeg-version-260nw-101031550.jpg'
              }
          XeonWlcm = await getBuffer(ppuser)
          
          XeonBotInc.sendMessage(m.chat,
              { text: xeonbody,
                  image: XeonWlcm,
              contextInfo:{
              mentionedJid:[a],
              externalAdReply: {
                  showAdAttribution: true,
                  title: botname,
                  body: ownername,
                  thumbnail: XeonWlcm,
                  sourceUrl: websitex,
                  mediaType: 1,
              }}}, {
                  quoted: m
              })
           }
          break
          case 'upp': case 'profpic': {
            await XeonBotInc.sendMessage(m.chat, { react: { text: `⁉️`, key: m.key }})
                  let target_profpic = m.mentionedJid[0] ? m.mentionedJid[0] : text.replace(/[^0-9]/g, '')+`@s.whatsapp.net`
                  let ppuser 
                  let XeonWlcm
        
                  try {
                  ppuser = await XeonBotInc.profilePictureUrl(target_profpic, 'image')
                  XeonWlcm = await getBuffer(ppuser)
                  } catch (err) {
                    ppuser = 'https://www.shutterstock.com/image-illustration/leather-background-jpeg-version-260nw-101031550.jpg'
                    XeonWlcm = await getBuffer(ppuser)
                  }
                  let username =global.db.data.users[user].nick
                  let dpuser = `here is ${username}'s profile picture`
                  await XeonBotInc.sendMessage(m.chat, { react: { text: `👤`, key: m.key }})
        
                  XeonBotInc.sendMessage(m.chat, {
                      image: XeonWlcm,
                      caption: dpuser,
                      
                  }, {
                      quoted: m
                  })
        await XeonBotInc.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
        
          }
              break
        
        
                   case 'groupowner': {
                              XeonBotInc.sendMessage(m.chat,
                              { text: ` This Group was Created by @${groupOwner.split("@")[0]}👑`,
                              contextInfo:{
                              mentionedJid:[groupOwner],
                              forwardingScore: 9999999,
                              isForwarded: true, 
                              "externalAdReply": {
                              "showAdAttribution": true,
                              "containsAutoReply": true,
                              "title": ` ${global.botname}`,
                              "body": `${ownername}`,
                              "previewType": "PHOTO",
                              "thumbnailUrl": ``,
                              "thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
                              "sourceUrl": `${websitex}`}}},
                              { quoted: m})        
                                          }
              break
              case 'rvo': case 'vv':{
                if (!m.quoted) return replygcxeon(`Reply to view once message`)
                if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcxeon(`This is not a view once message`)
                  let msg = m.quoted.message
                  let type = Object.keys(msg)[0]
                  let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
                  let buffer = Buffer.from([])
                  for await (const chunk of media) {
                      buffer = Buffer.concat([buffer, chunk])
                  }
                  if (/video/.test(type)) {
                      return XeonBotInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
                  } else if (/image/.test(type)) {
                      return XeonBotInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
                  }
              }
              break
              case 'tagm':
                if (!m.isGroup) return XeonStickGroup()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!isAdmins) return replygcxeon(mess.admin)
                if (!m.quoted) return replygcxeon(`Reply media with caption ${prefix + command}`)
                XeonBotInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break

            case 'intro' : case 'hi': case 'hello': case 'hii':
              {
          await introduction ()
              }
              break
                case 'relay':
                if (!isPremium) return replygcxeon(mess.premium)
                   let message = q ? q : ''
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
                            title: message
                        }
                    }, {})
                    
case 'soulmate': {
  if (!m.isGroup) return XeonStickGroup()
  let member = participants.map(u => u.id)
  let me = m.sender
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let user= m.sender 
  let username =XeonBotInc.getName(user)

  let cple = { key: 
    { fromMe: false, 
      participant: m.sender, 
      remoteJid: m.sender },
     message: {extendedTextMessage: 
              { text: ` ${username} Here is your soulmate\nEber taratari biyeta kore ne`}
    }
  }

  let ps = groupMetadata.participants.map(v => v.id);
  
  do {
    jodoh= ps[Math.floor(Math.random() * ps.length)]
    } while (jodoh==me);

    let soulmsg = ` @${me.split('@')[0]}  👫Your Soulmate is  *@${jodoh.split('@')[0]}*  ❤️`

    let msg = generateWAMessageFromContent(from, {
      viewOnceMessage: {
        message: {
            "messageContextInfo": {
              "deviceListMetadata": {},
              "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: soulmsg
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: botname
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                     
                      title: ``,
                      gifPlayback: true,
                      subtitle: ownername,
                      hasMediaAttachment: false  
                    }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    "name": "quick_reply",
                    "buttonParamsJson": `{"display_text":"Try Again","id":"${prefix}soulmate"}`
                  },
                  {
                    "name": "quick_reply",
                    "buttonParamsJson": `{"display_text":"Biye korbo 🥳","id":"null"}`
                  },
               ]
             
              }),
              contextInfo: {
                mentionedJid: [jodoh,me], 
                forwardingScore: 9,
                isForwarded: false,

              
              }
            })
        }
      }
    },{
      quoted: cple,
    })
    
    await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    }, )
    
    }
  
  break

  case 'congratulations': 
    let reply  = `Dujoner biye dewar babostha kor🎷🎺`

XeonBotInc.sendMessage(m.chat,
{ text: reply,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${websitex}`}}},
{ quoted: m})        
    
    break
case 'husband':
{
if (!m.isGroup) return XeonStickGroup()
    let member = participants.map(u => u.id)
let husband = member[Math.floor(Math.random() * member.length)]
let wife= m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

let ps = groupMetadata.participants.map(v => v.id);
do {
husband= ps[Math.floor(Math.random() * ps.length)]
} while (husband==wife);

function RandomPercentage() {
  return Math.floor(Math.random() * 110) + 1;
}

const percentage = RandomPercentage();
let cplemsg;

if (percentage < 25) {
    cplemsg = `হাল ছেড়ো না বন্ধু একদিন পটবেই 🙃.`;
} else if (percentage < 50) {
   cplemsg  = `দুজনকে ভালো মানাবে কিন্তু😁.`;
} else if (percentage < 75) {
   cplemsg  = `বিয়ের সানাই বাজার অপেক্ষা 😗😆`;
} else if (percentage < 90) {
   cplemsg  = `তোমরা তো সাক্ষাৎ শিব-পার্বতী 🙏🏻`;
} else if (percentage < 100) {
   cplemsg  = `রূপশ্রীর পঁচিশ হাজার টাকা ঢুকে গেল... 🙆🏻🎶🎵`;
} else if (percentage < 110) {
   cplemsg  = `কাল দুজনে নবান্নে দেখা করিস, পিসি নিজে মন্তর পড়ে বিয়ে দেবে 🫂`;
} else {
   cplemsg  = `Congratulations, your ${percentage}% 💖🍻`;
}

let mesg =` 
⚔️ᴄʜᴇᴇᴍs ʙᴏᴛ ʜᴜsʙᴀɴᴅ ᴘʀᴇᴅɪᴄᴛᴏʀ⚔️

✯──────────✯──────────✯
@${wife.split('@')[0]}❤️ \n     your new husband is   👉 *@${husband.split('@')[0]}* 👈
✯──────────✯──────────✯

> _ʏᴏᴜʀ ʀᴇʟᴀᴛɪᴏɴsʜɪᴘ ᴘʀᴏʙᴀʙɪʟɪᴛʏ:_ *${percentage}%* 
> _ᴘʀᴇᴅɪᴄᴛɪᴏɴ_ : *${cplemsg}*`
let tagwife = wife.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

let hsbnd = { key: 
{ fromMe: false, 
participant: tagwife, 
remoteJid: tagwife },
message: {extendedTextMessage: 
  { text: `Patro chai 🥺 \nBiye korbo 🫠`}
}
}
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
  message: {
      "messageContextInfo": {
        "deviceListMetadata": {},
        "deviceListMetadataVersion": 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: mesg,
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: `\n ${ownername}`
        }),
        header: proto.Message.InteractiveMessage.Header.create({
              
                title: ``,
                gifPlayback: true,
                subtitle: ownername,
                hasMediaAttachment: false,
              
              }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"NEXT","id":"${prefix}husband ${wife}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"CONGRATULATIONS 🥳🎈","id":"${prefix}congratulations"}`
              },
            
         ]
       
        }),
        contextInfo: {  
                mentionedJid: [husband,tagwife], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
           
              }
      })
  }
}
}, {quoted : hsbnd})

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})




}
break
case 'wife':
{
if (!m.isGroup) return XeonStickGroup()
    let member = participants.map(u => u.id)
let wife = member[Math.floor(Math.random() * member.length)]
let husband= m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

let ps = groupMetadata.participants.map(v => v.id);
do {
wife= ps[Math.floor(Math.random() * ps.length)]
} while (husband==wife);
function RandomPercentage() {
  return Math.floor(Math.random() * 110) + 1;
}

const percentage = RandomPercentage();
let cplemsg;

if (percentage < 25) {
    cplemsg = `হাল ছেড়ো না বন্ধু একদিন পটবেই 🙃.`;
} else if (percentage < 50) {
   cplemsg  = `দুজনকে ভালো মানাবে কিন্তু😁.`;
} else if (percentage < 75) {
   cplemsg  = `বিয়ের সানাই বাজার অপেক্ষা 😗😆`;
} else if (percentage < 90) {
   cplemsg  = `তোমরা তো সাক্ষাৎ শিব-পার্বতী 🙏🏻`;
} else if (percentage < 100) {
   cplemsg  = `রূপশ্রীর পঁচিশ হাজার টাকা ঢুকে গেল... 🙆🏻🎶🎵`;
} else if (percentage < 110) {
   cplemsg  = `কাল দুজনে নবান্নে দেখা করিস, পিসি নিজে মন্তর পড়ে বিয়ে দেবে 🫂`;
} else {
   cplemsg  = `Congratulations, your ${percentage}% 💖🍻`;
}


let mesg =`
      ⚔️ᴄʜᴇᴇᴍs ʙᴏᴛ ᴡɪғᴇ ᴘʀᴇᴅɪᴄᴛᴏʀ⚔️

✯───────────✯───────────✯
@${husband.split('@')[0]}❤️ \n     your new wife is   👉 *@${wife.split('@')[0]}* 👈
✯───────────✯───────────✯

> _ʏᴏᴜʀ ʀᴇʟᴀᴛɪᴏɴsʜɪᴘ ᴘʀᴏʙᴀʙɪʟɪᴛʏ:_ *${percentage}%* 
> _ᴘʀᴇᴅɪᴄᴛɪᴏɴ_ : *${cplemsg}*`


let taghusband = husband.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

let hsbnd = { key: 
{ fromMe: false, 
participant: taghusband, 
remoteJid: taghusband },
message: {extendedTextMessage: 
  { text: `Patri chai 🥺 \nBiye korbo 🫠`}
}
}

let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
  message: {
      "messageContextInfo": {
        "deviceListMetadata": {},
        "deviceListMetadataVersion": 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: mesg
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: `\n ${ownername}`                }),
        header: proto.Message.InteractiveMessage.Header.create({
              
                title: ``,
                gifPlayback: true,
                subtitle: ownername,
                hasMediaAttachment: false  
              }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"NEXT","id":"${prefix}wife ${husband}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"CONGRATULATIONS 🥳🎈","id":"${prefix}congratulations"}`
              },
            
         ]
       
        }),
        contextInfo: {  
                mentionedJid: [wife,taghusband], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
           
              }
      })
  }
}
},{
quoted: hsbnd,
})

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
}, )

break
}
case 'buttons' : case 'button':
  {
    const slides = [
      
      [
        'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png', // Image URL
        '', // Title
        `Susbcribe Developer's YouTube Channel To Get Updates`, // Body message
        botname, // Footer message
        'Ping', // Button display text
        `${prefix}ping`, // Command (URL in this case)
        'quick_reply', // Button type
        'https://youtube.com/@dgxeon' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1024px-Telegram_2019_Logo.svg.png', // Image URL
        '', // Title
        `Susbcribe Developer's Telegram Channel To Get Updates`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'http://t.me/xeonbotinc', // Command (URL in this case)
        'cta_url', // Button type
        'http://t.me/xeonbotinc' // URL (used in image generation)
    ], 


    

];

let user=m.sender
let username =XeonBotInc.getName(user)
let qtmsg = `Hello ${username}🫠🤗\nHere is the list of all features of this BOT👇`
let mquote = { key: 
  { fromMe: false, 
    participant: `${m.sender}`,
     remoteJid:  'status@broadcast' }, 
     message: 
        {extendedTextMessage: 
              { text: qtmsg}}}

              const sendSlide = async (jid, title, message, footer, slides) => {
                const cards = slides.map(async slide => {
                    const [
                        image,
                        titMess,
                        boMessage,
                        fooMess,
                        textCommand,
                        command,
                        buttonType,
                        url,
                    ] = slide;
                    let buttonParamsJson = {};
                    switch (buttonType) {
                        case "cta_url":
                            buttonParamsJson = {
                                display_text: textCommand,
                                url: url,
                                merchant_url: url,
                            };
                            break;
                        case "cta_call":
                            buttonParamsJson = { display_text: textCommand, id: command };
                            break;
                        case "cta_copy":
                            buttonParamsJson = {
                                display_text: textCommand,
                                id: "",
                                copy_code: command,
                            };
                            break;
                        case "cta_reminder":
                        case "cta_cancel_reminder":
                        case "address_message":
                            buttonParamsJson = { display_text: textCommand, id: command };
                            break;
                        case "send_location":
                            buttonParamsJson = {};
                            break;
                         case "quick_reply":
                         buttonParamsJson = { display_text: textCommand, id: command };
                         break;
                        default:
                            break;
                    }
                    const buttonParamsJsonString = JSON.stringify(buttonParamsJson);
                    return {
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: boMessage,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: fooMess,
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: titMess,
                            hasMediaAttachment: true,
                            ...(await prepareWAMessageMedia(
                                { image: { url: image } },
                                { upload: XeonBotInc.waUploadToServer },
                            )),
                        }),
                        nativeFlowMessage:
                            proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                buttons: [
                                    {
                                        name: buttonType,
                                        buttonParamsJson: buttonParamsJsonString,
                                    },
                                ],
                            }),
                    };
                });
                
                const msg = generateWAMessageFromContent(
                    jid,
                    {
                        viewOnceMessage: {
                            message: {
                                messageContextInfo: {
                                    deviceListMetadata: {},
                                    deviceListMetadataVersion: 2,
                                },
                                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                    body: proto.Message.InteractiveMessage.Body.fromObject({
                                        text: message,
                                    }),
                                    footer: proto.Message.InteractiveMessage.Footer.fromObject({
                                        text: footer,
                                    }),
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: title,
                                        subtitle: title,
                                        hasMediaAttachment: false,
                                    }),
                                    carouselMessage:
                                        proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                            cards: await Promise.all(cards),
                                        }),
                                        contextInfo: {
                              mentionedJid: [m.sender], 
                              forwardingScore: 999,
                              isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                              newsletterJid: '120363222395675670@newsletter',
                              newsletterName: ownername,
                              serverMessageId: 143
                            }
                            }
                                }),
                            },
                        },
                    },
                    { quoted: m},
                );
                await XeonBotInc.relayMessage(jid, msg.message, {
                    messageId: msg.key.id,
                });
            };
            // Call the function with example parameters
            sendSlide(m.chat, 'removed you', ownername, botname, slides);
            }
  break 
  case 'vatar': case 'vatari': {
    if (!m.isGroup) return XeonStickGroup()
        if (!m.isGroup) return XeonStickGroup()
        let member = participants.map(u => u.id)
        let orang = member[Math.floor(Math.random() * member.length)]
        let jodoh = member[Math.floor(Math.random() * member.length)]
        let baby = member[Math.floor(Math.random() * member.length)]
        let me = m.sender
    
        function RandomPercentage() {
          return Math.floor(Math.random() * 110) + 1;
        }
    
        const percentage = RandomPercentage();
        let cplemsg;
    
        if (percentage < 25) {
            cplemsg = `হাল ছেড়ো না বন্ধু একদিন পটবেই 🙃.`;
        } else if (percentage < 50) {
           cplemsg  = `দুজনকে ভালো মানাবে কিন্তু😁.`;
        } else if (percentage < 75) {
           cplemsg  = `বিয়ের সানাই বাজার অপেক্ষা 😗😆`;
        } else if (percentage < 90) {
           cplemsg  = `তোমরা তো সাক্ষাৎ শিব-পার্বতী 🙏🏻`;
        } else if (percentage < 100) {
           cplemsg  = `রূপশ্রীর পঁচিশ হাজার টাকা ঢুকে গেল... 🙆🏻🎶🎵`;
        } else if (percentage < 110) {
           cplemsg  = `কাল দুজনে নবান্নে দেখা করিস, পিসি নিজে মন্তর পড়ে বিয়ে দেবে 🫂`;
        } else {
           cplemsg  = `Congratulations, your ${percentage}% 💖🍻`;
        }
    
        
        let ps = groupMetadata.participants.map(v => v.id);
    
        do {
          jodoh= ps[Math.floor(Math.random() * ps.length)]
          } while (jodoh==orang);
        do {
            jodoh= ps[Math.floor(Math.random() * ps.length)]
          } while (jodoh==me);
    
        do {
            orang= ps[Math.floor(Math.random() * ps.length)]
          } while (me==orang);
    
          
       let xyz = `
       
       ✯─────────✯─────────✯
       গ্রুপের নতুন বর - বৌ 😘
    👉 @${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]} 👈
    ✯─────────✯─────────✯
    
    > _ʏᴏᴜʀ ʀᴇʟᴀᴛɪᴏɴsʜɪᴘ ᴘʀᴏʙᴀʙɪʟɪᴛʏ:_ *${percentage}%* 
    > _ᴘʀᴇᴅɪᴄᴛɪᴏɴ_ : *${cplemsg}*
    > Name Of First Baby: @${baby.split('@')[0]}`
    
      
    let downmsg = `> _Checked by @${me.split('@')[0]}_ `
    
    let msg = generateWAMessageFromContent(from, {
    viewOnceMessage: {
    message: {
    "messageContextInfo": {
    "deviceListMetadata": {},
    "deviceListMetadataVersion": 2
    },
    interactiveMessage: proto.Message.InteractiveMessage.create({
    body: proto.Message.InteractiveMessage.Body.create({
    text: xyz
    }),
    footer: proto.Message.InteractiveMessage.Footer.create({
    text: downmsg
    }),
    header: proto.Message.InteractiveMessage.Header.create({
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false  
        }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
      {
        "name": "quick_reply",
        "buttonParamsJson": `{"display_text":"Congratulations 🥳","id":"Biye ta kor taratri🎷🎺"}`
      },
      {
        "name": "quick_reply",
        "buttonParamsJson": `{"display_text":" Try Again","id":"${prefix}couple"}`
      }
    ],
    
    }),
    contextInfo: {
    mentionedJid: [orang,jodoh,me,baby], 
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid: '120363222395675670@newsletter',
    newsletterName: ownername,
    serverMessageId: 143
    }
    }
    
    })
    }
    }
    }, {quoted : m})
    await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
    })
    
      }
    
    
        break
          
          
          
                          }



          }catch (err) {
                    console.log(util.format(err))
                    let e = String(err)
                    let ersndr = m.sender
                    let grpname
                    if(m.key.remoteJid.endsWith('@g.us'))
                    {
                      const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
                      grpname= `Group Chat \n🔴 *GROUP NAME* :  ${groupMetadata.subject}`
                    }
                    else{
                      grpname = `Private Chat`
                    }
            XeonBotInc.sendMessage("1234567890@s.whatsapp.net", { text: "`ERROR DETECTED` ⚠️ \n✯─────────────✯─────────────✯\n🔴 ERROR TYPE: \n" +`*${util.format(e)}*\n✯─────────────✯─────────────✯\n` + `🔴 *FROM*: @${ersndr.split('@')[0]} \n🔴 *IN*: ${grpname}\n✯─────────────✯─────────────✯`, 
            contextInfo:{
             mentionedJid: [ersndr],
            forwardingScore: 9999999, 
            isForwarded: true
            }},{quoted:m}, {ephemeralExpiration: 10})
            if (e.includes("conflict")) return
            if (e.includes("Cannot derive from empty media key")) return
            if (e.includes("not-authorized")) return
            if (e.includes("already-exists")) return
            if (e.includes("rate-overlimit")) return
            if (e.includes("Connection Closed")) return
            if (e.includes("Timed Out")) return
            if (e.includes("Value not found")) return
            if (e.includes("Socket connection timeout")) return
                }}
