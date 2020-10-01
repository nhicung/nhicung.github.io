import React, { Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </div>
      <div>{t('description.part2')}</div>
    </div>
  );
}

// function App() {

//   return (
//     <Suspense fallback='loading'>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <button onClick={() => changeLanguage('de')}>de</button>
//           <button onClick={() => changeLanguage('en')}>en</button>
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//         </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//         </a>
//         </header>
//       </div>
//     </Suspense>
//   );
// }

// export default App;

export default function App() {
  return (
    <Suspense fallback="loading">
      <Page />
    </Suspense>
  );
}
