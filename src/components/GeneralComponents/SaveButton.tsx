//Botão para salvar e atualizar os novos limites de temperatura
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

export default function SaveButton() {
    return (
        <div>
            <Box sx={{ maxWidth: '1rem', width: '100%', left: '0.02rem', paddingX:'40%'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                    <Grid item minWidth={'8rem'} xs={1}>
                        <Stack direction="row" >
                            <Button variant="contained" sx={{ width: '100%', ml: '0.5rem' }}>Salvar</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}