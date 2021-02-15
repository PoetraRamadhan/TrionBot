module.exports.run = async (client, member) => {
    const welcomeChannel = member.guild.channels.cache.get('809085044185628800');
    welcomeChannel.send(`Welcome ${member}!, Don't forget to read the rules and enjoy your stay!`);
}