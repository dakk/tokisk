import { BaseTransaction } from 'lisk-sdk';

export class CreateTransaction extends BaseTransaction {
    static get TYPE () {
        return 11;
    }


}