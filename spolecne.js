const mojeFunkce = () => {
  const pridaniTridy = document.querySelector('#menu-polozky');
  pridaniTridy.classList.toggle('show');
  const zmenaTlacitka = document.querySelector('#menu-tlacitko .fa-bars');
  if (zmenaTlacitka) {
    zmenaTlacitka.classList.toggle('fa-bars');
    zmenaTlacitka.classList.toggle('fa-xmark');
  } else {
    const zmenaTlacitka2 = document.querySelector('#menu-tlacitko .fa-xmark');
    zmenaTlacitka2.classList.toggle('fa-bars');
    zmenaTlacitka2.classList.toggle('fa-xmark');
  }
};

const menuTlacitko = document.querySelector('#menu-tlacitko');
menuTlacitko.addEventListener('click', mojeFunkce);
