def three_to_zero_sum(s):
    results = []
    s.sort()

    zero_index = None

    for index, value in enumerate(s):
        if value >= 0:
            zero_index = index
            break

    left_half, right_half = s[0:zero_index + 1], s[zero_index + 1:]

    state = {}

    for i in right_half:
        for j in left_half:
            difference = i - j

        if difference in state:
            results.append([i, j, difference])

    return [left_half, right_half]


print(three_to_zero_sum([-1, 0, 1, 2, -1, -4]))