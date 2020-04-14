class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAfterElement(insert_after, data) {
    let curr = this.head;

    while (curr && curr.value != insert_after) {
      curr = curr.next;
    }

    if (!curr || curr.value != insert_after) {
      return "Element not in list";
    }

    const oldNext = curr.next;
    const newNode = new Node(data);
    curr.next = newNode;
    newNode.next = oldNext;
  }

  insertAtEnd(data) {
    const new_node = new Node(data);
    if (!this.head) {
      this.head = new_node;
    }

    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }

    curr.next = new_node;
  }

  insertAtHead(data) {
    const head = this.head;
    const newNode = new Node(data);
    newNode.next = head;
    this.head = newNode;
  }

  traverseFromHead() {
    if (!this.head) {
      return 0;
    }
    let curr = this.head;
    while (curr) {
      console.log(curr);
      curr = curr.next;
    }
  }

  deleteByValue(value) {
    const head = this.head;
    if (!head) {
      return "Empty List";
    }
    if (head.value === value) {
      const next = head.next;
      this.head = next;
      return;
    }

    let curr = this.head;
    while (curr.next && curr.next.value != value) {
      if (curr.next.value === value) {
        break;
      }
      curr = curr.next;
    }

    if (!curr.value) {
      return "Not found";
    }
    curr.next = curr.next.next;
  }

  reverseList() {
    let prev, curr, next;
    prev = null;
    curr = this.head;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    this.traverseFromHead();
  }

  customReverse() {
    let next, prev, current;
    prev = null;
    current = this.head;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  anotherReverse() {
    let next, prev, current;
    prev = null;
    current = this.head;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  anothReverse() {
    let next, prev, curr;
    prev = null;
    curr = this.head;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  anotherReverse() {
    let prev, next, curr;
    prev = null;
    curr = this.head;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  anotherReverse() {
    let prev, curr, next;

    prev = null;
    curr = this.head;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }
}

const ll = new LinkedList();
ll.insertAtHead(40);
ll.insertAtEnd(50);
ll.insertAtEnd(60);

// 40 -> 50 -> 60
