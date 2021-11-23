# MWT Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can use the integrated scripts to run the app, such as `npm start` or `npm run build`  

## Problem 1

You can find the required function in `src/utilities/parseArrayToTree.ts`.
This function does 2 things:
 - Retrieve a `BinTreeNode` object with the recursive function `getTreeNode`(located in `src/utilities/getTreeNode.ts`)
 - Parse to JSON & Format the BinTreeNode, return this result

This function is called in "Problem 2"
 
## Problem 2

Fetching `main` branch and running `npm start` will display the SPA, that will contain:
- The file input field. I limited the type files such as `.txt` & `.json` 
- The "Fetch" button that will process the file
- The TextArea with the processed tree formatted as JSON text, this text area is editable
- The text area will be change its border color to error if any of the following situations happens:
  - The JSON provided has a syntax error
  - The JSON provided has an error and cannot be processed as BinTreeNode (e.g, some node does not have the 'id' prop)
  
## Problem 3

It is rendered in the main page along with the "Problem 2". 

- We have to check out for the depth of the tree to know which child is the one that has the deepest node
- Knowing the tree's height is itself a tree transversal problem
- The first thing to do is a recursive approach to get the height of each node on each level and return the maximum number
- Then, for the main problem on each node we call that getTreeHeight function and compare if is the left side or the right side the one that has a greater depth, this will indicate which child contains the latest node.
- If the height of both sides is equal, it means that either we're on the deepest leaf or we've found the deepest subtree, in that case we return the node we just evaluated.
- If that's not the case we do a recursive call to the same function sending the node that has the greater height as "treeNode", which will evaluate again everything for the child node.

[NOTE 1]: 
There's a possible improvement: A dynamic programming approach could be used to store each level left and right heights and only look for that value in an object or something instead of calling the recursive functions on each node. I didn't explore this option but I think it could improve the performance.

`[NOTE 2]:`
Recursion is viable for the test cases given in the example, however in real world, the data structures are not quite small and using recursion for production environments could lead to bad performance results or stack overflows.
That approach could save us some memory consumed because we're not storing extra data but still could end up badly on larger datasets. 

That's why an iterative approach could be also used (for both functions: getTreeHeight &  getSmallestSubtree), this could add extra stored variables but would work better on larger datasets. 
In this project you can find both approaches 

RECURSIVE: (The first one I came with) `src/utilities/smallesSubtree/recursive` 
ITERATIVE: `src/utilities/smallesSubtree/iterative`

For the main SPA we'll be using the iterative approach, but keeping the recursive as the first idea I had and coded.

## Possible enhacements
- [Problem 2]: Use a drag-drop area instead of only the file input. This could save 3 clicks to the user, making the experience a little more easier and quick.      
- [Problem 2]: Add upload progress indicator. Gives the user info while waiting.
- [Problem 2]: Process the file as soon as the file updates. This save the user one more click. 
- [Problem 2]: Add line-numbers to the text area (or use a library that could make this a display the text as code editor). This could be an improvement to highlight the errors and make them easier to fix.

- [Problem 3]: Add toggle buttons to decide combination of algorithms for getting the smallestSubtree  
- [Problem 3]: Add comparisons of memory & time for each combination of algorithms for getting the smallestSubtree
- [Problem 3]: Add animations on hover for the sub-trees div section. That makes the display look more interactive.
- 
- [General]: Add ability to switch between column-view & row-view


