import { useEffect, useState } from "react";
import { useFormHook } from "../../hooks";
import { ResumeState } from "../../app/pagesStore/resumeInfo";

const View = ({ resourceType }: { resourceType: string}) => {
    const [data, setData] = useState<ResumeState>()

    const {
        resumeInfo
    } = useFormHook()

    useEffect(() => {
        if(resourceType === "localState") {
            setData(resumeInfo)
        }
    }, [])

    console.log(data)
    return (
        <div>
            Resume view
        </div>
    );
}

export default View;
