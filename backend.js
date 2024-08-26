const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

function generatePresignedUrl(fileName) {
    const params = {
        Bucket: 'emotion-science',
        Key: fileName,
        Expires: 60, // URL expires in 60 seconds
        ContentType: 'video/webm'
    };
    return s3.getSignedUrl('putObject', params);
}
