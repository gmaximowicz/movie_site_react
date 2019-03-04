import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/components/home';
import Actors from '../pages/containers/actors';
import Movies from '../pages/containers/movies';
import Actor from '../actors/containers/actor';
import Movie from '../movies/containers/movie';
import Header from '../layouts/header';
import Footer from '../layouts/footer';

const container = document.getElementById('main-container');

ReactDom.render(<BrowserRouter>
                  <Fragment>
                    <Header />
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/movies" component={Movies} />
                      <Route exact path="/movies/:id" component={Movie} />
                      <Route exact path="/actors" component={Actors} />
                      <Route exact path="/actors/:id" component={Actor} />
                    </Switch>
                    <Footer />
                  </Fragment>
                </BrowserRouter>
              , container);
