//Export Excel Button - Componente de botão para gerar a exportação para o excel da tabela de dados consultada
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function ExportExcelButton() {
    return (
        <div>
            <Box sx={{ maxWidth: '0.5rem', width: '100%', position: 'relative', left: '0.02rem' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                    <Grid item minWidth={'5rem'} xs={1}>
                        <Stack direction="row" spacing={2} >
                            <Button variant="contained" sx={{ width: '100%', position: 'relative', mx: '12rem' }}><ExitToAppIcon/></Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
