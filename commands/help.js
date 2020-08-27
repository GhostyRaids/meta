
module.exports = {
  name: 'help',
  description: "This is a help command!",
  execute(message, args) {
    message.channel.send({
      embed: {
        color: '#7D26CD',
        author: {
        },
        title: "This is Help!",
        url: "https://discord.gg/jm49fax",
        description: "These are the commands for me! \nIf you need more help do, ;<commandName> help",
        fields: [{
          name: "**__Server__**",
          value: "```invite, support, suggest, remind, uptime```"
        },
        {
          name: "**__Moderation__**",
          value: "```purge, ban, kick, dm```"
        },
        {
          name: "**__Info__**",
          value: "```serverinfo, userinfo```"
        },
        {
          name: "**__Action__**",
          value: "```cat, meme```"
        },
        {
          name: "**__Fun__**",
          value: "```ping, howgay, hownoob, cookies, rps, say, urban, reverse, mock, rate, 8ball, joke```"
        },
        {
          name: "**__Economy__**",
          value: "*__coming soon__*"
        },
        ],
        timestamp: new Date(),
        footer: {
          text: "My prefix is ;"
        }
      }
    });
  }
}


