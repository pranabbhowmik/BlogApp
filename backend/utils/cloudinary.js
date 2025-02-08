import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "npminit",
  api_key: "811492294758999",
  api_secret: "WkGgTmnhgHlVEtb6JHK5e1jhAvM",
});

const uploadCloudinaryImage = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }

    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath); // Delete local file after upload
    return uploadResult;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error.message); // Debugging logs
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // Ensure file is deleted if an error occurs
    }
    return null;
  }
};

export { uploadCloudinaryImage };
