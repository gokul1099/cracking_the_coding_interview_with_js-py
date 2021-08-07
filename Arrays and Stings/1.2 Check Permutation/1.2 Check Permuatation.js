/* ---hashmap--- */
const hashMap=(string1,string2)=>{
	const hashmap = {}
  for(const ele of string1){
  	if hashmap[ele]{
    	hashmap[ele]+=1
    }
    else{
    	hashmap[ele]=1
    }
  }
  for(const ele of string2){
  	if(hashmap[ele] && hashmap[ele]!==0){
    		hashmap[ele]-=1
    }
    else{
    return false
    }
  }
  return true
}

/* --- sorting --- */
const sorting=(string1,string2)=>{
    if(string1.length !== string2.length){
    	return false
    }
		const str1 = string1.split("")
    const str2 =  string2.split("")
    str1.sort()
  	str2.sort()
  	var len = str2.length
    for(let index=0;index<len;index++){
    	if(str1[index] !== str2[index]){
      		return false
      }
    }
    return true
}