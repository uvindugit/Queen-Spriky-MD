const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'yjZimDQC#-xIXW7ApKwPsegrbCg4d9PRn82UrbqC5jafoUCXYzhQ', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94760105256',    // Enter Your Owner Number
};
