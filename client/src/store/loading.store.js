class LoadingStore {
  isLoading = true;
  setIsLoading = (bool) => {
    this.isLoading = bool
  };
};

const loadingStore = new LoadingStore();

export default loadingStore;