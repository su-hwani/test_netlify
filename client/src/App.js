import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  // 앱이 시작할 때 API를 실행하는 함수
  const fetchDataFromApi = async () => {
    try {
      // 여기서 API 호출을 수행
      const response = await axios.get('http://localhost:8000/', { withCredentials: true });
      console.log(response.data);

      // API 데이터를 처리하거나 상태를 업데이트할 수 있습니다.
    } catch (error) {
      console.error('API 요청 오류:', error);
    }
  };

  // useEffect를 사용하여 앱이 처음 마운트될 때 fetchDataFromApi 함수 실행
  useEffect(() => {
    fetchDataFromApi();
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
