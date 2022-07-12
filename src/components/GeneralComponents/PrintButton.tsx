//Query Button - Componente botão para gerar a busca e pesquisa dos dados solicitados
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

export default function PrintButton() {
    return (
        <div>
            <Box sx={{ maxWidth: '0.5rem', width: '100%', position: 'relative', left: '0.02rem' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item minWidth={'5rem'} xs={1}>
                        <Stack direction="row" spacing={2} >
                            <Button variant="contained" sx={{ width: '100%', position: 'relative', left: '0.5rem' }}><LocalPrintshopIcon/></Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
