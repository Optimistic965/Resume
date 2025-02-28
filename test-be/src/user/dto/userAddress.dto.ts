import { IsString } from "class-validator";

export class UserAddressDto {
	@IsString()
	address: string;

	@IsString()
	city: string;

	@IsString()
	state: string;

	@IsString()
	country: string;

	@IsString()
	zipCode: string;
}
