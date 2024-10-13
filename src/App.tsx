import { useState } from 'react';
import SearchForm from '@/components/SearchForm';
import UserProfile from '@/components/user/UserProfile';
import UsersList from '@/components/UsersList';

export default function App() {
  const [userName, setUserName] = useState('wesbos');

  return (
    <main className='mx-auto max-w-6xl px-8 py-20'>
      <SearchForm userName={userName} setUserName={setUserName} />
      <UsersList userName={userName} setUserName={setUserName} />
      <UserProfile login={userName} />
    </main>
  );
}
