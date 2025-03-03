import { useForm, SubmitHandler } from "react-hook-form";
import { useResumePage, useFormHook } from "../../hooks";
import { UserContact } from "../../types/types";

export const UserContactForm = () => {
    const {
        updateCurrent
    } = useResumePage()

    const {
        resumeInfo,
        updateEmail,
        updatePhoneNumber,
        updateFax,
        updateLinkedInLink
    } = useFormHook()

    const form = useForm<UserContact>({
        defaultValues: {
            email: resumeInfo.email,
            phoneNumber: resumeInfo.phoneNumber,
            fax: resumeInfo.fax,
            linkedInLink: resumeInfo.linkedInLink,
        }
    })
    const { register, handleSubmit, formState } = form
    const { errors } = formState;

    const onSubmit: SubmitHandler<UserContact> = (data) => {
        updatePhoneNumber(data.phoneNumber.toString())
        updateEmail(data.email)
        if(data.fax !== undefined) {updateFax(data.fax.toString())}
        if(data.linkedInLink !== undefined) {updateLinkedInLink(data.linkedInLink.toString())}
        updateCurrent('for');
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">Email :</label>
                            <span className="text-red-500">{errors.email?.message}</span>
                        </div>
                        <input placeholder="Enter valid email" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                                message: "Please enter a valid email"
                            }
                        })} />
                    </div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">Phone Number :</label>
                            <span className="text-red-500">{errors.phoneNumber?.message}</span>
                        </div>
                        <input placeholder="Enter phone number" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("phoneNumber", {
                            required: "Please provide phone number",
                            pattern: {
                                value: /^(?:\+?\d{1,3}[-.\s]?)?(?:0\d{1,3}[-.\s]?)?\d{6,10}$/,
                                message: "Prefix number with country code"
                            }
                        })} />
                    </div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <label className="text-md pt-2 pr-[2em] w-[250px]">Fax no (Optional) :</label>
                        <input placeholder="Fax no" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("fax", {
                            required: false
                        })} />
                    </div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">LinkedIn URL (Optional) :</label>
                            <span className="text-red-500">{errors.linkedInLink?.message}</span>
                        </div>
                        <input placeholder="LinkedIn url" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("linkedInLink", {
                            required: false,
                            pattern: {
                                value: /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_%]+\/?$/,
                                message: "Please enter a valid LinkedIn URL"
                            }
                        })} />
                    </div>
                </div>
                <div className="w-[40%] my-3 mx-auto flex justify-evenly">
                    <button
                        className="w-[100px] py-2 mr-4 bg-secondary-2 text-white text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer"
                        onClick={() => {
                            updateCurrent('back');
                        }}
                    >
                        Back
                    </button>
                    <button
                        className="w-[100px] py-2 mr-4 bg-secondary-2 text-white text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer"
                        type="submit"
                    >
                        Next
                    </button>
                </div>
            </form>
        </>
    )
}