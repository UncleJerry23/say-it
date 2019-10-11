import React, { PureComponent } from 'react';
import { SplashFrom } from '../styles/splash-form';
import { Splash } from '../styles/splash';
import { Burger } from '../styles/burger';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

export class SplashPage extends PureComponent {
  static propTypes = {
  };

  state = {
    thought: ''
  };

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();
    }

    render() {

      return (
        <Splash>
          <Burger>
            <button>
              <p></p>
              <p></p>
              <p></p>
            </button>
            <div>
              <h1>Say It</h1>
            </div>
          </Burger>
          <SplashFrom>
            <div>
              <input type="textarea" name="thought" onChange={this.handleChange}/>
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

// const mapDispatchToProps = (dispatch) => ({
//   fetch() {
//     dispatch();
//   }
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(className);
