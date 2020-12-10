const Discord = require('discord.js')

exports.run = (client, message, args) => {
	try {
		const embed = new Discord.MessageEmbed()
			.addField(`Sunucuda Bulunan Roller`, message.guild.roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' | '))
			.setColor(0x00ffff)
			.setTimestamp()
		message.channel.send({embed})
	} catch (err) {
		const embed = new Discord.MessageEmbed()
			.addField(`Sunucuda Bulunan Roller`, 'Üzgünüm ama sunucunuzda ya çok fazla rol bulunuyor ya da hiç rol bulunmuyor. Bunları gösteremiyorum. Discord buna izin vermiyor.')
			.setColor(0x00ffff)
			.setTimestamp()
		message.channel.send({embed})
	}
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['roles'],
	permLevel: 2,
	kategori: 'kullanıcı'
}

exports.help = {
	name: 'bütünroller',
	description: 'Sunucuda bulunan rolleri gösterir.',
	usage: 'roller'
}
