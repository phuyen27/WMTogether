import dotenv from 'dotenv';
dotenv.config();

const config = {
    server: {
        HOST: process.env.host || 'localhost',
        PORT: process.env.port || 3000,
    },

    db: {
        API_KEY: process.env.apiKey,
        AUTH_DOMAIN: process.env.authDomain,
        DATABASE_URL: process.env.databaseURL,
        PROJECT_ID: process.env.projectId,
        STORAGE_BUCKET: process.env.storageBucket,
        MESSAGING_SENDER_ID: process.env.messagingSenderId,
        APP_ID: process.env.appId,
        MEASUREMENT_ID: process.env.measurementId,
    },


};

export default config;