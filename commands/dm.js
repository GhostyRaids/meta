const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = {
    name: 'dm',
    description: "This is a dm command!",
    execute(message, args) {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Missing Permissions!`)
        const usage = new Discord.MessageEmbed()
            .setColor(0x00A2E8)
            .setThumbnail(member.user.displayAvatarURL())
            .setTitle("Hi!")
            .setDescription("Description: " + "Bot dms a user with your message ");

        try {
            let who = message.mentions.users.first()
            if (message.mentions.users.size < 1) return message.channel.send(usage);
            
            message2 = args.slice(1).join(` `);
            if (message2 >= 400) return message.channel.send(usage)
            who.send('**Message from ' + message.author.username + '**: ' + message2)
            message.channel.send(`Sucessfully sent message to ${who.username}.`)
        } catch (err) {
            return;
        }
    }
}