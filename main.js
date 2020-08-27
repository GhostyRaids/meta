const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ';'
const fs = require('fs');
const ytdl = require('ytdl-core');
const { brotliCompress } = require('zlib');
const randomPuppy = require('random-puppy');
const { set } = require('mongoose');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}










client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command == 'support') {
        client.commands.get('support').execute(message, args);
    } else if (command == 'invite') {
        client.commands.get('invite').execute(message, args);
    } else if (command == 'help') {
        client.commands.get('help').execute(message, args);
    } else if (command == 'howgay') {
        client.commands.get('howgay').execute(message, args);
    } else if (command == 'hownoob') {
        client.commands.get('hownoob').execute(message, args);
    } else if (command == 'cookies') {
        client.commands.get('cookies').execute(message, args);
    } else if (command == 'rps') {
        client.commands.get('rps').execute(message, args);
    } else if (command == 'say') {
        client.commands.get('say').execute(message, args);
    } else if (command == 'serverinfo') {
        client.commands.get('serverinfo').execute(message, args);
    } else if (command == 'urban') {
        client.commands.get('urban').execute(message, args);
    } else if (command == 'reverse') {
        client.commands.get('reverse').execute(message, args);
    } else if (command == 'purge') {
        client.commands.get('purge').execute(message, args);
    } else if (command == 'cat') {
        client.commands.get('cat').execute(message, args);
    } else if (command == 'mock') {
        client.commands.get('mock').execute(message, args);
    } else if (command == 'rate') {
        client.commands.get('rate').execute(message, args);
    } else if (command == 'userinfo') {
        client.commands.get('userinfo').execute(message, args);
    } else if (command == 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command == 'meme') {
        client.commands.get('meme').execute(message, args);
    } else if (command == '8ball') {
        client.commands.get('8ball').execute(message, args);
    } else if (command == 'suggest') {
        client.commands.get('suggest').execute(message, args);
    } else if (command == 'avatar') {
        client.commands.get('avatar').execute(message, args);
    } else if (command == 'remind') {
        client.commands.get('remind').execute(message, args);
    } else if (command == 'dm') {
        client.commands.get('dm').execute(message, args);
    } else if (command == 'uptime') {
        client.commands.get('uptime').execute(message, args);
    } else if (command == 'joke') {
        client.commands.get('joke').execute(message, args);
    }
})







client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;

    if (message.content === ';join') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
            const Connection = await message.member.voice.channel.join();
        } else {
            message.reply('You need to join a voice channel first!');


        }
    }
})







client.once('ready', () => {
    console.log('Meta.js has been resurrected!');
    client.user.setPresence({ activity: { name: `;help | Serving 78 servers` }, status: 'online' })
        .then(console.log)
        .catch(console.error)
})
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}!`);
});
client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`;help | Serving ${client.guilds.cache.size} servers`);
});
client.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`;help | Serving ${client.guilds.cache.size} servers`);
});












































































client.login('NzQyMDI2NjIwNDcwMjk2NTc3.XzAIJA.X3c7fI8-omtr1915Cq80vTa9EEU');
