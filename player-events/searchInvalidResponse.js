module.exports = (client, message, query, tracks, content, collector) => {
   const Discord = require("discord.js")

   const embed = new Discord.MessageEmbed()
   .setDescription(`Tienes que seleccionar un numero valido **1** a **${tracks.length}** !`)
   .setColor(0xEE0303)
    message.channel.send(embed);

};