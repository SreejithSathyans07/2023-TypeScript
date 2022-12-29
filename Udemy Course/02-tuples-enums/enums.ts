//Enums are named constants
//We can use enums to make sense of the some values in our application.
//We can create enum constants with or without a value. If no values are provided, then 0,1,2.. will be considered as default values.
enum deliveryStatus{
    ORDERED = 'ordered',
    SHIPPED = 'shipped',
    DELIVERED = 'delivered',
    RETURNED = 'returned'
}
function getStatus(){
    //Some API calls and business logics
    return 'ordered'
}
let orderStatus = getStatus();
if(orderStatus === deliveryStatus.ORDERED){
    console.log('Item delivered successfully')
}

enum autoIncrementExample{
    st1 = 10,
    st2, //automatically it will become 11
    st3
}