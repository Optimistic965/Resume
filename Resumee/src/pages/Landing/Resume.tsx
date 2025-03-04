import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router"
import axios from "axios"
import { toast } from "react-toastify"
import View from "../../components/resumeview/View"

export const Resume = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()
  const navigate = useNavigate() 

  const deteleResume = async () => {
    toast("Deleting Resume", {
      type: "info"
    })

    try {
      const deteleResponse = await axios.delete(`http://localhost:3000/user/${id}`)
      console.log( "endpoint response", deteleResponse)
      setTimeout(() =>{
        toast("Resume deteled", {
          type: 'success'
        })
      }, 1000)
      navigate('/')
    } catch (error: any) {
      
    }
  }

  useEffect(() => {
    const getResumeInfo = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/user/${id}`)
        setData(res.data)
        setIsLoading(false)
      } catch(error: any) {
        let err = error.response
        if(Array.isArray(err.data.message)) {
            err.data.message.forEach((msg: string) => {
                toast(msg, {
                    type: "error"
                })
            })
        } else {
          toast(err.data.message, {
            type: "error"
          })
        }
        navigate('/')
      }
    }

    getResumeInfo()
  })

  return (
    <div className="w-[60%] h-[85vh] mx-auto overflow-scroll">
      <div id="cta" className="mb-[3em] flex justify-end">
        <div>
          <button className="w-[200px] p-2 mr-4 bg-secondary-2 text-white text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer">Edit</button>
          <button
             className="w-[200px] p-2 mr-4 bg-red-400 text-white text-xl shadow-md shadow-tertiary-2 rounded-md cursor-pointer"
            onClick={() => {
              deteleResume()
            }}
          >Delete</button>
        </div>
      </div>
      {isLoading && <p>Fetching resource for resume with id: {id}</p>}
      {!isLoading &&
        <div>
          <View result={data} />
        </div>}
    </div>
  )
}
