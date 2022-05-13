import create from "zustand";

const useStore = create((set) => ({
  currentCollection: "",
  selectedItems: "collections",
  selectedBlockchain: "all",

  updateCurrentCollection: (i) =>
    set(() => ({
      currentCollection: i,
    })),

  updateSelectedItems: (i) =>
    set(() => ({
      selectedItems: i,
    })),

  updateSelectedBlockchain: (i) =>
    set(() => ({
      selectedBlockchain: i,
    })),
}));

export default useStore;
