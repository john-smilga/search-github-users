import { useState } from 'react';
import SearchForm from './components/SearchForm';
import UserComponent from './components/UserComponent';

export default function App() {
  const [userName, setUserName] = useState('wesbos');

  return (
    <main className='mx-auto max-w-6xl px-8 py-20'>
      <SearchForm setUserName={setUserName} />
      <UserComponent login={userName} />
    </main>
  );
}
