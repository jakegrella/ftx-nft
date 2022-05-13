export const NFTCard = ({ nft }) => (
  <div
    className="card"
    style={{
      backgroundImage: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url(${nft.imageUrl})`,
    }}
  >
    <h6>{nft.collection}</h6>
    <h3>{nft.name}</h3>
  </div>
);
