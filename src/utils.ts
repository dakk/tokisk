export module transactions {
    function create(opts: { supply: number, tokenName: string }) {

    }

    function transfer(opts: { recipientId: string, tokenName: string, amount: string }) {

    }
}

export module client {
    export module accounts {
        function balance(tokenName: string) {}

        function balances() {}
    }

    export module token {
        function list() {}
    }
}