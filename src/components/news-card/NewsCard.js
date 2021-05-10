import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './NewsCard.css';

function NewsCard(props) {

    return (
        <Card className="root">
        <CardActionArea>
            <CardMedia
                className="media"
                image={props.urlToImage}
                title={props.title}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.description}
                    {props.url}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </CardActionArea>
    </Card>
  );
}
export default NewsCard;