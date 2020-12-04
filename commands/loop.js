exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`<a:758028512933445714:775884542933860352> No estas en un canal de voz !`);

    if (!client.player.getQueue(message)) return message.channel.send(`<a:758028512933445714:775884542933860352> no hay musica escuchando ahora !`);

    const repeatMode = client.player.getQueue(message).repeatMode;

    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(`Repeat mode **disabled** !`);
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(`Repeat mode **enabled** !`);
    };

};
