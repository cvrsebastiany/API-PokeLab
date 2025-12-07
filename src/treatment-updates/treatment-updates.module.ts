import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TreatmentUpdatesService } from './treatment-updates.service';
import { TreatmentUpdatesController } from './treatment-updates.controller';
import { TreatmentUpdate } from './entities/treatment-update.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TreatmentUpdate]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'your-secret-key-change-this-in-production',
        signOptions: { expiresIn: '24h' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [TreatmentUpdatesController],
  providers: [TreatmentUpdatesService],
  exports: [TreatmentUpdatesService],
})
export class TreatmentUpdatesModule {}
