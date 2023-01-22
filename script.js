setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    // digital clock ...
    // console.log(htime);

    if (htime.toString() < 10) {
        htime = `0${htime}`;
    } else {
        htime
    }

    if (mtime.toString() < 10) {
        mtime = `0${mtime}`;
    } else {
        mtime
    }
    if (stime.toString() < 10) {
        stime = `0${stime}`;
    } else {
        stime
    }

    hourDigital.innerText = htime + ":";
    minuteDigital.innerText = mtime + ":";
    secondDigital.innerText = stime;

},);
