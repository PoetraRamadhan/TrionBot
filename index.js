require('dotenv').config();
const { Client } = require('discord.js-commando');
const path = require('path');
const fs = require('fs');

const { ownerId, prefix } = require('./config.json');

const client = new Client({
    owner: ownerId,
    commandPrefix: prefix,
    disableMentions: 'everyone',
    messageSweepInterval: 180,
    messageCacheLifetime: 180,
    messageCacheMaxSize: 200,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    ws: {
        intents: ['GUILDS', 'GUILD_BANS', 'GUILD_EMOJIS', 'GUILD_INVITES', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES']
    }
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['information', 'Information Command']
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'))

fs.readdir('./events/', (err, files) => {
    if(err) return console.error(err);
    files.forEach((file) => {
        if(!file.endsWith('.js')) return;
        const event = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve((`./events/${file}`))];
        console.log(`${eventName} is registered.`);
    });
});

client.login(process.env.TOKEN);