const sound = (prefix, ownerBot, botName) => {
        return `
「 *Tukibot* 」

◪ *INFO*
  ❏ Prefix: 「  *  」
  ❏ Creator: Rosse
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *SOUND*
  │
  └─ ❏ ${prefix}tts`
}
exports.sound = sound
