const { ownerId, prefix } = require('../../config.json');

module.exports.run = async (client, message) => {
    if(message.author.bot || !message.guild) return;
    if(!message.member) message.member = await message.guild.members.fetch(message);
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    // Load up the command collection
    let command = client.commands.get(cmd);

    // If there aren't any result, Load the aliases
    if(!command) command = client.commands.get(client.aliases.get(cmd));

    // If there are still no result, return;
    if(!command) return;

    // Commands Permissions

    if(command.clientPermissions) {
        let requiredPermissions = [];

        command.clientPermissions.forEach((permission) => {
            if(!message.guild.me.hasPermission(permission)) requiredPermissions.push(permission);
        });

        if(requiredPermissions.length) return message.reply(`I need \`${requiredPermissions.join(', ')}\` permission(s) for executing this command.`);
    }

    if(command.userPermissions) {
        let requiredPermissions = [];

        commmand.userPermissions.forEach((permission) => {
            if(!message.member.hasPermission(permission)) requiredPermissions.push(permission);
        });

        if(requiredPermissions.length) return message.reply(`You need \`${requiredPermissions.join(', ')}\` permission(s) for executing this command.`);
    }

    if(command.ownerOnly) {
        if(message.author.id !== ownerId) return message.reply('Only the owner can execute this command.');
    }

    // Run the command
    command.run(client, message, args);
}