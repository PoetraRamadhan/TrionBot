const { Command } = require('discord.js-commando');

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Sends back the bot latebcy',
            group: 'information',
            memberName: 'ping',
            guildOnly: true
        });
    }

    async run(message) {
        const msg = await message.say('Pinging...');
        return msg.edit(`🏓︱Round: \`${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}ms\` - ❤︱HeartBeat: \`${this.client.ws.ping}ms\``)
    }
}