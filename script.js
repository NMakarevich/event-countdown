const birthDate = new Date('2023-06-23T00:00:00');

const countdown = document.querySelector('.clock-countdown');

const timeArray = [60*60*1000*24, 60*60*1000, 60*1000, 1000]

function stringifyTime() {
    let currentTime = birthDate.getTime() - Date.now()
    const [days, hours, minutes, seconds] = timeArray.map((item, index) => {
        const time = Math.floor(currentTime / item);
        currentTime = currentTime % item;
        if(index === 0) {
            return time
        }
        return time < 10 ? `0${time}` : time === 60 ? '00' : time
    })
    return `${days} ${stringifyDaysWord(days)} ${hours}:${minutes}:${seconds}`
}

function stringifyDaysWord(days) {
    return days === 1 ? 'день' : days < 1 || days > 4 ? 'дней' : 'дня'
}

setInterval(() => {
    countdown.textContent = stringifyTime()
}, 1000)