def common_ss(s1, s2):
    our_dict = {}

    if s1 == s2:
        print("YES")

    for index in range(len(s1)):
        string = s1[index]
        our_dict[string] = True

    for index in range(len(s2)):
        string = s1[index]
        if our_dict[string]:
            print("YES")
            return

    print("NO")

