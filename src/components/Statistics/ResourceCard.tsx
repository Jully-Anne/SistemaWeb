import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from '../GeneralComponents/Title';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import LinearProgressWithLabel from './ProgressBar';
import Brightness1Icon from '@mui/icons-material/Brightness1';


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
                    height: 275,
                    position: 'relative',
                    top: "2.5rem",
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

                    <Title>
                        PC02
                        <Brightness1Icon sx={{ color: "#1AC640", position: 'relative', top: '0.3rem', left: '4rem' }} />
                    </Title>
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
                        TEMPO DE CICLO
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        5.1s.
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        PRODUTIVIDADE
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        26531/65412
                    </Typography>
                    <LinearProgressWithLabel />

                </Paper>
            </React.Fragment>

            <React.Fragment>
                <Paper elevation={2}>

                    <Title>
                        PC08
                        <Brightness1Icon sx={{ color: "#1C1C1C", position: 'relative', top: '0.3rem', left: '4rem' }} />
                    </Title>
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
                        TEMPO DE CICLO
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        5.1s.
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        PRODUTIVIDADE
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        26531/65412
                    </Typography>
                    <LinearProgressWithLabel />

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>
                        PC09
                        <Brightness1Icon sx={{ color: "#FF0000", position: 'relative', top: '0.3rem', left: '4rem' }} />
                    </Title>
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
                        TEMPO DE CICLO
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        5.1s.
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        PRODUTIVIDADE
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        26531/65412
                    </Typography>
                    <LinearProgressWithLabel />

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>
                        PC10
                        <Brightness1Icon sx={{ color: "#1AC640", position: 'relative', top: '0.3rem', left: '4rem' }} />
                    </Title>
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
                        TEMPO DE CICLO
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        5.1s.
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        PRODUTIVIDADE
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        26531/65412
                    </Typography>
                    <LinearProgressWithLabel />

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>
                        PC11
                        <Brightness1Icon sx={{ color: "#808080", position: 'relative', top: '0.3rem', left: '4rem' }} />
                    </Title>
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
                        TEMPO DE CICLO
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        5.1s.
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        PRODUTIVIDADE
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        26531/65412
                    </Typography>
                    <LinearProgressWithLabel />

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>
                        PC17
                        <Brightness1Icon sx={{ color: "#1C1C1C", position: 'relative', top: '0.3rem', left: '4rem' }} />
                    </Title>
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
                        TEMPO DE CICLO
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        5.1s.
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        PRODUTIVIDADE
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        26531/65412
                    </Typography>
                    <LinearProgressWithLabel />

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>
                        PC17
                        <Brightness1Icon sx={{ color: "#1AC640", position: 'relative', top: '0.3rem', left: '4rem' }} />
                    </Title>
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
                        TEMPO DE CICLO
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        5.1s.
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        PRODUTIVIDADE
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        26531/65412
                    </Typography>
                    <LinearProgressWithLabel />

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>
                        PC18
                        <Brightness1Icon sx={{ color: "#1C1C1C", position: 'relative', top: '0.3rem', left: '4rem' }} />
                    </Title>
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
                        TEMPO DE CICLO
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        5.1s.
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        PRODUTIVIDADE
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        26531/65412
                    </Typography>
                    <LinearProgressWithLabel />

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>
                        PC19
                        <Brightness1Icon sx={{ color: "#FF0000", position: 'relative', top: '0.3rem', left: '4rem' }} />
                    </Title>
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
                        TEMPO DE CICLO
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        5.1s.
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        PRODUTIVIDADE
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        26531/65412
                    </Typography>
                    <LinearProgressWithLabel />

                </Paper>
            </React.Fragment>
            <React.Fragment>
                <Paper elevation={2}>

                    <Title>
                        PC20
                        <Brightness1Icon sx={{ color: "#808080", position: 'relative', top: '0.3rem', left: '4rem' }} />
                    </Title>
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
                        TEMPO DE CICLO
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        5.1s.
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        PRODUTIVIDADE
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        26531/65412
                    </Typography>
                    <LinearProgressWithLabel />

                </Paper>
            </React.Fragment>

            <React.Fragment>
                <Paper elevation={2}>

                    <Title>
                        PC21
                        <Brightness1Icon sx={{ color: "#1C1C1C", position: 'relative', top: '0.3rem', left: '4rem' }} />
                    </Title>
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
                        TEMPO DE CICLO
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        5.1s.
                    </Typography>
                    <LinearProgressWithLabel />
                    <Divider sx={{ background: "#DCDCDC" }} />
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        PRODUTIVIDADE
                    </Typography>
                    <Typography color="#1C1C1C" sx={{ flex: 1 }}>
                        26531/65412
                    </Typography>
                    <LinearProgressWithLabel />

                </Paper>
            </React.Fragment>
        </Box >

    )
}
