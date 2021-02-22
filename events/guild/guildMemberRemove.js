module.exports.run = async (client, member) => {
    const welcomeChannel = member.guild.channels.cache.get('809085044185628800');

    const messages = ['Goodbye!', 'So long partner!', 'See you!', 'Dadah!'];
    const randomMessages = messages[Math.floor(Math.random() * messages.length)]
    
    return welcomeChannel.send(`${randomMessages}, ${member.user.tag}`);
}