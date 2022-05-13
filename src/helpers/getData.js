export const getData = async (
  selectedItems,
  selectedBlockchain,
  startInclusive = 0,
  endExclusive = 25
) => {
  let itemData = [];
  const baseUrl = "https://ftx.us/api/nft/";

  try {
    if (selectedItems === "collections") {
      const res = await fetch(
        baseUrl +
          `collections_page?startInclusive=${startInclusive}&endExclusive=${endExclusive}&collectionType=${selectedBlockchain}`
      );
      const data = await res.json();
      itemData = data.result.collections;
    } else if (selectedItems === "nfts") {
      const res = await fetch(
        baseUrl +
          `nfts_filtered?startInclusive=${startInclusive}&endExclusive=${endExclusive}&nft_filter_string={%22nftAuctionFilter%22:%22all%22,%22minPriceFilter%22:null,%22maxPriceFilter%22:null,%22seriesFilter%22:[],%22traitsFilter%22:{},%22searchStringFilter%22:%22%22,%22mintSourceFilter%22:%22${selectedBlockchain}%22,%22include_not_for_sale%22:true}&sortFunc=offer_asc`
      );
      const data = await res.json();
      itemData = data.result.nfts;
    }
  } catch (error) {
    console.error(error.message);
  }

  return itemData;
};
