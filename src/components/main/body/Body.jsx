import React from 'react';

const Body = () => (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter has-background-primary">
            <div className="container">
              <div className="level">
                Players
              </div>
              <div className="conatiner">
                <div className="level">
                  <div className="level-item">
                    P1
                  </div>
                </div>
                <div className="level">
                  <div className="level-item">
                    P2
                  </div>
                </div>
                <div className="level">
                  <div className="level-item">
                    P3
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
            <div className="level">
              Games
            </div>
            <div className="conatiner">
              <div className="level">
                <div className="level-item">
                  Game 1
                </div>
              </div>
              <div className="level">
                <div className="level-item">
                  Game 2
                </div>
              </div>
              <div className="level">
                <div className="level-item">
                  Game 3
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="column is-three-quarters has-background-danger">
            <div className="container has-background-primary">
              <div className="container">
                <div className="level">
                  <div className="level-left">
                    <div className="level-item has-background-primary">
                      Chat message 1
                    </div>
                  </div>
                </div>
                <div className="level">
                  <div className="level-left">
                  </div>
                  <div className="level-right has-background-danger">
                    <div className="level-item">
                      Action message 1
                    </div>
                  </div>
                </div>
                <div className="level">
                  <div className="level-left has-background-primary">
                    <div className="level-item">
                      Chat message 2
                    </div>
                  </div>
                </div>
                <div className="level">
                  <div className="level-left">
                  </div>
                  <div className="level-right has-background-danger">
                    <div className="level-item">
                      Action message 2
                    </div>
                  </div>
                </div>
              </div>
              <div className="container has-background-accent">
                <div className="level">
                  <div className="level-item">
                    <input type="text"/>
                  </div>
                  <div className="level-right has-background-primary">
                    <input type="submit"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Body;
