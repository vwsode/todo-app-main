export interface ITodo {
    _id: string;
    title: string;
    isChecked: boolean;
}

export interface ITodoState {
    todoCount: number;
    todos: Array<ITodo>;
}
