#Hints
#1. Describe What it means for two strings to be permuatations of each other.Now,
#   look at that definition you provided. Can you check the strings against the definition?
#2. There is one solution that is 0(N log N) time. Another solutions uses some space, but is 0(N) time
#3. Could a hashtable be useful?
#4. Two strings that are permutations should have the same characters, but in different orders. Can you make the orders the same?

# --- bruteForce ---


def bruteForce(string1,string2):
    cnt=0
    for i in string2:
        if i in string1:
            cnt+=1
    if(cnt == len(string2)):
        return True
    return False

# --- hashmap ---

def hashMap(string1,string2):
    hashmap = {}
    for i in string1:
        if i in hashmap:
            hashmap[i]+=1
        else:
            hashmap[i]=1
    print(hashmap)
    for i in string2:
        if ((i in hashmap)and (hashmap[i]!=0)):
            hashmap[i]-=1
        else:
            return False
        
    return True

# --- sorting ---
# this will work only if both the string have the same length
def sorting(string1,string2):
    string1=list(string1)
    string2=list(string2)
    string1.sort()
    string2.sort()
    for i in range(len(string2)):
        if string1[i] != string2[i]:
            return False
    return True    













    


