import { filemetadata } from "../app/pagesStore/resumeInfo"

export type ResumeCardTypes = {
    id: number,
    firstName: string,
    lastName: string,
    occupation: string,
    gender: string,
    profilePicture: string
}

enum GenderEnum {
    none = "",
    female = "female",
    male = "male",
}

export interface Academy {
    academy: {
        schoolName: string
    }[]
}

export interface UserInfo {
    profilePicture: filemetadata[],
    firstName: string,
    lastName: string,
    dob: Date,
    occupation: string,
    gender: GenderEnum,
}

export interface UserContact {
    email: string,
    phoneNumber: string,
    fax?: string,
    linkedInLink?: string,
}

export interface UserAddress {
    address: string,
    city: string,
    state: string,
    country: string,
    zipcode: string,
}

export interface ResponseType {
    id: number,
    firstName: string,
    lastName: string,
    dob: string,
    occupation: string,
    gender: string,
    profilePicture: string,
    contact: {
        id: number,
        email: string,
        phoneNumber: string,
        fax?: string,
        linkedInLink?: string,
    },
    address: {
        id: number,
        address: string,
        city: string,
        state: string,
        country: string,
        zipcode: string,
    },
    academics: {
        id: number,
        schoolName: string,
        userId: number
    }[]
}