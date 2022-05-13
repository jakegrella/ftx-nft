export const getCollectionNFTs = async (
  currentCollection,
  startInclusive = 0,
  endExclusive = 50
) => {
  const url = `https://ftx.us/api/nft/nfts_filtered?startInclusive=${startInclusive}&endExclusive=${endExclusive}&nft_filter_string={%22collection%22:%22${currentCollection.replace(
    / /g,
    "%20"
  )}%22,%22nftAuctionFilter%22:%22all%22,%22minPriceFilter%22:null,%22maxPriceFilter%22:null,%22seriesFilter%22:[],%22traitsFilter%22:{},%22searchStringFilter%22:null,%22mintSourceFilter%22:null,%22include_not_for_sale%22:true}&sortFunc=offer_asc`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.result.nfts;
  } catch (error) {
    console.log(error.message);
  }
};
