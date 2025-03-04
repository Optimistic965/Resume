import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 *  State management for user resume
 * 
 * 
 */

export interface filemetadata {
    webkitRelativePath: string;
    lastModified: string;
    size: number;
    name: string;
    type: string;
}
export interface file {
    localUrl: string | null;
    fileMetaD: filemetadata;
}

export interface academy {
    schoolName: string
}

export interface ResumeState {
    profileImage: any;
    firstName: string;
    lastName: string;
    dob: string;
    occupation: string;
    gender: string;
    email: string;
    phoneNumber: string;
    fax: string;
    linkedInLink: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
    academy: academy[];
}

const initialState: ResumeState = {
    firstName: "",
    lastName: "",
    dob: "",
    occupation: "",
    gender: "",
    email: "",
    phoneNumber: "",
    fax: "",
    linkedInLink: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    academy: [
        {
            schoolName: ''
        }
    ],
    profileImage: {
        localUrl: '',
        fileMetaD: {
            webkitRelativePath: '',
            lastModified: '',
            size: 0,
            name: '',
            type: '',
        },
    },
};

export const resumeStateSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        profilePic: (state, action: PayloadAction<file>) => {
            state.profileImage = action.payload;
        },

        linkedInLink: (state, action: PayloadAction<string>) => {
            state.linkedInLink = action.payload;
        },

        firstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },

        lastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },

        dob: (state, action: PayloadAction<string>) => {
            state.dob = action.payload;
        },

        occupation: (state, action: PayloadAction<string>) => {
            state.occupation = action.payload;
        },

        gender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload;
        },

        email: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },

        phoneNumber: (state, action: PayloadAction<string>) => {
            state.phoneNumber = action.payload;
        },

        fax: (state, action: PayloadAction<string>) => {
            state.fax = action.payload;
        },

        address: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },

        city: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
        },

        country: (state, action: PayloadAction<string>) => {
            state.country = action.payload;
        },

        zipcode: (state, action: PayloadAction<string>) => {
            state.zipcode = action.payload;
        },

        academy: (state, action: PayloadAction<academy>) => {
            state.academy.push(action.payload);
        },

        clearAcademy: (state) => {
            state.academy = []
        },

        setState: (state, action: PayloadAction<string>) => {
            state.state = action.payload;
        },

        clearStore: () => initialState
    },
});

export const {
    academy,
    address,
    city,
    country,
    dob,
    email,
    fax,
    firstName,
    lastName,
    gender,
    linkedInLink,
    occupation,
    phoneNumber,
    profilePic,
    setState,
    zipcode,
    clearAcademy,
    clearStore
} = resumeStateSlice.actions;

export default resumeStateSlice.reducer;