const twoSumLinkedList = require('./twoSumLinkedList.js').twoSumLinkedList;
const assert = require ('chai').assert;

describe('twoSumLinkedList', () => {
  var node1 = new ListNode(1); 
  var node2 = new ListNode(2);
  var node3 = new ListNode(3);
  var node4 = new ListNode(4);
  var node5 = new ListNode(5);
  var node6 = new ListNode(6);
  var node7 = new ListNode(7);
  var node8 = new ListNode(8);
  var node9 = new ListNode(9);
  node1.next = node2;
  node2.next = node3; //node1 is a list (1 -> 2 -> 3) now
  node4.next = node5; 
  node5.next = node6; //node4 is a list (4 -> 5 -> 6) now 
  node7.next = node8;
  node8.next = node9; //node7 is a list (7 -> 8 -> 9) now

  let list1 = twoSumLinkedList(node1, node4);
  let list2 = twoSumLinkedList(node1, node7);

  it('should return a linked list', () => {
    assert.equal(typeof list1, 'object');
    assert.equal(typeof list2, 'object');
  });

  it('should return the correct length of a list', () => {
    assert.equal(listLength(list1), 3);
    assert.equal(listLength(list2), 4);
  });

  it('should return the correct value of the sum', () => {
    assert.equal(list1.val, 7); 
    assert.equal(list1.next.val, 7);
    assert.equal(list1.next.next.val, 7);
    assert.equal(list2.val, 1);
    assert.equal(list2.next.val, 1);
    assert.equal(list2.next.next.val, 1);
    assert.equal(list2.next.next.next.val, 0);
  })

});

function listLength(list){
  let length = 0;
  let node = list 
  while(node){
    length++; 
    node = node.next;
  }
  return length;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}