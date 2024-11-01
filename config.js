const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'efhgGTYb#EPbCcx3BDAq2hyCDwV1TpzTayRneB8d3Ht8UJQH4Cao', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://lelumanjana1:IrzKBkH1OXFr6Vhs@cluster0.5bizj.mongodb.net/',// Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94760105256',    // Enter Your Owner Number
};
