module.exports = {
    name: 'help',
    description: 'Sends the command information and lists',
    category: 'information',
    usage: 'help [command]',
    run: async (client, message, args) => {
        return message.channel.send('\`In Progress...\`');
    }
}