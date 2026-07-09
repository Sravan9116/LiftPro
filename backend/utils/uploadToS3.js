const AWS = require("../config/aws");

const uploadToS3 = async (params) => {

    const s3 = new AWS.S3();

    return await s3.upload(params).promise();

};

module.exports = uploadToS3;