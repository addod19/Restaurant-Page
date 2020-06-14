const contact = () => {
    const content = document.getElementById('content');
  
    const container = document.createElement('div');
    container.className = 'container';
    content.appendChild(container);
  
    const formRow = document.createElement('div');
    container.appendChild(formRow);
  
    const iconsRow = document.createElement('div');
    container.appendChild(iconsRow);
  
    const form = document.createElement('form');
    formRow.appendChild(form);
  
    const formGroup = document.createElement('div');
    form.appendChild(formGroup);
  
    const formInput = document.createElement('textarea');
    formGroup.appendChild(formInput);
  
    const formBtn = document.createElement('button');
    formBtn.className = 'btn btn-primary form-control mt-1 custom font-weight-bold hover';
    formBtn.innerHTML = 'Feedback';
  
  
    formInput.setAttribute('type', 'email');
    formInput.className = 'form-control mt-4';
    formInput.setAttribute('placeholder', 'Enter message here');
    formInput.setAttribute('required', '');
  
  
    const emailHelp = document.createElement('span');
    emailHelp.className = 'form-text text-muted';
    emailHelp.setAttribute('id', 'emailHelp');
    emailHelp.innerHTML = 'We will never share your info with anyone';
  
    formGroup.appendChild(emailHelp);
    formGroup.appendChild(formBtn);
  
    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'container';
  
    const innerIconRow = document.createElement('div');
    innerIconRow.className = 'row mt-4 d-flex justify-content-center';
  
    iconsContainer.appendChild(innerIconRow);
  
    const facebook = document.createElement('a');
    facebook.setAttribute('href', 'https://web.facebook.com/daniel.addo.75873/');
    const twitter = document.createElement('a');
    twitter.setAttribute('href', 'https://twitter.com/DanielLarbiAdd1');
    const whatsapp = document.createElement('a');
    whatsapp.setAttribute('href', 'https://web.whatsapp.com/');
    const linkedin = document.createElement('a');
    linkedin.setAttribute('href', 'https://www.linkedin.com/in/daniel-larbi-addo/');
  
    facebook.className = 'fa fa-facebook-square fa-2x p-4 bg-icon';
    twitter.className = 'fa fa-twitter fa-2x p-4 bg-icon';
    whatsapp.className = 'fa fa-whatsapp fa-2x p-4 bg-icon';
    linkedin.className = 'fa fa-linkedin fa-2x p-4 bg-icon';
  
    innerIconRow.append(facebook, twitter, whatsapp, linkedin);
    container.appendChild(iconsContainer);
};
  
export default contact;