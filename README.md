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
