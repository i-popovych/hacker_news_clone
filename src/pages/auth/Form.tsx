import React, {FC} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

export interface FormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => any
    formName: string
    redirectText: string
    redirectLink: string
}

const Form: FC<FormProps> = ({handleSubmit, formName, redirectText, redirectLink}) => {
    const theme = createTheme({
        palette: {
            background: {
                default: '#1b1b1b'
            },
            text: {
                primary: '#f8f8f8',
                secondary: '#f8f8f8'
            }
        }
    })


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#33469d' }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {formName}
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            sx={{backgroundColor: '#666666'}}
                            variant='filled'
                            margin="normal"
                            required
                            fullWidth
                            id="login"
                            label="Login"
                            name="login"
                            autoComplete="login"
                            autoFocus
                        />
                        <TextField
                            sx={{backgroundColor: '#666666'}}
                            variant='filled'
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {formName}
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href={redirectLink} variant="body2">
                                    {redirectText}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Form;