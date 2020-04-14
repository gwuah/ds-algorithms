class Stack:
    def __init__(self):
        self.list = []

    def push(self, arg):
        self.list.append(arg)

    def peek(self):
        return self.list[-1]

    def pop(self):
        return self.list.pop()

    def size(self):
        return len(self.list)


if __name__ == "__main__":
    stack = Stack()
    stack.push(10)
    print(stack.peek())
    stack.pop()
    print(stack.peek())

