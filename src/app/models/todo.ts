export class ToDo {
    id: number;
    label: string;
    priority: number;
    done: boolean = false;

    constructor(label, priority, done) {
        this.label = label;
        this.priority = priority;
        this.done = done;
    }
}