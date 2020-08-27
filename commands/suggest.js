const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = {
    name: 'suggest',
    description: "This is a suggest command!",
    execute(message, args) {
        if (args[0] == "help") {
            let helpembxd = new Discord.MessageEmbed()
                .setColor("#7D26CD")
                .addField("suggest command", "Usage: ;suggest <suggestion>")
            message.channel.send(helpembxd);
            return;
        }
        const sayMessage = args.join(" ");
        if (sayMessage.length < 1) return message.channel.send("Didn't provide a suggestion!")
        const embed = new Discord.MessageEmbed()
            .setColor(0x00A2E8)
            .addField("Suggestion:", `**${sayMessage}**!`)
            .setFooter("Suggestion by " + message.author.username, message.author.avatarURL)
            .setTimestamp()
        message.channel.send({ embed }).then(m => {
            m.react('⬆');
            m.react('⬇');
        })
    }
}