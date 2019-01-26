import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import projectsData from 'data/projects.json';
import aboutData from 'data/about.json';
import Projects from 'components/Projects';
import Resume from 'components/Resume';
import { hot } from 'react-hot-loader';
import Publications from 'components/Publications';
import publicationsData from 'data/publications.json';
import Contact from 'components/Contact';
import { Facebook, Linkedin, Twitter, Instagram, GithubBox } from 'mdi-material-ui';
import IconButton from '@material-ui/core/IconButton';
import { Trail, Transition, animated } from 'react-spring';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { Link, Element, animateScroll as scroll, scrollSpy } from 'react-scroll';

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  white: {
    color: '#fff',
  },
  avatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    width: 256,
    height: 256,
  },
  centerFlex: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  layout: {
    paddingTop: 120,
    paddingBottom: 120,
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    backgroundColor: theme.palette.secondary.main,
    height: 200,
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowFlex: {
    display: 'flex',
    flexDirection: 'row',
  },
});

class HomePage extends React.Component {
  state = {
    activeScroll: 'home',
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  componentDidMount() {
    scrollSpy.update();
  }

  handleSetActive = to => {
    this.setState({
      activeScroll: to,
    });
  };

  handleSetInactive = to => {
    const { activeScroll } = this.state;

    if (activeScroll === to) {
      this.setState({
        activeScroll: null,
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { activeScroll } = this.state;
    const linkOffset = 80;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar color="secondary">
          <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <Button onClick={this.scrollToTop} color="inherit">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Button>
            </div>
            <Link
              style={{ display: 'flex' }}
              activeClass="active"
              to="projects"
              spy
              smooth
              offset={linkOffset}
              duration={500}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              <Button
                variant={activeScroll === 'projects' ? 'contained' : 'text'}
                color={activeScroll === 'projects' ? 'primary' : 'inherit'}
              >
                Projects
              </Button>
            </Link>
            <Link
              style={{ display: 'flex' }}
              activeClass="active"
              to="resume"
              spy
              smooth
              offset={linkOffset - 100}
              duration={500}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              <Button
                variant={activeScroll === 'resume' ? 'contained' : 'text'}
                color={activeScroll === 'resume' ? 'primary' : 'inherit'}
              >
                Résumé
              </Button>
            </Link>
            <Link
              style={{ display: 'flex' }}
              activeClass="active"
              to="about"
              spy
              smooth
              offset={linkOffset - 200}
              duration={500}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              <Button
                variant={activeScroll === 'about' ? 'contained' : 'text'}
                color={activeScroll === 'about' ? 'primary' : 'inherit'}
              >
                About
              </Button>
            </Link>
            <Link
              style={{ display: 'flex' }}
              activeClass="active"
              to="publications"
              spy
              smooth
              offset={linkOffset - 200}
              duration={500}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              <Button
                variant={activeScroll === 'publications' ? 'contained' : 'text'}
                color={activeScroll === 'publications' ? 'primary' : 'inherit'}
              >
                Publications
              </Button>
            </Link>
            <Link
              style={{ display: 'flex' }}
              activeClass="active"
              to="contact"
              spy
              smooth
              offset={linkOffset - 450}
              duration={500}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              <Button
                variant={activeScroll === 'contact' ? 'contained' : 'text'}
                color={activeScroll === 'contact' ? 'primary' : 'inherit'}
              >
                Contact
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <main>
          <ParallaxBanner
            layers={[
              {
                image: 'images/bg.jpg',
                amount: 0.1,
                slowerScrollRate: false,
              },
            ]}
            style={{ height: 'fit-content' }}
          >
            <Parallax offsetYMax={80} offsetYMin={0} slowerScrollRate>
              <Avatar src="images/ProfilePic.png" className={classes.avatar} />
            </Parallax>
            <div className={classes.white} style={{ marginTop: 32, marginBottom: 128 }}>
              <Parallax offsetYMax={160} offsetYMin={0}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Trail
                    items={['Jes', 'per ', 'Han', 'sson ', 'Fal', 'ken', 'by']}
                    from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                    to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                    delay={500}
                  >
                    {item => props => (
                      <Typography align="center" color="inherit" style={props} variant="h1">
                        {item}
                      </Typography>
                    )}
                  </Trail>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Trail
                    items={['Sys', 'tems ', 'dev', 'elo', 'per']}
                    from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                    to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                    delay={1250}
                  >
                    {item => props => (
                      <Typography align="center" color="inherit" style={props} variant="h4">
                        {item}
                      </Typography>
                    )}
                  </Trail>
                </div>
              </Parallax>
            </div>
            <Element name="projects">
              <div className={classes.layout}>
                <Projects data={projectsData} />
              </div>
            </Element>
          </ParallaxBanner>
          <ParallaxBanner
            layers={[
              {
                image: 'images/bg.jpg',
                amount: 0.1,
                slowerScrollRate: false,
              },
            ]}
            style={{ height: 'fit-content' }}
          >
            <Element name="resume">
              <div className={classes.layout}>
                <Resume />
              </div>
            </Element>
            <Element name="about">
              <div className={classes.layout}>
                <Trail
                  items={['About']}
                  from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                  to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                  delay={1000}
                >
                  {item => props => (
                    <Typography
                      className={classes.white}
                      style={props}
                      align="center"
                      variant="h2"
                      gutterBottom
                    >
                      {item}
                    </Typography>
                  )}
                </Trail>
                <Trail
                  items={aboutData.data.about}
                  from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                  to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                  delay={1500}
                >
                  {item => props => (
                    <Typography
                      className={classes.white}
                      style={{ ...props, marginTop: 10 }}
                      variant="subtitle1"
                    >
                      {item}
                    </Typography>
                  )}
                </Trail>
              </div>
            </Element>
          </ParallaxBanner>
          <ParallaxBanner
            layers={[
              {
                image: 'images/bg.jpg',
                amount: 0.1,
                slowerScrollRate: false,
              },
            ]}
            style={{ height: 'fit-content' }}
          >
            <Element name="publications">
              <div className={classes.layout}>
                <Transition
                  items={<Publications data={publicationsData.data} />}
                  from={{ opacity: 0, transform: 'translate3d(0,0px,0)' }}
                  enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                  leave={{ opacity: 0, transform: 'translate3d(0,0px,0)' }}
                  delay={1000}
                >
                  {item => props => <animated.div style={props}>{item}</animated.div>}
                </Transition>
              </div>
            </Element>
            <Element name="contact">
              <div className={classes.layout}>
                <Transition
                  items={<Contact />}
                  from={{ opacity: 0, transform: 'translate3d(0,0px,0)' }}
                  enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                  leave={{ opacity: 0, transform: 'translate3d(0,0px,0)' }}
                  delay={1000}
                >
                  {item => props => <animated.div style={props}>{item}</animated.div>}
                </Transition>
              </div>
            </Element>
            <div className={classes.columnFlex}>
              <div
                className={classes.rowFlex}
                style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 100 }}
              >
                <IconButton
                  href="https://www.facebook.com/jesper.hansson.f"
                  className={classes.white}
                  aria-label="Facebook"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/jesperhf92/"
                  className={classes.white}
                  aria-label="Linkedin"
                >
                  <Linkedin />
                </IconButton>
                <IconButton
                  href="https://twitter.com/JesperFalkenby"
                  className={classes.white}
                  aria-label="Twitter"
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/jesperfalkenby/"
                  className={classes.white}
                  aria-label="Instagram"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  href="https://github.com/hyzor"
                  className={classes.white}
                  aria-label="GitHub"
                >
                  <GithubBox />
                </IconButton>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Trail
                  items={['Copyright ', '© ', 'Jesper ', 'Hansson ', 'Falkenby ', '2019']}
                  from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                  to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                  delay={1000}
                >
                  {item => props => (
                    <Typography
                      style={props}
                      className={classes.white}
                      variant="subtitle1"
                      align="center"
                      gutterBottom
                    >
                      {item}
                    </Typography>
                  )}
                </Trail>
              </div>
            </div>
          </ParallaxBanner>
        </main>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(withStyles(styles)(HomePage));
