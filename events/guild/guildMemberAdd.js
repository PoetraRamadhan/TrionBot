const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, member) => {
    const welcomeChannel = member.guild.channels.cache.get('809085044185628800');

    const messages = ['Hello there!', 'What\'s poppin!', 'Cheers!', 'I am here!'];
    const randomMessages = messages[Math.floor(Math.random() * messages.length)]
    
    const welcomeEmbed = new MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(`${randomMessages}, ${member} has joined!`)
    .setColor('RANDOM')
    .setFooter(`${member.guild.name}`)
    .setTimestamp()
    
    return welcomeChannel.send(welcomeEmbed);
}