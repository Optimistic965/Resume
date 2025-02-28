import { useForm } from "react-hook-form"
import { useResumePage, useFormHook } from "../../hooks"
import { IFormInput } from "../../types/types"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

export default function OwnForm() {
    const { register } = useForm<IFormInput>()
    const [school, setSchool] = useState('')

    const {
        resumePageInfo: { current }
    } = useResumePage()

    const {
        resumeInfo,
        addAcademy,
        updateFirstName,
        updateDOB,
        updateOccupation,
        updateGender,
        updateEmail,
        updatePhoneNumber,
        updateFax,
        updateAddress,
        updateCity,
        updateState,
        updateCountry,
        updateZipCode,
    } = useFormHook()

    return (
        <>
            {current === 'user info' &&
                <div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">Profile Picture :</label>
                        <input type="file" className="mt-2" {...register("profilePicture")} />
                    </div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">First Name :</label>
                        <input value={resumeInfo.firstName} placeholder="Input first name" className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("firstName")} />
                    </div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">Last Name :</label>
                        <input value={resumeInfo.lastName} placeholder="Input last name"  className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("lastName")} />
                    </div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">Date of Birth :</label>
                        <input value={resumeInfo.dob} placeholder="Enter date of birth" className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("dob")} />
                    </div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">Occupation :</label>
                        <input value={resumeInfo.occupation} placeholder="What's your occupation" className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("occupation")} />
                    </div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">Gender</label>
                        <select value={resumeInfo.gender} {...register("gender")}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                        </select>
                    </div>
                </div>}
            {current === 'user contact' &&
                <div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">Email :</label>
                        <input value={resumeInfo.email} placeholder="Enter valid email" className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("email")} />
                    </div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">Phone Number :</label>
                        <input value={resumeInfo.phoneNumber} placeholder="Enter phone number" className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("phoneNumber")} />
                    </div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">Fax no (Optional) :</label>
                        <input value={resumeInfo.fax} placeholder="Fax no" className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("fax")} />
                    </div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">LinkedIn URL (Optional) :</label>
                        <input value={resumeInfo.email} placeholder="LinkedIn url" className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("linkedInLink")} />
                    </div>
                </div>}
            {current === 'user address' &&
                <div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">Address :</label>
                        <input value={resumeInfo.address} placeholder="Home address" className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("address")} />
                    </div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">City :</label>
                        <input value={resumeInfo.city} placeholder="City" className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("city")} />
                    </div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">State :</label>
                        <input value={resumeInfo.state} placeholder="State" className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("state")} />
                    </div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">Country :</label>
                        <input value={resumeInfo.country} placeholder="Country" className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("country")} />
                    </div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">Zip Code :</label>
                        <input value={resumeInfo.zipcode} placeholder="Zip code" className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("zipcode")} />
                    </div>
                </div>}
            {current === 'user academy' &&
                <div>
                    <div id="input-cont" className="h-[40px] mb-3 flex align-middle">
                        <label className="text-md pt-2 pr-[2em] w-[160px]">School Name :</label>
                        <div id="value"></div>
                        <div>
                            <input value={school} placeholder="Zip code" className="border-2 px-2 mt-1 h-[80%] rounded-xl outline-0" {...register("schoolName")} />
                            <AddIcon
                                className="size-[2em] ml-10 cursor-pointer"
                                onClick={() => {
                                    // Add new school to the list
                                }}
                            />
                        </div>
                    </div>
                </div>}
            {current === 'review page' && <div>User Review</div>}
        </>
    )
}