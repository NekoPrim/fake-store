import { useNavigate } from 'react-router-dom';
import { Box, Heading, Button } from '@chakra-ui/react';

const ProductHeader = ({ title }) => {
    const nav = useNavigate();
    return (
        <Box p={2} shadow="md">
            <Button
                onClick={() => nav('/')}
                d="flex"
                position="float"
            >
                Back
            </Button>
            <Heading textAlign="center">{title}</Heading>
        </Box>
    );
};

export default ProductHeader;