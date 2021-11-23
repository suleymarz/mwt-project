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

```
In the output area shown in your solution above Problem 2, find the smallest subtree with all the deepest nodes and set its border to 2px solid green.

If a tree has only one node at depth equal to the max tree depth, the that node by itself represents the subtree that cotains all the deepest nodes. If multiple nodes whose depths are equal to the max tree depth, then the solution is the smallest subtree containing all those deepest nodes.

In the accomaniying README.md you make, please write down your basic assumptions and engineering tradeoffs for your interpolation of this problem and your solution
``` 


## Possible enhacements
- [Problem 2]: Use a drag-drop area instead of only the file input. This could save 3 clicks to the user, making the experience a little more easier and quick.      
- [Problem 2]: Add line-numbers to the text area (or use a library that could make this a display the text as code editor). This could be an improvement to highlight the errors and make them easier to fix.  
- [Problem 3]: Add animations on hover for the sub-trees div section. That makes the display look more interactive.


## BONUS


