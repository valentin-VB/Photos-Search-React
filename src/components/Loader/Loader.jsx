import { FidgetSpinner } from 'react-loader-spinner';
import { Box } from 'components/Reusable Components/Box';
import { LoadingText } from './Loader.styled';

const Loader = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <LoadingText>Loading images</LoadingText>
      <FidgetSpinner backgroundColor="green" />
    </Box>
  );
};

export default Loader;
