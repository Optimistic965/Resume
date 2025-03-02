import { useForm, SubmitHandler } from "react-hook-form";
import { useResumePage } from "../../hooks";
import { UserInfo } from "../../types/types";

export const UserInfoForm = () => {
    const {
        updateCurrent
    } = useResumePage()
    const form = useForm<UserInfo>()
    const { register, handleSubmit, formState } = form
    const { errors } = formState;
    const onSubmit: SubmitHandler<UserInfo> = (data) => console.log('formResponse', data)
    return (
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
            <div className="w-[40%] my-3 mx-auto flex justify-evenly">
                <button
                    className="w-[100px] py-2 mr-4 bg-secondary-2 text-white text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer"
                    type="submit"
                    onClick={() => {
                        updateCurrent('for');
                    }}
                >
                    Next
                </button>
            </div>
        </form>
    )
}