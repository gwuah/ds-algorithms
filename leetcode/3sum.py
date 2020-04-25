def three_sum(nums):
    nums.sort()

    combinations = []
    touched = {}

    for count, c in enumerate(nums):
        state = {}
        c *= -1

        if c in touched:
            continue

        for b in nums[count + 1 :]:

            a = c - b

            stringifiedValue = "{}{}{}".format(a, -c, b)

            if a not in state:
                state[b] = [a, -c]
            elif stringifiedValue not in touched:
                combinations.append([a, -c, b])
                touched[stringifiedValue] = True

        touched[c] = True

    return combinations


print(three_sum([-1, 0, 1, 2, -1, -4]))
print(three_sum([0, 0, 0, 0, 0, 0]))
