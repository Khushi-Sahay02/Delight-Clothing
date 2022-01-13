import React from 'react';
import './App.css';

import Header from '././components/Header/header';
import Homepage from '././pages/homepage/homepage.jsx';
import ShopPage from '././pages/shoppage/shopPage.jsx';
import CheckoutPage from './pages/checkout/checkout.jsx';
import SignInSignUp from './pages/signIn_and_signUp/signIn_and_signUp.jsx';

import {Routes, Route,Navigate, useParams} from 'react-router-dom';
import {auth,createUserProfile,onSnapshot} from '../src/firebase/firebase-utils';
import { setUser } from './redux/user/userReducerActions.js';
import {connect} from 'react-redux';
import {selectCurrentUser} from '../src/redux/user/userSelect';


class App extends React.Component {
  
  unauth=null;
  componentDidMount(){
    const {setUser}=this.props;
    this.unauth=auth.onAuthStateChanged( async user=>{
      if(user){
        const userRef=await createUserProfile(user);
        userRef.onSnapshot(snapshot=>{
          setUser({
              id:snapshot.id,
              ...snapshot.data()
            })
        },()=>{console.log(this.state)});
      }
      setUser(user);
    });
  }
  componentWillUnmount(){
    this.unauth();
  }
  render(){
    return (
      <div>
          <Header/>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='shop/*' element={<ShopPage />} />
            <Route exact path='signin' element={this.props.currentUser?<Navigate to='/'/>:<SignInSignUp/>}/>
            <Route exact path='checkout' element={<CheckoutPage />} />
          </Routes>
  
      </div>
    );
  };
}
const mapStatetoProps=state=>({
  currentUser:selectCurrentUser(state)
});
const mapDispatchToProps=dispatch=>({
  setUser:user=>dispatch(setUser(user))
});

export default connect(mapStatetoProps,mapDispatchToProps)(App);
