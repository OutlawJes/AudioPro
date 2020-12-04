exports.run = async (client, message, args) => {
  const { channel } = message.member.voice;
    const Discord = require("discord.js")
    const embedn = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> Nesesitas estar en un canal de voz !`)
    .setColor(0xFF0000)
    if (!message.member.voice.channel) return message.channel.send(embedn);

    const embedc = new Discord.MessageEmbed()
    .setDescription(`<a:758028512933445714:775884542933860352> Indique el título de una canción !`)
    .setColor(0xFF0000)

    if (!args[0]) return message.channel.send(embedc);

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
    };

      queueConstruct.connection = await channel.join();
      await queueConstruct.connection.voice.setSelfDeaf(true);
      client.player.play(message, args.join(" "));

};
