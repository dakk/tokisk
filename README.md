# Tokisk

Tokisk is a proof-of-concept Lisk sidechain aimed to handle token issuing and sending.


## Usage

Start the node with:

```
npm install
npm run package
npm start
```


Then you can use tokisk-commander for issuing and sending a token.

Create a new account, save the mnemonic:
```
tokisk account:create
```

Create a new token named TSKTEST with 1000 tokens:
```
tokisk token:create 1000 TSKTEST
```

Send 10 TSKTEST to the given address:
```
tokisk token:send 10 10345234123153L
```

Get the balance of all owned tokens:
```
tokisk token:balances
```


## Technical

The tokisk sidechain implements 2 new transaction types:

- 11: issuing transaction that creates a new token (TOKNAME,SUPPLY,OWNER)
- 12: send transaction that move tokens from one account to another (TOKNAME,AMOUNT,DESTINATION)

These transactions interact with the database since we need two new tables:

- token table: hold a row for every token created with their owner, name and total supply
- token balances: hold a row for every (token,address) holding a balance for the given token


## Future works

- Token reissuing
- In-chain exchange between tokens


## Credits

This proof of concept is developed by dakk delegate.
