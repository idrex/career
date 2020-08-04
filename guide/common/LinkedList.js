class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //向链表尾部插入节点
  append(element) {
    const newNode = new Node(element);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  //向链表特定位置插入节点
  insert(position, element) {
    if (position < 0 || position > this.length) return false;
    const newNode = new Node(element);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let index = 0;
      let current = this.head;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = newNode;
      newNode.next = current;
    }
    this.length++;
  }

  //获取特定位置的元素
  get(position) {
    if (position < 0 || position > this.length - 1) return null;
    let index = 0;
    let current = this.head;
    while (index++ < position) {
      current = current.next;
    }
    return current.element;
  }

  //获取特定元素的下标
  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  //删除某个位置的节点
  removeAt(position) {
    if (position < 0 || position > this.length - 1) return null;
    let current = this.head;
    let previous = null;
    let index = 0;
    if (position === 0) {
      this.head = head.next;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.element;
  }

  //修改某个位置的元素
  update(position, element) {
    const res = this.removeAt(position);
    this.insert(position, element);
    return res;
  }
}
