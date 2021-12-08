const http = require('http');
const app = require('./endpoints');
const config = require('./config');

const server = http.createServer(app);

server.listen(config.port, config.host, () => {
    console.log(`   _              _    _ \n  | |            | |  (_)`);
    console.log(`  | | ____ _ _ __| | ___ \n  | |/ / _\` | \'__| |/ / |`);
    console.log(`  |   < (_| | |  |   <| |\n  |_|\\_\\__,_|_|  |_|\\_\\_|`);
    console.log(`\n  osu! v1 api server for gulag\n  Running at \x1b[33mhttp://${config.host}:${config.port}\x1b[0m`);
});

function safe_close(code) {
    server.close();
    process.exit(code);
}

process.on('SIGINT', function() {
    console.log( "\nShutting down from SIGINT (Ctrl-C)" );
    safe_close(0);
});