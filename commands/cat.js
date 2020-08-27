
const request = require('request');

const Discord = require("discord.js")

module.exports = {
    name: 'cat',
    description: "This is a cat command!",
    execute(message, args) {
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let emb = new Discord.MessageEmbed()
                    .setImage(body)
                    .setColor("#7D26CD")
                    .setTitle("Here is your random cat")

                message.channel.send(emb)
            }
        });
    }
}
