import math


def merge_sort(nums):
    array_length = len(nums)

    if array_length < 2:
        return nums

    middle = math.floor(array_length / 2)
    left_part = nums[0:middle]
    right_part = nums[middle:]

    a = merge_sort(left_part)
    b = merge_sort(right_part)

    return stitch(a, b)


def stitch(left_part, right_part):

    results = []

    while len(left_part) > 0 and len(right_part) > 0:
        if left_part[0] < right_part[0]:
            results.append(left_part[0])
            left_part.pop(0)
        else:
            results.append(right_part[0])
            right_part.pop(0)

    if len(left_part) > 0:
        results.extend(left_part)

    if len(right_part) > 0:
        results.extend(right_part)

    return results


print(merge_sort([10, 7, 8, 2, 4, 5, 6, 9]))
