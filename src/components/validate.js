export const validate = (data , type) => {

    const errors = {};

   

    if (!data.email){
        errors.email = ' Email required'
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = 'Email Addres is invalid'
    }else{
        delete errors.email
    }

    if (!data.password){
        errors.password = 'Password is required'
    }else if (data.password.lenght < 6 ){
        errors.password = ' Password need to be 6 character or more'
    }else{
        delete errors.password
    }

    if (type === 'Signup'){
        if(!data.name.trim()){
            errors.name = 'Username is requiered'
        } else {
            delete errors.name
        }
        
    if (!data.confirmPassword){
        errors.confirmPassword = 'Confirm the Password'
    }else if (data.confirmPassword !== data.password ){
        errors.confirmPassword = 'Password is dont match'
    }else{
        delete errors.confirmPassword
    }

    if (data.isAccepted){
        delete errors.isAccepted
    }else{
        errors.isAccepted = 'Accept our regulations'
    }
    }

    return errors

}