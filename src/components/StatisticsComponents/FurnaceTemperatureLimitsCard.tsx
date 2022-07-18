//Furnace Temperature Limits Card - Card para alteração dos limites de temperatura estipulados para os alarmes do sistema para cada zona de cada forno
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from '../GeneralComponents/Title';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import InputField from './InputField'



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
                    position: 'relative',
                    m: '1rem',
                    mt: '1rem',
                    width: '11rem',
                    height: '14rem',
                    border: "solid",
                    borderColor: "#DCDCDC",
                    borderRadius: '1rem',
                    backgroundColor: "#FFFAFA",
                    textAlign: "center"
                },
            }}
        >
            <React.Fragment>
                <Paper elevation={2}>
                    <Title>Esteira</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        MÍNIMO
                    </Typography>
                    <InputField />
                    <Divider sx={{ background: "#DCDCDC", position: 'relative', top: '1.5rem' }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1, position: 'relative', top: '1.8rem' }}>
                        MÁXIMO
                        <InputField />
                    </Typography>

                </Paper>
            </React.Fragment>


            <React.Fragment>
                <Paper elevation={2}>
                    <Title>Incinerador</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        MÍNIMO
                    </Typography>
                    <InputField />
                    <Divider sx={{ background: "#DCDCDC", position: 'relative', top: '1.5rem' }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1, position: 'relative', top: '1.8rem' }}>
                        MÁXIMO
                        <InputField />
                    </Typography>

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>
                    <Title>Pré-Zona 1</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        MÍNIMO
                    </Typography>
                    <InputField />
                    <Divider sx={{ background: "#DCDCDC", position: 'relative', top: '1.5rem' }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1, position: 'relative', top: '1.8rem' }}>
                        MÁXIMO
                        <InputField />
                    </Typography>

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>
                    <Title>Pré-Zona 2</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        MÍNIMO
                    </Typography>
                    <InputField />
                    <Divider sx={{ background: "#DCDCDC", position: 'relative', top: '1.5rem' }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1, position: 'relative', top: '1.8rem' }}>
                        MÁXIMO
                        <InputField />
                    </Typography>

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>
                    <Title>Zona 1</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        MÍNIMO
                    </Typography>
                    <InputField />
                    <Divider sx={{ background: "#DCDCDC", position: 'relative', top: '1.5rem' }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1, position: 'relative', top: '1.8rem' }}>
                        MÁXIMO
                        <InputField />
                    </Typography>

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>
                    <Title>Zona 2</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        MÍNIMO
                    </Typography>
                    <InputField />
                    <Divider sx={{ background: "#DCDCDC", position: 'relative', top: '1.5rem' }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1, position: 'relative', top: '1.8rem' }}>
                        MÁXIMO
                        <InputField />
                    </Typography>

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>
                    <Title>Zona 3</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        MÍNIMO
                    </Typography>
                    <InputField />
                    <Divider sx={{ background: "#DCDCDC", position: 'relative', top: '1.5rem' }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1, position: 'relative', top: '1.8rem' }}>
                        MÁXIMO
                        <InputField />
                    </Typography>

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>
                    <Title>Zona 4</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        MÍNIMO
                    </Typography>
                    <InputField />
                    <Divider sx={{ background: "#DCDCDC", position: 'relative', top: '1.5rem' }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1, position: 'relative', top: '1.8rem' }}>
                        MÁXIMO
                        <InputField />
                    </Typography>

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>
                    <Title>Zona 4</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        MÍNIMO
                    </Typography>
                    <InputField />
                    <Divider sx={{ background: "#DCDCDC", position: 'relative', top: '1.5rem' }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1, position: 'relative', top: '1.8rem' }}>
                        MÁXIMO
                        <InputField />
                    </Typography>

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>
                    <Title>Zona 5</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        MÍNIMO
                    </Typography>
                    <InputField />
                    <Divider sx={{ background: "#DCDCDC", position: 'relative', top: '1.5rem' }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1, position: 'relative', top: '1.8rem' }}>
                        MÁXIMO
                        <InputField />
                    </Typography>

                </Paper>
            </React.Fragment>
        </Box >

    )
}