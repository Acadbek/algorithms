const wrapper = document.querySelector('.wrapper');
const btn = document.querySelectorAll('.btn');

btn.forEach(btn => {
    btn.style.backgroundColor = 'red'
    btn.style.padding = '40px';
})

// agar wrapperni ichiga umuman yangi btn qo`shilsa ham u delegatsiya bo`ladi.
// ya`ni 'cliked' so`zi faqat btn class bor buttonlarni uchun va yangi qoshilga hamma buttonlarga ishlaydi. 

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == 'BUTTON') {
        console.log('clicked');
    }
})