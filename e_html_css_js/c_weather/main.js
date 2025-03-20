// https://openweathermap.org/

//? const city = "Seoul";
// : input 창에서 지역명을 입력받는 값
// - Capitalize 사용
//   >> 시작은 대문자, 기타 문자는 소문자로
//   EX) Tokyo, London 등

const apikey = "b3d2a174bd0bf979992c01994dd21eea";
const lang = "kr";

/*
제공된 API를 사용하여 지역의 이름을 바탕으로 '해당 지역의 날씨 정보 데이터'를 호출
? units=metric: 시간이 지남에 따라 변화하는 데이터를 의미
*/

async function getWeatherData(city) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}&units=metric`;

  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    displayWeather(data);

  } catch (error) {
    console.error('Error: ', error);
    document.getElementById('weather-info').innerHTML =
      `<p>날씨 정보를 불러오는데 실패하였습니다. (${error.message})`;
  }
}

function displayWeather(data) {
  const weatherInfoDiv = document.getElementById('weather-info');
  weatherInfoDiv.innerHTML = `
    <h2>${data.name}의 날씨</h2>
    <p>현재 온도: ${data.main.temp}</p>
    <p>체감 온도: ${data.main.feels_like}</p>
    <p>날씨: ${data.weather[0].main} (${data.weather[0].description})</p>
  `;
}

document.getElementById('search-button').addEventListener('click', () => {
  const cityInput = document.getElementById('city-input').value;
  const city = captalizeCity(cityInput);

  if (city === '') {
    alert('지역명을 입력해주세요.');
    return;
  }

  getWeatherData(city);
  document.getElementById('city-input').value = '';
});

//& 첫 글자는 대문자, 나머지는 소문자로 변환하는 함수
// : 사용자 이용성 향상
function captalizeCity(city) {
  const trimCity = city.trim();
  if (trimCity.length === '') return '';

  return trimCity.charAt(0).toUpperCase() + trimCity.slice(1).toLowerCase();
}

//& 입력 창에 Enter 키 입력 시 버튼 클릭 이벤트 실행
document.getElementById('city-input').addEventListener('keyup', (e) => {
  if (e.key === "Enter") {
    document.getElementById('search-button').click();
  }
})

/*
# data 객체 내부의 속성

! coord: 좌표 정보

lon: 경도 (126.9778)
lat: 위도 (37.5683)

! weather: 날씨 상태에 대한 정보 (배열로 표현)

id: 날씨 조건 ID (800, 이 경우 맑음을 나타냄)
main: 날씨의 주 상태 ('Clear', 맑음)
description: 날씨 설명 ('맑음')
icon: 날씨 아이콘 코드 ('01d')
base: 기지 데이터 (기상 관측의 출처, 'stations')

! main: 주요 기상 데이터

temp: 현재 온도 (35.96°C)
feels_like: 체감 온도 (42.59°C)
temp_min: 최저 기온 (33.69°C)
temp_max: 최고 기온 (36.66°C)
pressure: 기압 (1006 hPa)
humidity: 습도 (49%)
sea_level: 해수면 기준 기압 (1006 hPa)
grnd_level: 지상 기준 기압 (1000 hPa)

! visibility: 가시 거리 (10000미터)

! wind: 바람 정보

speed: 바람 속도 (3.09m/s)
deg: 바람의 방향 (320도, 북서풍)

! clouds: 구름 정보

all: 구름의 양 (0%, 맑은 날씨)

! dt: 데이터 계산 시간 (Unix 타임스탬프, 1723530221)

! sys: 시스템 정보

type: 시스템 타입 (1)
id: 시스템 ID (8105)
country: 국가 코드 ('KR', 대한민국)
sunrise: 일출 시간 (Unix 타임스탬프, 1723495575)
sunset: 일몰 시간 (Unix 타임스탬프, 1723544872)

! timezone: 시간대 오프셋 (32400초, 즉 GMT+9)

! id: 도시 ID (1835848, 서울)
! name: 도시 이름 ('Seoul')
! cod: 응답 코드 (200, 성공적인 응답)

# ===== #
서울의 현재 날씨가 맑고, 기온이 35.96°C이며, 체감 온도는 42.59°C

습도는 49%이며, 바람은 북서쪽에서 3.09m/s 속도 불고있음

구름은 거의 없고 가시 거리는 10km

일출과 일몰 시간은 Unix 타임스탬프로 출력 - 한국 표준시(GMT+9) 기준

* ===== main: 날씨의 주 상태 ('Clear', 맑음) ===== *
Clear: 맑음*
Clouds: 구름 많음*
Rain: 비*
Drizzle: 이슬비
Thunderstorm: 뇌우 (천둥번개)
Snow: 눈*
Mist: 안개
Smoke: 연기
Haze: 실안개
Dust: 먼지
Fog: 짙은 안개
Sand: 모래
Ash: 화산재
Squall: 돌풍
Tornado: 토네이도
*/