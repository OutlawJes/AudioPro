const Discord = require("discord.js")
module.exports = (client, message, track) => {
const user = message.author.username

const embed = new Discord.MessageEmbed()
.setTitle("**<a:warrensong:774496826044579871> | Reproduciendo Cancion**")
.addField(`**Cancion**: `, `${track.title}`)
.addField("Pedida Por:", `${user}`)
.addField("Duracion:", track.duration)
.addField("Views:", track.views)
.setColor(0xEE0303)
.setFooter("Audio Pro", client.user.avatarURL())
.setThumbnail(track.thumbnail)
    message.channel.send(embed);

};