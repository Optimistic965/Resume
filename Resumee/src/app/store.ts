import { configureStore } from '@reduxjs/toolkit';
import resumePageReducer from './pagesStore/wizard'
import resumeReducer from './pagesStore/resumeInfo'

export const appStore = configureStore({
    reducer: {
        resumePage: resumePageReducer,
        resume: resumeReducer
    },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export type AppStore = typeof appStore;
