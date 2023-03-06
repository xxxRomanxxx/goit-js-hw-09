const inputFirstDelay= document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');
const buttonSubmit = document.querySelector('button');

buttonSubmit.addEventListener('click', onButtonSubmit);

function onButtonSubmit() {
  function createPromise(position, delay) {
    return new Promise((resolve, reject)=>{
      setInterval(()=>{
        const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(position, delay)
      } else {
        reject(position, delay)
      }
      }, inputFirstDelay.value)   
    }) 
  }
  
  createPromise(2, 1500)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

