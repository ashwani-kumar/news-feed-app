import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Card className="root">
          <CardActionArea>
            <CardMedia
              className="media"
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nulla eget est auctor, at aliquam orci eleifend. 
                Nunc vel nisi nisi. Aenean ornare erat at enim porttitor, a sollicitudin lorem porta. Mauris eleifend, risus sed iaculis posuere, elit eros ornare nisl, molestie rhoncus felis enim quis elit. 
                Ut sed massa ante. Curabitur in lectus at lectus euismod vestibulum a a tortor. Aliquam vitae ipsum auctor, sagittis turpis at, venenatis elit. 
                Morbi fermentum ante ut sem pharetra placerat.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default App;
