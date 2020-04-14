def remove_duplicates(array):
    previous_value, i = None, 0

    while i < len(array):

        current_value = array[i]

        if current_value == previous_value:
            array.pop(i)
        else:
            previous_value = array[i]
            i += 1

    return len(array)


print(remove_duplicates([1, 1, 1, 2]))
print(remove_duplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
