let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
  let b = document.querySelector('#sendRequest');
  b.addEventListener('click', sendRequest);

function sendRequest() {
  let country = document.getElementById('city-id').value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + country + '.json';

  axios.get(url)
      .then(showResult)
      .catch(showError)
      .then(finish);
}

function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  let name = data.name;
  let country = data.sys.country;
  let weather = data.weather[0].description;
  let temp = data.main.temp;
  let temp_min = data.main.temp_min;
  let temp_max = data.main.temp_max;
  let humidity = data.main.humidity;
  let speed = data.wind.speed;
  let lon = data.coord.lon;
  let lat = data.coord.lat;
  let deg = data.wind.deg;


  let result1 = document.getElementById('result');

  result1.textContent = '';

  let h2 = document.createElement('h2');
  h2.textContent = name + ', ' + country;

  let p1 = document.createElement('p');
  p1.textContent = '天気: ' + weather;

  let p2 = document.createElement('p');
  p2.textContent = '最低気温: ' + temp_min;

  let p3 = document.createElement('p');
  p3.textContent = '最高気温: ' + temp_max;

  let p4 = document.createElement('p');
  p4.textContent = '湿度: ' + humidity;

  let p5 = document.createElement('p');
  p5.textContent = '風速: ' + speed;

  let p6 = document.createElement('p');
  p6.textContent = '温度: ' + temp + ' ℃';

  let p7 = document.createElement('p');
  p7.textContent = '緯度: ' + lon;

  let p8 = document.createElement('p');
  p8.tentContent = '経度: ' + lat;

  let p9 = document.createElement('p');
  p9.textContent = '風向: ' + deg;


  result1.appendChild(h2);   //自分で調べたもの
  result1.appendChild(p1);
  result1.appendChild(p2);
  result1.appendChild(p3); 
  result1.appendChild(p4); 
  result1.appendChild(p5); 
  result1.appendChild(p6); 
  result1.appendChild(p7);
  result1.appendChild(p8);
  result1.appendChild(p9); 

}

function showError(err) {
  console.log(err);
}

function finish() {
  console.log('Ajax 通信が終わりました');
}
console.log(data.coord.lon);
console.log(data.coord.lat);
console.log(data.main.temp);
console.log(data.main.temp_min);
console.log(data.main.temp_max);
console.log(data.wind.speed);
console.log(data.wind.deg);
console.log(data.weather[0].description);
console.log(data.name);