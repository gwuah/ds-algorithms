def bubble_sort(array) :
    has_swapped = True
    array_length = len(array)

    for i in range(len(array)) :
        for j in range(i) :
            smaller = array[i]
            if (array[i] < array[j]) :
                array[i] = array[j]
                array[j] = smaller
            
    return array

    


print(bubble_sort([10,5,3,8,2,6,4,7,9,1]))