const Discord = require('discord.js')

module.exports = {
    name: 'reverse',
    description: "This is a reverse command!",
    execute(message, args) {
        if (args[0] == "help") {
            let helpembxd = new Discord.MessageEmbed()
                .setColor("#7D26CD")
                .addField("reverse Command", "Usage: ;reverse <message>")

            message.channel.send(helpembxd);
            return;
        }
        if (args.length < 1) return message.reply("Please enter something!");
        message.channel.send(args.join(' ').split('').reverse().join(''));
        message.delete()
    }
}