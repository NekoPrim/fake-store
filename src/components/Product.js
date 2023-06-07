import { Box, Heading } from '@chakra-ui/react';

const Header = ({ title }) => {
    <Box p={2} shadow="md">
        <Heading>{title}</Heading>
    </Box>
}

function Product({ props }) {
    console.log('props', props);
    // const { state } = location;
    return (
        <Box>
            Product Page
            <Header />
        </Box>
    );
}

export default Product;