import { useForm, SubmitHandler } from "react-hook-form";
// import { DevTool } from '@hookform/devtools';
import { useResumePage, useFormHook } from "../../hooks";
import { UserInfo } from "../../types/types";

export const UserInfoForm = () => {
    const {
        updateCurrent
    } = useResumePage()

    const {
        resumeInfo,
        updateProfilePic,
        updateFirstName,
        updateLastName,
        updateGender,
        updateOccupation,
        updateDOB
    } = useFormHook()

    const form = useForm<UserInfo>({
        defaultValues: {
            dob: new Date(resumeInfo.dob),
            firstName: resumeInfo.firstName,
            lastName: resumeInfo.lastName,
            occupation: resumeInfo.occupation,
            // gender: resumeInfo.gender,
            // profilePicture: resumeInfo.profileImage.localUrl? [new File([""], resumeInfo.profileImage.fileMetaD.name)] : []
        }
    })
    const { register, handleSubmit, formState } = form
    const { errors } = formState;

    const onSubmit: SubmitHandler<UserInfo> = (data) => {
        const createLocalMediaURL = (file: File | null | undefined): string | null => {
            if (!file) return null;
            return URL.createObjectURL(file);
        };

        const fileInfo = {
            localUrl: createLocalMediaURL(data.profilePicture[0] as unknown as File),
            fileMetaD: {
                name: data.profilePicture[0].name,
                size: data.profilePicture[0].size,
                type: data.profilePicture[0].type,
                lastModified: data.profilePicture[0].lastModified,
                webkitRelativePath: data.profilePicture[0].webkitRelativePath
            }
        }

        updateProfilePic(fileInfo)
        updateFirstName(data.firstName)
        updateLastName(data.lastName)
        updateGender(data.gender)
        updateOccupation(data.occupation)
        updateDOB(data.dob)

        updateCurrent('for');
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">Profile Picture :</label>
                            <span className="text-red-500">{errors.profilePicture?.message}</span>
                        </div>
                        <input type="file" className="mt-2" {...register("profilePicture", {
                            required: "Please upload a pic for profile"
                        })} />
                        
                    </div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">First Name :</label>
                            <span className="text-red-500">{errors.firstName?.message}</span>
                        </div>
                        <input placeholder="Input first name" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("firstName", {
                            required: "First name is required"
                        })} />
                    </div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">Last Name :</label>
                            <span className="text-red-500">{errors.lastName?.message}</span>
                        </div>
                        <input placeholder="Input last name"  className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("lastName", {
                            required: "Last name is required"
                        })} />
                        
                    </div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">Date of Birth :</label>
                            <span className="text-red-500">{errors.dob?.message}</span>
                        </div>
                        <input type="date" placeholder="Enter date of birth" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("dob", {
                            valueAsDate: true,
                            required: "Please select date",
                            validate: (date) => {
                                if (!date) return "Date is required";
                              
                                const selectedDate = new Date(date);
                                const today = new Date();
                                const minAllowedDate = new Date();
                                minAllowedDate.setFullYear(today.getFullYear() - 16);
                              
                                return selectedDate > minAllowedDate ? "User must be 16 years or older" : true;
                            }
                        })} />
                    </div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">Occupation :</label>
                            <span className="text-red-500">{errors.occupation?.message}</span>
                        </div>
                        <input placeholder="What's your occupation" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("occupation", {
                            required: "What's your occupation?"
                        })} />
                    </div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">Gender</label>
                            <span className="text-red-500">{errors.gender?.message}</span>
                        </div>
                        <select {...register("gender", {
                            required: "Gender can't be undefined"
                        })}>
                            <option value="">Select gender</option>
                            <option value="female">female</option>
                            <option value="male">male</option>
                        </select>
                    </div>
                </div>
                <div className="w-[40%] my-3 mx-auto flex justify-evenly">
                    <input
                        className="w-[100px] py-2 mr-4 bg-secondary-2 text-white text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer"
                        type="submit"
                        value='next'
                    />
                </div>
            </form>
            {/* <DevTool control={control} /> */}
        </>
    )
}