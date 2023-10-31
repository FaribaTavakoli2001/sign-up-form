import React , {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './signUp.module.css';
import { Link } from 'react-router-dom'; 

import { notify } from './toast';
import { validate } from './validate';


const Login = () => {

    const [data , setData] = useState({
        email:'',
        password:'',
    })
    const [errors , setErrors] = useState({})
    const [touched , setTouched] = useState({})


    useEffect(() => {
        setErrors(validate(data , 'Login'))
    } , [data, touched])

    const changeHandler = event => {
        if( event.target.name === 'isAccepted'){
            setData({...data, [event.target.name] : event.target.checked})
        } else {
            setData ({ ...data, [event.target.name] : event.target.value })
        }
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
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formcontainer}>
                 <h1 className={styles.header}>Log in</h1>
                 <div  className={styles.formFild}>
                 <lable >Email</lable>
                 <input 
                 className={(errors.email && touched.email) ? styles.uncomplted : styles.formInput}
                 type='text' 
                 name='email' 
                 value={data.email} 
                 onChange={changeHandler} 
                 onFocus={focusHandler}/>
                 {errors.email && touched.email && <span>{errors.email}</span>}
                 </div>
                 <div className={styles.formFild}>
                 <lable>Password</lable>
                 <input
                 className={(errors.password && touched.password) ? styles.uncomplted : styles.formInput} 
                 type='password' 
                 name='password' 
                 value={data.password} 
                 onChange={changeHandler} 
                 onFocus={focusHandler}/> 
                 {errors.password && touched.password &&  <span>{errors.password}</span>}
                 </div>
                 <div className={styles.formButtons}>
                 <Link to='/signup'>Sign Up</Link>
                 <button type='submit'>Log in</button>
                 </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;