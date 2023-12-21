function showinfo(infoId){
	const infoContainers = document.querySelectorAll('.info-container');
    infoContainers.forEach(container => container.classList.remove('active'));

	const selectedContainer = document.getElementById(infoId);
	selectedContainer.classList.add('active');
}