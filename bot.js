const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");// npm i fs
const moment = require("moment");// npm i fs
var jimp = require('jimp');// npm i jimp 
var Canvas = require('canvas');// npm i canvas
const { Client, Util } = require('discord.js');
const dateFormat = require('dateformat');

const prefix = '!'
const mmss = require('ms');




bot.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Scrpit By ┃ LEGEND`);
        console.log(`----------------`);
      console.log(`ON ${bot.guilds.size} Servers '     Bot By LEGEND' `);
    console.log(`----------------`);
  console.log(`Logged in as ${bot.user.tag}!`);
bot.user.setGame(` DOLLAR SHOP `,"http://twitch.tv/SHOP")
bot.user.setStatus("dnd")
});


bot.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  let acRoom = bot.channels.get('471067470212497409');
  if(message.content.startsWith(prefix + "قبول")) {
    if(message.guild.id !== '470684937733799936') return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
});



bot.on('message', message => {
     if (message.content === "*bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**عدد السيرفرات الي فيها البوت:**" , bot.guilds.size)
  .addField("**المستخدمين:**", bot.users.size)
  .addField("**قنوات:**", bot.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});
bot.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRoom = bot.channels.get('471067470212497409');
  if(message.content.startsWith(prefix + "رفض")) {
  if(message.guild.id !== '470684937733799936') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");
      acRoom.send(`**${mention} تم رفضك للاسف**`);

  }
});
 
   bot.on('message', async message => {
  if(message.content.startsWith(prefix + "تقديم")) {
  await  message.channel.send(`اكتب تقديمك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ تقديمك الرجاء انتضار الرد من قبل الاداره`)

                var embed = new Discord.RichEmbed()
                   .setColor(0x00AE86)
                         .setAuthor(message.author.username, message.author.avatarURL)   
    .setTimestamp()
            .setDescription(`
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
${text} 
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
   
  تم التقديم بواسطة :<@${message.author.id}>
`)

   bot.channels.get("471067377706991616").sendEmbed(embed);

              })
            }
          });




bot.login(process.env.BOT_TOKEN);
