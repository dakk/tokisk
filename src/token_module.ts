import { BaseModule } from 'lisk-framework/src/modules/base_module';

export class TokenkModule extends BaseModule {
    constructor(options) {
        super(options);
    }

    static get alias() { return 'tokenModule'; }

    static get info() {
        return {
            author: '',
            version: '',
            name: '',
        };
    }

    async load(channel) { }

    get defaults() { return {}; }

    get events() { return []; }

    get actions() {
        return {
            action1: action => { },
        }
    }

    async unload() { }
}