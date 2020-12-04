module.exports = (client, message, query) => {
const Discord = require("discord.js")
const embed = new Discord.MessageEmbed()
.setDescription(`<a:758028512933445714:775884542933860352> No se encontraron resultados en Youtube ${query} !`)
.setColor(0xEE0303)
    message.channel.send(embed);

};