const { Command, CommandoMessage } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const ms = require('pretty-ms');

module.exports = class BotInfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'botinfo',
            description: 'Sends the information of the bot',
            group: 'information',
            memberName: 'botinfo',
            guildOnly: true
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
    async run(message) {
        const infoEmbed = new MessageEmbed()
        .setAuthor(this.client.user.tag)
        .setThumbnail(this.client.user.displayAvatarURL())
        .setDescription(`Hello I'm ${this.client.user.tag}, I'm this server's official bot\nMy Prefix is \`${this.client.commandPrefix}\` - Type \`${this.client.commandPrefix}help\` For command list.`)
        .addField('Name', `${this.client.user.tag}[${this.client.user.id}]`)
        .addField('CreatedAt', `${this.client.user.createdAt}`)
        .addField('Uptime', `${ms(this.client.uptime, { verbose: true })}`)

        message.embed(infoEmbed);
    }
}