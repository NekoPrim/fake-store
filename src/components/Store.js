import { useState, useEffect } from 'react';
import {
    Box,
    SimpleGrid,
    Center,
    GridItem,
    Input,
    Spinner,
    Image,
    Spacer,
    Heading,
    Tag,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import { StoreItem } from './util';
import Header from './Header';

const StoreItem = ({ title, price, image }) => {
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

function Store({ items, loading }) {
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        setFilteredItems(items);
    }, [items]);

    return (
        <Box>
            <Header title="FAKE STORE" />
            {loading ? (
                <Center mt={6}>
                    <Spinner />
                </Center>
            ) : (
                <Box p={4}>
                    <Input
                        placeholder="Search"
                        mt={4}
                        onChange={(e) => {
                            let f = items.filter((item) => 
                                item.title.toLowerCase().includes(e.target.value.toLowerCase())
                            );
                            console.log('f', f);
                            setFilteredItems(f);
                        }}
                    />
                    <SimpleGrid
                        columns={4}
                        spacing={4}
                        mt={4}
                    >
                        {filteredItems.map((item) => {
                            return (
                                <Box key={item.id}>
                                    <GridItem>
                                        <Link to={{
                                            pathname: `/product/${item.id}`,
                                            state: item,
                                        }}>
                                        <StoreItem
                                            // title={item.title}
                                            // price={item.price}
                                            // image={item.image}
                                            {...item}
                                        />
                                        </Link>
                                    </GridItem>
                                </Box>
                            );
                        })}
                    </SimpleGrid>
                </Box>
            )}
        </Box>
    );
}

export default Store;