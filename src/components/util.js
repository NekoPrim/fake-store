import {
    Box,
    Center,
    Image,
    Heading,
    Spacer,
    Tag
} from '@chakra-ui/react';

export const StoreItem = ({ title, price, image }) => {
    return (
        <Box p={4} borderRadius="lg" borderWidth="1px">
            <Center>
                <Image src={image} w={12} />
            </Center>
            <Heading
                size="sm"
                fontWeight="normal"
                noOfLines={2}
                mt={4}
            >
                {title}
            </Heading>
            <Spacer />
            <Tag mt={4}>${price}</Tag>
        </Box>
    );
}