
module.exports = {
   name: 'howgay',
   description: "This is a howgay command!",
   execute(message, args) {
      message.channel.send("You are **" + Math.floor(Math.random() * 100 + 1) + "%** gay :rainbow_flag:");

   }
}