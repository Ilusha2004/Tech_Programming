import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tripData from '../../tripdata';
import './FinderMain.css';

function FinderM(props) {
    const [departureStation, setDepartureStation] = useState('');
    const [arrivalStation, setArrivalStation] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleDepartureChange = (event) => {
        setDepartureStation(event.target.value);
    };

    const handleArrivalChange = (event) => {
        setArrivalStation(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const matchingTrips = tripData.filter((trip) => {
            return (
                trip.departureStation.toLowerCase() === departureStation.toLowerCase() &&
                trip.arrivalStation.toLowerCase() === arrivalStation.toLowerCase()
            );
        });
        setSearchResults(matchingTrips);
    };

    return (
        <div>
            <label htmlFor="departure">Станция отправления:</label>
            <input
                type="text"
                id="departure"
                value={departureStation}
                onChange={handleDepartureChange}
                placeholder="Введите станцию отправления"
            />
            <label htmlFor="arrival">Станция прибытия:</label>
            <input
                type="text"
                id="arrival"
                value={arrivalStation}
                onChange={handleArrivalChange}
                placeholder="Введите станцию прибытия"
            />
            <button id="searchBtn" onClick={handleSubmit}>
                Найти
            </button>
            <div id="results">
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map((trip, index) => (
                            <li key={index}>
                                Поезд {trip.trainNumber}: Отправление {trip.departureTime} из{' '}
                                {trip.departureStation}, Прибытие {trip.arrivalTime} в {trip.arrivalStation}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Маршруты не найдены.</p>
                )}
            </div>
        </div>
    );
}

export default FinderM;
