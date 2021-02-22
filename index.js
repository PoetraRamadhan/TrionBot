require('dotenv').config();

const { Client, Collection } = require('discord.js');
const Distube = require('distube');

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

client.distube = new Distube(client, {
    searchSongs: true,
    emitNewSongOnly: true,
    leaveOnEmpty: true,
    leaveOnFinish: false,
    leaveOnStop: true
});

client.commands = new Collection();
client.aliases = new Collection();
['command', 'event'].forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);