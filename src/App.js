import React from 'react';
import {
  Typography,
  AppBar,
  CssBaseline,
  Container,
  Grid,
  Toolbar,
  ThemeProvider,
  Button,
  Box
} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Camera } from '@mui/icons-material';
import Theme from './styles';
import pictures from './images.js';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <AppBar position="relative">
          <Toolbar>
            <Camera sx={{ marginLeft: 10 }} />
            <Typography variant="h6" sx={{ marginLeft: 10 }}>
              Photo Album
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container sx={{ marginTop: 50 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Photo Album
              </Typography>
              <Typography variant="h5" align="center" paragraph>
                Hello everyone this is a photo album ui using material UI react
                framework
              </Typography>
              <div>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  sx={{ marginTop: 25, rowGap: {xs: 10} }}
                >
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ marginLeft: 10 }}
                    >
                      Secondary actions
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container>
            <Grid container align="center" sx={{mt: 30}} rowSpacing={40} >
              {pictures.map((pic, i) => {
                return (
                  <Grid key={i} md={4} sm={6} xs={12} item>
                    <Card sx={{ width: 240}}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        sx={{ width: 240}}
                        image={pic}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card, You can use this section to
                          describe the content
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </main>
        <Box sx={{ p: 40, backgroundColor: 'steelblue', maxWidth: '100%', mt: 10 }}>
          <Typography variant='h6' align='center' gutterBottom>
            Footer
          </Typography>
          <Typography variant='subtitle1' align='center' color={'yellowgreen'}>This is a nice footer</Typography>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
