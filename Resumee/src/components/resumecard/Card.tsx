import { NavLink } from "react-router"
import Image from "../../assets/react.svg"
// import { ResumeCardTypes } from "../../types/types"
export const Card = () => {
  return (
    <div className="bg-secondary w-[300px] p-3 rounded-xl shadow shadow-tertiary-2">
        <div id="content" className="flex justify-between">
            <div id="img-cont" className="w-[35%] content-center object-contain rounded-full">
                <img src={Image} alt="" className="w-full h-full" />
            </div>
            <div id="user-info" className="w-[60%]">
                <h2><span>First name</span> <span>Last name</span></h2>
                <p>Occupation</p>
                <p><span>Email</span> <span>Gender</span></p>
            </div>
        </div>
        <div id="cta" className="flex justify-end">
            <NavLink to="resume/id" className="cursor-pointer bg-amber-50 py-1 px-3 rounded-xl">view</NavLink>
        </div>
    </div>
  )
}
