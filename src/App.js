import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="jumbotron">
              <h1 className="display-4">Jack Moody's Website</h1>
              <p className="lead">
                Welcome to my website! Here you will find some of my work and
                thoughts.
              </p>
              <hr className="my-4" />
              <div className="row">
                <div className="col-md-4">
                  <a
                    className="btn btn-primary btn-lg"
                    href="/github"
                    role="button"
                  >
                    GitHub Stats
                  </a>
                </div>
                <div className="col-md-4">
                  <a
                    className="btn btn-primary btn-lg"
                    href="/blog"
                    role="button"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
