import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import Notify from "../Notification/Notify";
import { ResponseType } from '../../types/types'
import { useFormHook, useResumePage } from "../../hooks";
import { ResumeState } from "../../app/pagesStore/resumeInfo";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const View = ({ result }: { result?: ResponseType}) => {
    const [data, setData] = useState<ResumeState>()
    const [clicked, setClicked] = useState(false)

    const {
        resumeInfo,
        clearInput
    } = useFormHook()

    const {
        jumpTo
    } = useResumePage()

    const navigate = useNavigate()

    const transformResponseToResume = (response: ResponseType): ResumeState => {
        return {
            profileImage:  response.profilePicture,
            firstName: response.firstName,
            lastName: response.lastName,
            dob: response.dob,
            occupation: response.occupation,
            gender: response.gender,
            email: response.contact.email,
            phoneNumber: response.contact.phoneNumber,
            fax: response.contact.fax || "",
            linkedInLink: response.contact.linkedInLink || "",
            address: response.address.address,
            city: response.address.city,
            state: response.address.state,
            country: response.address.country,
            zipcode: response.address.zipcode,
            academy: response.academics.map(academic => ({
                schoolName: academic.schoolName
            }))
        };
    };

    useEffect(() => {
        if(result === undefined) {
            setData(resumeInfo)
        } else {
            setData(transformResponseToResume(result))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const sendResource = async () => {
        setClicked(true)
        toast("Creating Resume", {
            type: "info"
        })
        const requestBody = {
            userInfo: {
                profilePicture: "helllo", // resumeInfo.profileImage.fileMetaD
                firstName: resumeInfo.firstName,
                lastName: resumeInfo.lastName,
                dob: new Date(resumeInfo.dob).toISOString(),
                occupation: resumeInfo.occupation,
                gender: resumeInfo.gender

            },
            contact: {
                email: resumeInfo.email,
                phoneNumber: resumeInfo.phoneNumber,
                faxNo: resumeInfo.fax.toString(),
                linkedInUrl: resumeInfo.linkedInLink
            },
            address: {
                address: resumeInfo.address,
                city: resumeInfo.city,
                state: resumeInfo.state,
                country: resumeInfo.country,
                zipCode: resumeInfo.zipcode
            },
            academics: [ ...resumeInfo.academy ]
        }

        try {
            const res = await axios.post('http://localhost:3000/user', requestBody);
            setTimeout(() => {
                toast("Resume created", {
                    type: "success"
                })
            }, 1000)
            setTimeout(() => {
                //redirect home
                navigate('/')
            }, 3000)
            clearInput()
            jumpTo('user info')
            console.log("Hrrr", res.data);
        } catch (error: any) {
            let err = error.response
            if(Array.isArray(err.data.message)) {
                err.data.message.forEach((msg: string) => {
                    toast(msg, {
                        type: "error"
                    })
                })
                console.log('I m heree')
            } else {
                toast(err.data.message, {
                    type: "error"
                })
                console.log('found me')
            }
        }
    }
    return (
        <section id="profileReview">
            {data &&
                <section>
                    <Notify />
                    <div>
                        <div className="flex justify-between align-middle mb-3">
                            <div className="w-[40%] flex align-middle">
                                <p className="text-4xl p-6">{data.firstName} {data.lastName}</p>
                            </div>
                            {typeof data.profileImage !== "string" &&
                                <div className="w-[40%]">
                                    {(data.profileImage?.localUrl === '') && (
                                        <AccountCircleIcon className="w-full h-full object-contain" />
                                    )}
                                    {data.profileImage.localUrl !== null && (
                                        <img
                                            className="w-full h-full object-contain"
                                            id="profile-pic"
                                            src={data.profileImage.localUrl}
                                            alt=""
                                        />
                                    )}
                                </div>}
                            {typeof data.profileImage === "string" &&
                            <div className="w-[40%]">
                                <img
                                    className="w-full h-full object-contain"
                                    id="profile-pic"
                                    src={data.profileImage}
                                    alt=""
                                />
                            </div>}
                        </div>
                        <div className="px-10">
                            <div className="flex justify-between text-3xl font-semibold mb-3">
                                <h3>Basic Information</h3>
                                {result === undefined && <div
                                    className="cursor-pointer"
                                    onClick={() => {
                                        jumpTo('user info');
                                    }}
                                >
                                    Edit
                                </div>}
                            </div>
                            <ul>
                                <li className="flex justify-between text-2xl mb-3">
                                    <p className="question">Date of Birth</p>
                                    <p className="answer">
                                        {new Date(data.dob).toDateString()}
                                    </p>
                                </li>
                                <li className="flex justify-between text-2xl mb-3">
                                    <p className="question">Gender</p>
                                    <p className="answer">
                                        {data.gender}
                                    </p>
                                    </li>
                                    <li className="flex justify-between text-2xl mb-3">
                                    <p className="question">Occupation</p>
                                    <p className="answer">
                                        {data.occupation}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="px-10">
                            <div className="flex justify-between text-3xl font-semibold mb-3">
                                <h3>Contact Infomation</h3>
                                {result === undefined && <div
                                    className="cursor-pointer"
                                    onClick={() => {
                                        jumpTo('user contact');
                                    }}
                                >
                                    Edit
                                </div>}
                            </div>
                            <ul>
                                <li className="flex justify-between text-2xl mb-3">
                                    <p className="question">Email</p>
                                    <p className="answer">
                                        {data.email}
                                    </p>
                                </li>
                                <li className="flex justify-between text-2xl mb-3">
                                    <p className="question">Phone Number</p>
                                    <p className="answer">
                                        {data.phoneNumber}
                                    </p>
                                </li>
                                <li className="flex justify-between text-2xl mb-3">
                                    <p className="question">
                                        Fax No
                                    </p>
                                    <p className="answer">
                                        {data.fax}
                                    </p>
                                </li>
                                <li className="flex justify-between text-2xl mb-3">
                                    <p className="question">LinkedIn profile URL</p>
                                    <p className="answer">
                                        {data.linkedInLink}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="px-10">
                            <div className="flex justify-between text-3xl font-semibold mb-3">
                                <h3>Address</h3>
                                {result === undefined && <div
                                    className="cursor-pointer"
                                    onClick={() => {
                                        jumpTo('user address');
                                    }}
                                >
                                    Edit
                                </div>}
                            </div>
                            <ul>
                                <li className="flex justify-between text-2xl mb-3">
                                    <p className="question">Home address</p>
                                    <p className="answer">
                                        {data.address}
                                    </p>
                                </li>
                                <li className="flex justify-between text-2xl mb-3">
                                    <p className="question">City</p>
                                    <p className="answer">
                                        {data.city}
                                    </p>
                                </li>
                                <li className="flex justify-between text-2xl mb-3">
                                    <p className="question">State</p>
                                    <p className="answer">
                                        {data.state}
                                    </p>
                                </li>
                                <li className="flex justify-between text-2xl mb-3">
                                    <p className="question">Country</p>
                                    <p className="answer">
                                        {data.country}
                                    </p>
                                </li>
                                <li className="flex justify-between text-2xl mb-3">
                                    <p className="question">Zip code</p>
                                    <p className="answer">
                                        {data.zipcode}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="px-10">
                            <div className="flex justify-between text-3xl font-semibold mb-3">
                                <h3>Academics</h3>
                                {result === undefined && <div
                                    className="cursor-pointer"
                                    onClick={() => {
                                        jumpTo('user academy');
                                    }}
                                >
                                    Edit
                                </div>}
                            </div>
                            <ul>
                                {data.academy.map((schoolInfo, index) => (
                                    <li className="text-2xl" key={index+1}>
                                        <p className="answer">
                                            {schoolInfo.schoolName}
                                        </p>
                                    </li>))}
                            </ul>
                        </div>
                    </div>
                    {result ===undefined && <div className="w-[40%] my-3 mx-auto flex justify-evenly">
                        <button
                            disabled={clicked}
                            onClick={sendResource}
                            className="p-3 mr-4 bg-secondary-2 text-white text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer">Create Resume</button>
                    </div>}
                </section>}
        </section>
    );
}

export default View;
