import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Logo from './Logo';
import TodoList from './api/TodoList';

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
                            <Link to="/todo">
                                <Button variant="dark" style={{margin: "10px"}}>Todo List</Button>
                            </Link>
                        </Row>
                        <hr />
                        <Row>
                            <Switch>
                                <Route exact path="/" component={Logo} />
                                <Route exact path="/todo" component={TodoList} />
                                {/* <Route path="/films/:id" component={FilmByID} /> */}
                            </Switch>
                        </Row>
                    </>
                </Router>
            </Container>
        );
    }
}

export default App;