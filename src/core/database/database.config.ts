import * as dotenv from 'dotenv';

import { IDatabaseConfig } from './interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: 'dbmasteruser',
        password: 'testobnb1234567890',
        database: 'marceljonathan',
        host: 'ls-84a050d3c8054bff6a276d7fbacb38f6dffda0cb.c3psaafrxcpx.ap-southeast-1.rds.amazonaws.com',
        port: 5432,
        dialect: 'postgres',
    },
    production: {
        username: 'dbmasteruser',
        password: 'testobnb1234567890',
        database: 'marceljonathan',
        host: 'ls-84a050d3c8054bff6a276d7fbacb38f6dffda0cb.c3psaafrxcpx.ap-southeast-1.rds.amazonaws.com',
        dialect: 'postgres',
    },
};
