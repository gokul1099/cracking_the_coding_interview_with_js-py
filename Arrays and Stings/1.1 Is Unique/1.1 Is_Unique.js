/* ---bruteForce--- */
const bruteForce=(str)=>{
  const length = str.length
	for(let frwdIndex =0; frwdIndex<length; frwdIndex++){
  	for(let backIndex =frwdIndex+1; backIndex<length;backIndex++){
    		if(str[backIndex] === str[frwdIndex]){
        return false
        }
    }
  }
  return true
}

/* ---hashTable--- */

const hashTable =(str)=>{
	const arr={}
  for(let index=0;index<str.length;index++){
  	if(arr[str[index]] && arr[str[index]]===1){
    	return false
    }
    else{
    	arr[str[index]]=1
    }
  }
  
  return true
}

/* --- --- */

/* ---test--- */
console.log(bruteForce("a"))
console.log(hashTable("aac"))
