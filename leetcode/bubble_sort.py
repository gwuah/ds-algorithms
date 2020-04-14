def bubble_sort(array):
    array_length = len(array)

    for i in range(1, len(array)):
        for j in range(i - 1, 0, -1):
            smaller = array[i]
            if array[j] > array[i]:
                array[i] = array[j]
                array[j] = smaller
    return array


print(bubble_sort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]))

