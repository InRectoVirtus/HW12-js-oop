class Timer {

    constructor(e) {

        this.e = e;
        this.e.addEventListener('click', () => e.classList.toggle('off'));

    }

    render() {

        this.date = new Date();

        this.hour = this.date.getHours() < 10 ? '0' + this.date.getHours() : this.date.getHours();
        this.min = this.date.getMinutes() < 10 ? '0' + this.date.getMinutes() : this.date.getMinutes();
        this.sec = this.date.getSeconds() < 10 ? '0' + this.date.getSeconds() : this.date.getSeconds();

        this.e.innerHTML =`${this.hour}:${this.min}<span>:${this.sec}</span>`;
    }

}

let watch = document.getElementById('clock');
let time = new Timer(watch);

time.render();
setInterval(() => time.render(), 250);