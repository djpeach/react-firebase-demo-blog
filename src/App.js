import React                                      from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import routes                                     from './config/routes'
import Home                                       from './components/blog/Home'
import Login                                      from './components/auth/Login'
import Registration                               from './components/auth/Registration'
import PostForm                                   from './components/blog/PostForm'
import PostDetail                                 from './components/blog/PostDetail'

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path={ routes.root } render={ () => <Redirect to={ routes.home }/> }/>
            <Route exact path={ routes.home } component={ Home }/>
            <Route exact path={ routes.login } component={ Login }/>
            <Route exact path={ routes.register } component={ Registration }/>
            <Route exact path={ routes.postForm } component={ PostForm }/>
            <Route exact path={ routes.postDetail + ':id' } component={ PostDetail }/>
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App