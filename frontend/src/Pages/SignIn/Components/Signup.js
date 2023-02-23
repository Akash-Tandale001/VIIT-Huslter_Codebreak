import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Loader from '../../../helper/Loader';
import { signupFields } from "../Constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //handle Signup API Integration here
  const createAccount=async()=>{
    try {
      setLoading(true);
      const loginstatus = await axios.post(
        "https://viit-huslter-codebreak-orpin.vercel.app/api/auth/createUser",
        signupState
      );
      if(loginstatus.data.status === "success"){
        setLoading(false);
        navigate("/login")

      }

      setLoading(false);
    } catch (error) {
      console.log(error.response.data.error);      
      alert("User already exist")
        setLoading(false);
    }
  }

    return(
      <>
      {loading ? <Loader/> : null}
      
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
      </>
    )
}