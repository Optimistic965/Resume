// import { useEffect, useState } from "react"; useFormHook
// import { useForm } from "react-hook-form"
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
// import { toast } from "react-toastify";
import axios from "axios";
import { UserAcademyForm, UserAddressForm, UserContactForm, UserInfoForm } from "../../components/form";
import { useResumePage, useFormHook } from "../../hooks"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import View from "../../components/resumeview/View";
// import { IFormInput } from "../../types/types";
export const CreateResume = () => {
    const location = useLocation()
    const {
        resumePageInfo: { current },
        updateCurrent
    } = useResumePage()

    const {
        resumeInfo,
        updateAddress,
        updateCity,
        updateCountry,
        updateDOB,
        updateEmail,
        updateFax,
        updateFirstName,
        updateGender,
        updateLastName,
        updateLinkedInLink,
        updateOccupation,
        updatePhoneNumber,
        updateState,
        updateZipcode
    } = useFormHook()

    const navigate = useNavigate()

    useEffect(() => {
        const getResumeInfo = async (id: string) => {
            try {
                const res = await axios.get(`http://localhost:3000/user/${id}`);            
                if(res.status !== 400) {
                    const userinfo = res.data
                    updateDOB(userinfo.dob)
                    updateGender(userinfo.gender)
                    updateLastName(userinfo.lastName)
                    updateFirstName(userinfo.firstName)
                    updateOccupation(userinfo.occupation)
                    updateAddress(userinfo.address.address)
                    updateCity(userinfo.address.state)
                    updateState(userinfo.address.state)
                    updateCountry(userinfo.address.country)
                    updateZipcode(userinfo.address.zipcode)
                    updateEmail(userinfo.contact.email)
                    updateFax(userinfo.contact.faxNo)
                    updateLinkedInLink(userinfo.contact.linkedInUrl)
                    updatePhoneNumber(userinfo.contact.phoneNumber)
                }
            } catch(error: any) {
              let err = error.response
              console.log(err)
            //   if(Array.isArray(err.data.message)) {
            //       err.data.message.forEach((msg: string) => {
            //           toast(msg, {
            //               type: "error"
            //           })
            //       })
            //   } else {
            //     toast(err.data.message, {
            //       type: "error"
            //     })
            //   }
              navigate('/')
            }
        }
        if(location.pathname === "/edit-resume") {
            const queryParams = new URLSearchParams(location.search);
            const id = queryParams.get("id");
            if(id) {
                getResumeInfo(id)
            }          
        }
    }, [])

    useEffect(() => {
        if(current === 'review page') {
            console.log(resumeInfo)
        }
    }, [current])

    return (
        <>
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
                            <View />}
                    </section>
                </section>
            </main>
        </>
    )
}
