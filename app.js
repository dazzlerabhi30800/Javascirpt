
console.log('This is app.js');

window.addEventListener("load", () => {

    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimeZone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    let temperatureSpan = document.querySelector('.temperature span');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/193022?apikey=ZARVyk7PekH2gus5hdoTNbJO8I5ZXDSB&metric=true`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    let temp = data.DailyForecasts[0].Temperature.Maximum.Value;
                    const day = data.DailyForecasts[0].Day.IconPhrase;

                    // Set DOM elements from the api
                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = day;

                    // Formula for celcius to fahrenheit
                    let fah = (temp * (9 / 5)) + 32;

                    // Set an icon
                    setIcons();

                    // Change temperature from celcius to fahrenheit
                    temperatureSection.addEventListener('click', () => {
                        if (temperatureSpan.textContent === 'C') {
                            temperatureSpan.textContent = 'F';
                            temperatureDegree.textContent = fah;
                        }
                        else {
                            temperatureSpan.textContent = 'C';
                            temperatureDegree.textContent = temp;
                        }
                    })
                })
        });

    }

    function setIcons() {
        const skycons = new Skycons({ color: "white" });
        // const currentIcon = skycons.set("clear-day", Skycons.CLEAR_DAY);
        skycons.set(document.querySelector(".icon"), Skycons.CLEAR_DAY);
        skycons.play();
        // return skycons.set(iconID,Skycons[currentIcon]);
        // return skycons.set(document.getElementById(".icon"), Skycons.CLEAR_DAY);

    }

});