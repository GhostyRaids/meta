module.exports = {
  name: 'ping',
  description: "This is a ping command!",
  execute(message, args) {
    message.channel.send('Pong! \nYour ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
  }

}