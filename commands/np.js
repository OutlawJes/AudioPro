exports.run = async (client, message) => {
    const Discord = require("discord.js")

    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> No estás en un canal de voz !`)
    .setColor(0xFF0000)
    if (!message.member.voice.channel) return message.channel.send(embed);

    const embeda = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> No hay Musica reproduciendo !`)
    .setColor(0xFF0000)
    if (!client.player.getQueue(message)) return message.channel.send(embeda);

    const track = await client.player.nowPlaying(message);
    const filters = [];

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
        if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
    });

    message.channel.send({
        embed: {
            color: '0x00FEF4',
            author: { name: track.title },
            footer: { text: 'Audio Pro' },
            fields: [
                { name: 'Canal', value: track.author, inline: true },
                { name: 'Pedida Por', value: track.requestedBy.username, inline: true },
                { name: 'De la Play List', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                { name: 'Views', value: track.views, inline: true },
                { name: 'Duracion', value: track.duration, inline: true },
                { name: 'Filtros Activados', value: filters.length, inline: true },

                { name: 'Progreso', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

};
