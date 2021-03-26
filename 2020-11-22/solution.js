const main = (list,k)=>{
    let returnvalue = false;
    list.forEach((i)=>list.forEach((j)=>{
        if(i+j===k){
            returnvalue=true;
        }
    }));
    return returnvalue;
};


/** tests **/
console.log(
    main([10,15,3,7],17),
    main([11,12,13,14],0)
    );
