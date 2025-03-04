import { NavLink } from "react-router"
import { ResumeCardTypes } from "../../types/types"

interface Card {
    details: ResumeCardTypes
}
export const Card = ({ details }: Card) => {
  return (
    <div className="bg-secondary w-[400px] p-3 rounded-xl shadow shadow-tertiary-2">
        <div id="content" className="flex justify-between">
            <div id="img-cont" className="w-[35%] content-center object-contain rounded-full">
                <img src={details.profilePicture} alt="" className="w-full h-full" />
            </div>
            <div id="user-info" className="w-[60%]">
                <h2 className="flex">
                    <p className="mr-3 font-semibold">Name:</p>
                    <p><span>{details.firstName}</span> <span>{details.lastName}</span></p>
                </h2>
                <p><span className="mr-3 font-semibold">Occupation:</span><span> {details.occupation}</span></p>
                <p><span className="mr-3 font-semibold">Gender:</span><span>{details.gender}</span></p>
            </div>
        </div>
        <div id="cta" className="flex justify-end">
            <NavLink to={`resume/${details.id}`} className="cursor-pointer bg-amber-50 py-1 px-3 rounded-xl">view</NavLink>
        </div>
    </div>
  )
}
