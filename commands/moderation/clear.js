module.exports = {
    name: 'clear',
    description: 'Clear messages in the channel',
    category: 'moderation',
    usage: 'clear <amount>',
    aliases: ['purge', 'clean'],
    clientPermissions: ['MANAGE_MESSAGES'],
    userPermissions: ['MANAGE_MESSAGES'],
    cooldowns: 3,
    run:  async (client, message, args) => {
        if(isNaN(args[0]) || parseInt(args[0]) <= 0) return message.channel.send('Please provide a real number.');

        let deleteAmount;
        if(parseInt(args[0]) > 100) {
            deleteAmount = 100
        } else {
            deleteAmount = parseInt(args[0]);
        }

        try {
            message.channel.bulkDelete(deleteAmount, true);
            message.channel.send(`Successfully deleted ${deleteAmount} messages`).then((msg) => msg.delete({timeout: 15000}));
        } catch (err) {
            console.log(err);
            message.channel.send(`\`\`\ERROR: ${err}\`\`\``);
        }
    }
}