//++++++++ truthy & falsy ++++++++++

const userEmail = ""
if (userEmail) {
    console.log("got user mail");
}
else{
    console.log("don't have user mail");
    
}

// false values :- false, 0, -0, BigInt 0n, "", null, undefined, NaN   rest are truthy values

//truthy values :- "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty ");
    
    
}