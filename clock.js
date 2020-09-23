const clockContainer = document.querySelector('.clock-box'),
    clockTitle = clockContainer.querySelector('#clock');
const today = document.querySelector('.today');

const Clock_24_CN = 'clock_24hours',
    Clock_12_CN = 'clock_12hours';

// let Is_Clock_24_CN = clockContainer.classList.contains('clock_24hours'),
//     Is_Clock_12_CN = clockContainer.classList.contains('clock_12hours');

function getTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    today.innerText = `${year}. ${month}. ${day}.`;
    if(clockContainer.classList.contains('clock_24hours')){
        clockTitle.innerText = `${
            hours < 10 ? `0${hours}` : hours
        }:${
            minutes < 10 ? `0${minutes}` : minutes
        }:${
            seconds < 10 ? `0${seconds}` : seconds
        }`;
    } else{
        clockTitle.innerText = `${
            hours > 12 ? hours - 12 : hours
        }:${
            minutes < 10 ? `0${minutes}` : minutes
        }:${
            seconds < 10 ? `0${seconds}` : seconds
        }`;
    }
}

function changeClock(){
    // const Clock_btn_Value = clockContainer.querySelector('input').value;
    if(clockContainer.classList.contains('clock_24hours')){
        clockContainer.classList.add(Clock_12_CN);
        clockContainer.classList.remove(Clock_24_CN);
        clockContainer.querySelector('input').value = '12hours';
    } else if(clockContainer.classList.contains('clock_12hours')){
        clockContainer.classList.add(Clock_24_CN);
        clockContainer.classList.remove(Clock_12_CN);
        clockContainer.querySelector('input').value = '24hours';
    }
    getTime();
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();