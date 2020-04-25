def contains_eleven(nums):
    return 11 in nums


def sum_of_three_numbers(nums):
    return nums[0] + nums[1] + nums[2]


def blackjack(a, b, c):
    nums = (a, b, c)
    total = sum_of_three_numbers(nums)
    total_minus_ten = total - 10

    if total <= 21:
        return total
    elif total > 21 and contains_eleven(nums):
        return total_minus_ten
    elif total_minus_ten > 21:
        return "BUST"


print(blackjack(5, 6, 7))
print(blackjack(9, 9, 9))
print(blackjack(9, 9, 11))
