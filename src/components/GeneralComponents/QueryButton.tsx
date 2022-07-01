import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

export default function QueryButton() {
    return (
        <div>
            <Box sx={{ maxWidth: '1rem', width: '100%', position: 'relative', left: '0.02rem' }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item minWidth={'9rem'} xs={1}>
                        <Stack direction="row" spacing={2} >
                            <Button variant="contained" sx={{ width: '100%', position: 'relative', left: '0.02rem' }}>Consultar</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
