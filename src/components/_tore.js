import { useState, useEffect } from 'react';
import axios from 'axios';
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

function Store() {
    const [storeItems, setStoreItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(({ data }) => {
            setLoading(false);
            setStoreItems(data);
            setFilteredItems(data);
        });
    }, []);

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
                            let f = storeItems.filter((item) => 
                                item.title.toLowerCase().includes(e.target.value.toLowerCase())
                            );
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
                                    {console.log('item id', item.id)}
                                    <GridItem>
                                        <Link
                                            to={`/product/${item.id}`}
                                            state={{item}}
                                        >
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