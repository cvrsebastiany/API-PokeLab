import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { runSeeds } from './database/seeder';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for the React frontend
  app.enableCors({
    origin: 'http://localhost:5173', // Vite default port
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Swagger/OpenAPI configuration
  const config = new DocumentBuilder()
    .setTitle('PokeLab API')
    .setDescription('API para gerenciamento de clínica Pokémon - Sistema de gestão de saúde e tratamento de Pokémon')
    .setVersion('1.0')
    .addTag('pokemon', 'Operações relacionadas aos Pokémon')
    .addTag('usuarios', 'Operações relacionadas aos usuários')
    .addTag('perfis', 'Operações relacionadas aos perfis de usuário')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Run database seeds in development
  if (process.env.NODE_ENV === 'development') {
    const dataSource = app.get(DataSource);
    await runSeeds(dataSource);
  }
  
  await app.listen(process.env.PORT ?? 3004);
  console.log(`Application is running on: http://localhost:${process.env.PORT ?? 3004}`);
  console.log(`Swagger documentation available at: http://localhost:${process.env.PORT ?? 3004}/api/docs`);
}
bootstrap();
