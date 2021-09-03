import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../../actions/movies.js';


const Movie = ({ movie, setCurrentId }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={movie.selectedFile} title={movie.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{movie.creator}</Typography>
                <Typography variant="body2">{moment(movie.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(movie.movie_id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{movie.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{movie.title}</Typography>
            <CardContent>
                <Typography variant="h5" gutterBottom>{movie.description}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {movie.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deleteMovie(movie.movie_id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Movie;