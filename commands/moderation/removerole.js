module.exports = {
    name: 'removerole',
    description: 'Remove role to the specific member by the role ID',
    category: 'moderation',
    usage: 'removerole <Member/ID> <RoleID>',
    clientPermissions: ['MANAGE_ROLES'],
    userPermissions: ['MANAGE_ROLES'],
    cooldowns: 3,
    run: async (client, message, args) => {
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('Please provide a user.');
        const member = message.guild.member(user);
        const role = message.guild.roles.cache.get(args[1]);
        if(!role) return message.channel.send('Please provide a role ID');
        try {
            member.roles.remove(role);
            return message.channel.send(`Succesfully removed role`);
        } catch (err) {
            console.log(err);
            return message.channel.send(`\`\`\`ERROR: ${err}\`\`\``);
        }
    }
}