import Web3 from 'web3';

let web3;

// We are in the browser and the metamask is running
if (typeof window !== 'undefined' && window.web3 !== 'undefined'){
  web3 = new Web3(window.web3.currentProvider);
} else {
// We are on the server or the user is not running metamask
const provider = new Web3.providers.HttpProvider(
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);
  web3 = new Web3(provider);
}

export defualt web3;
