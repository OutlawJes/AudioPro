exports.run = async (client, message) => {
    const Discord = require("discord.js")

    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> No estás en un canal de voz !`)
    .setColor(0xFF0000)
    if (!message.member.voice.channel) return message.channel.send(embed);


    const embedp = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> No hay música actualmente en reproducción !`)
    .setColor(0xFF0000)
    if (!client.player.getQueue(message)) return message.channel.send(embedp);

    client.player.shuffle(message);

    const embeds = new Discord.MessageEmbed()
    .setDescription(`<a:listo:774769282067595274> Cola shuffled **${client.player.getQueue(message).tracks.length}** canciones !`)
    .setColor(0x00FF2A)
    return message.channel.send(embeds);

};
