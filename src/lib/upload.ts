export async function uploadFileToCloudinary(
  file: File,
  name: string,
  setProgress?: (progress: number) => void
): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "github"); // Replace with your actual preset
  formData.append("public_id", name.split(".")[0]);

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://api.cloudinary.com/v1_1/dpr5ahksw/upload");

    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable && setProgress) {
        const progress = Math.round((event.loaded / event.total) * 100);
        setProgress(progress);
      }
    });

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        resolve(response.secure_url);
      } else {
        reject(new Error("Upload failed"));
      }
    };

    xhr.onerror = () => reject(new Error("Upload error"));

    xhr.send(formData);
  });
}
