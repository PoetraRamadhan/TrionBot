const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Sends the command information and lists',
    category: 'information',
    usage: 'help [command]',
    cooldowns: 3,
    run: async (client, message, args) => {
        if(args[0]) {
            const command = await client.commands.get(args[0]);
            if(!command) return message.reply('That command doesn\'t exist or unavailabel');

            const commandEmbed = new MessageEmbed()
            .setTitle(command.name)
            .addField('Category', command.category || 'None')
            .addField('Description', command.description || 'None')
            .addField('Usage', command.usage || 'None')
            .addField('Alias', command.aliases ? command.aliases.map((alias) => alias).join(', ') : 'None')
            .addField('BotPermissions', command.clientPermissions ? command.clientPermissions.map((perms) => perms).join(', ') : 'Default')
            .addField('clientPermissions', command.userPermissions ? command.userPermissions.map((perms) => perms).join(', ') : 'Default')
            .addField('Command Cooldown', command.cooldowns ? `${command.cooldowns} seconds` : '3 seconds')
            .setColor('RANDOM')
            .setFooter('<> - Required | [] - optional')
            return message.channel.send(commandEmbed);
        } else {
            const commands = await client.commands;

            let commandsEmbed = new MessageEmbed()
            .setTitle('Command Lists')
            .setColor('RANDOM')
            .setFooter(client.user.tag)

            let com = {};
            for (let comm of commands.array()) {
              let category = comm.category || "Unknown";
              let name = comm.name;
      
              if (!com[category]) {
                com[category] = [];
              }
              com[category].push(name);
            }
      
            for(const [key, value] of Object.entries(com)) {
              let category = key;
      
              let desc = "`" + value.join("`, `") + "`";
      
              commandsEmbed.addField(`${category.toUpperCase()}[${value.length}]`, desc);
            }
            return message.channel.send(commandsEmbed);
        }
    }
}