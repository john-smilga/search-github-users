// ForkedRepos.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import ForkedRepos from '@/components/charts/ForkedRepos';
import { repositories } from '@/testData';

// Mock chart components
vi.mock('@/components/ui/chart', () => {
  return {
    ChartContainer: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    ChartTooltip: ({ content }: { content: React.ReactNode }) => (
      <div>{content}</div>
    ),
    ChartTooltipContent: () => <div>Tooltip Content</div>,
  };
});

vi.mock('recharts', () => {
  return {
    BarChart: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    CartesianGrid: () => <div>CartesianGrid</div>,
    XAxis: () => <div>XAxis</div>,
    YAxis: () => <div>YAxis</div>,
    Bar: () => <div>Bar</div>,
  };
});

describe('ForkedRepos', () => {
  it('should render the ForkedRepos component', () => {
    render(<ForkedRepos repositories={repositories} />);

    expect(screen.getByText('Forked Repos')).toBeInTheDocument();
  });

  it('should render the chart with correct data', () => {
    render(<ForkedRepos repositories={repositories} />);

    // Check for the presence of chart elements
    expect(screen.getByText('CartesianGrid')).toBeInTheDocument();
    expect(screen.getByText('XAxis')).toBeInTheDocument();
    expect(screen.getByText('YAxis')).toBeInTheDocument();
    expect(screen.getByText('Bar')).toBeInTheDocument();
  });

  it('should render the tooltip content correctly', () => {
    render(<ForkedRepos repositories={repositories} />);

    expect(screen.getByText('Tooltip Content')).toBeInTheDocument();
  });
});
