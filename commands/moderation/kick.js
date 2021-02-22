module.exports = {
    name: 'kick',
    description: 'Kicks a member from the guild',
    categpry: 'moderation',
    usage: 'kick <@User/ID> [reason]',
    clientPermissions: ['KICK_MEMBERS'],
    userPermissions: ['KICK_MEMBERS'],
    cooldowns: 3,
    run: async (client, message, args) => {
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    
        if(!target) {
            return message.channel.send("Coulnd't find User, Please provide a User or UserID");
        }
    
        if(target.id === message.author.id) {
            return message.channel.send("You cannot kick yourself.");
        }
    
        if(target.id === message.guild.owner.id) {
            return message.channel.send("You cannot kick the guild owner.");
        }
    
        if(!target.kickable) {
            return message.channel.send("Cannot kick that user.")
        }
    
        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason provided."
    
        try {
            target.kick(reason);
            message.channel.send(`Successfully Kicked ${target.user.tag}`).then(m => m.delete({ timeout: 20000 }))
        } catch (err) {
            if(err) console.log(err);
        }
    }
}