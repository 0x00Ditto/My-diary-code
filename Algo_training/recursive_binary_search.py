i = 0
def recursive_binary_search(list, target):
    global i
    if len(list) == 0:
        i+= 1
        return False
    else:
        midpoint = (len(list)) // 2

        if list[midpoint]  == target:
            i +=1
            return  True
        else:
            if list[midpoint] < target:
                i +=1
                return recursive_binary_search(list[midpoint+1:], target)
            else:
                i +=1
                return recursive_binary_search(list[:midpoint],target)

def verify(result):
    global i
    print("Target found: ", result)
    print(i)
    i = 0


numbers = [1,2,3,4,5,6,7,8,9,10]
result = recursive_binary_search(numbers, 10)
verify(result)




result = result = recursive_binary_search(numbers, 0)
verify(result)
