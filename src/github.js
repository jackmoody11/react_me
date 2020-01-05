import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectList from "./components/ProjectList";
import "./index.css";

export default class GitHub extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/jackmoody11`)
      .then(response => response.json())
      .then(user => {
        this.setState({
          user: user
        });
      });
  }

  renderStat(stat) {
    return (
      <div className="col-md-3">
        <a href={stat.url} target="_blank" rel="noreferrer noopener">
          <button key={stat.name} type="button" className="btn btn-primary">
            {stat.name} <span className="badge badge-light">{stat.value}</span>
          </button>
        </a>
      </div>
    );
  }

  render() {
    if (!this.state.user) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    // If we get to this part of `render`, then the user is loaded
    const user = this.state.user;

    // Gather up some number stats about the user, to be used in a map below
    const stats = [
      {
        name: "Public Repos",
        value: user.public_repos,
        url: "https://github.com/jackmoody11?tab=repositories"
      },
      {
        name: "Followers",
        value: user.followers,
        url: `https://github.com/jackmoody11?tab=followers`
      },
      {
        name: "Following",
        value: user.following,
        url: `https://github.com/jackmoody11?tab=following`
      }
    ];

    return (
      <div className="container align-items-center">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={user.avatar_url}
                    alt={`${user.login} avatar`}
                    className="card-img-top"
                    id="avatar-img"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <FontAwesomeIcon icon={["far", "github"]} />
                    <h2 className="card-title">
                      {user.name} ({user.login})
                    </h2>
                    <p className="card-text">{user.bio}</p>
                  </div>
                  <div className="container">
                    <div className="row">{stats.map(this.renderStat)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="mt-5 text-center">My Projects</h1>
        <ProjectList></ProjectList>
      </div>
    );
  }
}
