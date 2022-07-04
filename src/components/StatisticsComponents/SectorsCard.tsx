//Card com as informações gerais de cada setor na tela de dashboard
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from '../GeneralComponents/Title';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { Container } from '@material-ui/core';
import LinearProgressWithLabel from './ProgressBar';
import StatusTable from './StatusTableSectors';


function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}
export default function SectorsCard() {
    return (

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: '14rem',
                    height: '17rem',
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

                    <Title>Balanças</Title>
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
                       <StatusTable />
                    </Container>
                </Paper>
            </React.Fragment>
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
                       <StatusTable />
                    </Container>
                </Paper>
            </React.Fragment>

            <React.Fragment>
                <Paper elevation={2}>
                    <Title>Segunda Prensagem</Title>
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
                       <StatusTable />
                    </Container>
                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>Usinagem Anéis</Title>
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
                       <StatusTable />
                    </Container>
                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>Usinagem Guias</Title>
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
                       <StatusTable />
                    </Container>
                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>Prensagem Guias</Title>
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
                       <StatusTable />
                    </Container>
                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>Inspeção Final</Title>
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
                       <StatusTable />
                    </Container>
                </Paper>
            </React.Fragment>
        </Box >

    )
}
