export interface QueueT {
    elements: any[]
}

export class Queue implements QueueT {
    elements: any[]

    constructor() {
        this.elements = []
    }

    /**
     * Add element at the end of the queue
     * @param any: element to be added
     * @returns number: New array length
     * */
    enqueue = (element): number => this.elements.push(element)

    /**
     * Add element at the end of the queue
     * @returns any: Element removed
     * */
    dequeue = (): any => this.elements.shift()

    /**
     * Returns the element that is in the front of the queue without removing it.
     * @returns any| undefined: Element at the front of the queue if the queue has at least one element
     * */
    peek = (): any | undefined => (this.elements.length ? this.elements[0] : undefined)

    /**
     * Checks if the current Queue has no elements
     * @returns boolean
     * */
    isEmpty = (): boolean => this.elements.length === 0

    /**
     * Returns current queue length
     * @returns number
     * */
    length = (): number => this.elements.length
}
