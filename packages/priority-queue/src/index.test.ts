import { PriorityQueue } from '.'

describe('Priority Queue', () => {
  it('dequeue value enqueued order by priority', () => {
    const pq = new PriorityQueue<string>()
    expect(pq.dequeue()).toBeUndefined()
    pq.enqueue(10, 'bar')
    pq.enqueue(2, 'buzz')
    pq.enqueue(5, 'foo')
    pq.enqueue(8, 'fizz')
    expect(pq.dequeue()).toEqual({ priority: 2, value: 'buzz' })
    expect(pq.dequeue()).toEqual({ priority: 5, value: 'foo' })
    expect(pq.dequeue()).toEqual({ priority: 8, value: 'fizz' })
    pq.enqueue(3, 'meow')
    expect(pq.dequeue()).toEqual({ priority: 3, value: 'meow' })
    expect(pq.dequeue()).toEqual({ priority: 10, value: 'bar' })
    pq.enqueue(1, 'buzz')
    pq.enqueue(6, 'foo')
    pq.enqueue(4, 'bar')
    expect(pq.dequeue()).toEqual({ priority: 1, value: 'buzz' })
    expect(pq.dequeue()).toEqual({ priority: 4, value: 'bar' })
    expect(pq.dequeue()).toEqual({ priority: 6, value: 'foo' })
    expect(pq.dequeue()).toBeUndefined()
  })
  it('dequeue value without priority enqueued order by priority', () => {
    const pq = new PriorityQueue<string>()
    expect(pq.dequeue()).toBeUndefined()
    pq.enqueue(5, 'foo')
    pq.enqueue(2, 'buzz')
    pq.enqueue(8, 'fizz')
    expect(pq.dequeueValue()).toEqual('buzz')
    expect(pq.dequeueValue()).toEqual('foo')
    expect(pq.dequeueValue()).toEqual('fizz')
    expect(pq.dequeueValue()).toBeUndefined()
  })
  it('peek minimal priority value', () => {
    const pq = new PriorityQueue<string>()
    expect(pq.peek()).toBeUndefined()
    pq.enqueue(5, 'bar')
    pq.enqueue(3, 'foo')
    expect(pq.peek()).toEqual({ priority: 3, value: 'foo' })
    expect(pq.peek()).toEqual({ priority: 3, value: 'foo' })
    pq.dequeue()
    expect(pq.peek()).toEqual({ priority: 5, value: 'bar' })
  })
  it('peek minimal priority value without priority', () => {
    const pq = new PriorityQueue<string>()
    expect(pq.peekValue()).toBeUndefined()
    pq.enqueue(5, 'bar')
    pq.enqueue(3, 'foo')
    expect(pq.peekValue()).toEqual('foo')
    expect(pq.peekValue()).toEqual('foo')
    pq.dequeue()
    expect(pq.peekValue()).toEqual('bar')
  })
})
