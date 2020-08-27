const Discord = require('discord.js')
module.exports = {
   name: 'support',
   description: "This is a support command!",
   execute(message, args) {
      let d = new Discord.MessageEmbed()
      .addField("Discord server!", `[Click me](https://discord.gg/jm49fax)`)
      .addField("Meta.js Website!", `[Click me](https://tiny.cc/meta-bot)`)
      .setColor('#7D26CD')
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
   

      return message.channel.send(d);

   }
}