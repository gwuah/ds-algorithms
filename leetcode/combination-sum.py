# def combinationSum(candidates, target):
#     res = []
#     candidates.sort()

#     def dfs(nums, target, index, path, res):
#         print((target, path, index, res))

#         print(" ")

#         if target < 0:
#             return
#         if target == 0:
#             res.append(path)
#             return
#         for i in range(index, len(nums)):

#             # if nums[i] > target:  #here
#             #     break

#             dfs(nums, target - nums[i], i, path + [nums[i]], res)

#         print(
#             "{}----------------------------------------------------------------------------\n"
#             .format(index))

#     dfs(candidates, target, 0, [], res)
#     return res


def combinationSum(candidates, target):
    res = []

    candidates.sort()

    def breadth_first_search(candidates, target, index, curr_combination, res):

        if (target < 0):
            return

        if (target == 0):
            res.append(curr_combination)
            return

        for i in range(index, len(candidates)):
            if (candidates[i] > target):
                break

            breadth_first_search(candidates, target - candidates[i], i,
                                 curr_combination + [candidates[i]], res)

    breadth_first_search(candidates, target, 0, [], res)

    return res


print(combinationSum([10, 20, 30], 30))
