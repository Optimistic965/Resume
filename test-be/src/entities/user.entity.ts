import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToOne,
	JoinColumn,
	OneToMany,
} from "typeorm";
import { UserContactTB } from "./userContact.entity";
import { UserAddressTB } from "./userAddress.entity";
import { UserAcademicsTB } from "./userAcademy.entity";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "varchar",
		nullable: false,
		length: 255,
	})
	profilePicture: string;

	@Column({
		type: "varchar",
		nullable: false,
		length: 255,
	})
	firstName: string;

	@Column({
		type: "varchar",
		nullable: false,
		length: 255,
	})
	lastName: string;

	@Column({
		type: "date",
		nullable: false,
	})
	dob: Date;

	@Column({
		type: "varchar",
		nullable: false,
		length: 55,
	})
	occupation: string;

	@Column({
		type: "varchar",
		nullable: false,
		length: 7,
	})
	gender: string;

	@OneToOne(() => UserContactTB, { cascade: true, onDelete: "CASCADE" })
	@JoinColumn()
	contact: UserContactTB;

	@OneToOne(() => UserAddressTB, { cascade: true, onDelete: "CASCADE" })
	@JoinColumn()
	address: UserAddressTB;

	@OneToMany(() => UserAcademicsTB, (academics) => academics.user, {
		cascade: true,
	})
	academics: UserAcademicsTB[];
}
