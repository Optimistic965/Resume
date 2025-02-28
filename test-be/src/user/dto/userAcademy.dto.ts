import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserAcademicsDto {
	@IsInt()
	@IsOptional()
	id: number;

	@IsString()
	@IsNotEmpty()
	schoolName: string;
}
