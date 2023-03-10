import { AppBar, Box, Switch, Container, Divider, Drawer, Grid, IconButton, List, Typography, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Avatar, ListItemAvatar } from '@mui/material';
import { Menu, HomeOutlined, ContentCopyOutlined, NotificationsNoneOutlined, BookmarkBorderOutlined, SettingsOutlined, AccountCircleOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/")
    }
    const goToMyOrderHistory = () => {
        navigate("/MyOrderHistory")
    }
    const goToAlarm = () => {
        navigate("/Alarm")
    }
    const goToFavoriteStores = () => {
        navigate("/FavoriteStores")
    }
    const goToSettings = () => {
        navigate("/Settings")
    }
    const goToMySettings = () => {
        navigate("/Userprofile")
    }
    return (
        <Container component="main" maxWidth="xs" sx={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                <AppBar
                    color='inherit'>
                    <Toolbar>
                        <>
                            <IconButton
                                size='large'
                                edge='start'
                                color='inherit'
                                aria-label='open drawer'
                                onClick={() => setOpen(true)}>
                                <Menu />
                            </IconButton>
                            <Drawer
                                open={open}
                                anchor={"left"}
                                onClose={() => setOpen(false)}
                                variant="temporary">
                                <Typography
                                    p={3} variant="h5"
                                    component="div"
                                    textAlign="center">
                                    My Page
                                </Typography>
                                <Divider />
                                <Box>
                                    <List>
                                        <ListItem>
                                            <ListItemButton onClick={goToHome}>
                                                <ListItemIcon><HomeOutlined /></ListItemIcon>
                                                <ListItemText primary="???"></ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton onClick={goToMyOrderHistory}>
                                                <ListItemIcon><ContentCopyOutlined /></ListItemIcon>
                                                <ListItemText primary="?????? ?????? ??????" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton onClick={goToAlarm}>
                                                <ListItemIcon><NotificationsNoneOutlined /></ListItemIcon>
                                                <ListItemText primary="??????" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton onClick={goToFavoriteStores}>
                                                <ListItemIcon><BookmarkBorderOutlined /></ListItemIcon>
                                                <ListItemText primary="?????? ?????? ??????" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton onClick={goToSettings}>
                                                <ListItemIcon><SettingsOutlined /></ListItemIcon>
                                                <ListItemText primary="??????" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                    <List>
                                        <ListItem sx={{ position: 'fixed', bottom: 0, width: "100%" }}>
                                            <ListItemButton onClick={goToMySettings}>
                                                <ListItemAvatar>
                                                    <Avatar sx={{ bgcolor: "secondary.main" }}>
                                                        <AccountCircleOutlined />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary="????????? ??????" secondary="user@sungkyul.ac.kr" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Drawer>
                        </>
                        <Typography
                            variant='h5'
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                textAlign: 'center',
                                marginRight: 3
                            }}>
                            ?????? ??????<br />
                        </Typography>
                    </Toolbar>
                </AppBar><br />
                {/* ?????? */}
                <Grid container>
                    <Grid item>
                        <Typography
                            variant='overline'
                            component="p"
                            sx={{ marginTop: "1.8em", fontSize: "90%" }}>
                            ??????
                        </Typography>
                    </Grid>
                </Grid>
                <Box
                    width="100%"
                    sx={{
                        marginTop: "2",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                ????????? ??????
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Switch />
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        ?????? ????????? ??? ??????????????? ??????
                    </Typography>
                </Box>
                <Box
                    width="100%"
                    sx={{
                        marginTop: "2",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                ?????? ??????
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Switch />
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        ?????? ?????? ??????
                    </Typography>
                </Box>
                <Box
                    width="100%"
                    sx={{
                        marginTop: "2",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                ?????? ??????
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Switch />
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        ?????? ?????? ?????? ?????? ?????? ????????? ??????
                    </Typography>
                </Box>
                <Grid container>
                    <Grid item>
                        <Typography
                            variant='overline'
                            component="p"
                            sx={{ fontSize: "90%" }}>
                            ??????
                        </Typography>
                    </Grid>
                </Grid>
                {/* ?????? */}
                <Box
                    width="100%"
                    sx={{
                        marginTop: "2",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                ????????? ??????
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Switch />
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        ?????? ????????? ??? ??????????????? ??????
                    </Typography>
                </Box>
                <Box
                    width="100%"
                    sx={{
                        marginTop: "2",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                ?????? ??????
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Switch />
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        ?????? ?????? ??????
                    </Typography>
                </Box>
                <Box
                    width="100%"
                    sx={{
                        marginTop: "2",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                ?????? ??????
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Switch />
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        ?????? ?????? ?????? ?????? ?????? ????????? ??????
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Settings;