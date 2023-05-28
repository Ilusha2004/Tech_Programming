import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination'
import tripdata from '../../tripdata';

const tripData = tripdata

const AdminPage = () => {
  const [trips, setTrips] = useState(tripData);
  const [addDepartureStation, setAddDepartureStation] = useState('');
  const [addArrivalStation, setAddArrivalStation] = useState('');
  const [addDepartureTime, setAddDepartureTime] = useState('');
  const [addArrivalTime, setAddArrivalTime] = useState('');
  const [addTrainNumber, setAddTrainNumber] = useState('');
  const [searchDepartureStation, setSearchDepartureStation] = useState('');
  const [searchArrivalStation, setSearchArrivalStation] = useState('');
  const [message, setMessage] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const handleAddTrip = (e) => {
    e.preventDefault();

    const newTrip = {
      id: generateId(),
      departureStation: addDepartureStation,
      arrivalStation: addArrivalStation,
      departureTime: addDepartureTime,
      arrivalTime: addArrivalTime,
      trainNumber: addTrainNumber
    };

    const added = addTrip(newTrip);

    if (added) {
      setMessage('Маршрут успешно добавлен.');
    } else {
      setMessage('Ошибка при добавлении маршрута. Пожалуйста, проверьте данные.');
    }

    // Сброс полей формы
    setAddDepartureStation('');
    setAddArrivalStation('');
    setAddDepartureTime('');
    setAddArrivalTime('');
    setAddTrainNumber('');
  };

  const generateId = () => {
    // Генерация уникального ID (пример)
    return Math.random().toString(36).substr(2, 9);
  };

  const addTrip = (trip) => {
    if (validateTrip(trip)) {
      setTrips((prevTrips) => [...prevTrips, trip]);
      return true;
    }
    return false;
  };

  const validateTrip = (trip) => {
    // Здесь можно добавить логику для валидации маршрута
    return true;
  };

  const removeTrip = (id) => {
    setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== id));
  };

  const editTrip = (id, updatedTrip) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => (trip.id === id ? { ...trip, ...updatedTrip } : trip))
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const results = trips.filter(
      (trip) =>
        trip.departureStation.toLowerCase().includes(searchDepartureStation.toLowerCase()) &&
        trip.arrivalStation.toLowerCase().includes(searchArrivalStation.toLowerCase())
    );

    setSearchResults(results);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = trips.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h2>Административная панель</h2>
      <form onSubmit={handleAddTrip}>
        <label htmlFor="addDepartureStation">Станция отправления:</label>
        <input
          type="text"
          id="addDepartureStation"
          value={addDepartureStation}
          onChange={(e) => setAddDepartureStation(e.target.value)}
        />
        <br />
        <label htmlFor="addArrivalStation">Станция прибытия:</label>
        <input
          type="text"
          id="addArrivalStation"
          value={addArrivalStation}
          onChange={(e) => setAddArrivalStation(e.target.value)}
        />
        <br />
        <label htmlFor="addDepartureTime">Время отправления:</label>
        <input
          type="text"
          id="addDepartureTime"
          value={addDepartureTime}
          onChange={(e) => setAddDepartureTime(e.target.value)}
        />
        <br />
        <label htmlFor="addArrivalTime">Время прибытия:</label>
        <input
          type="text"
          id="addArrivalTime"
          value={addArrivalTime}
          onChange={(e) => setAddArrivalTime(e.target.value)}
        />
        <br />
        <label htmlFor="addTrainNumber">Номер поезда:</label>
        <input
          type="text"
          id="addTrainNumber"
          value={addTrainNumber}
          onChange={(e) => setAddTrainNumber(e.target.value)}
        />
        <br />
        <button type="submit">Добавить маршрут</button>
      </form>
      <p>{message}</p>
      <form onSubmit={handleSearch}>
        <label htmlFor="searchDepartureStation">Станция отправления:</label>
        <input
          type="text"
          id="searchDepartureStation"
          value={searchDepartureStation}
          onChange={(e) => setSearchDepartureStation(e.target.value)}
        />
        <br />
        <label htmlFor="searchArrivalStation">Станция прибытия:</label>
        <input
          type="text"
          id="searchArrivalStation"
          value={searchArrivalStation}
          onChange={(e) => setSearchArrivalStation(e.target.value)}
        />
        <br />
        <button type="submit">Найти маршрут</button>
      </form>
      <div>
        {searchResults.length > 0 ? (
          searchResults.map((trip) => (
            <div key={trip.id}>
              <p>ID: {trip.id}</p>
              <p>Станция отправления: {trip.departureStation}</p>
              <p>Станция прибытия: {trip.arrivalStation}</p>
              <p>Время отправления: {trip.departureTime}</p>
              <p>Время прибытия: {trip.arrivalTime}</p>
              <p>Номер поезда: {trip.trainNumber}</p>
              <p>
                <button onClick={() => removeTrip(trip.id)}>Удалить</button>
              </p>
            </div>
          ))
        ) : (
          <p>Результаты поиска отсутствуют.</p>
        )}
      </div>
      <div>
        {currentItems.map((trip) => (
          <div key={trip.id}>
            <p>ID: {trip.id}</p>
              <p>Станция отправления: {trip.departureStation}</p>
              <p>Станция прибытия: {trip.arrivalStation}</p>
              <p>Время отправления: {trip.departureTime}</p>
              <p>Время прибытия: {trip.arrivalTime}</p>
              <p>Номер поезда: {trip.trainNumber}</p>
              <p>
                <button onClick={() => removeTrip(trip.id)}>Удалить</button>
              </p>
          </div>
        ))}
      </div>
      <Pagination itemsPerPage={itemsPerPage} totalItems={trips.length} paginate={paginate} />
    </div>
  );
};

export default AdminPage;
