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