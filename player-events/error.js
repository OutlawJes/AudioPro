module.exports = (client, error, message) => {

    switch (error) {
        case 'NotPlaying':
            message.channel.send(`<a:758028512933445714:775884542933860352> No se esta reproduciendo música en este servidor !`);
            break;
        case 'NotConnected':
            message.channel.send(`<a:758028512933445714:775884542933860352> No estas Conectado en un canal de voz !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`<a:758028512933445714:775884542933860352> No puedo unirme a su canal de voz, verifique mis permisos !`);
            break;
        default:
            message.channel.send(`<a:758028512933445714:775884542933860352> Algo salio mal ... Error : ${error}`);
    };

};
