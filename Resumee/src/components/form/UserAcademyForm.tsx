import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { useResumePage, useFormHook } from "../../hooks";
import { Academy } from "../../types/types";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const UserAcademyForm = () => {
    const {
        updateCurrent
    } = useResumePage()

    const {
        resumeInfo,
        addAcademy
    } = useFormHook()
    const form = useForm<Academy>({
        defaultValues: {
            academy: resumeInfo.academy
        }
    })
    const { control, register, handleSubmit, formState } = form
    const { errors } = formState;

    const { fields, append, remove } = useFieldArray({
        name: "academy",
        control: control
    })

    const onSubmit: SubmitHandler<Academy> = (data) => {
        console.log('formResponse', data)
        addAcademy(data.academy)
        updateCurrent('for');
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="p-[8em] h-auto">
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div className="flex justify-between">
                            <label className="text-md pt-2 pr-[2em] w-[250px]">School Name :</label>
                            <AddIcon
                                className="size-[2em] ml-10 cursor-pointer"
                                onClick={() => {
                                    // Add new school to the list
                                    append({schoolName: ""})
                                }}
                            />
                        </div>
                        <div  className="h-auto">
                            {fields.map((field, index) => {
                                return(
                                    <div key={field.id}>
                                        <span className="text-red-500">{errors.academy?.[index]?.schoolName?.message}</span>
                                        <div className="flex gap-[1em] align-middle">
                                            <input
                                                placeholder={`School ${index+1}`}
                                                className="border-2 px-2 mt-1 h-[50px] w-[70%] rounded-xl outline-0" 
                                                {...register(`academy.${index}.schoolName` as const,
                                                    {
                                                        validate: (val) => {
                                                            return val !== '' || 'Kindly provide education background info'
                                                        }
                                                    })} />
                                            {index > 0 &&
                                                <span>
                                                    <RemoveIcon
                                                        className="size-[2em]  mt-[.7em] ml-10 cursor-pointer"
                                                        onClick={() => {
                                                            remove(index)
                                                        }}
                                                    />
                                                </span>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
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
        </div>
    )
}