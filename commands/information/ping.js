module.exports = {
    name: 'ping',
    description: 'Sends the latency',
    category: 'information',
    usage: 'ping',
    cooldowns: 3,
    run: async (client, message, args) => {
        const msg = await message.channel.send('Pinging...');
        return msg.edit(`🏓︱Round: \`${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}ms\` - ❤︱HeartBeat: \`${client.ws.ping}ms\``)
    }
}