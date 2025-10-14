/*primitive

7 types : String , Number , Boolean , null , undefined,Symbol,BigInt

Reference || non primitive

array , Objects, Functions
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp=null
 let userEmail ;

 console.log(userEmail);

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id === anotherId);
 

 const heros = ["shaktiman", "naaraj","doga"];
 let myObj={
    name :"hitesh",
    age :"22",
 }

 const myFunction = function(){
    console.log("hello world");  
 }

 console.log(myFunction);
 
 // stack (perimitive), Heap (Non- Primitive)
let myYoutubename = "kaleemshah";

 let anothername =  myYoutubename;
 anothername = "chaiaurcode"
 console.log(anothername);
 console.log(myYoutubename);

 let userOne ={
   email :"user1google.com",
   upi : "seer@ybl"
 }

 let userTwo =
   userOne

 userTwo.email = "hitesh@gmail.com"

 console.log(userOne);
 console.log(userTwo);

 
 