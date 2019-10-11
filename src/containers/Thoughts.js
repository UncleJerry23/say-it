import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Header } from '../styles/header';
import { selectThoughts } from '../selectors/thought-selector';
import { getThoughts } from '../actions/thought-actions';
import ThoughtList from '../components/ThoughtList';


class Thoughts extends PureComponent {
  static propTypes = {
    fetchThoughts: PropTypes.func.isRequired,
    thoughts: PropTypes.array,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetchThoughts();
    this.setState({ hours: this.props.match.params.hours });
  }

  componentDidUpdate(prevProps) {
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
    menuOpen: false
  }

  render() {

    return (
      <>
        <Header>
          <section className="burger">
            <Menu isOpen={this.state.menuOpen} onStateChange={ this.closeMenu }>
              <Link to='/' className="menu-item" href="/">SayIt</Link>
              <Link to='/thoughts/24' className="menu-item" href="/burgers">Today</Link>
              <Link to='/thoughts/12' className="menu-item" href="/pizzas">Last 12 Hours</Link>
              <Link to='/thoughts/6' className="menu-item" href="/pizzas">Last 6 Hours</Link>
              <Link to='/thoughts/3' className="menu-item" href="/pizzas">Last 3 Hours</Link>
              <Link to='/thoughts/1' className="menu-item" href="/pizzas">This Hour</Link>
            </Menu>
          </section>
          <div id="sayit">
            <h1>Say It</h1>
          </div>
        </Header>

        <ThoughtList thoughts={this.props.thoughts} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  thoughts: selectThoughts(state)
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
