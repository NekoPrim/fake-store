import { useState, useEffect } from 'react';
import {
    Box,
    SimpleGrid,
    Center,
    GridItem,
    Input,
    Spinner
} from '@chakra-ui/react';
import { StoreItem } from './util';
import Header from './Header';

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
                        {items.map((item) => {
                            return (
                                <Box key={item.id}>
                                    <GridItem>
                                        <StoreItem
                                            // title={item.title}
                                            // price={item.price}
                                            // image={item.image}
                                            {...item}
                                        />
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