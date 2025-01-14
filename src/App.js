import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
//useEffect используется для работы с внешнем апи и вызывается на самом верху компонента
  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      Работает
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
