module.exports = (client, message, playlist) => {

  const Discord = require("discord.js")
  const embed = new Discord.MessageEmbed()
  .setDescription(`<a:warrensong:774496826044579871> ${playlist.title} añadido a la cola (**${playlist.items.length}** canciones) !`)
  .setColor(0xEE0303)
  message.channel.send(embed);

};