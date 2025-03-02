import { useForm, SubmitHandler } from "react-hook-form"
import { Academy } from "../../types/types";
import AddIcon from '@mui/icons-material/Add';

export const UserAcademyForm = () => {
    const form = useForm<Academy>()
    const { register, handleSubmit, formState } = form
    const { errors } = formState;
    const onSubmit: SubmitHandler<Academy> = (data) => console.log('formResponse', data)
    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
                <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                    <label className="text-md pt-2 pr-[2em] w-[250px]">School Name :</label>
                    <div id="value"></div>
                    <div>
                        <input placeholder="Zip code" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("schoolName", {
                        required: "Name of school"
                    })} />
                        <AddIcon
                            className="size-[2em] ml-10 cursor-pointer"
                            onClick={() => {
                                // Add new school to the list
                            }}
                        />
                    </div>
                    <p className="text-red-500">{errors.schoolName?.message}</p>
                </div>
            </div>
            <div className="w-[40%] my-3 mx-auto flex justify-evenly">
                <button
                    className="w-[100px] py-2 mr-4 bg-secondary-2 text-white text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer"
                    type="submit"
                    onClick={() => {
                        updateCurrent('back');
                    }}
                >
                    Back
                </button>
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