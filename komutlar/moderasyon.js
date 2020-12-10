const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setAuthor(`Moderasyon Menüsü`, client.user.avatarURL())    
             .setThumbnail(client.user.avatarURL())
             .addField(`a!ban @etiket ve ✅ emojisine tıklıyarak sunucunuzdan banlayabilirsiniz.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir
             .addField(`a!kick @etiket ve ✅ emojisine tıklıyarak sunucunuzdan atabilirsiniz.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir
             .addField(`a!bansorgulama (id) komudu ile sunucunuzdaki banlanmış kişinin banı sorgulanır.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir 
             .addField(`a!otorol ayarla @üye #kanal ayarlayarak aktif etmiş olursunuz.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir
             .addField(`a!otorol kapat ile otorol sistemini kapatmış olursunuz.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir
             .addField(`a!oylama komudu ile sunucunuzda oylama yaparsınız✅❌.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir
             .addField(`a!oy-kick komudu ile sunucunuzda seçtiginiz kişiyi oylama ile atarsınız en az 3 kişi onaylaması gerekli.✅❌.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir
             .addField(`a!bütünroller komudu ile sunucudaki bütün rolleri gösterir.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir
             .addField(`a!sayaç [sayı/sıfırla] [kanal] ile sayacı ayarlamış olursunuz.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir  sayaç   
             .addField(`a!slowmode [1/10] ile kanala yazı yazma süresini ayarlarsınız 0 yaparsanız sistem kapanır.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir      
             .addField(`a!scbilgi ile sunucu bilgilerini gösterir.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir 
             .addField(`a!temizle (1-100)mesajları siler en fazla 100 mesaj siler.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir 
             .addField(`a!unban (kullanıcı ID) yaparak o kişinin sunucudaki banını kaldırabilirsiniz.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir 
             .addField(`a!unbanall komudu ile sunucudaki banlı olan kişilerin banını kaldırır.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir 
             .addField(`a!yazdır (yazılıcak yazı) ile bota yazı yazdırırsınız.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir 
             .addField(`a!reklamengel aç yazarak sunucudaki reklamları(sunucu davetleri vs.)engeller.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir 
             .addField(`a!reklamengel kapat yazarak sunucudaki reklam engel sistemi kapanır.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir   
             .addField(`a!rolal [kişi] [@alınacak rol] ile o kişiden rolü alırsınız.`,`Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir  
             .addField(`a!rolver [kişi] [@verilecek rol] ile o kişiye rolü verirsiniz.`,`Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir          
             .addField(`a!sa-as aç/kapat ile selam alma sistemi aktif olur.`, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir   
             .addField(`a!roller ile sunucudaki bütün rollere bakabilirsiniz. `, `Sadece Yetkililer Kullanabilir.`) // bunlar boş kalırsa hata verir         
        

             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL())
            
        return message.channel.send(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['m'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'moderasyon',
	description : 'Komut kategorilerini atar',
	usage : 'moderasyon'
}