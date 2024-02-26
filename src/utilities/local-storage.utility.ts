// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
};

export const getLocalStorage = (key: string) => localStorage.getItem(key)