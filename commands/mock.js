
const Discord = require("discord.js");
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
module.exports = {
    name: 'mock',
    description: "This is a mock command!",
    execute(message, args) {
        if (args[0] == "help") {
            let helpembxd = new Discord.MessageEmbed()
                .setColor("#7D26CD")
                .addField("mock Command", "Usage: ;mock <message>")

            message.channel.send(helpembxd);
            return;
        }
        let mockEmbed = new Discord.MessageEmbed()
            .setColor("#7D26CD")
            .setDescription(args.map(randomizeCase))


        message.channel.send(mockEmbed)

        message.delete();
    }
}