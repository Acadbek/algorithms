// =========================== FUNCTION CONSTRUCTOR ===========================

// function contructor bu glabalni funksiya boladi
// Car function constructorini xoxlagan joyda ishlatish mumkin
// constructor object qaytaradi
// constructor objecti qaytarish uchun new keywordi ishlatiladi

function Car(name, color, isBuy) {
    this.name = name;
    this.color = color;
    this.isBuy = isBuy;
    this.speed = function () {
        console.log(`${this.name} is running 110km/h`);
    }
}

const mers = new Car('mers', 'red', true); // constructor objecti qaytaradi
const bmw = new Car('bmw', 'black', false); // constructor objecti qaytaradi

mers.speed(); // mers is running 110km/h
bmw.speed();  // bmw is running 110km/h