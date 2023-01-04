const Validation = (values) => {
    const uName = "redmango";
    const upass = "redmango1234"
    let errors ={}
    if(values.name !== uName){
        errors.name ="Incorrect Name"
    }
    else if(values.name.length < 8){
        errors.name = "Name must be atleast 8 characters"
        
    }
    if(values.password !== upass){
        errors.password ="Incorrect Password"
    }
    else if(values.password.length < 6){
        errors.password = "Password must be atleast 6 characters"
        
    }
    if(!values.name){
        errors.name ="Name Required"
    }
    else if(values.name.length < 8){
        errors.name = "Name must be atleast 8 characters"
        
    }
    if(!values.password){
        errors.password ="Password Required"
    }
    else if(values.password.length < 6){
        errors.password = "Password must be atleast 6 characters"
        
    }
    return errors
}

export default Validation;