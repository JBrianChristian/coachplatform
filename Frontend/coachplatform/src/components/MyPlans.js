import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './MyPlansStyles.js'
import Paper from '@material-ui/core/Paper'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { StaticPlanData, DynamicPlanData, InteractivePlanData, GroupPlanData } from './MyPlanData'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"

const MyPlans = (props) => {
    const classes = useStyles();

  return (
    <Container className = { classes.container } maxWidth="l">

    <div>
    <Typography variant="h4" className={classes.text}>My Plans</Typography>

             <Paper elevation = {10} className={classes.paper}>
                <Typography variant="h6" className={classes.text}>Static Plans</Typography>
             </Paper> 

             <Paper elevation = {10} className={classes.paper}> {/*pulling in the plans here */}
                <GridList cellHeight={200} className={classes.gridList} cols={5}>
                    {StaticPlanData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} className={classes.image} />
                        <GridListTileBar
                             title={tile.title}
                             classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                        
                    </GridListTile>
                 ))}

                    
                    <GridListTile key={'https://aforthepeople.com/wp-content/uploads/2011/07/NEW.gif'}> {/*button to create new plan, all New Plan should be the same page and just pass the type of plan */}
                        <Link to='/NewPlan'>
                            <img src={'https://aforthepeople.com/wp-content/uploads/2011/07/NEW.gif'} alt={'new'} className={classes.image} />
                        <GridListTileBar
                             title="Create New Plan"
                             classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                        </Link>
                    </GridListTile>
                
                </GridList>
            </Paper>
      
            <Paper elevation = {10} className={classes.paper}>
                <Typography variant="h6" className={classes.text}>Dynamic Plans</Typography>
             </Paper>

             <Paper elevation = {10} className={classes.paper}>
                <GridList cellHeight={200} className={classes.gridList} cols={5}>
                    {DynamicPlanData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} className={classes.image} />
                        <GridListTileBar
                             title={tile.title}
                             classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                 ))}

                    <GridListTile key={'https://aforthepeople.com/wp-content/uploads/2011/07/NEW.gif'}> {/*button to create new plan, all New Plan should be the same page and just pass the type of plan */}
                        <Link to='/NewPlan'>
                            <img src={'https://aforthepeople.com/wp-content/uploads/2011/07/NEW.gif'} alt={'new'} className={classes.image} />
                        <GridListTileBar
                             title="Create New Plan"
                             classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                        </Link>
                    </GridListTile>

                </GridList>
            </Paper>

             <Paper elevation = {10} className={classes.paper}>
                <Typography variant="h6" className={classes.text}>Interactive Plans</Typography>
             </Paper>

             <Paper elevation = {10} className={classes.paper}>
                <GridList cellHeight={200} className={classes.gridList} cols={5}>
                    {InteractivePlanData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} className={classes.image} />
                        <GridListTileBar
                             title={tile.title}
                             classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                 ))}

                    <GridListTile key={'https://aforthepeople.com/wp-content/uploads/2011/07/NEW.gif'}> {/*button to create new plan, all New Plan should be the same page and just pass the type of plan */}
                        <Link to='/NewPlan'>
                            <img src={'https://aforthepeople.com/wp-content/uploads/2011/07/NEW.gif'} alt={'new'} className={classes.image} />
                        <GridListTileBar
                             title="Create New Plan"
                             classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                        </Link>
                    </GridListTile>

                </GridList>
            </Paper>
            
             <Paper elevation = {10} className={classes.paper}>
                <Typography variant="h6" className={classes.text}>Group Plans</Typography>
             </Paper>

             <Paper elevation = {10} className={classes.paper}>
                <GridList cellHeight={200} className={classes.gridList} cols={5}>
                    {GroupPlanData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} className={classes.image} />
                        <GridListTileBar
                             title={tile.title}
                             classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                 ))}

                    <GridListTile key={'https://aforthepeople.com/wp-content/uploads/2011/07/NEW.gif'}> {/*button to create new plan, all New Plan should be the same page and just pass the type of plan */}
                        <Link to='/NewPlan'>
                            <img src={'https://aforthepeople.com/wp-content/uploads/2011/07/NEW.gif'} alt={'new'} className={classes.image} />
                        <GridListTileBar
                             title="Create New Plan"
                             classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                        </Link>
                    </GridListTile>

                </GridList>
            </Paper>

    </div>
    </Container>
  );
}

export default MyPlans;