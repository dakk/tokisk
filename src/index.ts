import { Application, genesisBlockDevnet, configDevnet} from 'lisk-sdk';

const app = new Application(genesisBlockDevnet, configDevnet);

app.run() // start the application
   .then(() => app.logger.info('App started...'))
   .catch(error => {
        console.error('Faced error in application', error);
        // process.exit(1);
});
