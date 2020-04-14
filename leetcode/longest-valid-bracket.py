
def is_valid_bracket(left, right) :
    if left == "(" and right == ")" :
        return True
    return False

def longest_valid_bracket(s):
    i, j, current_streak, longest_streak = 0, 1, 0, 0
    length = len(s)

    while j < length :
        left, right = s[i], s[j]

        if not is_valid_bracket(left, right) :
            i += 1
            j += 1
            current_streak =  0
        else :
            i += 2
            j += 2
            current_streak += 1

        if current_streak > longest_streak : 
            longest_streak = current_streak

    return longest_streak * 2


print(longest_valid_bracket("(()())") == 4)
print(longest_valid_bracket("()()()()") == 8)
# print(longest_valid_bracket("())((())") == 4)