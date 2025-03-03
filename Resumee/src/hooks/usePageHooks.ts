import { useAppDispatch, useAppSelector } from './appHooks/hooks';
import { updateState } from '../app/pagesStore/wizard';
import { resumeSetPage as pageType } from '../app/pagesStore/wizard';

export const useResumePage = () => {
    const dispatch = useAppDispatch();
    const resumePageInfo = useAppSelector((state) => state.resumePage);

    const pageNames = [
        'user info',
        'user contact',
        'user address',
        'user academy',
        'review page',
    ];

    const updatePageInfo = (obj: pageType) => {
        dispatch(updateState(obj))
    };

    const updateCurrent = (direction: string) => {
        /**
         * direction can either be "for" as in "forward" {means make current to be value of next and then update next}
         *      or "back" as in "backward" {means make current to be value of back and update back}
         * */
        for (let i = 0; i < pageNames.length; i++) {
            if (direction === 'for') {
                if (resumePageInfo.next !== '') {
                    if (resumePageInfo.current === pageNames[i]) {
                        let obj
                        if (pageNames[i + 2] !== undefined) {
                            obj = {
                                back: pageNames[i],
                                current: pageNames[i+1],
                                next: pageNames[i+2]
                            }
                        } else {
                            obj = {
                                back: pageNames[i],
                                current: pageNames[i+1],
                                next: '',
                            };
                        }
                        updatePageInfo(obj);
                    }
                }
                // else {
                //     submitProfileInfo();
                //     if (resumePageInfo.current === 'account pending') {
                //         console.log('redirect to dashboard')
                //     }
                // }
            } else {
                if (resumePageInfo.back !== '') {
                    if (resumePageInfo.current === pageNames[i]) {
                        let obj
                        if (pageNames[i - 2] !== undefined) {
                            obj = {
                                next: pageNames[i],
                                current: pageNames[i-1],
                                back: pageNames[i - 2],
                            };
                        } else {
                            obj = {
                                next: pageNames[i],
                                current: pageNames[i-1],
                                back: '',
                            };
                        }
                        updatePageInfo(obj);
                    }
                }
            }
        }
    }

    const jumpTo = (page: string) => {
        const pageIndex = pageNames.indexOf(page)
        if (pageIndex !== -1) {
            let obj
            if (pageIndex === 0) {
                obj = {
                    back: '',
                    current: pageNames[pageIndex],
                    next: pageNames[pageIndex + 1],
                };
            } else {
               obj = {
                   back: pageNames[pageIndex - 1],
                   current: pageNames[pageIndex],
                   next: pageNames[pageIndex + 1],
               }; 
            }
            updatePageInfo(obj);
        }
    }

    return {
        resumePageInfo,
        updateCurrent,
        jumpTo,
    };
}