class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(item) {
    this.queue.push(item)
    return 'Item added to the queue'
  }

  dequeue() {
    this.queue.shift()
    return 'Item removed from the front of the queue'
  }

  peek() {
    return this.queue[0]
  }
}

firstQueue = new Queue()

console.log(firstQueue.enqueue('First Item'))
console.log(firstQueue.enqueue('Second Item'))
console.log(firstQueue.enqueue('Third Item'))

console.log(firstQueue.dequeue())
console.log(firstQueue.peek())

console.log(firstQueue.queue)