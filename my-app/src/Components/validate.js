export const validate =(data , type)=>{
    const errors={}
    
//expalin for yourself************ important
    if (!data.email){
        errors.email="email required"
    }else if(!/^\S+@\S+\.\S+$/.test(data.email)){
        //regex
        errors.email="email adress is invalid"
    }else{
        delete errors.email
    }

    if(!data.password.trim()){
        errors.password="password required"
    }else if(data.password.length <6){
        errors.password="Password need to be 6 character or more"
    }else{
        delete errors.password
    }

    

    if(type==="SignUp"){
        if (!data.name.trim()){
            errors.name="name required"
        }else{
            delete errors.name
        }

        if(!data.confirmPassword){
            errors.confirmPassword="Please confirm password"
        }else if(data.confirmPassword !== data.password){
            errors.confirmPassword="Password do not match"
        }else{
            delete errors.confirmPassword
        }
    
        if(data.isAccepted){
            delete errors.isAccepted
        }else{
            errors.isAccepted="Accept our regulation"
        }
    }
    return errors;

}