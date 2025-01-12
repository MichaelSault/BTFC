import { forwardRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';

import {Button} from "react-bootstrap";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


// eslint-disable-next-line react/display-name
const ProgramCard = forwardRef(
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

            <div className='programCard'>
                <Card className='programCardText'>
                    <CardMedia
                        sx={{ height: 100 }}
                        image={photo}
                        title={name}
                    />

                    <div className='cardText'>
                    <CardContent>
                        <Typography fontFamily='Montserrat' gutterBottom variant="h5" component="div">
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
                        <Button onClick={() => navigate({url})}>Learn More</Button>
                    </CardContent>

                    </div>
                </Card>
            </div>
            
        </>
    )
    }
);

export default ProgramCard;