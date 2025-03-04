import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserContactTB {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "varchar",
		nullable: false,
		unique: true,
		length: 255,
	})
	email: string;

	@Column({
		type: "varchar",
		nullable: false,
		// length: 13,
	})
	phoneNumber: number;

	@Column({
		type: "varchar",
		nullable: true,
		length: 13,
	})
	faxNo: number;

	@Column({
		type: "varchar",
		nullable: true,
		length: 255,
	})
	linkedInUrl: string;
}
