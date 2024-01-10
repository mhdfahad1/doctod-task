import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton style={{ fontSize: "16px" }} className='text-black'>
                    Community
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton style={{ fontSize: "16px" }} className='text-black'>
                    Courses
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton style={{ fontSize: "16px" }} className='text-black'>
                    My Classes
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton style={{ fontSize: "16px" }} className='text-black'>
                    <div className='bg-slate-200 p-2 rounded-full'>
                        <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </IconButton>
                <p>Search</p>
            </MenuItem>
            <MenuItem>
                <IconButton style={{ fontSize: "16px" }} className='text-black'>
                    <div className='bg-slate-200 p-2 rounded-full'>
                        <i class="fa-regular fa-comment"></i>
                    </div>
                </IconButton>
                <p>Comments</p>
            </MenuItem>
            <MenuItem>
                <IconButton style={{ fontSize: "16px" }} className='text-black'>
                    <div style={{ borderRadius: '27px' }} className='bg-slate-200 p-2 '>
                        <i class="fa-regular fa-bell"></i>                            </div>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem>
                <div className='w-[79px] h-[42px] rounded-full flex border mt-1 ml-10 mr-8'>
                    <div className='p-2'>
                        <MenuIcon className='text-black' />
                    </div>
                    <div style={{ borderRadius: '20px' }} className='w-[35px] h-[32px] bg-[#FCECE1] text-black mt-1 pt-1 text-md flex justify-center '>
                        PP
                    </div>
                </div>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='bg-white'>
                <Toolbar>


                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton style={{ fontSize: "16px" }} className='text-black font-medium me-4'>
                            Community
                        </IconButton>
                        <IconButton style={{ fontSize: "16px" }} className='text-black font-medium me-4'>
                            Courses
                        </IconButton>
                        <IconButton style={{ fontSize: "16px" }} className='text-black font-medium me-4'>
                            My Classes
                        </IconButton>
                        <IconButton style={{ fontSize: "16px" }} className='text-black'>
                            <div className='bg-slate-200 p-2 rounded-full'>
                                <i class="fa-solid fa-magnifying-glass"></i>

                            </div>
                        </IconButton>
                        <IconButton style={{ fontSize: "16px" }} className='text-black'>
                            <div className='bg-slate-200 p-2 rounded-full'>
                                <i class="fa-regular fa-comment"></i>
                            </div>
                        </IconButton>
                        <IconButton style={{ fontSize: "16px" }} className='text-black'>
                            <div style={{ borderRadius: '27px' }} className='bg-slate-200 p-2 '>
                                <i class="fa-regular fa-bell"></i>                            </div>
                        </IconButton>
                        <div className='w-[79px] h-[42px] rounded-full flex border mt-1 ml-10 mr-8'>
                            <div className='p-2'>
                                <MenuIcon className='text-black' />
                            </div>
                            <div style={{ borderRadius: '20px' }} className='w-[35px] h-[32px] bg-[#FCECE1] text-black mt-1 pt-1 text-md flex justify-center '>
                                PP
                            </div>
                        </div>

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon className='text-black' />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}

export default Header