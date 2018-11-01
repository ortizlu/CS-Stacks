class Stack {
  constructor() {
    this.stack = []
  }

  push(item) {
    this.stack.push(item)
    return 'Item has been added to the top'
  }

  pop(item) {
    this.stack.pop()
    return 'Item has been popped off the top'
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }
}

firstStack = new Stack()

console.log(firstStack.push(1))
console.log(firstStack.push(2))
console.log(firstStack.peek())
console.log(firstStack.push(3))
console.log(firstStack.peek())


console.log(firstStack.pop())
console.log(firstStack.pop())

console.log(firstStack.stack)