import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/**
 *  resume creation pages => user info, user contact, user address,
 *                                  user academy, Review page
 *  concept of page switch => back, current, next
 */

export interface resumeSetPage {
    back: string;
    current: string;
    next: string;
}

const initialState: resumeSetPage = {
    back: '',
    current: 'user info',
    next: 'user contact',
};

export const resumePageSlice = createSlice({
    name: 'resumePage',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<resumeSetPage>) => {
            state.next = action.payload.next;
            state.current = action.payload.current;
            state.back = action.payload.back;
        },
    },
});

export const { updateState } = resumePageSlice.actions;

export default resumePageSlice.reducer;