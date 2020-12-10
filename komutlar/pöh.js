const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    const embed = new Discord.MessageEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Pöh geldi aç kapıyı!**')
    .setImage(`https://media1.tenor.com/images/7335a937642e049bd9fabad04d555068/tenor.gif?itemid=18399379`)
    return message.channel.send(embed);
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ['Pöh'],
  permLevel: 0
};

exports.help = {
  name: 'pöh',
  description: 'pöh',
  usage: 'Pöh Geldi aç kapıyı',
};
