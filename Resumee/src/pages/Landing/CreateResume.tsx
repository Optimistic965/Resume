// import { useEffect, useState } from "react"; useFormHook
import { useForm } from "react-hook-form"
import { UserAcademyForm, UserAddressForm, UserContactForm, UserInfoForm } from "../../components/form";
import { useResumePage } from "../../hooks"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import { IFormInput } from "../../types/types";
export const CreateResume = () => {
    const {
        resumePageInfo: { current },
        updateCurrent
    } = useResumePage()

    // const [school, setSchool] = useState('')

    // const {
    //     resumeInfo,
    //     addAcademy,
    //     updateFirstName,
    //     updateDOB,
    //     updateOccupation,
    //     updateGender,
    //     updateEmail,
    //     updatePhoneNumber,
    //     updateFax,
    //     updateAddress,
    //     updateCity,
    //     updateState,
    //     updateCountry,
    //     updateZipCode,
    // } = useFormHook()

    // const form = useForm<IFormInput>()
    // const { control, register, handleSubmit} = form
    // const { errors } = formState;
    // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log('formResponse', data)

    return (
        <main className="lg:w-[60%] mx-auto h-[80vh] overflow-y-scroll">
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
                <section className="max-h-[60vh] overflow-y-scroll p-7 rounded-3xl backdrop-blur-xs shadow-lg">
                    {/* <OwnForm /> */}
                    {current === 'user info' &&
                        <UserInfoForm />}
                    {current === 'user contact' &&
                        <UserContactForm />}
                    {current === 'user address' &&
                        <UserAddressForm />}
                    {current === 'user academy' &&
                        <UserAcademyForm />}
                    {current === 'review page' && <div>User Review</div>}
                </section>
            </section>
        </main>
    )
}
