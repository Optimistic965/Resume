import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true,
		}),
	);
	app.enableCors({
		origin: ['http://localhost:5173',], // Allowed origins
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
		allowedHeaders: 'Content-Type, Authorization', // Allowed headers
		credentials: true, // Allow sending cookies or authentication headers
	})
	await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
	console.log(err);
});
