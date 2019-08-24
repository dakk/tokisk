import { BaseTransaction } from 'lisk-sdk';

export class SendTransaction extends BaseTransaction {
    static get TYPE () {
        return 12;
    }

    
}