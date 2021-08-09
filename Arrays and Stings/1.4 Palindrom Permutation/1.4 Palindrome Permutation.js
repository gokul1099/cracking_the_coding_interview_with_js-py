/*Hints
#you do not have to- and should not -generate all permutation.That would be more inefficient
#what characteristics would a string that is a permutation of a palindrome have?
#have you tried a hashtable? you should be able to get this down to O(N) time.
#can you reduce the space usage by using bit vector

--- both the solutions uses hashtable --- */

const solution1=(inputString)=>{
	const hashMap={}
  var oddFlag=0
  for(var i in inputString){
  	if(hashMap[inputString[i]]){
    	hashMap[inputString[i]]+=1
    }
    else{
    	hashMap[inputString[i]]=1
    }
  }
  for(var [key,value] of Object.entries(hashMap)){
  	if(value%2 === 1 && oddFlag===0){
    		oddFlag=1
    }
    else if(value%2 ===1 && oddFlag===1){
    	
      return "NO"
    }
  }
  return "YES"
  
}

const solution2=(inputString)=>{
	const hashMap={}
  var oddFlag =0
    for(var i in inputString){
  	if(hashMap[inputString[i]]){
    	hashMap[inputString[i]]+=1
    }
    else{
    	hashMap[inputString[i]]=1
    }
  }
  for(var [key,value] of Object.entries(hashMap)){
  	if(value%2 ===1){
    		oddFlag+=1
  }
  }
  return oddFlag >1 ? "NO" : "YES"
}

