module.exports = {
    name: 'slowmode',
    description: 'Give the current channel a slowmode',
    category: 'moderation',
    usage: 'slowmode <amount> <type>',
    clientPermissions: ['MANAGE_CHANNELS'],
    userPermissions: ['MANAGE_CHANNELS'],
    cooldowns: 3,
    run: async (client, message, args) => {
        const timer = parseInt(args[0]);
        if(!timer) return message.channel.send('Please provide a timer');

        const type = args[1];
        if(!type) return message.channel.send('Please provide a type, Example: \`second\`/\`minute\`/\`hour\`');

        if(type === 'second') {
            await message.channel.setRateLimitPerUser(timer);
            return message.channel.send(`Slowmode has been set to \`${timer} second(s)\``);
        } else if(type === 'minute') {
            await message.channel.setRateLimitPerUser(timer * 60);
            return message.channel.send(`Slowmode has been set to \`${timer} minute(s)\``);
        } else if(type === 'hour') {
            await message.channel.setRateLimitPerUser(timer * 60 * 60);
            return message.channel.send(`Slowmode has been set to \`${timer} hour(s)\``);
        }
    }
}