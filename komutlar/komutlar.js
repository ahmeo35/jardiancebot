const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setAuthor(`Moderasyon Menüsü`, client.user.avatarURL())    
             .setThumbnail(client.user.avatarURL())
             .addField(`a!link ile sosyal medya adreslerimiz ve oyun İp'miz vardır.`,`Herkes Kullanabilir.`  ) // bunlar boş kalırsa hata verir) // bunlar boş kalırsa hata verir        
             .addField(`a!atam Yazdıgınızda atamızın rastgele gifini atar.`, `Herkes Kullanabilir.`) // bunlar boş kalırsa hata verir
             .addField(`a!ateşet (@kullanıcı) ile etiketlediginiz kişiye ateş eder.`, `Herkes Kullanabilir.`) // bunlar boş kalırsa hata verir
             .addField(`a!kralol Yazdıgınızda kral olursunuz.`, `Herkes Kullanabilir.`) // bunlar boş kalırsa hata verir
             .addField(`a!kullanıcıbilgi (@etiket) ile etiketlediginiz kişinin bilgilerini gösterir.`, `Herkes Kullanabilir.`) // bunlar boş kalırsa hata verir  
             .addField(`a!ping botun pingini gösterir(bot geç cevap veriyorsa bu komudu kullanıp botun pingine bakınız.`, `Herkes Kullanabilir.`) // bunlar boş kalırsa hata verir        
             .addField(`a!pöh Yazdıgınızda Polis Özel Harekat Gifi atar.`, `Herkes Kullanabilir.`) // bunlar boş kalırsa hata verir        
             .addField(`a!slot oyununu oynarsınız.`, `Herkes Kullanabilir.`) // bunlar boş kalırsa hata verir
             .addField(`a!yazıtura oyununu oynarsınız.`, `Herkes Kullanabilir.`) // bunlar boş kalırsa hata verir
             .addField(`a!şanslısayım şanslı sayınızı gösterir.`, `Herkes Kullanabilir.`) // bunlar boş kalırsa hata verir   
             .addField(`a!afk afk olursunuz birisi sizi etiketlediginde afk oldugunuzu söyler.`, `Herkes Kullanabilir.`) // bunlar boş kalırsa hata verir        
        
        
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL())
            
        return message.channel.send(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['k'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'komutlar',
	description : 'Komut kategorilerini atar',
	usage : 'komutlar'
}