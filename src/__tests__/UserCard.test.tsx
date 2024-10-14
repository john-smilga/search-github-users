import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UserCardProps } from '@/types';
import UserCard from '../components/user/UserCard';

// Tests

const avatarUrl =
  '	https://avatars.githubusercontent.com/u/176013?u=1d436e62dc32dbbf1bfefb4d658cd67553154c42&v=4';
const name = 'wesbos';
const bio = 'Passionate about coding and technology.';
const url = 'https://github.com/wesbos';

describe(' UserCard Component ', () => {
  it('renders correctly', () => {
    // Setup

    const props: UserCardProps = {
      avatarUrl,
      name,
      bio,
      url,
    };
    render(<UserCard {...props} />);
    const h3 = screen.queryByText(name);
    const img = screen.getByRole('img');
    const p = screen.getByText(bio);
    const anchor = screen.getByRole('link', { name: 'Follow' });

    // Expectations

    expect(img.getAttribute('src')).toBe(avatarUrl);
    expect(h3).not.toBeNull();
    expect(p).not.toBeNull();
    expect(anchor.getAttribute('href')).toBe(url);
  });
});
