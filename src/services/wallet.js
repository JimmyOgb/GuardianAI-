import { BrowserProvider } from "ethers";

export async function connectWallet() {
  if (!window.ethereum) {
    throw new Error("MetaMask not installed");
  }

  const provider = new BrowserProvider(window.ethereum);

  await provider.send(
    "eth_requestAccounts",
    []
  );

  const signer = await provider.getSigner();

  return {
    provider,
    signer,
    address: await signer.getAddress(),
  };
}