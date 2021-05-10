const AppExampleProcessContainer = require('../obj/src').AppExampleProcessContainer;
const path = require('path');

try {
    const container = new AppExampleProcessContainer();
    container._configPath = path.join('config', 'config.yml');
    container.run(process.argv);
} catch (ex) {
    console.error(ex);
}