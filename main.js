/* -----------------NAVBAR TOGGLE --------------*/
// DOM  items
const navbar = document.querySelector('#navbar');
const burger = document.querySelector('#burger');
const navLinks = document.querySelector('.navbar__links li a');

let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    navbar.classList.remove('navbar');
    navbar.classList.add('navbar-active');
    burger.classList.remove('burger');
    burger.classList.add('navbar__menu-active');

    // set  menu state
    showMenu = true;
  } else {
    navbar.classList.remove('navbar-active');
    navbar.classList.add('navbar');
    burger.classList.remove('navbar__menu-active');
    burger.classList.add('navbar__menu');

    // Set menu state
    showMenu = false;
  }
}
burger.addEventListener('click', toggleMenu);

function closeMenu() {
  navbar.classList.remove('navbar-active');
  navbar.classList.add('navbar');
  burger.classList.remove('navbar__menu-active');
  burger.classList.add('navbar__menu');
}

navLinks.addEventListener('click', closeMenu);

/* -----------------ARRAY INFO DECLARATION --------------*/
const speakers = [
  {
    name: 'Katerina Holmes, PhD',
    profileImg: './assets/img/1_katerinaHolmes.png',
    position: 'Adjuntant professor, University of Michigan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur cum earum harum necessitatibus obcaecati officia pariatur quas rem repellendus',
  },

  {
    name: 'Armando Casas, PMP',
    profileImg: './assets/img/2_armandoCasas.png',
    position: 'Sustainable Tourism Expert, Universitat de Barcelona',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur cum earum harum necessitatibus obcaecati officia pariatur quas rem repellendus',
  },

  {
    name: 'Muhammed Usman, PhD',
    profileImg: './assets/img/3_muhammedUsman.png',
    position: 'Marketing Consultant, Abu Dhabi University',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur cum earum harum necessitatibus obcaecati officia pariatur quas rem repellendus',
  },

  {
    name: 'Carmen Perez',
    profileImg: './assets/img/4_carmenPerez.png',
    position: 'Sustainable Tourism Consultant, World Tourism Organization',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur cum earum harum necessitatibus obcaecati officia pariatur quas rem repellendus',
  },

  {
    name: 'Park Jung, PhD',
    profileImg: './assets/img/5_parkJung.png',
    position: 'Tourism Research Institute, University of Seoul',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur cum earum harum necessitatibus obcaecati officia pariatur quas rem repellendus',
  },

  {
    name: 'John Doe',
    profileImg: './assets/img/6_johnDoe.png',
    position: 'CEO, Royal Caribbean International',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur cum earum harum necessitatibus obcaecati officia pariatur quas rem repellendus',
  },
];

/* -----------------DYNAMIC SECTION CREATION --------------*/
const speakersBtn = document.querySelector('.featured__section__btn');

function moreSpeakers() {
  const speakers = document.querySelectorAll('.featured__section__wrapper > :nth-child(n+3)');

  const speakersStatus = window.getComputedStyle(speakers[0]).display;

  if (speakersStatus === 'none') {
    speakers.forEach((speaker) => {
      speaker.style.display = 'grid';
    });
    speakersBtn.textContent = 'LESS';
    speakersBtn.innerHTML += '<i class="fa-solid fa-chevron-up"></i>';
  } else {
    speakers.forEach((speaker) => {
      speaker.style.display = 'none';
    });
    speakersBtn.textContent = 'MORE';
    speakersBtn.innerHTML += '<i class="fa-solid fa-chevron-down"></i>';
  }
}

speakersBtn.addEventListener('click', moreSpeakers);

for (let i = 0; i < speakers.length; i += 1) {
  const speakersWrapper = document.getElementsByClassName(
    'featured__section__wrapper',
  )[0];

  const speakerCard = document.createElement('article');
  speakerCard.classList.add('featured__section__card');

  const speakerImg = document.createElement('img');
  speakerImg.classList.add('featured__section__card__img');
  speakerImg.setAttribute('src', speakers[i].profileImg);
  speakerImg.setAttribute('alt', speakers[i].name);
  speakerCard.appendChild(speakerImg);

  const speakerName = document.createElement('h3');
  speakerName.classList.add('featured__section__card__title');
  speakerName.textContent = speakers[i].name;
  speakerCard.appendChild(speakerName);

  const speakerPosition = document.createElement('p');
  speakerPosition.classList.add('featured__section__card__subtitle');
  speakerPosition.textContent = speakers[i].position;
  speakerCard.appendChild(speakerPosition);

  const divisionLine = document.createElement('div');
  divisionLine.classList.add('card__division-line');
  speakerCard.appendChild(divisionLine);

  const speakerDescription = document.createElement('p');
  speakerDescription.classList.add('featured__section__card__info');
  speakerDescription.textContent = speakers[i].description;
  speakerCard.appendChild(speakerDescription);

  speakersWrapper.appendChild(speakerCard);
}
