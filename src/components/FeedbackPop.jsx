
import * as React from 'react';
import {Box, Typography, Button, Grow, Stack} from '@mui/material';
import { styled } from '@mui/material/styles';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    width: 400,
    boxShadow: 24,
    p: 4
}


export default function FeedbackPopUp (props) {
    return (
        <div>
            <Grow in={props.opened}>
            <Box sx={style}{...(props.opened ? { timeout: 1000} : {} )}>
                <Stack spacing={2}>
                <Typography>
                {props.feedback}
                    </Typography>
                    <Button onClick={props.button}>Close</Button>
                </Stack>
            </Box>
            </Grow>

        </div>
    )
}