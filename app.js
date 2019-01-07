const Discord = require('discord.js');
const auth = require('./auth.json')
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(msg.content)
  if (msg.content === "help") {
    msg.reply(`Checkout this https://media.discordapp.net/attachments/511397823623856138/528567621600149504/xkro_subscription_english.jpg?width=419&height=601`);
  }
});

client.login(auth.token);