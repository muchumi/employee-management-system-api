import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import movies from './images/movies.png'


const App = () => {
    return(
        <Container max-width="lg">
            <AppBar position="static" color="inherit">
                {/* All out html elemnts go in here */}
                <Typography variant="h2" align="center">Movies Gallery</Typography>
                <img src={movies} alt="movies" height="50"/>
            </AppBar>
            {/* Grow facilitates animation on our app */}
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch"></Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;