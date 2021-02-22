module.exports = {
    name: 'ban',
    description: 'Bans a member from the guild',
    categpry: 'moderation',
    usage: 'ban <@User/ID> [reason]',
    clientPermissions: ['BAN_MEMBERS'],
    userPermissions: ['BAN_MEMBERS'],
    cooldowns: 3,
    run: async (client, message, args) => {
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    
        if(!target) {
            return message.channel.send("Coulnd't find User, Please provide a User or UserID");
        }
    
        if(target.id === message.author.id) {
            return message.channel.send("You cannot ban yourself.");
        }
    
        if(target.id === message.guild.owner.id) {
            return message.channel.send("You cannot ban the guild owner.");
        }
    
        if(!target.bannable) {
            return message.channel.send("Cannot ban that user.")
        }
    
    
        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason provided."
    
        try {
            target.ban(reason);
            message.channel.send(`Successfuly Banned ${target.user.tag}`).then(m => m.delete({ timeout: 20000 }))
        } catch (err) {
            if(err) console.log(err);
        }
    }
}