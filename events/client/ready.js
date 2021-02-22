module.exports.run = (client) => {
    console.log(`${client.user.tag} Is Online!`);
    function statusChanger() {
        const status = ['Hello, I\'m Trion', 'Obey The Rules', 'Imma do a jump blub blub'];
        const randomStatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[randomStatus], { type: 'WATCHING' });
    };setInterval(statusChanger, 15000);

    const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

    client.distube
    .on('playSong', (message, queue, song) => {
        message.channel.send(`Playing \`${song.name}\` - Duration \`${song.formattedDuration}\` - RequestedBy - \`${song.user}\`\n${status(queue)}`);
    })
    .on('addSong', (message, queue, Song) => {
        message.channel.send(`Added \`${song.name}\` - Duration \`${song.formattedDuration}\` - By \`${song.user}\``);
    })
    .on('playList', (message, queue, playlist, song) => {
        message.channel.send(`Play \`${playlist.title}\` - PLaylist \`(${playlist.total_items} songs).\` - RequestedBy \`${song.user}\`\nPlaying \`${song.name}\` - Duration \`${sng.formattedDuration}\``);
    })
    .on('addList', (message, queue, playlist) => {
        message.channel.send(`Added \`${playlist.list}\` - Playlist \`(${playlist.total_items} songs)\` - To the queue\n${status(queue)}`);
    })
    .on('searchResult', (message, result) => {
        let i = 0;
        message.channel.send(`**Choose The Option Below**\n${result.map((song, index) => `[${index+1}] | \`${song.name}\` - \`${song.formattedDuration}\``).join('\n')}\nCancelling command in 60 seconds.`);
    })
    .on('searchCancel', (message) => message.channel.send('Searched Cancel.'))
    .on('error', (message, error) => message.channel.send(`ERROR: \`${error}\``));
}