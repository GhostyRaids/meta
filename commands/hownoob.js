
module.exports = {
    name: 'hownoob',
    description: "This is a howgay command!",
    execute(message, args) {
        message.channel.send("You are **" + Math.floor(Math.random() * 100 + 1) + "%** noob");

    }
}