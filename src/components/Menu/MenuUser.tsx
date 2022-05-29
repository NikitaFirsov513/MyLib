import { MouseEvent, useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import HistoryIcon from '@mui/icons-material/History';
import { Link } from "react-router-dom";
import './MenuUser.scss';
import Avatar from '@mui/material/Avatar';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { Box, SwipeableDrawer } from "@mui/material";
import History from "../History/History";
import { logout } from "../../redux/reducers/userReducer";
import { RootState } from "../../redux/store/store";



export default function MenuUser() {


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [propState, setPropState] = useState(false);

    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.user.userData)

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const toggle = (open: boolean) => {
        setPropState(open);
    }
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
    const handleLogout = () => {
        dispatch(logout("any"));
    };





    return (
        <>

            <Button onClick={handleClick} sx={{ color: "#ffffff" }} variant="text">

                {userData !== null
                    ?
                    <Avatar
                        sx={{ bgcolor: "#FFFFFF", color: "#1C1E1F" }}
                    >{userData.name[0] + userData.surname[0]}</Avatar>
                    :
                    <></>}
            </Button>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },

                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={e => toggle(true)}>
                    <ListItemIcon>
                        <CollectionsBookmarkIcon fontSize="small" />
                    </ListItemIcon>
                    <p>Ваши книги</p>
                </MenuItem>
                <Divider />
                <MenuItem onClick={e => handleLogout()}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    <p>Выход</p>
                </MenuItem>
            </Menu>
            <SwipeableDrawer
                anchor={"right"}
                open={propState}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box sx={{ width: "340px" }}>
                    <History />
                </Box>


            </SwipeableDrawer>
        </>)
}