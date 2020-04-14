def search_matrix(matrix, target):
    for row in matrix:
        last_element = row[-1]
        if last_element > target:
            for element in row:
                if element == target:
                    return True
        elif last_element == target:
            return True
    return False


matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]]
matrix_1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]]
print(search_matrix(matrix, 3))
print(search_matrix(matrix_1, 50))
