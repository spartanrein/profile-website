import React from 'react'
import { Avatar, Container, Box, Typography, Button, IconButton } from '@mui/material'
import reiner_avatar from "../assets/pics/reiner_avatar.png"
import reiner_full from "../assets/pics/reiner_nobackground.png"
import reiner_profile from "../assets/pics/reiner_profile.png"
import instagram_icon from "../assets/icons/instagram_icon.png"
import github_icon from "../assets/icons/github_icon.png"
import linkedin_icon from "../assets/icons/linkedin_icon.png"
import facebook_icon from "../assets/icons/facebook_icon.png"
import { red } from '@mui/material/colors'
import { styled } from '@mui/system'
export const Profile = () => {
    return (
        <Container>
            <CenteredFlexBox>
                <Avatar
                    alt="Reiner avatar" src={reiner_avatar}
                    sx={{width:100, height: 100, bgcolor: red[300]}}
                />
                {/* <img style={{width:100}} src={reiner_profile}/> */}
            </CenteredFlexBox>
            <CenteredFlexBox>
                <Typography variant="h6">Reiner De Guzman</Typography>
            </CenteredFlexBox>
            <CenteredFlexBox>
                <Typography 
                    variant="subtitle1" color="textSecondary">
                        Frontend Developer
                </Typography>
            </CenteredFlexBox>
            <CenteredFlexBox>
                <Button variant="contained">Download CV</Button>

            </CenteredFlexBox>
            <Box sx={{display:'flex', justifyContent:'center'}}>
                <Box sx={{display:'flex', padding:1}}>
                    <img src={facebook_icon} alt="facebook icon" style={{width:24}}/>
                </Box>
                <Box sx={{display:'flex',padding:1}}>
                    <img src={linkedin_icon} alt="facebook icon" style={{width:24}}/>
                </Box>
                <Box sx={{display:'flex', padding:1}}>
                    <img src={github_icon} alt="facebook icon" style={{width:24}}/>
                </Box>
                <Box sx={{display:'flex', padding:1}}>
                    <img src={instagram_icon} alt="facebook icon" style={{width:24}}/>
                </Box>
            </Box>
        </Container>    
    )
}

const CenteredFlexBox = styled('Box')({
    display: 'flex', justifyContent:'center'
})

export default Profile