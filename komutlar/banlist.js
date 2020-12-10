const Discord = require("discord.js");
exports.run = async (client, message, args) => {

let kedjik = []
let xd = message.guild.fetchBans();
xd.then(p =>{
if(!p) return message.channel.send("Hiç kimse ban yememiş.")
p.forEach(a => {
kedjik.push("-> "+a.user.username)
})
if(kedjik.length > 1024) return message.channel.send("Çok fazla banlanan kişi olduğu için gösteremiyorum ama sunucuda **"+kedjik.length+"** kadar kişi ban yemiş.")
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Banlananların Listesi.")
.setDescription(kedjik)
message.channel.send(embed)
})

};

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['banlananlar','ban-list'],
   permLevel: 0
 
};
 
exports.help = {
   name: 'banlılar',
   description: '',
   usage: ''
};