import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { HeaderStyle } from '../styles/header';
import { selectThoughts, selectNewThoughts } from '../selectors/thought-selector';
import { getThoughts } from '../actions/thought-actions';
import ThoughtList from '../components/ThoughtList';
import { timeFilter } from '../utils/timeFilter';


class Thoughts extends PureComponent {
  static propTypes = {
    fetchThoughts: PropTypes.func.isRequired,
    thoughts: PropTypes.array,
    newThought: PropTypes.object,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetchThoughts();
    this.setState({ hours: this.props.match.params.hours });
  }

  componentDidUpdate(prevProps) {
    if(this.props.newThought && !this.state.hasNewThought) {
      this.setState({ hasNewThought: true });
      this.props.fetchThoughts();
    }
    if(prevProps.match.params.hours != this.props.match.params.hours) {
      this.setState({ 
        hours: this.props.match.params.hours,
        menuOpen: false
      });
    }
  }

  closeMenu = ({ isOpen }) => {
    this.setState({ 
      hours: this.props.match.params.hours,
      menuOpen: isOpen
    });
  }

  state = {
    hours: null,
    menuOpen: false,
    hasNewThought: false
  }

  render() {
    const { menuOpen, hours } = this.state;
    const { thoughts } = this.props;
    const displayThoughts = timeFilter(hours, thoughts);
    return (
      <>
        <HeaderStyle>
          <section className="burger">
            <Menu isOpen={menuOpen} onStateChange={ this.closeMenu }>
              <Link to='/' className="menu-item" href="/">SayIt</Link>
              <Link to='/thoughts/24' className="menu-item" href="/burgers">Today</Link>
              <Link to='/thoughts/12' className="menu-item" href="/pizzas">Last 12 Hours</Link>
              <Link to='/thoughts/6' className="menu-item" href="/pizzas">Last 6 Hours</Link>
              <Link to='/thoughts/3' className="menu-item" href="/pizzas">Last 3 Hours</Link>
              <Link to='/thoughts/1' className="menu-item" href="/pizzas">This Hour</Link>
            </Menu>
          </section>
          <div className="headerText">
            <Link to="/"><h1>Say It</h1></Link>
          </div>
          <div className="headerText">
            <h2>{hours} Hours</h2>
          </div>
        </HeaderStyle>

        <ThoughtList thoughts={displayThoughts} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  thoughts: selectThoughts(state),
  newThought: selectNewThoughts(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchThoughts() {
    dispatch(getThoughts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Thoughts);
