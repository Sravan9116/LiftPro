const AWS = require("../config/aws");

const deleteFromS3 = async (params) => {

    const s3 = new AWS.S3();

    return await s3.deleteObject(params).promise();

};

module.exports = deleteFromS3;