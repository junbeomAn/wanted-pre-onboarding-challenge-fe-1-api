export const getFormData = (target: HTMLFormElement) => {
  const formData = new FormData(target as HTMLFormElement);
  const newData: { [key: string]: string } = {};

  for (const key of formData.keys()) {
    newData[key] = formData.get(key) as string;
  }
  return newData;
};
