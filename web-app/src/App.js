import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getPosts,getcontactList } from './actions/product';




import Header from './components/Header.js'

const App = () => {
   const [currentId, setCurrentId] = useState(null);
   const [contact, setContacts] = useState(null);
   const dispatch = useDispatch();

  
   useEffect(() => {
      dispatch(getPosts());
  }, [currentId, dispatch]);

   useEffect(() => {
      dispatch(getcontactList());
  }, [contact, dispatch]);
  console.log("product List Images##",setCurrentId)

   return (
     <div>
      <Header setCurrentId = {setCurrentId}  setContacts= {setContacts}/>
     </div>
   )
}

export default App;