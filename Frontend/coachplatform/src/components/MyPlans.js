import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './MyPlansStyles.js'
import Paper from '@material-ui/core/Paper'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import tileData from './TileData'
import Container from '@material-ui/core/Container'

const MyPlans = (props) => {
    const classes = useStyles();

  return (
    <Container className = { classes.container } maxWidth="l">

    <div>
    <Typography variant="h4" className={classes.text}>My Plans</Typography>

             <Paper elevation = {10} className={classes.paper}>
                <Typography variant="h6" className={classes.text}>Static Plans</Typography>
             </Paper>

             <Paper elevation = {10} className={classes.paper}>
                <GridList cellHeight={200} className={classes.gridList} cols={2.5}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                             title={tile.title}
                             classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                            <IconButton aria-label={`star ${tile.title}`}>
                            <StarBorderIcon className={classes.title} />
                            </IconButton>
                            }
                        />
                    </GridListTile>
                 ))}
                </GridList>
            </Paper>
      
            <Paper elevation = {10} className={classes.paper}>
                <Typography variant="h6" className={classes.text}>Dynamic Plans</Typography>
             </Paper>

             <Paper elevation = {10} className={classes.paper}>
                <GridList cellHeight={200} className={classes.gridList} cols={2.5}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                             title={tile.title}
                             classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                            <IconButton aria-label={`star ${tile.title}`}>
                            <StarBorderIcon className={classes.title} />
                            </IconButton>
                            }
                        />
                    </GridListTile>
                 ))}
                </GridList>
            </Paper>

             <Paper elevation = {10} className={classes.paper}>
                <Typography variant="h6" className={classes.text}>Interactive Plans</Typography>
             </Paper>

             <Paper elevation = {10} className={classes.paper}>
                <GridList cellHeight={200} className={classes.gridList} cols={2.5}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                             title={tile.title}
                             classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                            <IconButton aria-label={`star ${tile.title}`}>
                            <StarBorderIcon className={classes.title} />
                            </IconButton>
                            }
                        />
                    </GridListTile>
                 ))}
                </GridList>
            </Paper>
            
             <Paper elevation = {10} className={classes.paper}>
                <Typography variant="h6" className={classes.text}>Group Plans</Typography>
             </Paper>
    </div>
    </Container>
  );
}

export default MyPlans;