def bubble_sort(array) :
    has_swapped = True
    array_length = len(array)

    for i in range(len(array)) :
        print("i == {}".format(i))
        for j in range(i) :
            print("j == {}".format(j))

            smaller = array[i]
            if (array[j] > array[i]) :
                array[i] = array[j]
                array[j] = smaller
        print("--------------------")
            
    return array

    


print(bubble_sort([10,5,3,8,2,6,4,7,9,1]))