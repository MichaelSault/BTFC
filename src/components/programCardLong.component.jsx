import { forwardRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';

import {Button} from "react-bootstrap";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


// eslint-disable-next-line react/display-name
const ProgramCardLong = forwardRef(
    (
        {
            photo,
            name,
            age,
            distance,
            experience,
            training,
            schedule,
            races,
            seasons,
            url
        },
        ref
    ) => {
    
    const navigate = useNavigate();

    return (
        <>

            <div className='programCardLong'>
            <Card sx={{ display: 'flex', width: 3000 }}>
                <Box sx={{ display: 'display', flexDirection: 'column', width: 2000  }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {name}
                    </Typography>
                    <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            <b>Ages:</b> {age}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            <b>Distances:</b> {distance}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            <b>Experience Level:</b> {experience}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            <b>Training:</b> {training}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            <b>Practices:</b> {schedule}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            <b>Competitions:</b> {races}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            <b>Seasons:</b> {seasons}
                        </Typography>
                        <Button onClick={() => navigate('/'+{url}.url)}>Learn More</Button>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 300, minHeight: 300 }}
                    image={photo}
                    alt="Live from space album cover"
                />
                </Card>
            </div>
            
        </>
    )
    }
);

export default ProgramCardLong;