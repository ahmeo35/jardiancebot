const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Bu Komutu Kullanmak İçin __Mesajları Yönet__ Yetkisinie Sahip Olmalısın**");
if(!args[0]) return message.channel.send("**:octagonal_sign: Lütfen Silinicek Mesaj Miktarını Yazın.!**");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} Adet Mesajı Uzaya Gönderdim 🚀`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'a!temizle <miktar>'
};