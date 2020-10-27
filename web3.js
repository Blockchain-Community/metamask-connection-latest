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
