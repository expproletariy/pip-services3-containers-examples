const AppExampleContainer = require('../obj/src').AppExampleContainer;
const path = require('path');

try {
    const container = new AppExampleContainer();
    container.readConfigFromFile('', path.join('config', 'config.yml'), null);
    (async _ => {
        await container.open('');
        console.log('To shutdown the service press eny key...');
        process.stdin.on('data', async data => {
            await container.close('');
            process.exit(0);
        });
    })()
} catch (ex) {
    console.error(ex);
}