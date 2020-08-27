const urban = require("urban");
const Discord = require("discord.js");
module.exports = {
    name: 'urban',
    description: "This is a urban command!",
    execute(message, args) {
        if (args[0] == "help") {
            let helpembxd = new Discord.MessageEmbed()
                .setColor("#7D26CD")
                .addField("urban Command", "Usage: ;urban <message>")

            message.channel.send(helpembxd);
            return;
        }
        if (args.length < 1) return message.reply("Please enter something!");
        let XD = args.join(" ");

        urban(XD).first(json => {
            if (!json) return message.reply("No results found!")

            let urbEmbed = new Discord.MessageEmbed()
                .setColor("#7D26CD")
                .setTitle(json.word)
                .setDescription(json.definition)
                .addField("Upvotes", json.thumbs_up, true)
                .addField("Downvotes", json.thumbs_down, true)
                .setFooter(`Written by: ${json.author}`);

            message.channel.send(urbEmbed)
        });


    }


}

