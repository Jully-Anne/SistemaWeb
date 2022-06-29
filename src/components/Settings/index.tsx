import { Typography } from "@mui/material";
import { createTheme } from '@material-ui/core/styles';

const Settings = () => {
    return (
        <Typography variant="h3">Configurações</Typography>
        
    )
}
export const theme = createTheme ({
    typography: {
        fontFamily: "Comic Sans MS"
    }
})


export default Settings;