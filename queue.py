class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, item):
        self.queue.append(item)
        return 'Item added to the queue'

    def dequeue(self):
        self.queue.pop(0)
        return 'Item removed from the front of the queue'

    def peek(self):
        return self.queue[0]


first_queue = Queue()

print(first_queue.enqueue('First Item'))
print(first_queue.enqueue('Second Item'))
print(first_queue.enqueue('Third Item'))

print(first_queue.dequeue())
print(first_queue.peek())

print(first_queue.queue)
