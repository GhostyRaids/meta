const Discord = require('discord.js');
const moment = require("moment");

const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
};
module.exports = {
    name: 'userinfo',
    description: "This is a userinfo command!",
    execute(message, args) {
        if (args[0] == "help") {
            let helpembxd = new Discord.MessageEmbed()
                .setColor("#7D26CD")
                .addField("userinfo Command", "Usage: ;userinfo or ;userinfo @user")

            message.channel.send(helpembxd);
            return;
        }
        var permissions = [];
        var acknowledgements = 'None';

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if (message.member.hasPermission("KICK_MEMBERS")) {
            permissions.push("Kick Members");
        }

        if (message.member.hasPermission("BAN_MEMBERS")) {
            permissions.push("Ban Members");
        }

        if (message.member.hasPermission("ADMINISTRATOR")) {
            permissions.push("Administrator");
        }

        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            permissions.push("Manage Messages");
        }

        if (message.member.hasPermission("MANAGE_CHANNELS")) {
            permissions.push("Manage Channels");
        }

        if (message.member.hasPermission("MENTION_EVERYONE")) {
            permissions.push("Mention Everyone");
        }

        if (message.member.hasPermission("MANAGE_NICKNAMES")) {
            permissions.push("Manage Nicknames");
        }

        if (message.member.hasPermission("MANAGE_ROLES")) {
            permissions.push("Manage Roles");
        }

        if (message.member.hasPermission("MANAGE_WEBHOOKS")) {
            permissions.push("Manage Webhooks");
        }

        if (message.member.hasPermission("MANAGE_EMOJIS")) {
            permissions.push("Manage Emojis");
        }

        if (permissions.length == 0) {
            permissions.push("No Key Permissions Found");
        }

        if (member.user.id == message.guild.ownerID) {
            acknowledgements = 'Server Owner';
        }

        const embed = new Discord.MessageEmbed()
            .setDescription(`<@${member.user.id}>`)
            .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
            .setColor('#7D26CD')
            .setFooter(`ID: ${message.author.id}`)
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()
            .addField("Status", `${status[member.user.presence.status]}`, true)
            .addField('Joined at: ', `${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
            .addField("Created at: ", `${moment(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
            .addField("Permissions: ", `${permissions.join(', ')}`, true)
            .addField(`Roles [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`, `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(" **|** ") || "No Roles"}`, true)
            .addField("Acknowledgements: ", `${acknowledgements}`, true);

        message.channel.send({ embed });

    }
}
