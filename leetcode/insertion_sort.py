# def insertion_sort(nums):
#     length = len(nums)
#     for i in range(length):
#         for j in range(i):
#             element_at_i = nums[i]
#             element_at_j = nums[j]

#             if element_at_i < element_at_j:
#                 nums[i] = element_at_j
#                 nums[j] = element_at_i

#     return nums


def insertion_sort(array):
    length = len(array)
    current_element = 0

    for i in range(1, length):
        current_element = array[i]
        for j in range(i - 1, -1, -1):
            # print(current_element, "current_element")
            number_at_index_j = array[j]
            # print(number_at_index_j, "naij")
            print("comparing {} and {}".format(current_element, number_at_index_j))
            if current_element < array[j]:
                array[j] = current_element
                array[i] = number_at_index_j
            print(array)
        print("-------------------")

    return array


print(insertion_sort([10, 9, 8]))
