import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `ɴᴏᴛ ғᴀᴍᴏᴜs ᴊᴜsᴛ ᴀʟᴏɴᴇ ʙᴏʏ`, `sandikurniawan12042004@gmail.com`, `🇮🇩 Indonesia`, `📍 https://github.com/NdyZz`, `👤 ᴏᴡɴᴇʀ Fikah-MD`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ`, `📵 ᴅᴏɴᴛ sᴘᴀᴍ/ᴄᴀʟʟ ᴍᴇ 😢`, `ɴᴏᴛʜɪɴɢ`, `🇮🇩 Indonesia`, `📍 https://github.com/NdyZz`, `ʜᴀɴʏᴀ ʙᴏᴛ ʙɪᴀsᴀ ʏᴀɴɢ ᴋᴀᴅᴀɴɢ sᴜᴋᴀ ᴇʀᴏʀ ☺`]
  ], fkontak)
  await conn.sendMessage(m.chat,{text: `ʜᴇʟʟᴏ @${m.sender.split(`@`)[0]} ᴛʜᴀᴛs ᴍʏ ᴏᴡɴᴇʀ ᴅᴏɴᴛ sᴘᴀᴍ ᴏʀ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʙʟᴏᴄᴋᴇᴅ`, mentions: [m.sender]}, {quoted:sentMsg})
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
