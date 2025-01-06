import React from "react";
import "./styles/FaucetForm.css";
import ".././App.css";
interface TxSuccessProps {
  msg: string;
  txHash: string;
  explorerUrl: string;
  goBack: (bool: boolean) => void;
}
const TxSuccess = ({ msg, txHash, explorerUrl, goBack }: TxSuccessProps) => {
  return (
    <div className="tx-success">
      <div className="success-msg">
        Transaction successful on CarrChain Testnet!{" "}
      </div>
      <div className="">
        <div className="field" style={{ marginBottom: "12px" }}>
          <span className="field-heading">Transaction ID</span>
          <div className="address-input">
            <input className="font-catamaran" value={txHash || ""} disabled />
          </div>
        </div>
        <div className="field">
          <a
            className="explorer-btn"
            href={`${explorerUrl}tx/${txHash}`}
            target="_blank"
            rel="noreferrer"
          >
            <img className="explorer-btn-icon" alt="explorer-btn-icon" />
            View BLOCK EXPLORER
          </a>
        </div>
      </div>
      <div className="field" style={{ width: "100%" }}>
        <div className="primary-button" onClick={() => goBack(false)}>
          GO BACK
        </div>
      </div>
    </div>
  );
};

export default TxSuccess;
