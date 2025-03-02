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

export interface Academy {
    schoolName: string
}

export interface UserInfo {
    profilePicture: string,
    firstName: string,
    lastName: string,
    dob: string,
    occupation: string,
    gender: GenderEnum,
}

export interface UserContact {
    email: string,
    phoneNumber: number,
    fax?: number,
    linkedInLink?: string,
}

export interface UserAddress {
    address: string,
    city: string,
    state: string,
    country: string,
    zipcode: string,
}