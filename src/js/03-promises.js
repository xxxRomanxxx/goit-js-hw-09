import Notiflix from 'notiflix';

const formDelay = document.querySelector('[name="delay"]');
const formStep = document.querySelector('[name="step"]');
const formAmount = document.querySelector('[name="amount"]');
const formSubmit = document.querySelector('button');

formSubmit.addEventListener('click', onSubmitForm);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
      }, delay)
  })
}

function onSubmitForm(e) {
  e.preventDefault();

  for (let i = 0; i < Number(formAmount.value); i += 1) {
    createPromise(i, Number(formDelay.value) + Number(formStep.value) * i)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
};




