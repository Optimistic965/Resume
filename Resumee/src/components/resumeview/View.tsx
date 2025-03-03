import { useEffect, useState } from "react";
import { useFormHook, useResumePage } from "../../hooks";
import { ResumeState } from "../../app/pagesStore/resumeInfo";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const View = ({ resourceType }: { resourceType: string}) => {
    const [data, setData] = useState<ResumeState>()

    const {
        resumeInfo
    } = useFormHook()

    const {
        jumpTo
    } = useResumePage()

    useEffect(() => {
        if(resourceType === "localState") {
            setData(resumeInfo)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(data)
    return (
   <section id="profileReview">
        {data &&
            <section className="response">
            <div className="profile_bio">
                <div className="profilePic">
                    <div className="img_cont">
                        {data.profileImage.localUrl === '' && (
                            <AccountCircleIcon />
                        )}
                        {data.profileImage.localUrl !== null && (
                            <img
                                id="profile-pic"
                                src={data.profileImage.localUrl}
                                alt=""
                            />
                        )}
                    </div>
                    <div className="user_name">
                        <p>{data.firstName} {data.lastName}</p>
                    </div>
                </div>
                <div className="resp">
                    <div className="title">
                        <h3>Basic Information</h3>
                        <div
                            className="edit_cta"
                            onClick={() => {
                                jumpTo('user info');
                            }}
                        >
                            Edit
                        </div>
                    </div>
                    <ul>
                        <li className="resp_item">
                            <p className="question">Date of Birth</p>
                            <p className="answer">
                                {data.dob}
                            </p>
                        </li>
                        <li className="resp_item">
                            <p className="question">Gender</p>
                            <p className="answer">
                                {data.gender}
                            </p>
                            </li>
                            <li className="resp_item">
                            <p className="question">Occupation</p>
                            <p className="answer">
                                {data.occupation}
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="resp">
                    <div className="title">
                        <h3>Contact Infomation</h3>
                        <div
                            className="edit_cta"
                            onClick={() => {
                                jumpTo('user contact');
                            }}
                        >
                            Edit
                        </div>
                    </div>
                    <ul>
                        <li className="resp_item">
                            <p className="question">Eamil</p>
                            <p className="answer">
                                {data.email}
                            </p>
                        </li>
                        <li className="resp_item">
                            <p className="question">Phone Number</p>
                            <p className="answer">
                                {data.phoneNumber}
                            </p>
                        </li>
                        <li className="resp_item">
                            <p className="question">
                                Fax No
                            </p>
                            <p className="answer">
                                {data.fax}
                            </p>
                        </li>
                        <li className="resp_item">
                            <p className="question">LinkedIn profile URL</p>
                            <p className="answer">
                                {data.linkedInLink}
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="resp">
                    <div className="title">
                        <h3>Address</h3>
                        <div
                            className="edit_cta"
                            onClick={() => {
                                jumpTo('user address');
                            }}
                        >
                            Edit
                        </div>
                    </div>
                    <ul>
                        <li className="resp_item">
                            <p className="question">Home address</p>
                            <p className="answer">
                                {data.address}
                            </p>
                        </li>
                        <li className="resp_item">
                            <p className="question">City</p>
                            <p className="answer">
                                {data.city}
                            </p>
                        </li>
                        <li className="resp_item">
                            <p className="question">State</p>
                            <p className="answer">
                                {data.state}
                            </p>
                        </li>
                        <li className="resp_item">
                            <p className="question">Country</p>
                            <p className="answer">
                                {data.country}
                            </p>
                        </li>
                        <li className="resp_item">
                            <p className="question">Zip code</p>
                            <p className="answer">
                                {data.zipcode}
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="resp">
                    <div className="title">
                        <h3>Academics</h3>
                        <div
                            className="edit_cta"
                            onClick={() => {
                                jumpTo('user academy');
                            }}
                        >
                            Edit
                        </div>
                    </div>
                    <ul>
                        {data.academy.map((schoolInfo, index) => (
                            <li className="resp_item" key={index+1}>
                                <p className="answer">
                                    {schoolInfo.schoolName}
                                </p>
                            </li>))}
                    </ul>
                </div>
            </div>
            </section>}
    </section>
    );
}

export default View;
