exports.run = async (client, message, args) => {
const Discord = require("discord.js")

    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> No estás en un canal de voz !`)
    .setColor(0xFF0000)
    if (!message.member.voice.channel) return message.channel.send(embed);

    const embedc = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> No hay música actualmente en reproducción !`)
    .setColor(0xFF0000)
    if (!client.player.getQueue(message)) return message.channel.send(embedc);

    const embedd = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> Especifique un filtro válido para habilitar o deshabilitar !`)
    .setColor(0xFF0000)
    if (!args[0]) return message.channel.send(embedd);

    const filterToUpdate = Object.values(client.filters).find((f) => f.toLowerCase() === args[0].toLowerCase());

    const embeda = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> Este filtro no existe !`)
    .setColor(0xFF0000)
    if (!filterToUpdate) return message.channel.send(embeda);

    const filterRealName = Object.keys(client.filters).find((f) => client.filters[f] === filterToUpdate);

    const queueFilters = client.player.getQueue(message).filters
    const filtersUpdated = {};
    filtersUpdated[filterRealName] = queueFilters[filterRealName] ? false : true;
    client.player.setFilters(message, filtersUpdated);

    const embedb = new Discord.MessageEmbed()
    .setTitle(`<a:loading:783911066865631232> Se esta añadiendo el filtro! Por favor Espera..`)
    .setColor(0xEE0303)
    if (filtersUpdated[filterRealName]) message.channel.send(embedb);
    else message.channel.send(`<a:loading:783911066865631232> Estoy ** desactivando ** el filtro de la música, por favor espere ... Nota: cuanto más tiempo se esté reproduciendo la música, más tardará.`);

};