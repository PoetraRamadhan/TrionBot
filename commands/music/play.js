module.exports = {
    name: 'play',
    description: 'Plays the music of your choice',
    category: 'music',
    usage: 'play <song>',
    aliases: ['p'],
    run: async (client, message, args) => {
        const searchTerms = args.join(' ');
        if(!searchTerms) return message.channel.send('Invalid or unavailabel');

        try {
            client.distube.play(message. searchTerms);
        } catch (error) {
            message.channel.send(`ERROR: ${error}`);
        }
    }
}