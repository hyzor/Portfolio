import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/styles';
import { hot } from 'react-hot-loader';
import * as emailjs from 'emailjs-com';
import { Trail } from 'react-spring/renderprops';

const styles = theme => ({
  white: {
    color: '#fff',
  },
  textField: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: '21cm',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  actions: {
    marginTop: 24,
    display: 'flex',
    alignItems: 'center',
  },
  rightIcon: {
    marginLeft: theme.spacing(),
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -13,
    marginLeft: -16,
  },
  wrapper: {
    position: 'relative',
  },
});

class Contact extends React.Component {
  constructor(props) {
    super(props);

    emailjs.init('user_tIqLzLo7yif17N99xgsT5');
  }

  static initialState = {
    name: '',
    email: '',
    message: '',
    sendingMsg: false,
  };

  state = Contact.initialState;

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClick = () => {
    this.setState({ sendingMsg: true });

    emailjs.send('gmail', 'template_BPrxTrft', this.state).then(
      () => {
        this.setState(Contact.initialState);
      },
      () => {
        this.setState({ sendingMsg: false });
      }
    );
  };

  render() {
    const { classes } = this.props;
    const { name, email, message, sendingMsg } = this.state;

    return (
      <React.Fragment>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Trail
            items={['Con', 'tact']}
            from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
            delay={500}
          >
            {item => props => (
              <Typography
                className={classes.white}
                align="center"
                color="inherit"
                style={props}
                variant="h2"
                gutterBottom
              >
                {item}
              </Typography>
            )}
          </Trail>
        </div>
        <Paper elevation={16} className={classes.paper}>
          <div className={classes.center} style={{ width: '80%' }}>
            <div className={classes.columnFlex}>
              <TextField
                id="input-name"
                label="Name"
                className={classes.textField}
                value={name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
              <TextField
                id="input-email"
                label="Email"
                className={classes.textField}
                value={email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
              <TextField
                id="input-message"
                label="Message"
                className={classes.textField}
                value={message}
                onChange={this.handleChange('message')}
                margin="normal"
                multiline
                rows="6"
              />
            </div>
            <div className={classes.actions}>
              <div className={classes.wrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleClick}
                  disabled={sendingMsg}
                >
                  Send
                  <Icon className={classes.rightIcon}>send</Icon>
                </Button>
                {sendingMsg && <CircularProgress size={32} className={classes.progress} />}
              </div>
            </div>
          </div>
        </Paper>
      </React.Fragment>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(withStyles(styles, { withTheme: true })(Contact));