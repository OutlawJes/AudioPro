exports.run = async (client, message) => {
const { default_prefix } = require('../config/bot.json');
const Discord = require("discord.js")
const db = require("quick.db")
let prefix = await db.get(`prefix_${message.guild.id}`);
if(prefix === null) prefix = default_prefix;

const embed = new Discord.MessageEmbed()
.setAuthor("Panel Ayuda", "https://i.imgur.com/TL6matx.jpg")
.setDescription(`Para Usar filtros Usar, ${prefix}filter, Ejemplo : ${prefix}filter 8D.`)
.addField("Bot", "`ping`, `setprefix`")
.addField("Musica", '`play (p)`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`, `filter`, `filters`')
.addField("Filtros", '`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`')
.addField("Links", "[➜ Invite me](https://discord.com/oauth2/authorize?client_id=753787045591253033&scope=bot&permissions=2147483647) \r [➜ Support](https://discord.gg/Y6BjupHH5b)")
.setFooter("©️Audio Pro" )
.setThumbnail("https://i.imgur.com/mJQDKVc.png")

message.channel.send(embed)
};
