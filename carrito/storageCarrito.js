// -------------------------- LOCAL STORAGE CARRITO (ESTADOS) ----------------------------

const store = {
    get carrito(){
        return JSON.parse( localStorage.getItem("carrito")) || [];
    },
    set carrito(data){
        localStorage.setItem("carrito", JSON.stringify(data));
    }
};