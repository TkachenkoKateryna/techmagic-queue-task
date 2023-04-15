const renderQueueElement = (element, queueList) => {
	const queueElement = document.createElement('li');
	const queueElementText = document.createElement('p');
	queueElementText.innerHTML = element;
	queueElement.append(queueElementText);
	queueList.appendChild(queueElement);
};

const showUl = (queue, queueList) => {
	queue.forEach((el) => renderQueueElement(el, queueList));
};

const enableSubmitButton = (value) => {
	value
		? submitBtn.removeAttribute('disabled')
		: submitBtn.setAttribute('disabled', 'disabled');
};

const setQueueToLocalStorage = (queue) => {
	localStorage.setItem('queue', JSON.stringify(queue));
};
