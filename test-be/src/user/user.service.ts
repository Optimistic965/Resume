import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserContactTB } from "src/entities/userContact.entity";
import { UserAddressTB } from "src/entities/userAddress.entity";
import { UserAcademicsTB } from "src/entities/userAcademy.entity";
import { UpdateUserDto } from "./dto/updateUser.dto";
// import { UserAcademicsDto } from "./dto/userAcademy.dto";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>,
		@InjectRepository(UserContactTB)
		private contactRepository: Repository<UserContactTB>,
		@InjectRepository(UserAddressTB)
		private addressRepository: Repository<UserAddressTB>,
		@InjectRepository(UserAcademicsTB)
		private academyRepository: Repository<UserAcademicsTB>,
	) {}
	async getAllUsers() {
		return await this.userRepository.find();
	}

	async getUserById(id: number) {
		const userInfo = await this.userRepository.findOne({
			where: {
				id: id,
			},
			relations: ["contact", "address", "academics"],
		});

		if (!userInfo) {
			throw new NotFoundException("User not found");
		}

		return userInfo;
	}

	public async createUser(obj: CreateUserDto) {
		const { academics, address, contact, userInfo } = obj;
		const regUser = await this.contactRepository.findOne({
			where: {
				email: contact.email,
			},
		});

		if (regUser) {
			throw new NotFoundException("User with mail already exist");
		}

		// Create user entity
		const user = this.userRepository.create({ ...userInfo });

		// Save related entities first
		user.contact = await this.contactRepository.save(contact);
		user.address = await this.addressRepository.save(address);

		// Save user first to get an ID
		const savedUser = await this.userRepository.save(user);

		// Ensure academics array is not empty before saving
		if (academics?.length) {
			const academicsEntities = academics.map((academic) =>
				this.academyRepository.create({
					...academic,
					userId: savedUser.id, // ✅ Assign the saved user to each academic record
				}),
			);
			await this.academyRepository.save(academicsEntities);

			// Assign academics to savedUser before returning
			savedUser.academics = academicsEntities;
		}

		return savedUser;
	}

	async updateUserById(id: number, obj: UpdateUserDto) {
		const { academics, address, contact, userInfo } = obj;

		// Find user with relations
		const user = await this.userRepository.findOne({
			where: { id },
			relations: ["contact", "address", "academics"],
		});

		if (!user) {
			throw new NotFoundException("User not found");
		}

		// Ensure all academic entries have an ID
		const hasMissingId = academics?.some((school) => school.id === undefined);
		if (hasMissingId) {
			throw new Error("Academics array should contain id field");
		}

		// Update each academic record using Promise.all()
		if (academics?.length) {
			await Promise.all(
				academics.map(async (academic) => {
					return this.academyRepository.update(academic.id, academic);
				}),
			);
		}

		// Update main user fields
		await this.userRepository.update(id, { ...userInfo });

		// Update related entities using save() to ensure proper relationships
		if (address) {
			await this.addressRepository.save({ ...user.address, ...address });
		}
		if (contact) {
			await this.contactRepository.save({ ...user.contact, ...contact });
		}

		return `User with id ${id} updated successfully`;

		return `U want to update user with id ${id} resource`;
	}

	async deleteUserById(id: number) {
		const user = await this.userRepository.findOne({
			where: { id: id },
			relations: ["contact", "address", "academics"], // Ensure we load related entities
		});

		if (!user) {
			throw new NotFoundException("User not found");
		}

		// Manually remove related entities
		if (user.contact) {
			await this.contactRepository.delete(user.contact.id);
		}

		if (user.address) {
			await this.addressRepository.delete(user.address.id);
		}

		if (user.academics.length > 0) {
			await this.academyRepository.delete({ user: { id: id } });
		}

		// Finally, delete the user
		await this.userRepository.delete(id);

		return { message: "user deleted" };
	}
}
