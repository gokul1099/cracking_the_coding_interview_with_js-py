
/*  this is normal brute force method where every element in the string is compared with other elements */
const brute_force = (str) => {

    for (let frwdInd = 0; frwdInd < str.length; frwdInd++) {
        for (let backInd = frwdInd + 1; backInd < str.length; backInd++) {
            if (str[frwdInd] === str[backInd]) {
                return false;
            }
        }
    }
    return true
}

/* this is using hashtable as they asked as to solve without using additional data structure this method is not preffered*/

const hash_table = (str) => {
    let hash = {}
    for (let i = 0; i < str.length; i++) {
        if (hash[str[i]] && hash[str[i]] >= 1) {
            return false
        }
        else {
            hash[str[i]] = 1
        }
    }
    return true
}


console.log(brute_force("ab"))
console.log(hash_table("aa"))