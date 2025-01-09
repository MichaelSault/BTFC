import { forwardRef } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


// eslint-disable-next-line react/display-name
const ProgramCard = forwardRef(
    (
        {
            name,
            age,
            distance,
            experience,
            training,
            schedule,
            races,
            seasons
        },
        ref
    ) => {
    
    return (
        <>

            <div className='programCard'>
                <Card className='programCardText'>
                    <CardMedia
                        sx={{ minHeight: 75 }}
                        //image={eventPhoto}
                        title={name}
                    />

                    <div className='cardText'>
                    <CardContent>
                        <Typography fontFamily='Montserrat' gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            Ages: {age}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            Distances: {distance}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            Experience Level: {experience}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            Training: {training}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            Practices: {schedule}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            Competitions: {races}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            Seasons: {seasons}
                        </Typography>
                    </CardContent>

                    </div>
                </Card>
            </div>
            
        </>
    )
    }
);

export default ProgramCard;