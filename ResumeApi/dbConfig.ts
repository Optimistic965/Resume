// import * as dotenv from "dotenv";
import { User } from "src/entities/user.entity";
import { UserAcademicsTB } from "src/entities/userAcademy.entity";
import { UserAddressTB } from "src/entities/userAddress.entity";
import { UserContactTB } from "src/entities/userContact.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig: PostgresConnectionOptions = {
	url: "postgresql://resumee_store_user:iR3WJJs5iutUpkdcfQXn53eJwe39wVPE@dpg-cuvj1vl6l47c738te9ag-a.singapore-postgres.render.com/resumee_store?ssl=true",
	type: "postgres",
	synchronize: true,
	port: 5432,
	entities: [User, UserContactTB, UserAcademicsTB, UserAddressTB],
	dropSchema: true,
	logging: true,
};
