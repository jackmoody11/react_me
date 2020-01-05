import React, { Component } from "react";
import Project from "./Project";

export default class ProjectList extends Component {
  constructor() {
    super();
    this.projects = [
      {
        name: "Stock Score",
        description:
          "A Python project to fetch stock financials/statistics and perform preliminary screens to aid in the stock selection process.",
        tags: ["Python", "Finance", "Pandas"],
        url: "https://github.com/jackmoody11/stockscore"
      },
      {
        name: "SEC Edgar",
        description:
          "Download all companies periodic reports, filings and forms from EDGAR database.",
        tags: ["Python", "Finance", "Scraping", "BeautifulSoup"],
        url: "https://github.com/jackmoody11/sec-edgar"
      },
      {
        name: "Game of Life",
        description: "Conway's Game of Life implemented in Java.",
        tags: ["Java", "Cellular Automation", "Multithreading", "Swing"],
        url: "https://github.com/jackmoody11/game-of-life"
      }
    ];
  }
  renderProject(project) {
    const badges = project.tags.map(tag => (
      <span class="badge badge-light mr-1">{tag}</span>
    ));
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            {badges}
            <p className="card-text">{project.description}</p>
            <a href={project.url} className="btn btn-primary">
              Repository
            </a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="row mt-5">{this.projects.map(this.renderProject)}</div>
    );
  }
}
