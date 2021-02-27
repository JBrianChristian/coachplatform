import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    footer: {
        background: 'linear-gradient(45deg, #313896 20%, #9F32B2 70%, #00D7FF 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        position: 'absolute',
        left:0,
        bottom:0,
        right:0,
    },
    copy: {
        textAlign: 'center'
    }
}));

export { useStyles };