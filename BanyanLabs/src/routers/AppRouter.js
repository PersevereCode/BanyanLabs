import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage'
import Home from '../pages/Home/Home'
import HeaderNav from '../components/HeaderNav'
import About from '../pages/About/About'
import Team from "../pages/Team/Team"
import Mission from "../pages/Mission/Mission"
import Partners from "../pages/Partners/Partners"
import ContactForm from '../components/Form'
import Services from "../pages/Services/Services";



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <HeaderNav />
            {/* //Header Spacer because the HeaderNav is "fixed"  */}
            {/* <div className="mb-5"></div> */}
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/about_us" component={About} exact={true}/>
                <Route path="/mission" component={Mission} exact={true}/>
                <Route path="/partners" component={Partners} exact={true}/>
                <Route path="/services/1" component={Services} exact={true}/>
                <Route path="/services/2" component={Services} exact={true}/>
                <Route path="/services/3" component={Services} exact={true}/>
                <Route path="/services/4" component={Services} exact={true}/>
                <Route path="/team" component={Team} />
                <Route component={NotFoundPage}/>
            </Switch>
            <ContactForm />
        </div>
    </BrowserRouter>
  )
  
  export default AppRouter