def combinationSum(candidates, target):
    res = []
    candidates.sort()

    def dfs(nums, target, index, path, res):
        # print((nums, target, index, path, res))

        print((target, path, res))

        print(" ")

        if target < 0:
            return  # backtracking
        if target == 0:
            res.append(path)
            return
        for i in range(index, len(nums)):
            # print((nums, target-nums[i], i, path+[nums[i]], res))
            # print((nums, target, i, path, res))
            # print("target={} || nums[i] = {}".format(target, nums[i]))
            # if nums[i] > target:  #here
            #     break

            dfs(nums, target - nums[i], i, path + [nums[i]], res)

        print(
            "{}----------------------------------------------------------------------------\n"
            .format(index))

    dfs(candidates, target, 0, [], res)
    return res


combinationSum([2, 3, 4, 6], 8)

# def test():
#     for i in range(0, 4):
#         print(i)
#     print(i)

# test()