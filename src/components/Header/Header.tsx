import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import BookIcon from '@mui/icons-material/Book';
import CustomizedHook from './CustomizedHook';
import './Header.scss'
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuUser from '../Menu/MenuUser';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { useState } from 'react';
import { Alert, Snackbar, SwipeableDrawer } from '@mui/material';
import Basket from '../Basket/Basket';
import { setDialog } from '../../redux/reducers/userReducer';


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

    let basketCol = useSelector((state: RootState) => state.basketList.bookList.length);
    let isAuth = useSelector((state: RootState) => state.user.isAuth);
    const dispatch = useDispatch();
    
    const [openSuccess, setOpenSuccess] = useState(false);
    const [propState, setPropState] = useState(false);
    
    const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setPropState(open);
        };
    const toggle = (open: boolean) => {
        setPropState(open);
    }

    function loginOpen() {
        dispatch(setDialog({ isLoginOpen: true, isRegistrationOpen: false, isLoad: false }));
    }
    function successClose() {
        setOpenSuccess(false);
    };
    return (
        <>
            <div className='header'>
                <div className='header__container'>

                    <div className='header__left'>
                        <div className='header__logo'>
                            <IconButton onClick={e => toggle(true)} >
                                <ThemeProvider theme={theme}>
                                    <Badge
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        color="primary"
                                        badgeContent={basketCol}
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
                        {isAuth
                            ?
                            <MenuUser />
                            :
                            <Button onClick={e => loginOpen()} sx={{ color: "#FFFFFF" }}>
                                <LoginIcon />
                            </Button>
                        }
                    </div>
                </div>
            </div>
            <SwipeableDrawer
                anchor={"left"}
                open={propState}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box sx={{ width: "340px" }}>
                    <Basket setOpenSuccess={setOpenSuccess} setPropState={setPropState} />
                </Box>
            </SwipeableDrawer>
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={successClose}>
                <Alert onClose={successClose} severity="success" sx={{ width: '100%' }}>
                    Успешно
                </Alert>
            </Snackbar>
        </>)
}