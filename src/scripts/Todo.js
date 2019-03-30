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



    render() {
        this.list.innerHTML = '';

        mockData.forEach(item => {
            this.createDomElements(item.id);
            this.li.insertAdjacentHTML('afterbegin', item.title);

            if (item.done) {
                this.li.classList.add('done');
            }
            this.list.appendChild(this.li);
        });
    }

    createDomElements(id) {
        this.li = document.createElement('li');
        this.edit = document.createElement('button');
        this.delete = document.createElement('button');
        this.complete = document.createElement('button');

        this.edit.classList.add('btn-edit');
        this.delete.classList.add('btn-delete');
        this.complete.classList.add('btn-complete');

        this.delete.setAttribute('data-id', id);
        this.edit.setAttribute('data-id', id);
        this.complete.setAttribute('data-id', id);

        this.edit.innerHTML = 'Edit';
        this.delete.innerHTML = 'Delete';
        this.complete.innerHTML = 'Complete';

        this.li.appendChild(this.delete);
        this.li.appendChild(this.edit);
        this.li.appendChild(this.complete);

    }
}


export default Todo;