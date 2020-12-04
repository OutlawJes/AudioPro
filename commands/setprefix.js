exports.run = async (client, message, args) => {
 const db = require("quick.db")
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('No tienes permsisos sufcientes para utilizar este comando.');

        if(!args[0]) return message.channel.send('Por favor Dime tu nuevo prefix');

        if(args[1]) return message.channel.send('El prefix\'No puede tener espacios');

        db.set(`prefix_${message.guild.id}`, args[0])

        message.channel.send(`Prefix Cambiado a **${args[0]}**`)
    }