import { useForm, SubmitHandler } from "react-hook-form";
import { useResumePage } from "../../hooks";
import { UserAddress } from "../../types/types";

export const UserAddressForm = () => {
    const {
        updateCurrent
    } = useResumePage()
    const form = useForm<UserAddress>()
    const { register, handleSubmit, formState } = form
    const { errors } = formState;
    const onSubmit: SubmitHandler<UserAddress> = (data) => {
        console.log('formResponse', data)
        updateCurrent('for');
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">Address :</label>
                            <span className="text-red-500">{errors.address?.message}</span>
                        </div>
                        <input placeholder="Home address" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("address", {
                            required: "Home address"
                        })} />
                    </div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">City :</label>
                            <span className="text-red-500">{errors.city?.message}</span>
                        </div>
                        <input placeholder="City" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("city", {
                            required: "What city do you reside?"
                        })} />
                    </div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">State :</label>
                            <span className="text-red-500">{errors.state?.message}</span>
                        </div>
                        <input placeholder="State" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("state", {
                            required: "Address state"
                        })} />
                    </div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">Country :</label>
                            <span className="text-red-500">{errors.country?.message}</span>
                        </div>
                        <input placeholder="Country" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("country", {
                            required: "Please input your country"
                        })} />
                    </div>
                    <div id="input-cont" className="h-[40px] lg:w-[60%] md:w-[80%] mx-auto mb-7 flex justify-center align-middle flex-col">
                        <div>
                            <label className="text-md pt-2 pr-[2em] w-[250px]">Zip Code :</label>
                            <span className="text-red-500">{errors.zipcode?.message}</span>
                        </div>
                        <input placeholder="Zip code" className="border-2 px-2 mt-1 h-[50px] rounded-xl outline-0" {...register("zipcode", {
                            required: "Locality zip code is required"
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