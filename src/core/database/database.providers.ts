import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE, DEVELOPMENT, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../modules/users/user.entity';

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async () => {
            let config;
            // switch (process.env.NODE_ENV) {
            //     case DEVELOPMENT:
            //         config = databaseConfig.development;
            //         break;
            //     case PRODUCTION:
            //         config = databaseConfig.production;
            //         break;
            //     default:
            //         config = databaseConfig.development;
            // }
            config = databaseConfig.production;
            const sequelize = new Sequelize(config);
            sequelize.addModels([User]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
