# Latest way to connect DApp with Metamask using web3.js

In this repo, I've updated the code to connect the metamask and DApp using web3. Make sure you've used the web3 package or CDN on your DApp.<br/>

Use `npm i web3` or <br/> `<script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.0/web3.min.js" integrity="sha512-ppuvbiAokEJLjOUQ24YmpP7tTaLRgzliuldPRZ01ul6MhRC+B8LzcVkXmUsDee7ne9chUfApa9/pWrIZ3rwTFQ==" crossorigin="anonymous"></script>`

### Traditional way
<b>Note:</b> Some way of connecting metamask was deprecated so your DApp might get affected.

```
const Web3 = require("web3");

export const LoadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  }

  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  }

  else{
    window.alert(
      "Consider using metamask or web3 compatible browser(Mist)."
    );
  }
};
```

### Solution: Authentic Way
```
const Web3 = require("web3");

export const LoadWeb3 = async () => {
  const { ethereum, web3 } = window;

  if (ethereum) {
    await ethereum.request({ method: "eth_requestAccounts" });
    ethereum.autoRefreshOnNetworkChange = false;
  } else if (web3) {
    web3 = new Web3(web3.currentProvider);
  } else {
    window.alert("Consider using metamask or web3 compatible browser(Mist).");
  }

    // get ethereum accounts
    const accounts = await ethereum.request({ method: 'eth_accounts' })
    console.log(accounts[0])
};

```
