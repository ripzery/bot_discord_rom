const Discord = require('discord.js');
const auth = require('./auth.json')
const welcome = require('./features/welcome.js')
const message = require('./features/message.js')
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  message.handle(msg, Discord)
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  welcome.handle(member)
});


client.login(auth.token);