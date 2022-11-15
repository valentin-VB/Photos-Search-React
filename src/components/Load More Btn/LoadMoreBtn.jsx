import { Box } from 'components/Reusable Components/Box';
import { Btn } from 'components/Reusable Components/Button';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="start">
      <Btn onClick={onClick}>Load More</Btn>
    </Box>
  );
};

export default LoadMoreBtn;
