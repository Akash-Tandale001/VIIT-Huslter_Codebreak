import { useState } from 'react';
import { loginFields } from "../Constants/formFields";
import { Link, useNavigate } from "react-router-dom";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authDetails, saveAuth } from "../../../Reducer/authSlice";
import Loader from '../../../helper/Loader';

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(loginState)
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser =async () =>{
        try {
            setLoading(true);
            const loginstatus = await axios.post(
              "https://viit-huslter-codebreak.vercel.app/api/auth/login",
              loginState
            );
      
            await dispatch(
              saveAuth({
                isAuthenticated: true,
                userRole: "User",
                token: loginstatus.data.token,
              })
            );
      
            sessionStorage.setItem("userName","demo");
            navigate("/base/categories")
            setLoading(false);
          } catch (error) {
            setLoading(false);
            alert("Invalid Cridential");
          }
    }

    return(
        <>
        {loading ? <Loader/> : null}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
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
        </div>

        <FormExtra/>
        <FormAction  text="Login"/>

      </form>
      </>
    )
}