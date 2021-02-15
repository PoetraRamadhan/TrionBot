const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'avatar',
    description: 'Sends the user profile picture',
    category: 'information',
    usage: 'avatar [user]',
    aliases: ['pfp', 'av'],
    run: async (client, message, args) => {
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
        const member = message.guild.member(user);

        const avatarEmbed = new MessageEmbed()
        .setTitle(`${member.user.tag}`)
        .setDescription(`\`${member.user.tag}\`\n\`[${member.user.id}]\``)
        .setImage(member.user.displayAvatarURL({ format: 'png', size: 1024, dynamic: true}))
        .setURL(member.user.displayAvatarURL())
        .setColor('RANDOM')
        return message.channel.send(avatarEmbed);
    }
}