require('dotenv').config();

const { Client, Collection } = require('discord.js');

const fs = require('fs');

const client = new Client({
    disableMentions: 'everyone',
    messageSweepInterval: 180,
    messageCacheLifetime: 180,
    messageCacheMaxSize: 200,
    ws: {
        intents: ['GUILDS', 'GUILD_BANS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES']
    },
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

client.commands = new Collection();
client.aliases = new Collection();
client.cooldowns = new Collection();
client.categories = fs.readdirSync('./commands/');
['command'].forEach((handler) => {
    require(`./handlers/${handler}`);
});
const eventHandlers = require('./handlers/event');
eventHandlers(client);

client.login(process.env.TOKEN);