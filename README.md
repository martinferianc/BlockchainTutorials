# Blockchain Tutorials

This repo contains tutorials, notes and coude about how blockchain works.

It is a copy of an Udemy course which can be found at [Link](https://www.udemy.com/ethereum-and-solidity-the-complete-developers-guide/learn/v4/overview). It was originally made by Stephen Grider and the course is fantastic.

## Contents

-   [Section 1](/Notes/Section_1.md) - What is Blockchain, Solidity etc.
-   [Section 2](/Notes/Section_2.md) - Solidity and Smart Contracts + a Sample Starting project `Inbox`

## Requirements

Basic understanding of programming concepts and languages, especially Javascript.

Then there are some libraries that we have to install to start working on it:

### Mac OS X

1.  You will need Homebrew which you can get:

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2.  You will need Xcode and command line tools installed. You will get XCode from the AppStore and command line tools as: [Link](http://railsapps.github.io/xcode-command-line-tools.html)

3.  You will need npm, which you can get from:

```bash
# If you do not have node.js
brew install node
```

If you are struggling check out htis link: [Link](http://blog.teamtreehouse.com/install-node-js-npm-mac)

To make sure you have Node and NPM installed, run two simple commands to see what version of each is installed:

To see if Node is installed, type `node -v` in Terminal. This should print the version number so you’ll see something like this v0.10.31.
To see if NPM is installed, type `npm -v` in Terminal. This should print the version number so you’ll see something like this 1.4.27

4.  Install `solidity` compiler `solc`:

```bash
npm install solc
```

5.  Install test framework (Mocha), local test network (Ganache) and Web3, we are going to install a very specific version of web3, whcih follows the one described in the tutorial

```bash
npm install --save mocha ganache-cli web3@1.0.0-beta.26
```

## Contribution

Please feel free to submit a PR improving this tutorial, I have made it myself and I expect there are a lot of mistakes and misunderstandings so every help is very welcome.

## Author

Martin Ferianc, 2018-
