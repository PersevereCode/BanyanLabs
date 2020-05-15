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
                <Route path="/" component={Home} />
                <Route path="/about_us" component={About} />
                <Route path="/mission" component={Mission} />
                <Route path="/partners" component={Partners} />
                <Route path="/services/1" component={Services} />
                <Route path="/services/2" component={Services} />
                <Route path="/services/3" component={Services} />
                <Route path="/services/4" component={Services} />
                <Route path="/team" component={Team} />
                <Route component={NotFoundPage}/>
            </Switch>
            <ContactForm />
        </div>
    </BrowserRouter>
  )
  
  export default AppRouter