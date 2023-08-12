import Web3 from "web3";
import ABI from "./ABI.json";

const CONTRACT_ADDRESS = "0xcA14FfDD785A51d89170Fd9f57086ccB89577F3b";

export async function doLogin() {
  if (!window.ethereum) throw new Error("No MetaMask found");

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length)
    throw new Error("Wallet not found or allowed");

  localStorage.setItem("wallet", accounts[0]);

  return accounts[0];
}

function getContract() {
  if (!window.ethereum) throw new Error("No MetaMask found");

  const web3 = new Web3(window.ethereum);
  const from = localStorage.getItem("wallet");

  return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });
}

export async function addTweet(text) {
  const contract = getContract();
  return contract.methods.addTweet(text).send();
}

export async function changeUsername(newName) {
  const contract = getContract();
  return contract.methods.changeUsername(newName).send();
}
