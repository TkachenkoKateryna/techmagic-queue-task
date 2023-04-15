const MY_AGE = 24;
let dequeueBtn = document.getElementById('dequeueBtn');
let submitBtn = document.getElementById('submitBtn');
let form = document.getElementById('form');
let queueList = document.getElementById('queueList');
let input = document.getElementById('input');

const localStorageQueue = JSON.parse(localStorage.getItem('queue'));
let queue = localStorageQueue || [];

if (localStorageQueue) {
	showUl(queue, queueList);
}

const onEnqueue = (event) => {
	event.preventDefault();

	if (queue.length === MY_AGE) {
		alert(
			`Maximum number of elements in the queue exceeded. Please, remove the last item, to add a new one.`
		);
		return;
	}

	let newElement = document.getElementById('input').value;

	if (newElement) {
		queue.push(newElement);
		setQueueToLocalStorage(queue);
		renderQueueElement(newElement, queueList);
		form.reset();
		enableSubmitButton();
	}
};

const onDequeue = () => {
	if (queue.length === 0) {
		alert(
			`The queue is empty, you cannot remove an element. Please, add an element.`
		);
		return;
	}

	queue.shift();
	queueList.removeChild(queueList.firstChild);
	setQueueToLocalStorage(queue);
};

form.addEventListener('submit', onEnqueue);
input.addEventListener('change', (event) => {
	enableSubmitButton(event.target.value);
});
dequeueBtn.addEventListener('click', onDequeue);
