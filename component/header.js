import headerImage from '../src/images/bigS.png';

const header = () => {
	const containerOne = document.createElement('div');
	containerOne.classList.add('containerOne');

	const sectionWrap = document.createElement('div');
	sectionWrap.classList.add('sectionWrap');
	sectionWrap.style.display = 'flex';

	

	
	return containerOne;
};
// document.body.appendChild(header());
export default header;