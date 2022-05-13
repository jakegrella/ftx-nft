import { Link } from "react-router-dom";
import useStore from "../../state/store";
import { Button } from "../Button/Button";
import logo from "../../jtx.png";

export const Header = () => {
  const selectedItems = useStore((state) => state.selectedItems);
  const updateSelectedItems = useStore((state) => state.updateSelectedItems);
  const selectedBlockchain = useStore((state) => state.selectedBlockchain);
  const updateSelectedBlockchain = useStore(
    (state) => state.updateSelectedBlockchain
  );

  return (
    <header className="header">
      <Link to="/" className="header_logo">
        <img src={logo} alt="jtx logo" />
        <h1>NFTs</h1>
      </Link>
      <div className="header_options">
        <div className="header_options_items">
          <Button
            onClick={() => updateSelectedItems("collections")}
            selected={selectedItems === "collections"}
          >
            Collections
          </Button>
          <Button
            onClick={() => updateSelectedItems("nfts")}
            selected={selectedItems === "nfts"}
          >
            NFTs
          </Button>
        </div>
        <div className="header_options_blockchain">
          <Button
            onClick={() => updateSelectedBlockchain("all")}
            selected={selectedBlockchain === "all"}
          >
            All
          </Button>
          <Button
            onClick={() => updateSelectedBlockchain("ftx")}
            selected={selectedBlockchain === "ftx"}
          >
            FTX
          </Button>
          <Button
            onClick={() => updateSelectedBlockchain("sol")}
            selected={selectedBlockchain === "sol"}
          >
            SOL
          </Button>
          <Button
            onClick={() => updateSelectedBlockchain("eth")}
            selected={selectedBlockchain === "eth"}
          >
            ETH
          </Button>
        </div>
      </div>
    </header>
  );
};
