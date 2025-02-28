import { Type } from "class-transformer";
import {
	IsString,
	IsInt,
	IsOptional,
	MaxLength,
	// MinLength,
} from "class-validator";

export class UserContactDto {
	@IsString()
	@MaxLength(50)
	email: string;

	@IsInt()
	@Type(() => Number)
	// @MinLength(13)
	phoneNumber: number;

	@IsInt()
	@Type(() => Number)
	@MaxLength(13)
	@IsOptional()
	faxNo?: number;

	@IsString()
	@IsOptional()
	@MaxLength(255)
	linkedInUrl?: string;
}
