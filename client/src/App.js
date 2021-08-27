import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
// import an action
import { getMovies } from './actions/movies.js';
import Movies from './components/Movies/Movies.js';
import Form from './components/Forms/Form.js';
import movies from './images/movies.png';
import useStyles from './styles.js'



const App = () => {
    const [currentID, setCurrentID] = useState(null);
    const classes = useStyles();
    // Hook
    // useDispatch helps in dispatching an action
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);
    return(
        <Container max-width="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                {/* All out html elemnts go in here */}
                <Typography className={classes.heading} variant="h2" align="center">Movies Gallery</Typography>
                <img className={classes.image} src={movies} alt="movies" height="50"/>
            </AppBar>
            {/* Grow facilitates animation on our app */}
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        {/* Taking 12 full width on extra small devices and 7 on small to medium devices */}
                        <Grid item xs={12} sm={7}>
                            <Movies />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;