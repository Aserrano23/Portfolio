import { useEffect } from "react";
import "./blockchain-page.scss";
import { useNavigate } from "react-router-dom";

const BlockchainPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
    return;
  }, []);

  return (
    <div className="page-content">
      <h1>WELCOME TO BLOCKCHAIN</h1>
    </div>
  );
};

export default BlockchainPage;
