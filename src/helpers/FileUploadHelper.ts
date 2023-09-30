import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { ICloudinaryResponse, IFileUpload } from '../interfaces/fileUpload';
import * as fs from 'fs';
import config from '../config';

cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const uploadToCloudinary = async (file: IFileUpload | undefined): Promise<ICloudinaryResponse> => {
  return new Promise((resolve, reject) => {
    if (file) {
      cloudinary.uploader.upload(file.path, (error: Error, result: ICloudinaryResponse) => {
        fs.unlinkSync(file.path);
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    }
  });
};

export const FileUploadHelper = {
  uploadToCloudinary,
  upload
};
