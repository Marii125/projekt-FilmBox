const mojeFunkce = () => {
  const pridaniTridy = document.querySelector('#menu-polozky');
  pridaniTridy.classList.toggle('show');
  const zmenaTlacitka = document.querySelector('#menu-tlacitko .fa-bars');
};

const menuTlacitko = document.querySelector('#menu-tlacitko');
menuTlacitko.addEventListener('click', mojeFunkce);
