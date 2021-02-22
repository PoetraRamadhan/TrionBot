module.exports.run = (client) => {
    console.log(`${client.user.tag} Is Online!`);
    function statusChanger() {
        const status = ['Hello, I\'m Trion', 'Obey The Rules', 'Imma do a jump blub blub'];
        const randomStatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[randomStatus], { type: 'WATCHING' });
    };setInterval(statusChanger, 15000);
}