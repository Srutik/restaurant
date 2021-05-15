import Homepage from './component/pages/Homepage';
import Card from './component/pages/Items';
import Footer from './component/pages/Footer';

import Login from './component/User/Login';
import Register from './component/User/Register';
import Forgot from './component/User/Forgot';
import Reset from './component/User/Reset';

import UserHome from './component/User/User-Home';
import Menu from './component/User/Menu';
import subcategory from './component/User/Subcategory';
import UserSection from './component/User/User-section';

import Admin from './component/Admin/Admin-login';
import AdminReset from './component/Admin/Admin-reset';
import AdminForgot from './component/Admin/Admin-Forgot';

import Manager from './component/Manager/Manager-login';
import Dashboard from './component/Manager/Dashboard';
import ManagerForgot from './component/Manager/Manager-Forgot';
import ManagerReset from './component/Manager/Manager-reset';
import ManagerHome from './component/Manager/ManagerHome';
import ManagersRegister from './component/Manager/register-manager';
import Review from './component/Manager/review';
import Complaints from './component/Manager/Complaints';
import viewCook from './component/Manager/View-cook';
import viewWaiter from './component/Manager/View-waiter';
import AddCategory from './component/Manager/Add-Category';
import AddIngrediants from './component/Manager/Add-Ingrediants'; 
import Waiter from './component/Waiter/Waiter-login';
import WaiterForgot from './component/Waiter/Waiter-forgot';
import WaiterReset from './component/Waiter/Waiter-reset';
import ManagerOrders from './component/Manager/All-order';
import Revenue from './component/Manager/Revenue';

import Cook from './component/Cook/Cook-login';
import CookHome from './component/Cook/Cook-home';
import CookForgot from './component/Cook/Cook-forgot';
import CookReset from './component/Cook/Cook-reset';
import OrderList from './component/Cook/OrderList';
import MenuList from './component/Cook/MenuList';
import DeliverdItem from './component/Cook/Deliverd-Item';
import ProcessOrder from './component/Cook/Process-order';
import RejectOrder from './component/Cook/Cancle-order';
import CookMenu from './component/Cook/MenuList';

import Product from './component/Product';
import Cart from './component/User/Cart';
import Orders from './component/User/Orders';

import MenuData from './component/User/MenuList';


import MenuMenu from './component/User/MenuMenu';

import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/card' component={Card} />
        <Route path='/about' component={Footer} />

        <Route path='/Login' component={Login} />
        <Route path='/sign-up' component={Register} />
        <Route path='/forgot' component={Forgot} />
        <Route path='/reset' component={Reset} />

        <Route path='/admin-login' component={Admin} />
        <Route path='/admin-forgot' component={AdminForgot} />
        <Route path='/admin-reset' component={AdminReset} />

        <Route path='/manager-login' component={Manager} />
        <Route path='/manager-forgot' component={ManagerForgot} />
        <Route path='/manager-reset' component={ManagerReset} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/manager-home' component={ManagerHome} />
        <Route path='/register-manager' component={ManagersRegister} />
        <Route path='/review' component={Review} />
        <Route path='/complaint' component={Complaints} />
        <Route path='/viewCook' component={viewCook} />
        <Route path='/viewWaiter' component={viewWaiter} />
        <Route path='/category' component={AddCategory} />
        <Route path='/add-ingrediant' component={AddIngrediants} />
        <Route path='/all-order' component={ManagerOrders} />
        <Route path='/revenue' component={Revenue} />

        <Route path='/cook-login' component={Cook} />
        <Route path='/cook-forgot' component={CookForgot} />
        <Route path='/cook-reset' component={CookReset} />
        <Route path='/cook-home' component={CookHome} />
        <Route path='/order-list' component={OrderList} />
        <Route path='/deliverd-item' component={DeliverdItem} />
        <Route path='/menu-list' component={MenuList} />
        <Route path='/process-order' component={ProcessOrder} />
        <Route path='/reject-order' component={RejectOrder} />
        <Route path='/menu-cook' component={CookMenu} />

        <Route path='/waiter-login' component={Waiter} />
        <Route path='/waiter-forgot' component={WaiterForgot} />
        <Route path='/waiter-reset' component={WaiterReset} />

        <Route path='/menu' component={Menu} /> 
        <Route path='/subcategory/:_id' component={subcategory} />
        <Route path='/UserHome' component={UserHome} />
        <Route path='/UserSection' component={UserSection} />

        <Route path='/product' component={Product} />
        <Route path='/orders' component={Orders} />
        <Route path='/cart' component={Cart} />
        <Route path='/menudata' component={MenuData} />
        <Route path='/menumenu' component={MenuMenu} />
    
      </Switch>
      </Router>
    </div>
  );
}

export default App;
