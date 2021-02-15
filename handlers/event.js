const ascii = require('ascii-table');

const fs = require('fs');

const table = new ascii('Events');
table.setHeading('Events', 'Status');

module.exports = (client) => {
    fs.readdirSync('./events/').forEach((dir) => {
        const events = fs.readdirSync(`./events/${dir}/`).filter((file) => file.endsWith('.js'));
        for(const file of events) {
            let pull = require(`../events/${dir}/${file}`);
            if(pull.event && typeof pull.event !== 'string') {
                table.addRow(file, '❌ => Please make sure the event type of string ');
                continue;
            }

            pull.event = pull.event || file.replace('.js', '');
            client.on(pull.event, pull.run.bind(null, client));
            table.addRow(file, '✅');
        }
    });
    console.log(table.toString());
}