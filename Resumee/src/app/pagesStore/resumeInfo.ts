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
    localUrl: string;
    fileMetaD: filemetadata;
}

export interface academy {
    schoolName: string
}

export interface ResumeState {
    profileImage: file;
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
    academy: [],
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

export const profileStateSlice = createSlice({
    name: 'profilesetup',
    initialState,
    reducers: {
        setProfilePic: (state, action: PayloadAction<file>) => {
            state.profileImage = action.payload;
        },

        setProfileLink: (state, action: PayloadAction<string>) => {
            state.profileLink = action.payload;
        },

        setBiography: (state, action: PayloadAction<string>) => {
            state.biography = action.payload;
        },

        setProofOfAccreditation: (
            state,
            action: PayloadAction<filemetadata>
        ) => {
            state.proofOfAccreditation = action.payload;
        },

        setPortfolioDocs: (state, action: PayloadAction<filemetadata>) => {
            state.portfolioDocs = action.payload;
        },

        setPerferredIndustry: (state, action: PayloadAction<string>) => {
            state.prefIndustry = action.payload;
        },

        startUpStage: (state, action: PayloadAction<string>) => {
            state.startupStage = action.payload;
        },

        setInvestmentSize: (state, action: PayloadAction<string>) => {
            state.investmentSize = action.payload;
        },

        setInvestmentGoal: (state, action: PayloadAction<string>) => {
            state.investmentGoal = action.payload;
        },

        setNotableInvestment: (state, action: PayloadAction<string>) => {
            state.notableInvestment = action.payload;
        },

        investorType: (state, action: PayloadAction<string>) => {
            state.investorType = action.payload;
        },

        setStartupDescription: (state, action: PayloadAction<string>) => {
            state.startupDescrp = action.payload;
        },

        setWebsiteLink: (state, action: PayloadAction<string>) => {
            state.websiteLink = action.payload;
        },

        setFoundingDate: (state, action: PayloadAction<string>) => {
            state.foundingDate = action.payload;
        },

        setFundingStage: (state, action: PayloadAction<string>) => {
            state.fundingStage = action.payload;
        },

        setEmployeeCount: (state, action: PayloadAction<number>) => {
            state.employeeCount = action.payload;
        },

        setRevenue: (state, action: PayloadAction<string>) => {
            state.revenue = action.payload;
        },
    },
});

export const {
    setBiography,
    setEmployeeCount,
    setFoundingDate,
    setFundingStage,
    setInvestmentGoal,
    setInvestmentSize,
    setNotableInvestment,
    setPerferredIndustry,
    setProfilePic,
    setProfileLink,
    setRevenue,
    setStartupDescription,
    setWebsiteLink,
    investorType,
    startUpStage,
    setProofOfAccreditation,
    setPortfolioDocs,
} = profileStateSlice.actions;

export default profileStateSlice.reducer;