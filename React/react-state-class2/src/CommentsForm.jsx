import { useState } from "react"

export default function CommentForm() {

    let [formData,setFormData] = useState({
        username:"",
        remarks: "",
        ratings: 5,
    })

    let handleInputChange = (event) => {
        setFormData((currDate) => {
            return{...currDate, [event.target.name]: event.target.value}
        })
    }

    let handelSubmit= (event) => {
        console.log(formData)
        event.preventDefault();
        setFormData({
            username:"",
            remarks: "",
            ratings: 5,
        })
    }


    return(
        <div>
        <h4>Give a Comment!</h4>
        <form onSubmit={handelSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input name="username" id="username" placeholder="username" type="text" value={formData.username} onChange={handleInputChange}/>
        <br /> <br />

        <label htmlFor="remarks">Remarks</label>
        <br />
        <textarea name="remarks" id="remarks" value={formData.remarks} placeholder="Remarks" onChange={handleInputChange}> Comments </textarea>
        <br /><br />

        <label htmlFor="ratings">Ratings</label>
        <br />
        <input name="ratings" id="ratings" type="number" placeholder="Ratings" min={1} max={5} value={formData.ratings} onChange={handleInputChange}/>
        <br /> <br />

        <button>Submit</button>
        </form>
        </div>
    )
}