m = ["two", "times", "three", "is", "not", "four"]
n = ["two", "times", "two", "is", "four"]


def checkMagazine(magazine, note):
    for word in note:
        print(word)
        if not word in magazine:
            print("No")
    print("Yes")


checkMagazine(m, n)
