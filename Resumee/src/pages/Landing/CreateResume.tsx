// import { useEffect, useState } from "react"; useFormHook
// import { useForm } from "react-hook-form"
import { useEffect } from "react";
import { UserAcademyForm, UserAddressForm, UserContactForm, UserInfoForm } from "../../components/form";
import { useResumePage, useFormHook } from "../../hooks"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import View from "../../components/resumeview/View";
// import { IFormInput } from "../../types/types";
export const CreateResume = () => {
    const {
        resumePageInfo: { current },
        updateCurrent
    } = useResumePage()

    const {
        resumeInfo
    } = useFormHook()

    useEffect(() => {
        if(current === 'review page') {
            console.log(resumeInfo)
        }
    }, [current])

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
                <section className="overflow-y-scroll p-7 rounded-3xl">
                    {/* <OwnForm /> */}
                    {current === 'user info' &&
                        <UserInfoForm />}
                    {current === 'user contact' &&
                        <UserContactForm />}
                    {current === 'user address' &&
                        <UserAddressForm />}
                    {current === 'user academy' &&
                        <UserAcademyForm />}
                    {current === 'review page' &&
                        <View resourceType="localState"/>}
                </section>
            </section>
        </main>
    )
}
