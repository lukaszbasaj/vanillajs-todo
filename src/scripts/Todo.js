let mockData = [{
        id: '1',
        title: 'This is title',
        done: false,
        date: new Date()
    },
    {
        id: '2',
        title: 'This is second title',
        done: false,
        date: new Date()
    },
    {
        id: '3',
        title: 'This is third title',
        done: false,
        date: new Date()
    },
    {
        id: '4',
        title: 'This is fourth title',
        done: false,
        date: new Date()
    }
];





class Todo {
    constructor() {
        this.list = document.querySelector('.list-items');
        this.render();
    }




}


export default Todo;