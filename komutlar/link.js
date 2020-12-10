const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    const embed = new Discord.MessageEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sosyal medya hesaplarımız;**')
    .addField(`Mta sunucu İP:213.142.149.216:22003`,`İyi Oyunlar :)`)
    .addField(`Discord Adresimiz:https://discord.gg/VDm3Q6JE`,`İyi Oyunlar :)`)  
    .addField(`Youtube Adresimiz:/Türkiyem Aras Gaming 2020`,`İyi Oyunlar :)`)   
    .addField(`İnstagram Adresimiz:@mtarasgaming`,`İyi Oyunlar :)`)     
    
    .setImage(`https://cdn.discordapp.com/attachments/776203231499780117/786199347393462292/130768789_2917798975213215_2025420915264387259_n1.jpg`)
    return message.channel.send(embed);
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ['fbı'],
  permLevel: 0
};

exports.help = {
  name: 'link',
  description: 'link',
  usage: '',
};