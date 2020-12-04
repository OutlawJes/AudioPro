exports.run = async (client, message) => {
  const Discord = require("discord.js")
const db = require("quick.db")
let prefix = await db.get(`prefix_${message.guild.id}`);
if(prefix === null) prefix = default_prefix;

    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> No estás en un canal de voz !`)
    .setColor(0xFF0000)
    if (!message.member.voice.channel) return message.channel.send(embed);

    const embeda = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> No hay música actualmente en reproducción !`)
    .setColor(0xFF0000)
    if (!client.player.getQueue(message)) return message.channel.send(embeda);

    const disabledEmoji = "<:disabled:784163355778613258>"
    const enabledEmoji = "<:enabled:784163355828289586>"

    const filtersStatuses = [[], []];

    Object.keys(client.filters).forEach((filterName) => {
        const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
        array.push(client.filters[filterName] + " : " + (client.player.getQueue(message).filters[filterName] ? enabledEmoji : disabledEmoji));
    });

    message.channel.send({
        embed: {
            color: '0x00FEF4',
            footer: { text: 'Audio Pro' },
            fields: [
                { name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
                { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
            ],
            timestamp: new Date(),
            description: `Lista de todos los filtros habilitados o deshabilitados.\nUsa \`${prefix}filter\` para añadir un filtro a la cancion.`,
        },
    });

};
