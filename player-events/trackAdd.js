module.exports = (client, message, queue, track) => {
  const Discord = require("discord.js")
  const embed = new Discord.MessageEmbed()
  .setDescription(`<a:listo:774769282067595274> ${track.title} añadido a la cola!`)
  .setColor(0xEE0303)
    message.channel.send(embed);

};