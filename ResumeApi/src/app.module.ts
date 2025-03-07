import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { pgConfig } from "dbConfig";
import { UserController } from "./user/user.controller";
import { UserService } from "./user/user.service";
import { UserModule } from "./user/user.module";

@Module({
	imports: [
		UserModule,
		TypeOrmModule.forRootAsync({
			useFactory: () => pgConfig,
		}),
	],
	controllers: [AppController, UserController],
	providers: [AppService, UserService],
})
export class AppModule {}
