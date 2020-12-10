const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam İçin Birşeyler Yazmalısın !')

  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
  
};

exports.help = {
  name: 'yazdır',
  description: '[Admin Komutu]',
  usage: 'yaz-bot [yazdırmak istediğiniz şey]'
};