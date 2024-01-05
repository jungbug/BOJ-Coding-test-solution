class Node:

    def __init__(self, key, data):
        self.key = key
        self.data = data
        self.left = None
        self.right = None
 
    def lookup(self, key, parent=None):
        if key < self.key:
            if self.left: return self.left.lookup(key, self)
            else: return None, None
        elif key > self.key:
            if self.right: return self.right.lookup(key, self)
            else: return None, None
        else: return self, parent

    def countChildren(self):
        count = 0
        if self.left: count += 1
        if self.right: count += 1
        return count

class BinSearchTree:

    def __init__(self):
        self.root = None

    def lookup(self, key):
        if self.root: return self.root.lookup(key)
        else: return None, None 

    def remove(self, key):
        node, parent = self.lookup(key)
        if node:
            nChildren = node.countChildren()
            # [Case 1]: The simplest case of no children
            if nChildren == 0:
                # 만약 parent 가 있으면
                # node 가 왼쪽 자식인지 오른쪽 자식인지 판단하여 parent.left 또는 parent.right 를 None 으로 하여
                # leaf node 였던 자식을 트리에서 끊어내어 없앱니다.
                if parent:
                    if parent.left == node: parent.left = None
                    else: parent.right = None
                # 만약 parent 가 없으면 (node 는 root 인 경우) self.root 를 None 으로 하여 빈 트리로 만듭니다.
                else:
                    self.root = None
            # [Case 2]: When the node has only one child
            elif nChildren == 1:
                # 하나 있는 자식이 왼쪽인지 오른쪽인지를 판단하여 그 자식을 어떤 변수가 가리키도록 합니다.
                # 만약 parent 가 있으면 node 가 왼쪽 자식인지 오른쪽 자식인지 판단하여
                # 위에서 가리킨 자식을 대신 node 의 자리에 넣습니다.
                if parent:
                    if node.left:
                        if parent.left == node: parent.left = node.left
                        else: parent.right = node.left
                    else:
                        if parent.right == node: parent.right = node.right
                        else: parent.right = node.right
                # 만약 parent 가 없으면 (node 는 root 인 경우) self.root 에 위에서 가리킨 자식을 대신 넣습니다.
                else:
                    if node.left: self.root = node.left
                    else: self.root = node.right
            # [Case 3]: When the node has both left and right children
            else:
                parent = node
                successor = node.right
                # parent가 node를 가리키도록 하고,
                # successor 는 node 의 오른쪽 자식 서브트리의 root노드를 가리키도록 합니다.
                # successor 로부터 왼쪽 자식의 링크를 반복하여 따라감으로써
                # 순환문이 종료할 때 successor는 node의 오른쪽 자식 서브트리의 최소값을,
                # 그리고 parent 는 그 노드의 부모 노드를 가리키도록 찾아냅니다.
                while successor.left:
                    parent = successor
                    successor = successor.left
                # 삭제하려는 노드인 node 에 방금 찾은 successor 의 key 와 data 를 대입합니다.
                node.key = successor.key
                node.data = successor.data
                # 이제, successor 가 parent 의 왼쪽 자식인지 오른쪽 자식인지를 판단하여
                # 그에 따라 parent.left 또는 parent.right 를 successor 가 가지고 있던 (없을 수도 있지만) 자식을 가리키도록 합니다.
                if parent.left == successor:
                    if successor.left: parent.left = successor.left
                    elif successor.right: parent.left = successor.right
                    else: parent.left = None
                else:
                    if successor.left: parent.right = successor.left
                    elif successor.right: parent.right = successor.right
                    else: parent.right = None
            return True

        else:
            return False
        
class Node:
    
    def __init__(self, item):
        self.data = item
        self.left = None
        self.right = None

    def inorder(self):
        traversal = []
        if self.left: traversal += self.left.inorder()
        traversal.append(self.data)
        if self.right: traversal += self.right.inorder()
        return traversal

    def preorder(self):
        traverse = []
        traverse.append(self.data)
        if self.left: traverse += self.left.preorder()
        if self.right: traverse += self.right.preorder()
        return traverse

    def postorder(self):
        traverse = []
        if self.left: traverse += self.left.postorder()
        if self.right: traverse += self.right.postorder()
        traverse.append(self.data)
        return traverse

 

 

class BinaryTree:

    def __init__(self, r):
        self.root = r

    def inorder(self):
        if self.root: return self.root.inorder()
        else: return []

    def preorder(self):
        if self.root: return self.root.preorder()
        else: return []

    def postorder(self):
        if self.root: return self.root.postorder()
        else: return []