exports.run = async (client, message) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    .setDescription(`Ping : **${client.ws.ping}ms** !`)
    .setColor(0x00FEF4)
    message.channel.send(embed)

};
