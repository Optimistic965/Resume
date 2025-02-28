import { UserContactDto } from "./userContact.dto";
import { UserAddressDto } from "./userAddress.dto";
import { UserAcademicsDto } from "./userAcademy.dto";
import { UserInfoDto } from "./userInfo.dto";
import { Type } from "class-transformer";
import { IsArray, ValidateNested } from "class-validator";

export class CreateUserDto {
	@ValidateNested()
	@Type(() => UserInfoDto)
	userInfo: UserInfoDto;

	@ValidateNested()
	@Type(() => UserContactDto)
	contact: UserContactDto;

	@ValidateNested()
	@Type(() => UserAddressDto)
	address: UserAddressDto;

	@ValidateNested({ each: true })
	@Type(() => UserAcademicsDto)
	@IsArray()
	academics: UserAcademicsDto[];
}
