import styled from "@emotion/styled";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { Alert, Button, ButtonProps, Dialog, DialogTitle, FormControl, Input, InputAdornment, InputLabel, Snackbar, Stack, TextField } from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDialog, setUserData } from "../../redux/reducers/userReducer";
import { RootState } from "../../redux/store/store";
import loginFetch from "../../utils/loginFetch";
import "./Auth.scss";

type State = {
    email: string,
    pass: string
}

export default function Auth() {

    let isLoginOpen = useSelector((state: RootState) => state.user.isLoginOpen);
    let isLoad = useSelector((state: RootState) => state.user.isLoad);

    const dispatch = useDispatch();
    const [openError, setOpenError] = useState(false);
    const [values, setValues] = useState<State>({
        email: '',
        pass: '',
    });

    const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });

    };

    const handleClose = () => {
        dispatch(setDialog({ isLoginOpen: false, isRegistrationOpen: false, isLoad: false }));
    };

    const LoginButton = styled(Button)<ButtonProps>(({ theme }) => ({
        marginTop: "10px",
        color: "#151A40",
        backgroundColor: "#ffffff",
        '&:hover': {
            backgroundColor: "#ffffff",
            boxShadow: "none"
        },
        boxShadow: "none",

    }));

    const LoadButton = styled(LoadingButton)<LoadingButtonProps>(({ theme }) => ({
        marginTop: "10px",
        color: "#151A40",
        backgroundColor: "#ffffff",
        '&:hover': {
            backgroundColor: "#ffffff",
            boxShadow: "none"
        },
        boxShadow: "none",

    }));

    function errorClose() {
        setOpenError(false);
    };

    async function submit() {

        console.log(values.email);
        console.log(values.pass);

        dispatch(setDialog({ isLoginOpen: true, isRegistrationOpen: false, isLoad: true }))

        const res = await loginFetch(values.email, values.pass);
        switch (res.status) {
            case 200:
                //alert("ok")
                let data = await res.json()
                dispatch(setDialog({ isLoginOpen: false, isRegistrationOpen: false, isLoad: false }))
                dispatch(setUserData(data));

                break;
            default:
                dispatch(setDialog({ isLoginOpen: true, isRegistrationOpen: false, isLoad: false }))
                setOpenError(true);
        }


    }

    return (
        <>
            <Dialog onClose={handleClose} open={isLoginOpen}>
                <DialogTitle>Вход</DialogTitle>
                <div className="inputList">
                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">email</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={'text'}
                            value={values.email}
                            onChange={handleChange('email')} />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={'password'}
                            value={values.pass}
                            onChange={handleChange('pass')}
                        />
                    </FormControl>



                    {isLoad ?
                        <LoadButton loading variant="contained">
                            OK
                        </LoadButton>
                        :
                        <LoginButton onClick={e => submit()} variant="contained">
                            OK
                        </LoginButton>


                    }
                </div>
                <Snackbar open={openError} autoHideDuration={6000} onClose={errorClose}>
                    <Alert onClose={errorClose} severity="error" sx={{ width: '100%' }}>
                        Ошибка авторизации
                    </Alert>
                </Snackbar>
            </Dialog>
        </>)

}

/*


loading

*/