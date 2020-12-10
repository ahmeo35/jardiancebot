const Discord = require("discord.js");

exports.run = (client, message, args) => {
let kanal = message.member.voice.channel
let sayi = kanal.members.cache.size

    message.channel.send(`Bulunduğunuz ses kanalında şuanda ${sayi} kişi bulunmakta`)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['seslidekiüyeler', 's-sayı'],
    permLevel: 0
};

exports.help = {
    name: 'seslidekisayı',
    description: 'Seslide Kaç Kişi Olduğunu Söyler',
    usage: 'seslidekisayı'
};