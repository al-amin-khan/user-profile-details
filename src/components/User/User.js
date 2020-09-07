import React from 'react';
import Container from '@material-ui/core/container';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const User = (props) => {
  const classes = useStyles();

  const {id, title, body} = props.user;

  return (
    <div>
    <Container>
      <Grid container direction="row" spacing={2}>
        <Grid item="item" xs={4} spacing={2}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom="gutterBottom" variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {body}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`/detail/${id}`}>
                <Button size="small" color="primary">
                  Details of ID: {id}
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </div>
);
}

export default User;
