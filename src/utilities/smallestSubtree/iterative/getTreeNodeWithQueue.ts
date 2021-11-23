import { BinTreeNodeT } from '../../../types'
import { Queue } from '../../../classes/Queue'

/**
 * Function that returns the tree height using a queue instead of recursion
 * @param BinTreeNodeT
 * @returns number
 * */

const getTreeHeightWithQueue = (tree: BinTreeNodeT): number => {
    const queue = new Queue()
    let levelNodeCount = 0
    let height = 0
    let node = null

    if (tree == null) {
        return 0
    }

    queue.enqueue(tree)

    while (!queue.isEmpty()) {
        /*
         * The following variable keeps track of each level the tree has
         * */

        height++

        /*
         * We want to know how many nodes have the level we're iterating, that's why we get
         * the queue's current size
         * */
        levelNodeCount = queue.length()

        /*
         * Because of the last variable, we know how many nodes are left to explore, so we'll
         * check those node on a loop that will iterate levelNodeCount times, each time one of the
         * nodes will be inspected and their children (if any) will be added to the queue for
         * further evaluation.
         * */

        while (levelNodeCount--) {
            node = queue.dequeue()
            /*
             * Add current node's left child to queue if it exists
             * */
            if (node.left) {
                queue.enqueue(node.left)
            }

            /*
             * Add current node's right child to queue if it exists
             * */
            if (node.right) {
                queue.enqueue(node.right)
            }
        }
    }

    return height
}

export default getTreeHeightWithQueue
