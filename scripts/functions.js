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
	submitBtn.disabled = !value;
};

const setQueueToLocalStorage = (itemName, value) => {
	localStorage.setItem(itemName, JSON.stringify(value));
};
