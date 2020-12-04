module.exports = (client, message, query, tracks) => {

  const Discord = require("discord.js")
  const embed = new Discord.MessageEmbed()
  .setDescription(`<a:758028512933445714:775884542933860352> No proporcionó una respuesta válida ... Vuelva a enviar el comando!`)
  .setColor(0xEE0303)
  message.channel.send(embed);

};