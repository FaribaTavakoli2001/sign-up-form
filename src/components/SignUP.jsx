import React , {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './signUp.module.css';

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
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formcontainer}>
                 <h1 className={styles.header}>SignUp</h1>
                 <div className={styles.formFild}>
                 <lable>Name</lable>
                 <input className={(errors.name && touched.name) ? styles.uncomplted : styles.formInput} 
                 type='text' 
                 name='name' 
                 value={data.name} 
                 onChange={changeHandler}n
                 onFocus={focusHandler}/> 
                 {errors.name && touched.name && <span>{errors.name}</span>}
                 </div>
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
                 <div className={styles.formFild}>
                 <lable>Confirm Password</lable>
                 <input 
                 className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncomplted : styles.formInput}
                 type='password' 
                 name='confirmPassword' 
                 value={data.confirmPassword} 
                 onChange={changeHandler} 
                 onFocus={focusHandler}/>
                 {errors.confirmPassword && touched.confirmPassword &&  <span>{errors.confirmPassword}</span>}
                 </div>
                 <div className={styles.formFild}>
                 <div className={styles.checkBoxContainer}>
                 <lable>I Accept terms of privacy policy</lable>
                 <input 
                 type='checkbox' 
                 name='isAccepted' 
                 value={data.isAccepted} 
                 onChange={changeHandler} 
                 onFocus={focusHandler}/> 
                 </div>
                 {errors.isAccepted && touched.isAccepted &&  <span>{errors.isAccepted}</span>}
                 </div>
                 <div className={styles.formButtons}>
                 <a href='#'>Log in</a>
                 <button type='submit'>Sign UP</button>
                 </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUP;