import React , {useEffect, useState} from 'react';
import { validate } from './validate';

const SignUP = () => {

    const [data , setData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        isAccepted: false
    })
    const [errors , setErrors] = useState({

    })

    useEffect(() => {
        setErrors(validate(data))
           console.log(errors)
    } , [data])

    const changeHandler = event => {
        if( event.target.name === 'isAccepted'){
            setData({...data, [event.target.name] : event.target.checked})
        } else {
            setData ({ ...data, [event.target.name] : event.target.value })
        }
        console.log(data)
    }



    return (
        <div>
            <form>
                 <h2>SignUp</h2>
                 <div>
                 <lable>Name</lable>
                 <input type='text' name='name' value={data.name} onChange={changeHandler}/> 
                 </div>
                 <div>
                 <lable>Email</lable>
                 <input type='text' name='email' value={data.email} onChange={changeHandler}/> 
                 </div>
                 <div>
                 <lable>Password</lable>
                 <input type='password' name='password' value={data.password} onChange={changeHandler}/> 
                 </div>
                 <div>
                 <lable>Confirm Password</lable>
                 <input type='password' name='confirmPassword' value={data.name} onChange={changeHandler}/> 
                 </div>
                 <div>
                 <lable>I Accept terms of privacy policy</lable>
                 <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler}/> 
                 </div>
                 <a href='#'>Log in</a>
                 <button type='submit'>Sign UP</button>
                 
            </form>
        </div>
    );
};

export default SignUP;