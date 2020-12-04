exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`<a:758028512933445714:775884542933860352> No estás en un canal de voz !`);

    if (!client.player.getQueue(message)) return message.channel.send(`<a:758028512933445714:775884542933860352> No hay música actualmente en reproducción !`);

    client.player.clearQueue(message);

    message.channel.send(`<a:758028512933445714:775884542933860352> La cola acaba de ser ** eliminada ** !`);

};
