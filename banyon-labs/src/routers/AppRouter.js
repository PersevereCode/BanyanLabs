import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'
import HeaderNav from '../components/HeaderNav'
import About from '../pages/About/About'

const AppRouter = () => (
    <BrowserRouter>
          <div>
              <HeaderNav />
              <Switch>
                  <Route path="/" component={Home} exact={true} />
                  <Route path="/about_us" component={About} />
                  <Route path="/contact_us" component={Contact} />
                  <Route component={NotFoundPage}/>
              </Switch>
          </div>
      </BrowserRouter>
  )
  
  export default AppRouter