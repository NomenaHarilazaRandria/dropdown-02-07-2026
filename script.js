function createDropdown(list){
	let isOpen = false;
	const div = document.createElement('div');
	div.classList.add("dropdown");
	const ul = document.createElement('ul');
	ul.classList.add("hidden");
	list.forEach(el =>{
		const li = document.createElement('li');
		li.textContent = el;
		li.addEventListener('click',(e)=>{
			e.stopPropagation();
			btn.textContent = el;
			isOpen = !isOpen;
			updateDropdown(ul,isOpen);
		});
		ul.appendChild(li);
	});
	const btn = document.createElement('button');
	btn.textContent = "Menu";
	btn.addEventListener('click',(e)=> {
		e.stopPropagation();
		isOpen = !isOpen;
		updateDropdown(ul,isOpen);
		console.log(isOpen);
	});
	div.appendChild(btn);
	div.appendChild(ul);
	const result = document.body.appendChild(div);
	document.addEventListener('click',(e)=> {
		if(!div.contains(e.target)){//pour savoir si le click est dans le div ou en dehors
			isOpen = false;
			updateDropdown(ul,isOpen);
		}
	});
	return result;
}
createDropdown(["Menu","a","b"]);
createDropdown(["Menu","liste 1","liste 2","liste 3"]);

function updateDropdown(element,state){
	element.classList.toggle("hidden",!state); //deuxième forme de .toggle()
}
