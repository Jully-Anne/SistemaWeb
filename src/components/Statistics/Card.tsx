import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from '../GeneralComponents/Title';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { Container } from '@material-ui/core';
import CustomizedMenus from './StatusTable';
import LinearProgressWithLabel from './ProgressBar';


function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}
export default function Card() {
    return (

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 225,
                    height: 280,
                    border: "solid",
                    borderColor: "#DCDCDC",
                    borderRadius: '10%',
                    backgroundColor: "FFFAFA",
                    textAlign: "center"
                },
            }}
        >
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>Primeira Prensagem</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        DISPONIBILIDADE
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        EFICIÊNCIA
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        PRODUÇÃO
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        26531/65412
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Container>
                        <CustomizedMenus />
                    </Container>
                </Paper>
            </React.Fragment>

        </Box >

    )
}
