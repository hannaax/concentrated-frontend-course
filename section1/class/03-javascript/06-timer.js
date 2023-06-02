let isStarted = false;

const auth = () => {
  let finishBtn = document.querySelector(".finishBtn");
  if (isStarted === false) {
    isStarted = true;
    finishBtn.disabled = false;

    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    let num = document.querySelector(".num");
    let timer = document.querySelector(".timer");
    let time = 2;
    let timer2;

    num.innerText = token;

    timer2 = setInterval(() => {
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        timer.innerText = min + ":" + sec;
        time -= 1;
      } else {
        // btn.setAttribute("disabled", true);
        finishBtn.disabled = true;
        isStarted = false;
        console.log("작동중");
        clearInterval(timer2);
      }
    }, 1000);
  }
};
