module.exports = {
    name: 'emit',
    description: 'For emitting/testing events',
    category: 'dev',
    usage: 'emit',
    ownerOnly: true,
    run: async (client, message, args) => {
        client.emit('guildMemberAdd', message);
    }
}