import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExamesUrinaService } from './exames-urina.service';
import { ExamesUrinaController } from './exames-urina.controller';
import { ExameUrina } from './entities/exame-urina.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExameUrina]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'your-secret-key-change-this-in-production',
        signOptions: { expiresIn: '24h' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [ExamesUrinaController],
  providers: [ExamesUrinaService],
  exports: [ExamesUrinaService],
})
export class ExamesUrinaModule {}
