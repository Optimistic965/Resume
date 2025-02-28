export type ResumeCardTypes = {
    id: number,
    firstName: string,
    lastName: string,
    occupation: string,
    gender: string,
    profilePicture: string
}

enum GenderEnum {
    female = "female",
    male = "male",
}

// interface Academy {
//     schoolName: string,
// }

export interface IFormInput {
    profilePicture: string,
    firstName: string,
    lastName: string,
    dob: string,
    occupation: string,
    gender: GenderEnum,
    email: string,
    phoneNumber: number,
    fax?: number,
    linkedInLink?: string,
    address: string,
    city: string,
    state: string,
    country: string,
    zipcode: string,
    schoolName: string
}