import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExamesBioquimicaService } from './exames-bioquimica.service';
import { ExamesBioquimicaController } from './exames-bioquimica.controller';
import { ExameBioquimica } from './entities/exame-bioquimica.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExameBioquimica]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'your-secret-key-change-this-in-production',
        signOptions: { expiresIn: '24h' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [ExamesBioquimicaController],
  providers: [ExamesBioquimicaService],
  exports: [ExamesBioquimicaService],
})
export class ExamesBioquimicaModule {}
