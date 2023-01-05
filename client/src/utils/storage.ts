const getItem = (key: string): any => {
  const item = JSON.parse(localStorage.getItem(key) || "");
  return item;
};

const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const deleteItem = (key: string) => {
  localStorage.removeItem(key);
};

const handleStorageError =
  (method: any) =>
  (...args: any[]) => {
    try {
      return method(...args);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(
          err.message ||
            "requested action is currently not available on localStorage"
        );
      }
    }
  };

export default {
  getItem: handleStorageError(getItem),
  setItem: handleStorageError(setItem),
  deleteItem: handleStorageError(deleteItem),
};
