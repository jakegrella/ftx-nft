import { Link } from "react-router-dom";
import useStore from "../../state/store";

export const CollectionCard = ({ collectionData }) => {
  const updateCurrentCollection = useStore(
    (state) => state.updateCurrentCollection
  );

  const handleClick = () => {
    updateCurrentCollection(collectionData.group_id);
  };

  const path = collectionData.group_id.toLowerCase().replace(/\s/g, "-");

  return (
    <Link
      to={`/collections/${path}`}
      onClick={handleClick}
      className="card"
      style={{
        backgroundImage: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url(${collectionData.first_nft.imageUrl})`,
      }}
    >
      <h3>{collectionData.group_id}</h3>
      <h6> by {collectionData.issuer.issuer}</h6>
    </Link>
  );
};
