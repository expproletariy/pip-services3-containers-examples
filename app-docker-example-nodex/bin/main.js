const AppExampleContainer = require('../obj/src').AppExampleContainer;
const path = require('path');

try {
    const container = new AppExampleContainer();
    container._configPath = path.join('config', 'config.yml');
    container.run(process.argv);
} catch (ex) {
    console.error(ex);
}