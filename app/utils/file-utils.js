export async function readFile(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsText(file);
  });
}

export function saveFile(data, fileName) {
  const file = new File([data], fileName, {
    type: "text/plain",
  });
  return file;
}

export function getFileExtension(fileName) {
  let regexp = new RegExp("[^.]+$");
  return fileName.match(regexp)[0];
}

export function getFileNameWithoutExtension(fileName) {
  let regexp = new RegExp("[^.]+$");
  return fileName.replace(fileName.match(regexp), "");
}
