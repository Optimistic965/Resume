import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserAcademicsTB {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "varchar",
		nullable: false,
		length: 255,
	})
	schoolName: string;

	@ManyToOne(() => User, (user) => user.academics, { onDelete: "CASCADE" })
	@JoinColumn({ name: "userId" }) // ✅ Ensures only userId is stored
	user: User;

	@Column()
	userId: number; // ✅ Stores only the userId, preventing full object expansion
}
