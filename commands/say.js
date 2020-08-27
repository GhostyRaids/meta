const Discord = require('discord.js')

module.exports = {
    name: 'say',
    description: "This is a say command!",
    execute(message, args) {
        if (args[0] == "help") {
            let helpembxd = new Discord.MessageEmbed()
                .setColor("#7D26CD")
                .addField("say Command", "Usage: ;say <message>")

            message.channel.send(helpembxd);
            return;
        }
        var sayMessage = message.content.substring(4)
        message.delete().catch(O_o => { });
        message.channel.send(sayMessage);
    }
}