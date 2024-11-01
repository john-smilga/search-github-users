import { Button } from './ui/button';
import { PaginationButtonsProps } from '@/types';

const PaginationButtons = ({
  pageInfo,
  setCursor,
  setPrevCursor,
  fetchMore,
  setIsForward,
}: PaginationButtonsProps) => {
  const handleNextPage = () => {
    if (pageInfo.hasNextPage) {
      setPrevCursor(pageInfo.startCursor);
      setCursor(pageInfo.endCursor);
      setIsForward(true);
      fetchMore({
        variables: {
          first: 25,
          last: null,
          after: pageInfo.endCursor,
          before: null,
        },
        // Add updateQuery to properly merge results
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return fetchMoreResult;
        },
      });
    }
  };

  const handlePrevPage = () => {
    if (pageInfo.hasPreviousPage) {
      setCursor(pageInfo.startCursor);
      setIsForward(false);
      fetchMore({
        variables: {
          first: null,
          after: null,
          last: 25,
          before: pageInfo.startCursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return fetchMoreResult;
        },
      });
    }
  };

  return (
    <div className='flex gap-2 mb-8'>
      {pageInfo.hasPreviousPage && (
        <Button onClick={handlePrevPage}>Previous Page</Button>
      )}
      {pageInfo.hasNextPage && (
        <Button onClick={handleNextPage}>Next Page</Button>
      )}
    </div>
  );
};

export default PaginationButtons;
