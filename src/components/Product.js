import { useLocation } from 'react-router-dom';
import { Box, Heading, Image, Center, Stack, Text, Button, SimpleGrid, GridItem, Tag } from '@chakra-ui/react';

const Header = ({ title }) => {
    return (
        <Box p={2} shadow="md">
            <Heading textAlign="center">{title}</Heading>
        </Box>
    );
}

function Product() {
    const location = useLocation();
    const { item } = location.state;
    console.log('item', item);

    if (!item) {
        window.location = "/";
    }
    return (
        <Box>
            <Header title={item.title} />
            {/* base and md are for responsive design */}
            <SimpleGrid mt={10} spacing={4} columns={{ base: 1, md: 5}}> 
                <GridItem colSpan={2} pl={4}>
                    <Center>
                        <Image src={item.image} w="md" maxHeight={500}/>
                    </Center>
                </GridItem>
                <GridItem colSpan={3}>
                    <Box d="flex" textAlign="center">
                        <Heading>
                            Price: ${item.price}
                        </Heading>
                        <Tag mt={2}>{item.category}</Tag>
                        <Text p={4}>{item.description}</Text>
                        <Stack d="flex" alignItems="center">
                            <Button
                                size="sm"
                                w="xs"
                                colorScheme="purple"
                                mb={4}
                            >
                                Buy Now
                            </Button>
                            <Button
                                size="sm"
                                w="xs"
                            >
                                Share Product
                            </Button>
                        </Stack>
                    </Box>
                </GridItem>
            </SimpleGrid>
        </Box>
    );
}

export default Product;