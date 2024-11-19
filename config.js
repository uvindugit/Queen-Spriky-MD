const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'yjZimDQC#-xIXW7ApKwPsegrbCg4d9PRn82UrbqC5jafoUCXYzhQ', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://udavin81:1234@cluster0.xkc74.mongodb.net/',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94750177369',    // Enter Your Owner Number
};
