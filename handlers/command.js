const ascii = require('ascii-table');

const fs = require('fs');

const table = new ascii('Command');
table.setHeading('Commands', 'Status');

module.exports = (client) => {
    fs.readdirSync('./commands/').forEach((dir) => {
        const commands = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith('.js'));
        for(const file of commands) {
            const pull = require(`../commands/${dir}/${file}`);
            if(pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, '❌ => Something went wrong');
                continue;
            } if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
        }
    });
    console.log(table.toString());
}