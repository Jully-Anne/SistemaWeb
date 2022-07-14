//Menu acordeon, abre aba de opções de links quando clicado
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { PieChartOutline } from '@mui/icons-material'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Box } from '@mui/system';
import { Collapse } from '@mui/material';


const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `0.1rem solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={< LeaderboardIcon  sx={{ fontSize: '1.5rem', color: '#1976d2' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(0deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));
const AccordionSummary2 = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<DeviceThermostatIcon sx={{ fontSize: '1.5rem', color: '#1976d2' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(0deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '0.1rem solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const [open, setOpen] = React.useState(false)
    const handleDrawerOpen = () => {
        setOpen(true)
    }


    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (

        <Box sx={{ display: 'flex' }}>

            <div>

                <Accordion onChange={handleChange('panel1')} sx={{ width: '13rem', backgroundColor: '#FFFFFF', padding: '0%' }}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ backgroundColor: '#FFFFFF' }} >

                        <Typography sx={{
                            mx: '1.5rem',
                            fontSize: '1rem',
                            color: '#000000',
                        }}
                        >Máquinas</Typography>

                    </AccordionSummary>
                    <Collapse in={expanded === 'panel1'} timeout="auto" unmountOnExit>
                        <AccordionDetails>

                            <Typography sx={{
                              
                                mx: '1.5rem',
                                fontSize: '1rem',
                              
                            }}>
                                <Link to='/resourceRealTimeAnalysis' style={{ 'textDecoration': 'none', color: '#000000'}}>
                                    Tempo Real
                                </Link>
                            </Typography>
                        </AccordionDetails>

                        <AccordionDetails>

                            <Typography sx={{ 
                      
                            mx: '1.5rem', 
                            fontSize: '1rem',
                            
                             }}>
                                <Link to='/resourceHistoricalAnalysis' style={{ 'textDecoration': "none", 'color': '#000000' }}
                                >Hsitóricos
                                </Link>
                            </Typography>
                        </AccordionDetails>
                    </Collapse>
                </Accordion>
                <Accordion onChange={handleChange('panel2')} sx={{ width: '13rem' }} >
                    <AccordionSummary2 aria-controls="panel2d-content" id="panel1d-header" sx={{ backgroundColor: '#FFFFFF' }} >


                        <Typography sx={{
                            mx: '1.5rem',
                            fontSize: '1rem',
                             }}>Fornos</Typography>
                    </AccordionSummary2>
                    <AccordionDetails>

                        <Typography sx={{ 
                          
                            mx: '1.5rem', 
                            fontSize: '1rem',
                             }}>
                            <Link to='/furnaceRealTimeAnalysis' style={{ 'textDecoration': 'none', 'color': '#000000' }}>
                                Tempo Real
                            </Link>

                        </Typography>

                    </AccordionDetails>


                    <Collapse in={expanded === 'panel2'} timeout="auto" unmountOnExit >
                        <AccordionDetails>

                            <Typography sx={{ 
                               
                                mx: '1.5rem', 
                                fontSize: '1rem',
                                 }}>
                                <Link to='/resourceRealTimeAnalysis' style={{ 'textDecoration': 'none', 'color': '#000000'}}>
                                    Históricos
                                </Link>

                            </Typography>

                        </AccordionDetails>
                        <Divider />
                        <AccordionDetails>
                            <Typography sx={{ 
                            mx: '1.5rem', 
                            fontSize: '1rem',
                            }}>
                                <Link to='/resourceHistoricalAnalysis' style={{ 'textDecoration': "none", 'color': '#000000' }}>
                                    Alarmes
                                </Link>
                            </Typography>

                        </AccordionDetails>
                        <Divider />
                        <AccordionDetails>
                            <Typography sx={{ 
                                mx: '1.5rem', 
                                fontSize: '1rem',
                             }}>
                                <Link to='/resourceHistoricalAnalysis' style={{ 'textDecoration': "none", 'color': '#000000' }}>
                                    Limites Temp
                                </Link>
                            </Typography>

                        </AccordionDetails>
                    </Collapse>
                </Accordion>

            </div >
        </Box >
    );
}



