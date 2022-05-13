import { useEffect, useState } from "react";
import { getCollectionNFTs } from "../../helpers";
import useStore from "../../state/store";
import { NFTCard } from "../Card";

export const CollectionPage = () => {
  const [nfts, setNFTs] = useState();
  const currentCollection = useStore((state) => state.currentCollection);

  const getNFTs = async () => {
    const nfts = await getCollectionNFTs(currentCollection);
    setNFTs(nfts);
  };

  useEffect(() => {
    getNFTs();
  }, []);

  return (
    nfts && (
      <section className="collectionPage">
        <h2>{nfts[0].collection}</h2>
        <div className="collectionPage_nftContainer">
          {nfts.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </section>
    )
  );
};
