import { Box } from './Box'
import { Text } from './Text'
import { Button } from './Button'

export const MyAwesomeComponent = () => {
    const myAwesomeEvent = () => {
        alert('Something Awesome Just Happened!!!');
    }

    return (
        <>
            <Box shape='roundedCorners'>
                <Button backgroundColor="blue" event={myAwesomeEvent}>
                    <Text color='white' fontSize='20px'>Cause something awesome</Text>
                </Button>
            </Box>
        </>
    );
}