//Source: LeetCode (https://leetcode.com/problems/add-two-numbers/)

// You are given two linked lists representing two non-negative numbers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// Input: (2 -> 4 -> 3)
//      + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

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
  
};

//Use for following function to generate a linked list;
//You don't need to modified this for your solution. 
function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = { twoSumLinkedList }; 