import api from "./config";

export default{
    login:(email, password)=>{
        return api.post('/', {
            email: email,
            password: password
        });
    }
}