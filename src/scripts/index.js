import '../styles/index.scss';

/*eslint no-undef: "warn"*/

const cities = require('./cities.json');

const init = async () => {
  const wrapper = $('#cities-weather-wrapper');

  const promises = [];

  cities.forEach(async (city) => {
    promises.push(fetch(`https://api.apixu.com/v1/current.json?key=dcb9a1720bbe464f80944321192003&q=${city.id}`));
  });

  const results = await Promise.all(promises);
 
  cities.forEach(async (city, index) => {
    const result = await results[index].json();
    const current = result.current;

    wrapper.append(`
      <div class="col-xs-12 col-md-6 col-lg-6 mb-4">
        <div class="card">
          <div class="card-img-top city-img" style="background-image: url('${city.img}')"></div>
          <div class="card-body">
            <h5 class="card-title">${city.name}</h5>
            <div class="clearfix">
              <div class="float-left">
                <h1 class="mb-0">${current.temp_c}°C</h1>
                <h4 class="mb-0 text-muted">${current.temp_f}°F</h4>
              </div>
              <img class="float-right" src="${current.condition.icon}" />
              
            </div>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    `)
  });
}

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  }  
}

registerServiceWorker();
init();