MinecraftAPI.getServerStatus('cryptechcraft.xyz', {
}, function (err, status) {
    if (err) {
        return document.querySelector('.server-status').innerHTML = 'Error loading status';
    }

    // you can change these to your own message!
    document.querySelector('.server-motd-online').innerHTML = status.motd ;
    document.querySelector('.server-name-online').innerHTML = status.server.name ;
    document.querySelector('.server-online').innerHTML = status.online ? 'Online' : 'Offline' ;
    document.querySelector('.players-online').innerHTML = status.players.now ;
    document.querySelector('.players-server-online').innerHTML = status.players.now ;
    document.querySelector('.players-max-online').innerHTML = status.players.max ;
});