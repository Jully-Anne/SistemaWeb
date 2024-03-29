//Botão para gerar a busca e pesquisa dos dados solicitados
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'

export default function QueryButton() {
    return (
        <div>
            <Box sx={{ maxWidth: '1rem', width: '100%', position: 'relative', left: '0.02rem' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                    <Grid item minWidth={'8rem'} xs={1}>
                        <Stack direction="row" spacing={2} >
                            <Button variant="contained" sx={{ width: '100%', position: 'relative', ml: '0.5rem' }}>Consultar</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

