// Javascript program to print level order
// traversal in spiral form using a single dequeue
class Node
{
    constructor()
    {
        this.data = 0;
        this.left = null;
        this.right = null;
    }
};
 
// A utility function to create a new node
function newNode(data)
{
    var node = new Node();
    node.data = data;
    node.left = node.right = null;
    return (node);
}
 
// Function to print the level order traversal
function levelOrder(root, n)
{
     
    // We can just take the size as H+N which
    // implies the height of the tree with the
    // size of the tree
    var queue = Array(2 * n);
     
    for(var i = 0; i < 2 * n; i++)
        queue[i] = new Node();
     
    var top = -1;
    var front = 1;
    queue[++top] = null;
    queue[++top] = root;
    queue[++top] = null;
 
    // Node t=root;
    var prevFront = 0, count = 1;
    while (true)
    {
        var curr = queue[front];
 
        // A level separator found
        if (curr == null)
        {
             
            // If this is the only item in dequeue
            if (front == top)
                break;
 
            // Else print contents of previous level
            // according to count
            else
            {
                if (count % 2 == 0)
                {
                    for(var i = prevFront + 1;
                            i < front; i++)
                        document.write(" " + queue[i].data);
                }
                else
                {
                    for(var i = front - 1;
                            i > prevFront; i--)
                        document.write(" " + queue[i].data);
                }
 
                prevFront = front;
                count++;
                front++;
 
                // Insert a new level separator
                queue[++top] = null;
 
                continue;
            }
        }
 
        if (curr.left != null)
            queue[++top] = curr.left;
        if (curr.right != null)
            queue[++top] = curr.right;
             
        front++;
    }
    if (count % 2 == 0)
    {
        for(var i = prevFront + 1; i < top; i++)
            document.write(" " + queue[i].data);
    }
    else
    {
        for(var i = top - 1; i > prevFront; i--)
            document.write(" " + queue[i].data);
    }
}
 
// Driver code
var root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(7);
root.left.right = newNode(6);
root.right.left = newNode(5);
root.right.right = newNode(4);
 
levelOrder(root, 7);
 
