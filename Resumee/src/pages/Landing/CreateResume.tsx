import { useResumePage } from "../../hooks/usePageHooks"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
export const CreateResume = () => {
    const {
        resumePageInfo: { current },
        updateCurrent
    } = useResumePage()

    return (
        <main>
            <section>
                {current !== 'personal info' && (
                    <>
                        <KeyboardBackspaceIcon
                            id="backIcon"
                            onClick={() => {
                                updateCurrent('back');
                            }}
                        />
                        <p>Resume Creation</p>
                    </>
                )}
                {current === 'user info' && <div>User Info</div>}
                {current === 'user contact' && <div>User Contact</div>}
                {current === 'user address' && <div>User Address</div>}
                {current === 'user academy' && <div>User Academy</div>}
                {current === 'review page' && <div>User Review</div>}
            </section>
        </main>
    )
}
