import { useForm, SubmitHandler } from "react-hook-form"
import OwnForm from "../../components/form/OwnForm";
import { useResumePage } from "../../hooks/usePageHooks"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IFormInput } from "../../types/types";
export const CreateResume = () => {
    const {
        resumePageInfo: { current },
        updateCurrent
    } = useResumePage()

    const { handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return (
        <main className="w-[60%] mx-auto h-[80vh] overflow-y-scroll">
            <section>
                {current !== 'user info' && (
                    <>
                        <KeyboardBackspaceIcon
                            id="backIcon"
                            onClick={() => {
                                updateCurrent('back');
                            }}
                            className="cursor-pointer"
                        />
                        <p className="text-xl uppercase">{current}</p>
                    </>
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section className="max-h-[60vh] overflow-y-scroll p-7 rounded-3xl backdrop-blur-xs shadow-lg">
                        <OwnForm />
                    </section>
                    <div className="w-[40%] my-3 mx-auto flex justify-evenly">
                        {(current !== 'review page' && current !== 'user info') && (
                            <button
                                id="back-btn"
                                className="w-[100px] py-2 mr-4 bg-secondary-2 text-white text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer"
                                onClick={() => {
                                    updateCurrent('back');
                                }}
                            >
                                Back
                            </button>
                        )}
                        {current !== 'review page' &&
                            <button
                                id="next-btn"
                                className="w-[100px] py-2 mr-4 bg-secondary-2 text-white text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer"
                                onClick={() => {
                                    updateCurrent('for');
                                }}
                            >
                                Next
                            </button>}
                        {current === 'review page' && <input className="w-[100px] py-2 mr-4 bg-secondary-2 text-white text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer" type="submit" value="Submit" />}
                    </div>
                </form>
            </section>
        </main>
    )
}
