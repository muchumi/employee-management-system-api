import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Movies from './components/Movies/Movies.js';
import Form from './components/Forms/Form.js';
import movies from './images/movies.png';


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