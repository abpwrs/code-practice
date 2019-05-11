class ListNode<Q> {
  value: Q;
  next: ListNode<Q> | undefined;
  prev: ListNode<Q> | undefined;
  constructor(value: Q, next?: ListNode<Q>, prev?: ListNode<Q>) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList<T> {
  // attributes
  private head: ListNode<T> | undefined;
  private tail: ListNode<T> | undefined;
  private num_nodes: number = 0;

  // methods
  // insert value at back
  push(value: T) {
    const new_node = new ListNode<T>(value);
    if (this.head === undefined) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      new_node.prev = this.tail;
      this.tail!.next = new_node;
      this.tail = new_node;
    }
    this.num_nodes += 1;
  }

  // remove value from back
  pop() {
    if (this.head === undefined) {
      return undefined;
    }
    let result = this.tail!.value;
    if (this.head.next === undefined) {
      // there is only one element in the list
      this.head = undefined;
      this.tail = undefined;
      this.num_nodes -= 1;
      return result;
    }

    let new_tail = this.tail!.prev;
    this.tail = new_tail;
    this.tail!.next = undefined;
    this.num_nodes -= 1;
    return result;
  }

  // unshift a value onto the front
  unshift(value: T) {
    const new_node = new ListNode<T>(value);
    if (this.head === undefined) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      new_node.next = this.head;
      this.head!.prev = new_node;
      this.head = new_node;
    }
    this.num_nodes += 1;
  }

  // shift value off the front
  shift() {
    if (this.head === undefined) {
      return undefined;
    }
    let result = this.head.value;
    if (this.head.next === undefined) {
      // there is only one element in the list
      this.head = undefined;
      this.tail = undefined;
      this.num_nodes -= 1;
      return result;
    }

    let new_head = this.head!.next;
    this.head = new_head;
    this.head!.prev = undefined;

    this.num_nodes -= 1;
    return result;
  }

  // count of number of elems on the list
  count() {
    return this.num_nodes;
  }

  // delete element of `value` of the list
  delete(search_value: T) {
    if (this.head === undefined) {
      return;
    }
    if (this.head.next === undefined) {
      if (this.head.value === search_value) {
        this.pop();
        return;
      }
    }

    let curr_node = this.head;
    while (curr_node.next !== undefined) {
      if (curr_node.value === search_value) {
        curr_node.prev!.next = curr_node.next;
        curr_node.next!.prev = curr_node.prev;
        this.num_nodes -= 1;
        return;
      }
      curr_node = curr_node.next;
    }
    return;
  }
}

export default LinkedList;
