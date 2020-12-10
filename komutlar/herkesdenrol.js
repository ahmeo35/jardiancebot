//---Bu Kod komutlar klasörüne atılacak atılacaktır.
//CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //Sadista

const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('| Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  let rol = message.mentions.roles.first()
  if (!rol) return message.channel.send('Herkesten rol alabilmem için bir rol etiketle!')

  
   const embed = new Discord.MessageEmbed()
     .setDescription(`Herkesten ${rol} adlı rol alındı!`)
        .setColor(rol.hexColor)
   
   
   message.guild.members.cache.forEach(u => {
u.roles.remove(rol)
   })
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toplu-rol-al','herkestenrolal'],
    permLevel: 3
}

exports.help = {
    name: 'herkestenrolal',
    description: 'Herkesten rol alır.',
    usage: 'herkestenrolal @rol / rol-ismi'
}