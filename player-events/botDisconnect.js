module.exports = (client, message, queue) => {
const Discord = require("discord.js")
const embed = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> La música se detuvo porque me desconectaron del canal!`)
    .setColor(0xEE0303)
message.channel.send(embed)
};
