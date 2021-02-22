require('dotenv').config();

const { Client, Collection } = require('discord.js');

const client = new Client({
    disableMentions: 'everyone',
    partials: ['MESSAGE', 'CHANNEL', 'USER', 'REACTION'],
    messageSweepInterval: 180,
    messageCacheLifetime: 180,
    messageCacheMaxSize: 200,
    ws: {
        intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_EMOJIS', 'GUILD_VOICE_STATES', 'GUILD_PRESENCES'],
    }
});

client.commands = new Collection();
client.aliases = new Collection();
client.cooldowns = new Collection();
['command', 'event'].forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);