module.exports = {
    name: 'play',
    description: 'Plays the music of your choice',
    category: 'music',
    usage: 'play <song>',
    aliases: ['disconnect', 'dc'],
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message);
        if(!queue) return message.channel.send('There are nothing in the queue');
        client.distube.stop(message);
        message.channel.send('Stopped');
    }
}