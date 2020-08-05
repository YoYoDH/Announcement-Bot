const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '?';

client.once('ready', () => {
    console.log('Im Ready')
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'announce'){
        var announcement = args.join(" ");

        const announceEmbed = new Discord.MessageEmbed()

        .setAuthor('Announced By: ' + message.author.tag)
        .setColor()
        .setTimestamp()
        .setDescription('**Announcement:** ' + announcement)

        message.channel.send(announceEmbed)
}});

client.login('Your Token Here');