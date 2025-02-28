import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserAcademicsTB } from "src/entities/userAcademy.entity";
import { UserAddressTB } from "src/entities/userAddress.entity";
import { UserContactTB } from "src/entities/userContact.entity";
import { User } from "src/entities/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			User,
			UserContactTB,
			UserAddressTB,
			UserAcademicsTB,
		]),
	],
	controllers: [UserController],
	providers: [UserService],
	exports: [TypeOrmModule],
})
export class UserModule {}
