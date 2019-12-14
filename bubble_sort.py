def bubble_sort(array) :
    has_swapped = True
    array_length = len(array)
    x = 0

    for outer_index, outer_element in enumerate(array) :
        for inner_index, inner_element in enumerate(array) :
            x += 1
            
            next_index = inner_index + 1 
            greater_than_array_length = next_index > array_length - 1

            if (not greater_than_array_length and inner_element > array[next_index]) :
                current_element = inner_element
                next_element = array[next_index]
                # print("swapping {},{} ---({})".format(current_element, next_element, inner_element))

                array[inner_index] = next_element
                array[next_index] = current_element
            
    print(x)
    return array

    


print(bubble_sort([10,5,3,8,2,6,4,7,9,1]))