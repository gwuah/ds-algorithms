

def isValid(char):
    return char.isalpha()


def reverse_only_letters(s):
    length = len(s)
    res = [s[index] for index in range(length)]
    i, j = 0, length - 1

    def isValid(char):
        return char.isalpha()

    while (i < j):

        if not isValid(s[i]):
            i += 1

        elif not isValid(s[j]):
            j -= 1

        else:
            res[i], res[j] = s[j], s[i]

            i += 1
            j -= 1

    return "".join(res)
