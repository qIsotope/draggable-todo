let input = document.querySelector(".form-control")
let container = document.querySelector('.container')
let addItem = document.querySelector('.btn')
let closeTusk = document.querySelector('.delete-item')
let deleteAll = document.getElementById('clear-list')
let row = document.querySelector('.row')
let feedback = document.querySelector('.feedback')
let itemList = document.querySelector('.item-list')
addItem.addEventListener('click', (event) => {
	event.preventDefault()
	let text = input.value;
	if (text == '') {
		feedback.style.display = 'block'
		setTimeout(() => {
			feedback.style.display = 'none'
		}, 2000);
	}
	else {
		itemList.insertAdjacentHTML('beforeend',
			`<div class="item my-3">
      <h5 class="item-name text-capitalize">${text}</h5>
      <div class="item-icons">
       <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
       <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
       <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
      </div>
     </div>`)
		input.value = ''
	}
})
container.addEventListener('click', (event) => {
	if (event.target.classList.contains('fa-times-circle')) {
		event.target.closest('.item').remove()
	}
})
container.addEventListener('click', (event) => {
	if (event.target.classList.contains('fa-check-circle')) {
		event.target.closest('.item').childNodes[1].classList.toggle('completed')
	}
})
container.addEventListener('click', (event) => {
	if (event.target.classList.contains('fa-edit')) {
		input.value = event.target.closest('.item').childNodes[1].innerHTML
		event.target.closest('.item').remove()
	}
})
deleteAll.addEventListener('click', () => {
	while (row.nextElementSibling !== null) {
		todoItems = [];
		row.nextElementSibling.remove()
	}
})


new Sortable(itemList, {
	animation: 300
})