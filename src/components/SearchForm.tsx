import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type FormEvent } from 'react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

type SearchFormProps = {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
};

export default function SearchForm({ userName, setUserName }: SearchFormProps) {
  const { toast } = useToast();

  const [text, setText] = useState(userName);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === '') {
      toast({ description: 'Please enter a username' });
      return;
    }
    setUserName(text);
  };
  useEffect(() => {
    setText(userName);
  }, [userName]);
  return (
    <form
      onSubmit={handleSearch}
      className='flex items-center gap-x-2 w-full lg:w-1/3 mb-8'
    >
      <Label htmlFor='search' className='sr-only'>
        Search
      </Label>
      <Input
        type='text'
        id='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Search Github User...'
        className='flex-grow bg-background'
      />
      <Button type='submit'>Search</Button>
    </form>
  );
}
