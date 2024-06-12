let queue = [];
let queueContainer = document.getElementById('queue-container');
let queueElementTemplate = document.getElementById('queue').innerHTML;
let insertBtn = document.getElementById('insert-btn');
let deleteBtn = document.getElementById('delete-btn');


function insertElement(element) {
    queue.push(element);
    updateQueue();
}

function deleteElement() {
    if (queue.length > 0) {
        queue.shift();
        updateQueue();
    }
}

function updateQueue() {
    let queueHTML = '';
    queue.forEach((element, index) => {
        queueHTML += `<div class="queue-element">${element}</div>`;
    });
    document.getElementById('queue').innerHTML = queueHTML;
}

insertBtn.addEventListener('click', () => {
    let element = prompt('Introduce el elemento a insertar');
    if (element) {
        insertElement(element);
    }
});

deleteBtn.addEventListener('click', deleteElement);

updateQueue();