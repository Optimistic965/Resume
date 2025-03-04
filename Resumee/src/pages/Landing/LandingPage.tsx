import { useEffect, useState } from "react"
import { NavLink } from "react-router"
import axios from 'axios'
import { Card } from "../../components/resumecard/Card"
import { ResumeCardTypes } from "../../types/types"
import Notify from "../../components/Notification/Notify"

export const LandingPage = () => {
    const [availableResume, setAvailableResume] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getResume = async () => {
            const resp = await axios.get("http://localhost:3000/user")
            if(resp.status === 200) {
                setAvailableResume(resp.data)
                setIsLoading(false)
            } else {
                setAvailableResume([])
                setIsLoading(false)
            }
        }

        getResume()
    }, [])

    return (
        <section className="" id="resume-cont">
            <Notify />
            <div className="flex justify-end">
                <NavLink to="create-resume" className="w-20px p-2 mr-4 bg-secondary-2 text-white text-sm shadow-md shadow-tertiary-2 rounded-md cursor-pointer">Create Resume</NavLink>
            </div>
            {isLoading && <p className="my-4 mx-auto w-[90%] text-center text-2xl">Fetching uploaded resume.....</p>}
            {!isLoading &&
                <div id="card-cont" className="my-4 mx-auto w-[90%] max-h-[70vh] flex flex-wrap gap-3">
                    {availableResume && availableResume.map((resume: ResumeCardTypes) => <Card key={resume.id} details={resume} />)}
                    {availableResume.length < 1 &&
                        <div className="mx-auto my-[5em]">
                            <p className="text-center text-2xl">No saved resume at the moment</p>
                            <p>Use the above button to create a resume</p>
                        </div>}
                </div>}
        </section>
    )
}
