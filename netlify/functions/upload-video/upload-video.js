const AWS = require('aws-sdk');

exports.handler = async function(event, context) {
    try {
        // Parse the event body to extract video data and file name
        const { videoData } = JSON.parse(event.body);
        const fileName = event.headers['x-filename'];  // Get filename from the request headers

        // Check if fileName or videoData is missing
        if (!fileName || !videoData) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing video data or filename' })
            };
        }

        // Configure AWS SDK with environment variables
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION
        });

        // Create an S3 instance
        const s3 = new AWS.S3();

        // Prepare parameters for the S3 upload
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,  // S3 bucket name from environment variables
            Key: fileName,  // Filename passed in headers
            Body: Buffer.from(videoData, 'base64'),  // Convert the base64 video data to a buffer
            ContentEncoding: 'base64',  // Content is base64 encoded
            ContentType: 'video/webm'  // Set content type to video/webm
        };

        // Upload the video to S3
        const uploadResponse = await s3.upload(params).promise();

        // Return a successful response with the upload result
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Video uploaded successfully', data: uploadResponse })
        };
    } catch (error) {
        // Return an error response in case something goes wrong
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'An error occurred during video upload', details: error.message })
        };
    }
};
