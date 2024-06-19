import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.enableCors({
    origin: ['https://localhost:3000', 'https://localhost:8081', 'https://localhost:8000',
              'https://192.168.0.108:3000', 'https://192.168.0.108:8081', 'https://192.168.0.108:8000'],
  });
  await app.listen(3000);
}
bootstrap();
