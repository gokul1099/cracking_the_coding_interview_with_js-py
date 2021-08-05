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
