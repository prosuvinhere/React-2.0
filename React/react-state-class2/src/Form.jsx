import { useState } from "react"

export default function Form() {
    let [formData,setFormData] = useState({
        fullName: "",
        username: "",
        password:"",
    })
    let handleInputChange = (event) => {
        
        setFormData( (currData) => {
            return{...currData,
                [event.target.name]:event.target.value
            };
        })
    }

    let handelSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName: "",
            username: "",
            password: "",
        })
    }

    return(
        <form onSubmit={handelSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input name="fullName" id = "fullname" placeholder="Enter" type="text" value = {formData.fullName} onChange={handleInputChange}/>
            <br /><br />
            <label htmlFor="username">Usernamee</label>
            <input name="username" id = "username" placeholder="Enter" type="text" value = {formData.username} onChange={handleInputChange}/>
            <br /><br />
            <label htmlFor="password">Password</label>
            <input name="password" id = "password" placeholder="Password" type="password" value = {formData.password} onChange={handleInputChange}/>
            <br /><br />
            <button>Submit</button>
        </form>
    )
}