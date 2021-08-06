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

/* --- booleanArray --- */
const booleanArray=(str)=>{
  const length = str.length
	const arr = new Array(256).fill(0)
  for(var index=0;index<str.length;index++){
  	if(arr[str.charCodeAt(index)] === 1){
    return false
    }
    else{
    	arr[str.charCodeAt(index)] = 1
    }
  }
  return true
}


/* ---test--- */
bruteForce("a")
hashTable("aac")
booleanArray("aa")
