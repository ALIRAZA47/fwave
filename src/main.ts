import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateTransformInterceptor } from './modules/globals/interceptors/validate.transform.interceptor';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const jwtService = app.get(JwtService);
  const reflector = app.get(Reflector);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ValidateTransformInterceptor());
  app.useGlobalGuards(new AuthGuard(jwtService, reflector));

  // swagger
  const config = new DocumentBuilder()
    .setTitle('Book Store')
    .setDescription('The book store server')
    .setVersion('1.0')
    .addTag('books')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
