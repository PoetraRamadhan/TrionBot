const fs = require('fs');

module.exports = (client) => {
    fs.readdirSync('./commands/').forEach((dir) => {
        const commands = fs.readdirSync(`./commands/${dir}`).filter((file) => file.endsWith('.js'));
        for(let file of commands) {
            const pull = require(`../commands/${dir}/${file}`);
            if(pull.name) {
                client.commands.set(pull.name, pull);
                console.table(file, ['Registered']);
            } else {
                console.table(file, ['Unregistered']);
                continue;
            }
            if(pull.aliases && Array.isArray(pull.aliases)) {
                pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
            }
        }
    });
}