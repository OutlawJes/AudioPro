module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: '0xEE0303',
            author: { name: `Lista de Resultados ${query}` },
            footer: { text: 'Audio Pro Selecciona un Numero' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};