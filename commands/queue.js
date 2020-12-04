exports.run = async (client, message) => {
    const Discord = require("discord.js")

    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> No estás en un canal de voz !`)
    .setColor(0xFF0000)
    if (!message.member.voice.channel) return message.channel.send(embed);

    const queue = client.player.getQueue(message);

    const embedq = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> No se están reproduciendo canciones actualmente !`)
    if (!client.player.getQueue(message)) return message.channel.send(embedq);

    message.channel.send(`**Server queue - ${message.guild.name} ${client.emotes.queue}**\Reproduciendo : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (Pedida Por : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `y **${queue.tracks.length - 5}** otras canciones...` : `En la Lista **${queue.tracks.length}** cancion(s)...`}`));

};
