import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDIANRY_CLOUD_NAME,
        api_key: process.env.CLOUDIANRY_CLOUD_KEY, 
        api_secret: process.env.CLOUDIANRY_CLOUD_SECRET // Click 'View API Keys' above to copy your API secret
    });

    const uploadOnCloudinary = async (localFilePath) =>{
        try{
            if(!localFilePath) {
                return null;
            }
            const response = await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })
            console.log("file is uploaded on cloudinary", response.url);
            return response;
        }catch(error){
            fs.unlinkSync(localFilePath)//remove the locally saved tempory file as the upload operation
        }
    }