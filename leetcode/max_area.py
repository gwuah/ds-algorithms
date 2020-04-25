
def max_area(height):
    i, j = 0, len(height) - 1
    max_area = 0

    def get_smaller_value(x, y) :
        if x > y : 
            return y
        return x
    
    def calculate_area(a, b) :
        (x1, y1) = a
        (x2, y2) = b

        x = x2 - x1

        return get_smaller_value(y1, y2) * x


    while i < j:
        print("testing {} and {}".format(i,j))

        if i >= len(height) or j <= -1 :
            break

        left, right = height[i], height[j]


        area = calculate_area((i+1,left), (j+1, right))

        if area > max_area : max_area = area

        print(left, right)

        if left > right : 
            j -= 1
        elif right > left : 
            i += 1
        else : 
            i += 1
            j -= 1
        

    return max_area


# print(max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]))

print(max_area([1, 1, 1, 1]))

# print(calculate_area((1,1), (9,7)))