// StatsContainer.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import StatsContainer from '@/components/user/StatsContainer';
import { StatsContainerProps } from '@/types';

// Mock StatsCard component
vi.mock('@/components/user/StatsCard', () => {
  return {
    default: ({ title, count }: { title: string; count: number }) => (
      <div>
        <h3>{title}</h3>
        <p>{count}</p>
      </div>
    ),
  };
});

describe('StatsContainer', () => {
  const props: StatsContainerProps = {
    totalRepos: 10,
    followers: 20,
    following: 30,
    gists: 40,
  };

  it('should render the StatsContainer component', () => {
    render(<StatsContainer {...props} />);

    expect(screen.getByText('Total Repositories')).toBeInTheDocument();
    expect(screen.getByText('Followers')).toBeInTheDocument();
    expect(screen.getByText('Following')).toBeInTheDocument();
    expect(screen.getByText('Gists')).toBeInTheDocument();
  });

  it('should display the correct counts', () => {
    render(<StatsContainer {...props} />);

    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();
  });
});
