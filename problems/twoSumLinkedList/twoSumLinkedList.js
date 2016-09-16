//Source: LeetCode (https://leetcode.com/problems/add-two-numbers/)

// You are given two linked lists representing two non-negative intergers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// Input: (2 -> 3 -> 4)
//      + (2 -> 3 -> 4)
// Output: 4 -> 6 -> 8

// var node1 = new ListNode(1);
// var node2 = new ListNode(2);
// var node3 = new ListNode(3);
// var node4 = new ListNode(4);
// var node5 = new ListNode(5);
// var node6 = new ListNode(6);
// var node7 = new ListNode(7);
// var node8 = new ListNode(8);
// var node9 = new ListNode(9);
// node1.next = node2;
// node2.next = node3; //node1 is a list (1 -> 2 -> 3) now
// node4.next = node5; 
// node5.next = node6; //node4 is a list (4 -> 5 -> 6) now 
// node7.next = node8;
// node8.next = node9; //node7 is a list (7 -> 8 -> 9) now

//var a = twoSumLinkedList(node1, node4); // (1 -> 2 -> 3) + (4 -> 5 -> 6) return (5 -> 7 -> 9)
//console.log(a.val, a.next.val, a.next.next.val);
//var b = twoSumLinkedList(node1, node7); // (1 -> 2 -> 3) + (7 -> 8 -> 9) => (8 -> 0 -> 3 -> 1)
//console.log(b.val, b.next.val, b.next.next.val, b.next.next.next.val);

// Note: please handle any positive integers, ie lists in different length, and write your own test

const twoSumLinkedList = (list1, list2) => {
  //Your code here
  let node1 = list1; 
  let node2 = list2;
  let previous = 0; 
  let node, currentNode, sum;  
  while(node1 || node2){
    let val1 = node1 ? node1.val : 0; 
    let val2 = node2 ? node2.val : 0; 
    sum = val1 + val2 + previous;
    let newNode = new ListNode(sum % 10); 
    if(!node){ 
      node = newNode;
    } else {
      currentNode.next = newNode;
    }
    currentNode = newNode;
    if (node1) { node1 = node1.next; }
    if (node2) { node2 = node2.next; }
    previous = Math.floor(sum / 10); 
  }
  if(previous){
    let newNode = new ListNode(previous); 
    currentNode.next = newNode; 
  }
  return node; 
};

//Use for following function to generate a linked list;
//You don't need to modified this for your solution. 
function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = { twoSumLinkedList }; 