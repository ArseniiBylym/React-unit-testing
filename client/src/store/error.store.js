class ErrorStore {
  error = null;
  setError = (bool) => {
    this.error = bool
  };
};

const errorStore = new ErrorStore();

export default errorStore;