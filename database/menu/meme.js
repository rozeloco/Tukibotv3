const meme = (prefix, botName, ownerName) => {
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
◪ *MEME*
  │
  ├─ ❏ ${prefix}meme
  └─ ❏ ${prefix}memeindo`
}
exports.meme = meme
