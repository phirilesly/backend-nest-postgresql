import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { TwitterController } from './twitter/twitter.controller';

import { TwitterService } from './twitter/twitter.service';

import { TwitterModule } from './twitter/twitter.module';

import { Connection } from 'typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',

            host: 'localhost',

            port: 5432,

            username: 'postgres',

            password: '12345',

            database: 'twitter',

            entities: ['dist/**/*.entity{.ts,.js}'],

            synchronize: false,
        }),

        TwitterModule,
    ],

    controllers: [TwitterController],

    providers: [TwitterService],
})
export class AppModule {
    constructor(private connection: Connection) {}
}

