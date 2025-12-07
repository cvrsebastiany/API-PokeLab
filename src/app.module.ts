import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PerfisModule } from './perfis/perfis.module';
import { AuthModule } from './auth/auth.module';
import { ExamesModule } from './exames/exames.module';
import { ExamesUrinaModule } from './exames-urina/exames-urina.module';
import { ExamesBioquimicaModule } from './exames-bioquimica/exames-bioquimica.module';
import { TreatmentUpdatesModule } from './treatment-updates/treatment-updates.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'pokelab',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV === 'development',
    }),
    PokemonModule,
    UsuariosModule,
    PerfisModule,
    AuthModule,
    ExamesModule,
    ExamesUrinaModule,
    ExamesBioquimicaModule,
    TreatmentUpdatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
