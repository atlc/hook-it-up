import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Logo from './Logo';
import Films from './api/Films';
import FilmByID from './api/FilmByID';

class App extends Component {
    render() {
        return (
            <Container className="text-center">
                <Router>
                    <>
                        <Row>
                            <Link to="/">
                                <Button variant="dark" style={{margin: "10px"}}>Home</Button>
                            </Link>
                            <Link to="/films">
                                <Button variant="dark" style={{margin: "10px"}}>Films</Button>
                            </Link>
                        </Row>
                        <Row>
                            <Switch>
                                <Route exact path="/" component={Logo} />
                                <Route exact path="/films" component={Films} />
                                <Route path="/films/:id" component={FilmByID} />
                            </Switch>
                        </Row>
                    </>
                </Router>
            </Container>
        );
    }
}

export default App;