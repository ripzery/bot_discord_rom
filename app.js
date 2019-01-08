const Discord = require('discord.js');
const http = require('http');
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

client.login(process.env.AUTH_KEY);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Welcome to forever blank ROM-UI Bot page!');
  res.end();
}).listen(process.env.PORT || 5000);
