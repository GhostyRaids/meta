const Discord = require('discord.js');

const answer = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Signs point to yes",
    "The reply is hazy, try again",
    "Ask again later",
    "I'd better not tell you now",
    "I cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My sources say no",
    "The outlook isn't so good",
    "Very doubtful",
    "B-Baka! No!",
    "Yes daddy..."
]

module.exports = {
    name: '8ball',
    description: "This is a 8ball command!",
    execute(message, args) {
        if (args[0] == "help") {
            let helpembxd = new Discord.MessageEmbed()
                .setColor("#7D26CD")
                .addField("8ball command", "Usage: ;8ball <message>")

            message.channel.send(helpembxd);
            return;
        }




        let question = message.content.split(/\s+/g).slice(1).join(" ");

        if (!question) {
            return message.channel.send('You must provide a question!');
        }

        const embed = new Discord.MessageEmbed()
            .setAuthor(question, 'https://cdn.discordapp.com/attachments/742002541268697170/743615775511937114/cartoon_pepe.png')
            .setDescription(answer[Math.round(Math.random() * (answer.length - 1))] + '.')
            .setColor('#7D26CD');
        return message.channel.send({ embed });



    }
}