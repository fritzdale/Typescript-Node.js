// wrong way of coding with TS.
/*
function canDrive(usr){
    console.log("user is",usr.name);

    if(usr.age >=16){
        console.log("allow to drive");
    }else{
        console.log("do not allow to drive");
    }
}

const tom ={
    name: "tom"
}
canDrive(tom);

*/

// Right way of coding with TS.

interface User {
    name: string;
    age: number;
}
function canDrive(usr: User) {
    console.log("user is", usr.name);

    if (usr.age >= 16){
        console.log("allow to drive");
    } 
    else
    {
        console.log("do not allow to drive");
    }
}

const tom: User = {
    name: "tom",
    age: 13
}
canDrive (tom);
