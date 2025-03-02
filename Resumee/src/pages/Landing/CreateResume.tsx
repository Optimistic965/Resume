// import { useEffect, useState } from "react"; useFormHook
import { useForm, SubmitHandler } from "react-hook-form"
// import OwnForm from "../../components/form/OwnForm";
import { DevTool } from '@hookform/devtools'
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

    const form = useForm<IFormInput>()
    const { control, register, handleSubmit, formState } = form
    const { errors } = formState;
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log('formResponse', data)

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
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <section className="max-h-[60vh] overflow-y-scroll p-7 rounded-3xl backdrop-blur-xs shadow-lg">
                        {/* <OwnForm /> */}
                        {current === 'user info' &&
                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                <div>
                                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center flex-col">
                                        <label className="text-md pt-2 pr-[2em] w-[250px]">Profile Picture :</label>
                                        <input type="file" className="mt-2" {...register("profilePicture", {
                                            required: "Please upload a pic for profile"
                                        })} />
                                        <p className="text-red-500">{errors.profilePicture?.message}</p>
                                    </div>
                                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                        <label className="text-md pt-2 pr-[2em] w-[250px]">First Name :</label>
                                        <input placeholder="Input first name" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("firstName", {
                                            required: "First name is required"
                                        })} />
                                        <p className="text-red-500">{errors.firstName?.message}</p>
                                    </div>
                                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                        <label className="text-md pt-2 pr-[2em] w-[250px]">Last Name :</label>
                                        <input placeholder="Input last name"  className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("lastName", {
                                            required: "Last name is required"
                                        })} />
                                        <p className="text-red-500">{errors.lastName?.message}</p>
                                    </div>
                                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                        <label className="text-md pt-2 pr-[2em] w-[250px]">Date of Birth :</label>
                                        <input placeholder="Enter date of birth" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("dob", {
                                            required: "Please select date"
                                        })} />
                                        <p className="text-red-500">{errors.dob?.message}</p>
                                    </div>
                                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                        <label className="text-md pt-2 pr-[2em] w-[250px]">Occupation :</label>
                                        <input placeholder="What's your occupation" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("occupation", {
                                            required: "What's your occupation?"
                                        })} />
                                        <p className="text-red-500">{errors.occupation?.message}</p>
                                    </div>
                                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                        <label className="text-md pt-2 pr-[2em] w-[250px]">Gender</label>
                                        <select {...register("gender", {
                                            required: "Gender can't be undefined"
                                        })}>
                                            <option value="female">female</option>
                                            <option value="male">male</option>
                                        </select>
                                        <p className="text-red-500">{errors.gender?.message}</p>
                                    </div>
                                </div>
                                <button className="w-[100px] py-2 mr-4 bg-secondary-2 text-white text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer"
                                    type="submit">
                                    Submit
                                </button>
                            </form>}
                        {current === 'user contact' &&
                            <div>
                                <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                    <label className="text-md pt-2 pr-[2em] w-[250px]">Email :</label>
                                    <input placeholder="Enter valid email" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                                            message: "Please enter a valid email"
                                        }
                                    })} />
                                    <p className="text-red-500">{errors.email?.message}</p>
                                </div>
                                <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                    <label className="text-md pt-2 pr-[2em] w-[250px]">Phone Number :</label>
                                    <input placeholder="Enter phone number" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("phoneNumber", {
                                        required: "Please provide phone number",
                                        pattern: {
                                            value: /^(?:\+?\d{1,3}[-.\s]?)?(?:0\d{1,3}[-.\s]?)?\d{6,10}$/,
                                            message: "Prefix number with country code"
                                        }
                                    })} />
                                    <p className="text-red-500">{errors.phoneNumber?.message}</p>
                                </div>
                                <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                    <label className="text-md pt-2 pr-[2em] w-[250px]">Fax no (Optional) :</label>
                                    <input placeholder="Fax no" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("fax", {
                                        required: false
                                    })} />
                                </div>
                                <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                    <label className="text-md pt-2 pr-[2em] w-[250px]">LinkedIn URL (Optional) :</label>
                                    <input placeholder="LinkedIn url" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("linkedInLink", {
                                        required: false,
                                        pattern: {
                                            value: /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_%]+\/?$/,
                                            message: "Please enter a valid LinkedIn URL"
                                        }
                                    })} />
                                    <p className="text-red-500">{errors.linkedInLink?.message}</p>
                                </div>
                            </div>}
                        {current === 'user address' &&
                            <div>
                                <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                    <label className="text-md pt-2 pr-[2em] w-[250px]">Address :</label>
                                    <input placeholder="Home address" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("address", {
                                        required: "Home address"
                                    })} />
                                    <p className="text-red-500">{errors.address?.message}</p>
                                </div>
                                <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                    <label className="text-md pt-2 pr-[2em] w-[250px]">City :</label>
                                    <input placeholder="City" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("city", {
                                        required: "What city do you reside?"
                                    })} />
                                    <p className="text-red-500">{errors.city?.message}</p>
                                </div>
                                <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                    <label className="text-md pt-2 pr-[2em] w-[250px]">State :</label>
                                    <input placeholder="State" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("state", {
                                        required: "Address state"
                                    })} />
                                    <p className="text-red-500">{errors.state?.message}</p>
                                </div>
                                <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                    <label className="text-md pt-2 pr-[2em] w-[250px]">Country :</label>
                                    <input placeholder="Country" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("country", {
                                        required: "Please input your country"
                                    })} />
                                    <p className="text-red-500">{errors.country?.message}</p>
                                </div>
                                <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                                    <label className="text-md pt-2 pr-[2em] w-[250px]">Zip Code :</label>
                                    <input placeholder="Zip code" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("zipcode", {
                                        required: "Locality zip code is required"
                                    })} />
                                    <p className="text-red-500">{errors.zipcode?.message}</p>
                                </div>
                            </div>}
                        {current === 'user academy' &&
                            }
                        {current === 'review page' && <div>User Review</div>}
                    </section>
                    <div className="w-[40%] my-3 mx-auto flex justify-evenly">
                        {(current !== 'review page' && current !== 'user info') && (
                            <div
                                id="back-btn"
                                className="w-[100px] py-2 mr-4 bg-secondary-2 text-white text-center text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer"
                                onClick={() => {
                                    updateCurrent('back');
                                }}
                            >
                                Back
                            </div>
                        )}
                        {current !== 'review page' &&
                            <div
                                id="next-btn"
                                className="w-[100px] py-2 mr-4 bg-secondary-2 text-white text-center text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer"
                                onClick={() => {
                                    updateCurrent('for');
                                }}
                            >
                                Next
                            </div>}
                    </div>
                    {current === 'review page' &&
                        <>
                            <div>
                                <p className="text-red-500">{errors.profilePicture?.message}</p>
                            </div>
                            <button className="w-[100px] py-2 mr-4 bg-secondary-2 text-white text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer"
                                type="submit">
                                Submit
                            </button>
                        </>}
                </form>
                <DevTool control={control} />
            </section>
        </main>
    )
}
