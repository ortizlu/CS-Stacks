class Stack:
    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item)
        return 'Item has been added to the top'

    def pop(self):
        self.stack.pop()
        return 'Item has been popped off the top'

    def peek(self):
        return self.stack[-1]


first_stack = Stack()

print(first_stack.push(1))
print(first_stack.push(2))
print(first_stack.peek())
print(first_stack.push(3))
print(first_stack.peek())


print(first_stack.pop())
print(first_stack.pop())

print(first_stack.stack)
