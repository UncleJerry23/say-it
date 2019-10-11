import React, { PureComponent } from 'react';
import { SplashFrom } from '../styles/splash-form';
import { Splash } from '../styles/splash';
import { Header } from '../styles/header';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getThoughts } from '../actions/thought-actions';

class SplashPage extends PureComponent {
  static propTypes = {
    fetchThoughts: PropTypes.func.isRequired
  };

  state = {
    thought: ''
  };

  componentDidMount() {
    this.props.fetchThoughts();
  }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();
    }

    render() {

      return (
        <Splash>
          <Header>
            <section className="burger">
              <Menu>
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

          <SplashFrom>
            <div>
              <textarea name="thought" onChange={this.handleChange} placeholder="Some texty texty"/>
            </div>
            <div>
              <section>
                <button onClick={this.handleSubmit}>Express yoSelf</button>
              </section>
            </div>
          </SplashFrom>
        </Splash>
      );
    }
}


// const mapStateToProps = state => ({
// });

const mapDispatchToProps = (dispatch) => ({
  fetchThoughts() {
    dispatch(getThoughts());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SplashPage);
