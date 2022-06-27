const music = new Audio('https://cdn.discordapp.com/attachments/963137601152364554/990720799352701020/musica-prueba-2.mp3');

    window.addEventListener('scroll', () =>{
        if (window.scrollY > 0) {
            music.play();
            music.autoplay = true; 
            music.volume = 0.05;
            music.loop = true;
        }
    });


window.addEventListener('scroll', () =>{
    let header = document.querySelector('.header-container')
    if(window.scrollY == 0){
        header.style.setProperty('background','none');
        header.style.setProperty('box-shadow','none');
    }else {
        header.style.setProperty('background','#4F474E');
        header.style.setProperty('box-shadow','0 5px 20px 1px rgba(0, 0, 0, 0.4)');
    }
});

let confettiSettings = { target: 'my-canvas', clock: '15' };
let confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


document.addEventListener('DOMContentLoaded', () => { 
    
            //===
            // VARIABLES
            //===
            const DATE_TARGET = new Date('07/16/2022 08:00 PM');
            // DOM for render
            const SPAN_DAYS = document.querySelector('span#days');
            const SPAN_HOURS = document.querySelector('span#hours');
            const SPAN_MINUTES = document.querySelector('span#minutes');
            const SPAN_SECONDS = document.querySelector('span#seconds');
            // Milliseconds for the calculations
            const MILLISECONDS_OF_A_SECOND = 1000;
            const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
            const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
            const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24
    
            //===
            // FUNCTIONS
            //===
    
            /**
            * Method that updates the countdown and the sample
            */
            function updateCountdown() {
                // Calcs
                const NOW = new Date()
                const DURATION = DATE_TARGET - NOW;
                const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
                const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
                const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
                const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
    
                // Render
                SPAN_DAYS.textContent = REMAINING_DAYS;
                SPAN_HOURS.textContent = REMAINING_HOURS;
                SPAN_MINUTES.textContent = REMAINING_MINUTES;
                SPAN_SECONDS.textContent = REMAINING_SECONDS;
            }
    
            //===
            // INIT
            //===
            updateCountdown();
            // Refresh every second
            setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
        });