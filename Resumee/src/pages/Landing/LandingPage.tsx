import { useEffect, useState } from "react"
import { NavLink } from "react-router"
import axios from 'axios'
import { Card } from "../../components/resumecard/Card"
import { ResumeCardTypes } from "../../types/types"

export const LandingPage = () => {
    const [availableResume, setAvailableResume] = useState([])

    useEffect(() => {
        const getResume = async () => {
            const resp = await axios.get("http://localhost:3000/user")
            if(resp.status === 200) {
                setAvailableResume(resp.data)
            } else {
                setAvailableResume([])
            }
        }

        getResume()
    }, [])

    return (
        <section className="" id="resume-cont">
            <div className="flex justify-end">
                <NavLink to="create-resume" className="w-20px p-2 mr-4 bg-secondary-2 text-white text-sm shadow-md shadow-tertiary-2 rounded-md cursor-pointer">Create Resume</NavLink>
            </div>
            <div id="card-cont" className="my-4 mx-auto w-[90%] max-h-[70vh] flex flex-wrap gap-3">
                {availableResume && availableResume.map((resume: ResumeCardTypes) => <Card key={resume.id} />)}
                {availableResume.length < 1 &&
                    <div className="mx-auto my-[5em]">
                        <p className="text-center text-2xl">No saved resume at the moment</p>
                        <p>Use the above button to create a resume</p>
                    </div>}
            </div>
        </section>
    )
}
