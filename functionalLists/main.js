function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function () {
  return "()";
};
EmptyList.prototype.isEmpty = function () {
  return true;
};
EmptyList.prototype.length = function () {
  console.log("length 0");
  return 0;
};
EmptyList.prototype.push = function (x) {
  return new ListNode(x, this);
};
EmptyList.prototype.remove = function (x) {
  return this;
};
EmptyList.prototype.append = function (xs) {
  return xs;
};

function ListNode(value, next) {
  this.value = value;
  this.next = next;
}

ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function () {
  return false;
};

ListNode.prototype.toString = function () {
  var str = "(";
  var temp = this;
  while (temp.next instanceof ListNode) {
    str = str + temp.head() + " ";
    temp = temp.next;
  }
  return str + temp.head() + ")";
};

ListNode.prototype.head = function () {
  return this.value;
};
ListNode.prototype.tail = function () {
  return this.next;
};

ListNode.prototype.length = function () {
  return this.tail().length() + 1;
};

ListNode.prototype.push = function (x) {
  return new ListNode(x, this);
};

ListNode.prototype.remove = function (x) {
  var rest = this.tail().remove(x);

  if (this.head() !== x) {
    if (this.tail() === rest) return this;
    else return new ListNode(this.head(), rest);
  } else return rest;
};

ListNode.prototype.append = function (xs) {
  return new ListNode(this.value, this.next.append(xs));
};
