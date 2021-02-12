const fs = require('fs');

module.exports = (client) => {
        fs.readdir('./events/', (err, files) => {
            if(err) console.error(err.stack);
            files.forEach((file) => {
                const event = require(`../events/${file}`);
                const eventName = file.split('.')[0];
                client.on(eventName, event.bind(null, client));
                delete require.cache[require.resolve(`../events/${file}`)];
            });
        });
}