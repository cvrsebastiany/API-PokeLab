import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { runSeeds } from './database/seeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for the React frontend
  app.enableCors({
    origin: 'http://localhost:5173', // Vite default port
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Run database seeds in development
  if (process.env.NODE_ENV === 'development') {
    const dataSource = app.get(DataSource);
    await runSeeds(dataSource);
  }
  
  await app.listen(process.env.PORT ?? 3004);
}
bootstrap();
