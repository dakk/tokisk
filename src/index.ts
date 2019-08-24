import { Application, genesisBlockDevnet, configDevnet } from 'lisk-sdk';
import { CreateTransaction } from './transactions/create_transaction';
import { SendTransaction } from './transactions/send_transaction';

const app: Application = new Application(genesisBlockDevnet, {
        app: {
                label: 'tokisk',
                minVersion: '0.0.2',
                version: '2.3.4',
                protocolVersion: '4.1'
        },
        components: {
                logger: {
                        consoleLogLevel: "info"
                }
        }
});

app.registerTransaction(CreateTransaction);
app.registerTransaction(SendTransaction);

app.run() // start the application
        .then(() => app.logger.info('App started...'))
        .catch(error => {
                console.error('Faced error in application', error);
                // process.exit(1);
        });
