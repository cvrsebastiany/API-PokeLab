import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExamesService } from './exames.service';
import { ExamesController } from './exames.controller';
import { Exame } from './entities/exame.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exame]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'your-secret-key-change-this-in-production',
        signOptions: { expiresIn: '24h' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [ExamesController],
  providers: [ExamesService],
  exports: [ExamesService],
})
export class ExamesModule {}
