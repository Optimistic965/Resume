import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Put,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Controller("user")
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	getAllUsers() {
		return this.userService.getAllUsers();
	}

	@Get(":id")
	getUserById(@Param("id", ParseIntPipe) id: number) {
		return this.userService.getUserById(id);
	}

	@Post()
	createUser(@Body() requestBody: CreateUserDto) {
		return this.userService.createUser(requestBody);
	}

	@Put(":id")
	updateUserById(
		@Param("id", ParseIntPipe) id: number,
		@Body() requestBd: UpdateUserDto,
	) {
		return this.userService.updateUserById(id, requestBd);
	}

	@Delete(":id")
	removeUserById(@Param("id", ParseIntPipe) id: number) {
		return this.userService.deleteUserById(id);
	}
}
