const { MessageEmbed } = require('discord.js');
const moment = require('moment');


module.exports = {
    name: 'uptime',
    description: "This is a cookie command!",
    execute(message, args) {

        const d = moment.duration(message.client.uptime);
        const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
        const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
        const minutes = (d.minutes() == 1) ? `${d.minutes()} minute` : `${d.minutes()} minutes`;
        const seconds = (d.seconds() == 1) ? `${d.seconds()} second` : `${d.seconds()} seconds`;
        const date = moment().subtract(d, 'ms').format('dddd, MMMM Do YYYY');
        const embed = new MessageEmbed()
            .setTitle('Meta.js Uptime')
            .setThumbnail('https://cdn.discordapp.com/attachments/571816141480132608/748149534340677763/m.jpg')
            .setDescription(`\`${days}\`, \`${hours}\`, \`${minutes}\`, and \`${seconds}\``)
            .addField('Date Launched', date)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    }
}