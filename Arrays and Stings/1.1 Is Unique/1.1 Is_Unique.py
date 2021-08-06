# --- bruteFroce ---

def bruteForce(inputStr):
    for frwdIndex in range(len(inputStr)):
        for backIndex in range(frwdIndex+1,len(inputStr)):
            if(inputStr[frwdIndex] == inputStr[backIndex]):
                return False
    return True


# --- hashTable ---

def hashTable(inputStr):
    arr = {}
    for index in range(len(inputStr)):
        if inputStr[index] in arr:
            return False
        else:
            arr[inputStr[index]] = 1
    return True        
# --- booleanArray ---

def booleanArray(inputStr):
    arr=[0 for i in range(256)]
    for index in range(len(inputStr)):
        if arr[ord(inputStr[index])] == 1:
            return False
        else:
            arr[ord(inputStr[index])] =1
    return True

# --- usingSet ---

def usingSet(inputStr):
    toCheck = set(inputStr)
    if len(toCheck) != len(inputStr):
        return False
    return True

# --- setImplementation using array

def setImplementation(inputStr):
    toCheck=[]
    for i in inputStr:
        if i not in toCheck:
            toCheck.append(i)
    if len(toCheck) != len(inputStr):
        return False
    return True
    print(toCheck)
