exports.run = async (client, message, args) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> No estás en un canal de voz !`)
    .setColor(0xFF0000)
    if (!message.member.voice.channel) return message.channel.send(embed);

    const embea = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> ¡No hay música actualmente en reproducción!`)
    .setColor(0xFF0000)
    if (!client.player.getQueue(message)) return message.channel.send(embea);


    const embedb = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> Por favor proporciona un numero !`)
    .setColor(0xFF0000)
    if (!args[0]) return message.channel.send(embedb);

    const embedc = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> Ingrese un número válido (entre 1 y 100) !`)
    .setColor(0xFF0000)
    if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) return message.channel.send(embedc);

    const embedd = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> por favor proporciona un numero valido !`)
    .setColor(0xFF0000)
    if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(embedd);

    client.player.setVolume(message, parseInt(args[0]));

    const embede = new Discord.MessageEmbed()
    .setDescription(`<a:listo:774769282067595274> Volumen Cambiado a **${args.join(" ")}%** !`)
    .setColor(0x00FF2A)
    message.channel.send(embede);

};
