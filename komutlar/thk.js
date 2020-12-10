const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    const embed = new Discord.MessageEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Bombanın Üzerine Numaramı Yazdım Patlamassa Görüşelim :wink: :flag_tr:**')
    .setImage(`https://media.tenor.com/images/f058ae9103ab60d81bd4c9a1e70ed99e/tenor.gif`)
    return message.channel.send(embed);
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ['thk'],
  permLevel: 0
};

exports.help = {
  name: 'thk',
  description: 'thk',
  usage: 'Bombanın Üzerine Numaramı Yazdım Patlamassa Görüşelim :wink: :flag_tr:**',
};