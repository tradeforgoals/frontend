export const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => reader.result ? resolve(reader.result) : reject('Failed to resolve');
    reader.onerror = error => reject(error);
  });
}