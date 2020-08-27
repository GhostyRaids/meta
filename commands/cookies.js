
module.exports = {
   name: 'cookies',
   description: "This is a cookie command!",
   execute(message, args) {
      message.channel.send("You snuck into the cookie jar and you ate **" + Math.floor(Math.random() * 100 + 1) + "%** of the cookies and then your mum caught you!");

   }
}