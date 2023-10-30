import React , {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { notify } from './toast';
import { validate } from './validate';


const SignUP = () => {

    const [data , setData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        isAccepted: false
    })
    const [errors , setErrors] = useState({})
    const [touched , setTouched] = useState({})


    useEffect(() => {
        setErrors(validate(data))
           console.log(errors)
    } , [data, touched])

    const changeHandler = event => {
        if( event.target.name === 'isAccepted'){
            setData({...data, [event.target.name] : event.target.checked})
        } else {
            setData ({ ...data, [event.target.name] : event.target.value })
        }
        console.log(data)
    }
    const focusHandler = event =>{
        setTouched({
            ...touched , [event.target.name] : true 
        })
    }
    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify('Successfully' , 'success')
            console.log(data)
        }else{
            notify('Invalid data' , 'error')
            setTouched({
                name: true,
                email: true ,
                password: true,
                confirmPassword: true,
                isAccepted: true , 

            })
        }
    }
    
 



    return (
        <div>
            <form onSubmit={submitHandler}>
                 <h2>SignUp</h2>
                 <div>
                 <lable>Name</lable>
                 <input type='text' name='name' value={data.name} onChange={changeHandler} onFocus={focusHandler}/> 
                 {errors.name && touched.name && <spam>{errors.name}</spam>}
                 </div>
                 <div>
                 <lable>Email</lable>
                 <input type='text' name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                 {errors.email && touched.email && <spam>{errors.email}</spam>}
                 </div>
                 <div>
                 <lable>Password</lable>
                 <input type='password' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler}/> 
                 {errors.password && touched.password &&  <spam>{errors.password}</spam>}
                 </div>
                 <div>
                 <lable>Confirm Password</lable>
                 <input type='password' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}/>
                 {errors.confirmPassword && touched.confirmPassword &&  <spam>{errors.confirmPassword}</spam>}
                 </div>
                 <div>
                 <lable>I Accept terms of privacy policy</lable>
                 <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler}/> 
                 {errors.isAccepted && touched.isAccepted &&  <spam>{errors.isAccepted}</spam>}
                 </div>
                 <a href='#'>Log in</a>
                 <button type='submit'>Sign UP</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUP;