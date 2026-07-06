import { useState } from "react";
import {
  connectWallet,
} from "../services/wallet";

export default function WalletConnect() {
  const [address, setAddress] =
    useState("");

  async function connect() {
    try {
      const wallet =
        await connectWallet();

      setAddress(
        wallet.address
      );
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      {address ? (
        <div
          style={{
            padding: "10px",
            background:
              "#111827",
            borderRadius:
              "8px",
          }}
        >
          🦊 Connected:
          {" "}
          {address.slice(
            0,
            6
          )}
          ...
          {address.slice(
            -4
          )}
        </div>
      ) : (
        <button
          onClick={
            connect
          }
          style={{
            padding:
              "10px 20px",
            cursor:
              "pointer",
          }}
        >
          Connect
          MetaMask
        </button>
      )}
    </div>
  );
}