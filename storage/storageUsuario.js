
export const userstore = {
    get user(){
        return sessionStorage.getItem("Usuario");
    },
    get userID(){
        return sessionStorage.getItem("usuario_id");
    },
    set user(data){
        sessionStorage.setItem("Usuario",data);
    },
    set userID(id){
        sessionStorage.setItem("usuario_id",id);
    },
    removeUser(){
        sessionStorage.removeItem("Usuario");
        sessionStorage.removeItem("usuario_id")
    }
}