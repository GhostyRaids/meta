const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = {
      name: 'avatar',
      description: "This is a avatar command!",
      execute(message, args) {
            let user = message.mentions.users.first() || message.author
            const embed = new Discord.MessageEmbed()
                  .setImage(user.displayAvatarURL())
                  .setColor(0x00A2E8)
            message.channel.send({ embed })
      }
}