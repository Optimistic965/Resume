import { IsDateString, IsString } from "class-validator";

export class UserInfoDto {
	@IsString()
	profilePicture: string;

	@IsString()
	firstName: string;

	@IsString()
	lastName: string;

	@IsDateString()
	dob: Date;

	@IsString()
	occupation: string;

	@IsString()
	gender: string;
}
