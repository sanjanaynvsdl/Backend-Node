const {axionsInsc}=require('./index');
//to make all the calls I have imported the axios instance created in index.js

//Register a new user 
export const RegisterUser=async (value)=> {
    try{

        const response=await axionsInsc.post('/api/users/register',value);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
export const LoginUser=async (value)=> {
    try{

        const response=await axionsInsc.post('/api/users/login',value);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
