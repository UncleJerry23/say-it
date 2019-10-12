import React, { PureComponent } from 'react';
import { SplashFrom } from '../styles/splash-form';
import { Splash } from '../styles/splash';
import { HeaderStyle } from '../styles/header';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createThought } from '../actions/thought-actions';

class SplashPage extends PureComponent {
  static propTypes = {
    fetchThoughts: PropTypes.func.isRequired,
    sendThought: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    message: ''
  };

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();
      this.props.sendThought(this.state.message);
      this.props.history.push('/thoughts/24');
    }

    render() {

      return (
        <Splash>
          <HeaderStyle>
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
            <div className="headerText">
              <Link to="/"><h1>Say It</h1></Link>
            </div>
          </HeaderStyle>

          <SplashFrom>
            <div>
              <textarea name="message" onChange={this.handleChange} placeholder="Some texty texty"/>
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

const mapDispatchToProps = (dispatch) => ({
  sendThought(message) {
    dispatch(createThought(message));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SplashPage);
