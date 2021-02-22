const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Shows the information of the server',
    category: 'information',
    usage: 'serverinfo',
    cooldowns: 3,
    run: async (client, message, args) => {
        const serverEmbed = new MessageEmbed()
        .setAuthor(`${message.guild.name}\'s Information`, message.guild.iconURL())
        .addField('Owner', `${message.guild.owner}\n[${message.guild.ownerId}]`)
        .addField('Region', message.guild.region)
        .addField('Verify Level', message.guild.verificationLevel)
        .addField('Total Members', `${message.guild.memberCount} Members`)
        .addField('Total Channels', `${message.guild.channels.cache.size} Channels`)
        .addField('Total Boost', `${message.guild.premiumSubscriptionCount} Boosts`)
        .setColor('RANDOM')
        return message.channel.send(serverEmbed);
    }
}