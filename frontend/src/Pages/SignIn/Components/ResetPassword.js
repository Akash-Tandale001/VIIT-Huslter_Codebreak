
import { useState } from 'react';
import { ResetPasswordFields } from "../Constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import Header from "../Components/Header";

const fields=ResetPasswordFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function ResetPassword(){
  const [ResetPasswordState,setResetPasswordState]=useState(fieldsState);

  const handleChange=(e)=>setResetPasswordState({...ResetPasswordState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(ResetPasswordState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{

  }

    return(
		<>
		<form className=" min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" onSubmit={handleSubmit}>
        <div className="max-w-md w-full space-y-8">
		<Header
              heading="Reset Your Password!"
			  paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/Login"
            />
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={ResetPasswordState[field.id]}
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
          <FormAction handleSubmit={handleSubmit} text="Reset" />
        </div>

         

      </form>
	  </>
    )
}