
def is_palindrome(s) :
    return s[::-1] == s


def longest_palindrome_substring(s):
    length = len(s)
    state = {0: ""}
    max_length_so_far = 0

    def is_palindrome(s) :
        return s[::-1] == s

    if length == 0 :
        return ""

    if length == 1 :
        return s
        
    if is_palindrome(s) :
        return s
    


    for i in range(0, length) :
        for j in range(i+2, length+1) :

            substring = s[i:j]            
            length_of_substr = len(substring)
            
            # print(substring, length_of_substr)

            if is_palindrome(substring) :
                state[length_of_substr] = substring
                if length_of_substr > max_length_so_far :
                    max_length_so_far = length_of_substr
    
    if len(state.keys()) == 1:
        return s[0]
    else :
        return state[max_length_so_far]

# longest_palindrome_substring("b")
print(longest_palindrome_substring("ac"))