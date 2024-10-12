import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type FormEvent } from 'react';

type SearchFormProps = {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchForm({ setUserName }: SearchFormProps) {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchInput = (e.target as HTMLFormElement).elements.namedItem(
      'search'
    ) as HTMLInputElement;
    if (searchInput.value) {
      setUserName(searchInput.value);
    }
  };
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
        id='search'
        placeholder='Search Github User...'
        className='flex-grow bg-background'
      />
      <Button type='submit'>Search</Button>
    </form>
  );
}
