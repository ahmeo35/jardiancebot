'Yazı Tura Komutu Komutlar Klasörüne Atın'
const Discord = require('discord.js');

var hd = [
    "Tura",
    "Yazı"
];

module.exports.run = async (bot, message, args) => {

   message.channel.send(message.author.toString() + " hadi bakalım: " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazıtura',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'yazıturaoyna'
};