import { AppBar, Box, Container, IconButton, Stack, Toolbar, Typography, Grid, Drawer, List, ListItem, ListItemButton, ListItemIcon, Divider, ListItemText, Avatar, ListItemAvatar, Tabs, Tab } from '@mui/material';
import { Menu, Search, ArrowForward, ContentCopyOutlined, NotificationsNoneOutlined, BookmarkBorderOutlined, SettingsOutlined, AccountCircleOutlined } from "@mui/icons-material"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('one');
    const handleToptab = (e, newValue) => {
        setValue(newValue);
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
    const goToProductSearch = () => {
        navigate("/ProductSearch")
    }
    const TabPanel = (props) => {
        const { children, value, index } = props;
        return (<div hidden={value !== index}>
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>)
    }
    const [open, setOpen] = useState(false);
    return (
        <Container component="main" maxWidth="xs" sx={{ paddingLeft: '0', paddingRight: "0" }}>
            <Box sx={{
                flexDirection: 'column',
                display: "flex",
                alignItems: 'center'
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
                                sx={{ mr: 2 }}
                                onClick={() => setOpen(true)}>
                                <Menu />
                            </IconButton>
                            <Drawer
                                open={open}
                                anchor={"left"}
                                onClose={() => setOpen(false)}
                                // ?????? ??? Temporary ????????? ??????????????? click ????????? ?????? ????????? ?????? ???????????? ?????? ??????.
                                variant="temporary">
                                <Typography p={3} variant="h5" component="div" textAlign="center">
                                    My page
                                </Typography>
                                <Divider />
                                <Box
                                    width='250px'
                                    textAlign='center'
                                    style={{ width: 250 }}
                                    role="presentation"
                                    onClick={() => setOpen(false)}>
                                    <List>
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
                            sx={{ flexGrow: 1, textAlign: 'center', marginRight: "1em" }}>
                            ????????????
                        </Typography>
                        <IconButton
                            size='large'
                            aria-label='search'
                            color='inherit'
                            onClick={goToProductSearch}>
                            <Search />
                        </IconButton>
                    </Toolbar>
                </AppBar><br />
                <Box
                    width='100%'>
                    <Tabs
                        sx={{ paddingTop: 3, paddingBottom: 1 }}
                        TabIndicatorProps={{ style: { backgroundColor: 'orange' } }}
                        textColor='inherit'
                        variant="fullWidth"
                        value={value}
                        onChange={handleToptab}>
                        <Tab
                            value="one"
                            label="??????">
                        </Tab>
                        <Tab
                            value="two"
                            label="????????????">
                        </Tab>
                        <Tab
                            value="three"
                            label="????????????">
                        </Tab>
                    </Tabs>
                    <TabPanel value={value} index="one">
                        <Box>
                            <div style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 11 }}>
                                ?????? ???????????? ?????????
                            </div>
                            <img src="./images/homePageImg/fruitSale.png" alt="????????? ??????" style={{ width: '100%', borderRadius: '0.5em' }} />
                            <Grid container mt={1}>
                                <Grid item xs>
                                    <div style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>?????? ?????? ??????</div>
                                </Grid>
                                <Grid item>
                                    <ArrowForward />
                                </Grid>
                            </Grid>
                            <Stack
                                direction="row"
                                sx={{ width: '100%' }}>
                                <Stack
                                    direction="column">
                                    <img src="/images/homePageImg/tteokbokki.png" alt="?????????" width="100%" height="80%" />
                                    <div style={{ textAlign: 'center' }}>????????? ?????? ?????? ??????</div>
                                </Stack>
                                <Stack
                                    direction="column">
                                    <img src="/images/homePageImg/seasonedChicken.png" alt="????????????" width="100%" height="80%" />
                                    <div style={{ textAlign: 'center' }}>?????? ????????? ??????!</div>
                                </Stack>
                            </Stack>
                        </Box>
                    </TabPanel>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;