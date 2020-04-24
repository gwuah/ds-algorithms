def three_sum(args):
    args.sort()
    combinations = []

    print(args)

    for count, c in enumerate(args):
        state = {}
        # c *= -1

        print("\n")

        for b in args[count + 1 :]:
            # print("|---------------------------|")
            # print("looking for {}".format(c))
            # print("we have b as {}".format(b))
            a = (c + b) * (-1)
            # print("we have a as {}".format(a))
            # print("|---------------------------|")

            # print(a, b, c)

            if b not in state:
                state[a] = [b, c]
            else:
                combinations.append([a, b, c])
                break

    return combinations


print(three_sum([-1, 0, 1, 2, -1, -4]))
