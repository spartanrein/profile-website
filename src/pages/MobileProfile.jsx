import React from 'react'
import { Avatar, Container, Box, Typography, Button, IconButton, Paper } from '@mui/material'
import reiner_avatar from "../assets/pics/reiner_avatar.png"
import reiner_full from "../assets/pics/reiner_nobackground.png"
import reiner_profile from "../assets/pics/reiner_profile.png"
import instagram_icon from "../assets/icons/instagram_icon.png"
import github_icon from "../assets/icons/github_icon.png"
import linkedin_icon from "../assets/icons/linkedin_icon.png"
import facebook_icon from "../assets/icons/facebook_icon.png"
import { red } from '@mui/material/colors'
import { styled } from '@mui/system'
import useMediaQuery from '@mui/material/useMediaQuery';


export const MobileProfile = () => {
    const isMobile = useMediaQuery('(max-width:650px)');
    const introText = "Hey there, I'm"
    const introText2 = "Reiner De Guzman"
    const introText3 = "a user-centric web developer"

    return (
        <Container sx={{pt: 6}}>
            {isMobile && <CenteredFlexBox>
                <Avatar
                    alt="Reiner avatar" src={reiner_avatar}
                    sx={{width:165, height: 165, bgcolor: red[300]}}
                />
            </CenteredFlexBox>}
            {!isMobile && <Box sx={{position:'relative'}}>
                <Paper sx={{width:'100%', height:"200px", backgroundColor:red[300], position:'absolute', top:24}}/>
                <Box sx={{position: "absolute", top:40, p:2}}>
                    <Typography variant='h5'>
                        {introText}
                    </Typography>
                    <Typography variant="h4">
                        {introText2}
                    </Typography>
                    <Box>
                    <Typography variant="subtitle1" color="textSecondary">
                        {introText3}
                    </Typography>
                    <Box sx={{pt:2}}>
                        <Button variant="contained" sx={{borderRadius:"24px", backgroundColor:'#083D77'}}>Let's Talk</Button>
                    </Box>
                    </Box>
                </Box>
                <Box sx={{position:'absolute', right:"20%"}}>
                <img style={{width:300}} src={reiner_profile}/>
                </Box>
            </Box>}
            {isMobile && <Box>
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
                    <Box sx={{pt:2}}>
                        <Button variant="contained" sx={{backgroundColor:'#083D77', width:'145px'}}>Download CV</Button>
                    </Box>
                </CenteredFlexBox>
            </Box>}
            <Box sx={{display:'flex', justifyContent:'center', flexDirection: isMobile ? 'row' : 'column', position:!isMobile ? 'absolute' : null, top:275}}>
                <Box sx={{display:'flex', padding:1, cursor:'pointer'}}
                >
                    <img src={facebook_icon} alt="facebook icon" style={{width:isMobile ? 24 : 36}}/>
                </Box>
                <Box sx={{display:'flex',padding:1, cursor:'pointer'}}>
                    <img src={linkedin_icon} alt="facebook icon" style={{width:isMobile ? 24 : 36}}/>
                </Box>
                <Box sx={{display:'flex', padding:1, cursor:'pointer'}}>
                    <img src={github_icon} alt="facebook icon" style={{width:isMobile ? 24 : 36}}/>
                </Box>
                <Box sx={{display:'flex', padding:1, cursor:'pointer'}}>
                    <img src={instagram_icon} alt="facebook icon" style={{width:isMobile ? 24 : 36}}/>
                </Box>
            </Box>
        </Container>    
    )
}

const CenteredFlexBox = styled('Box')({
    display: 'flex', justifyContent:'center'
})

export default MobileProfile