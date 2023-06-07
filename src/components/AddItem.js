import { useRef } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

function AddItem({ onItemAdd }) {
    const itemNameRef = useRef();
    const itemPriceRef = useRef();
    return (
        <Box>
            <Input
                ref={itemNameRef} mt={10}
                placeholder="Item name"
            />
            <Input
                ref={itemPriceRef} mt={2}
                placeholder="price"
                type="number"
            />
            <Button
                onClick={() => {
                    onItemAdd({
                        title: itemNameRef.current.value,
                        price: itemPriceRef.current.value,
                    })
                }}
                mt={2}
            >
                Add Item
            </Button>
        </Box>
    );
}

export default AddItem;