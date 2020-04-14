def repeatedSubstringPattern(s):
    length = len(s)
    i = 1

    while i < length:
        if s[:i] * (length / i) == s:
            return True
        i += 1
    return False


print(repeatedSubstringPattern("babbab"))
print(repeatedSubstringPattern("b"))
print(repeatedSubstringPattern("ababababa"))