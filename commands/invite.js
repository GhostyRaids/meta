const Discord = require('discord.js')
module.exports = {
   name: 'invite',
   description: "This is a invite command!",
   execute(message, args) {
      let embed = new Discord.MessageEmbed()
         .setColor("#7D26CD")
         .setTitle('Invite me here!')
         .setURL('https://discord.com/api/oauth2/authorize?client_id=742026620470296577&permissions=0&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fjm49fax&response_type=code&scope=bot%20identify%20guilds')
      return message.channel.send({ embed });
   }
}
