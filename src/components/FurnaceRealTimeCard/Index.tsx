//Card com as informações em tempo real de cada zona do forno selecionado - temperaturas de setpoint e real.
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Title from '../Title/Index'
import { Box } from '@mui/system'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'


function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}
export default function FurnaceRealTimeCard() {
    return (

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    position: 'relative',
                    m: 1,
                    mt: '1rem',
                    width: '11rem',
                    height: '9rem',
                    border: "solid",
                    borderColor: "#DCDCDC",
                    borderRadius: '1rem',
                    backgroundColor: "FFFAFA",
                    textAlign: "center"
                },
            }}
        >
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>Esteira</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        SETPOINT
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        REAL
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        112
                    </Typography>
                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>
                    <Title>Incinerador</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        SETPOINT
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>

                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        REAL
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>

                </Paper>
            </React.Fragment>

            <React.Fragment>
                <Paper elevation={2}>
                    <Title>Pré-Zona 1</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        SETPOINT
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        REAL
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>Pré-Zona 2</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        SETPOINT
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        REAL
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>Zona 1</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        SETPOINT
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        REAL
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>
                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>Zona 2</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        SETPOINT
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        REAL
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>Zona 3</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        SETPOINT
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        REAL
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>
                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>Zona 4</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        SETPOINT
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        REAL
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>Zona 5</Title>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        SETPOINT
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        REAL
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        115
                    </Typography>

                </Paper>
            </React.Fragment>
        </Box >

    )
}