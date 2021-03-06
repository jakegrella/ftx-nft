import { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { getData } from "../../helpers";
import useStore from "../../state/store";
import { CollectionCard, NFTCard } from "../Card";

export const CardContainer = () => {
  const [data, setData] = useState([]);
  const { selectedItems, selectedBlockchain } = useStore(
    (state) => ({
      selectedItems: state.selectedItems,
      selectedBlockchain: state.selectedBlockchain,
    }),
    shallow
  );

  const updateData = async () => {
    setData(await getData(selectedItems, selectedBlockchain));
  };

  useEffect(() => {
    updateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBlockchain, selectedItems]);

  return (
    <section className="cardContainer">
      {data &&
        data.map((i) =>
          selectedItems === "collections" ? (
            <CollectionCard key={i.collectionDict.id} collectionData={i} />
          ) : (
            <NFTCard key={i.id} nft={i} />
          )
        )}
    </section>
  );
};
