export const weatherInitial = {
    weather: {
        entities: {
            preview: {
                title: 'Buenos Aires',
                temp: '27',
                date: 'Sat, 20 Nov',
                weatherState: 'Clear',
                weatherStateAbbr: 'c'
            },
            todayHighlights: {
                windDirection: '62',
                windSpeed: '6',
                windDirectionName: 'ENE',
                humidity: 50,
                visibility: '15.4',
                airPressure: '1015'
            },
            weekWeather: [
                {
                    id: 5063355745173504,
                    weatherState: 'Light Cloud',
                    weatherStateAbbr: 'lc',
                    applicable_date: 'tomorrow',
                    max_temp: '34 C°',
                    min_temp: '21 C°'
                },
                {
                    id: 5256308023361536,
                    weatherState: 'Heavy Cloud',
                    weatherStateAbbr: 'hc',
                    applicable_date: 'Mon, 22 Nov',
                    max_temp: '34 C°',
                    min_temp: '20 C°'
                },
                {
                    id: 5825781134524416,
                    weatherState: 'Clear',
                    weatherStateAbbr: 'c',
                    applicable_date: 'Tue, 23 Nov',
                    max_temp: '23 C°',
                    min_temp: '14 C°'
                },
                {
                    id: 6368142516289536,
                    weatherState: 'Showers',
                    weatherStateAbbr: 's',
                    applicable_date: 'Wed, 24 Nov',
                    max_temp: '29 C°',
                    min_temp: '17 C°'
                },
                {
                    id: 5859712810614784,
                    weatherState: 'Heavy Rain',
                    weatherStateAbbr: 'hr',
                    applicable_date: 'Thu, 25 Nov',
                    max_temp: '23 C°',
                    min_temp: '18 C°'
                }
            ]
        }
    }
}

export const locationInitial = {
    location: {
        entities: {
            distance: 52877,
            title: 'Buenos Aires',
            location_type: 'City',
            woeid: 468739,
            latt_long: '-34.608521,-58.373539'
        }
    }
}

export const unitInitial = {
    unit: {
        entities: {
            unit: 'Celsius'
        }
    }
}