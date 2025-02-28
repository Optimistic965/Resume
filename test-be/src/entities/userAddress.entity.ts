import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserAddressTB {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "varchar",
		nullable: false,
		length: 255,
	})
	address: string;

	@Column({
		type: "varchar",
		nullable: false,
		length: 55,
	})
	city: string;

	@Column({
		type: "varchar",
		nullable: false,
		length: 55,
	})
	state: string;

	@Column({
		type: "varchar",
		nullable: false,
		length: 55,
	})
	country: string;

	@Column({
		type: "varchar",
		nullable: false,
		length: 10,
	})
	zipCode: string;
}
