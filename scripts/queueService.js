const MY_AGE = 22;
const QUEUE_NAME = 'queue';
const dequeueBtn = document.getElementById('dequeueBtn');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('form');
const queueList = document.getElementById('queueList');
const input = document.getElementById('input');

const localStorageQueue = JSON.parse(localStorage.getItem(QUEUE_NAME));
const queue = localStorageQueue || [];

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

	const newElement = input.value;

	if (newElement) {
		queue.push(newElement);
		setQueueToLocalStorage(QUEUE_NAME, queue);
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
	setQueueToLocalStorage(QUEUE_NAME, queue);
};

form.addEventListener('submit', onEnqueue);
input.addEventListener('input', (event) => {
	enableSubmitButton(event.target.value);
});
dequeueBtn.addEventListener('click', onDequeue);
