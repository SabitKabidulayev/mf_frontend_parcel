function $25e1403f67dd7468$export$1b64bc9c5306ed54() {
    const today = new Date();
    const daysArr = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return daysArr[today.getDay()];
}


const $e006d69646ee18d5$var$day = document.querySelector(".today");
$e006d69646ee18d5$var$day.innerHTML = (0, $25e1403f67dd7468$export$1b64bc9c5306ed54)();


//# sourceMappingURL=index.5a39dbd9.js.map
