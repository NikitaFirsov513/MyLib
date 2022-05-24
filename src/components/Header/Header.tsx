import AppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book';
import SearchIcon from '@mui/icons-material/Search';
import {
    useAutocomplete,
    AutocompleteGetTagProps,
} from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CustomizedHook from './CustomizedHook';
import './Header.scss'
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MenuUser from '../Menu/MenuUser';


const theme = createTheme({
    palette: {
        primary: {
            main: '#8B8C8D',
            contrastText: '#fff',
        },
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        primary: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        primary?: PaletteOptions['primary'];
    }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        primary: true;
    }
}


export default function Header() {



    return (
        <>


            <div className='header'>
                <div className='header__container'>

                    <div className='header__left'>
                        <div className='header__logo'>
                            <IconButton >
                                <ThemeProvider theme={theme}>
                                    <Badge
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        color="primary"
                                        badgeContent={2}
                                        sx={{ color: "#ffffff" }}
                                    >
                                        <BookIcon />
                                    </Badge>
                                </ThemeProvider>
                            </IconButton>
                            <p>
                                MyLib
                            </p>

                        </div>
                        <CustomizedHook />

                    </div>
                    <div className='header__right'>
                        <Button sx={{ color: "#FFFFFF" }}>
                            <LoginIcon />
                        </Button>
                        <MenuUser />
                    </div>

                </div>

            </div>


        </>)
}