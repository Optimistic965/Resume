import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authStore/authStore';
// import loaderReducer from './loaderStore/loader';
// import profilesetupReducer from './profileSetupStore/profileSetupStore';
// import investorpageReducer from './profileSetupStore/investorSetupPage';
// import startuppageReducer from './profileSetupStore/startupSetupPage'
// ...
import resumePageReducer from './pagesStore/wizard'

export const appStore = configureStore({
    reducer: {
        resumePage: resumePageReducer
        // authenticate: authReducer,
        // loader: loaderReducer,
        // setprofile: profilesetupReducer,
        // investorpage: investorpageReducer,
        // startuppage: startuppageReducer
    },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch;
export type AppStore = typeof appStore;
