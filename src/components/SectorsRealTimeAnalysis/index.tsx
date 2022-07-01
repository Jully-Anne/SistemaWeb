import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Title from '../GeneralComponents/Title';
import Card from '../StatisticsComponents/ResourceCard';
import FormRealTimeQuery from '../GeneralComponents/Selector';


const mdTheme = createTheme();

function Sectors() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Title>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Setores
                </Typography>
            </Title>
            <Divider />
            <FormRealTimeQuery />
            <Divider sx={{position: "relative", top:'1.5rem', left:'0.02rem' }}/>
            <Card />
        </ThemeProvider>
    );
}
export default function Index() {
    return <Sectors />;
}



