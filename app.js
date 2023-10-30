const btn = document.querySelector(".no");
let position = 0;

const moveButton = () => {
position = position ? 0 : -1500;
btn.style.transform = `translate(${position}px, 2px)`;
btn.style.transition = "all 0.2s ease";
};

btn.addEventListener("click", moveButton);
btn.addEventListener("mouseover", moveButton);


const sim = document.getElementById('yes');

sim.addEventListener("click", () => {

let timerInterval
Swal.fire({
 title: '🫶',
 html: 'Uau, você topou! Isso é icrivel, mal posso esperar para curtir momentos juntos. Quando vamos Sair juntos?',
 timer: 3510,
 timerProgressBar: true,
 didOpen: () => {
Swal.showLoading()
const b = Swal.getHtmlContainer().querySelector('b')
timerInterval = setInterval(() => {
  b.textContent = Swal.getTimerLeft()
}, 100)
},
willClose: () => {
 clearInterval(timerInterval)
}
}).then((result) => {

 if (result.dismiss === Swal.DismissReason.timer) {
console.log('I was closed by the timer')
}
})

});

