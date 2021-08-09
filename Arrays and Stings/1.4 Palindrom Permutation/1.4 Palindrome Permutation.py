#Hints
#you do not have to- and should not -generate all permutation.That would be more inefficient
#what characteristics would a string that is a permutation of a palindrome have?
#have you tried a hashtable? you should be able to get this down to O(N) time.
#can you reduce the space usage by using bit vector

# both the solutions uses hashtable

def solution1(inputString):
    hashMap ={}
    oddFlag=0
    for i in inputString:
        if i in hashMap:
            hashMap[i]+=1
        else:
            hashMap[i]=1
    for (key,value) in hashMap.items():
        if(value%2==1 and oddFlag==0):
            oddFlag=1
        elif(value%2==1 and oddFlag==1):
            printFlag=1
            return "NO" 
    return "YES"

def solution2(inputString):
    hashMap={}
    oddFlag=0
    for i in inputString:
        if i in hashMap:
            hashMap[i]+=1
        else:
            hashMap[i]=1
    for (key,value) in hashMap.items():
        if value%2==1:
          oddFlag+=1
    if(oddFlag >1):
        return "NO'
    return "YES"
