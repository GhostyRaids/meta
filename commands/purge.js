const Discord = require('discord.js')

module.exports = {
  name: 'purge',
  description: "This is a purge command!",
  execute(message, args) {
    if (args[0] == "help") {
      let helpembxd = new Discord.MessageEmbed()
        .setColor("#7D26CD")
        .addField("purge Command", "Usage: ;purge <amount>")

      message.channel.send(helpembxd);
      return;
    }

    message.delete()

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premssions to do that!");
    if (!args[0]) return message.channel.send("Please enter a number of messages to purge! `Usage: ;purge <amount>`");
    message.channel.bulkDelete(args[0]).then(() => {


    });


  }

}
