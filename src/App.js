import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';

import { Header } from './components';
import { Home, FullPost, Registration, AddPost, Login } from './pages';
import React from 'react';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';

function App() {
   const dispatch = useDispatch();
   const isAuth = useSelector(selectIsAuth);

   React.useEffect(() => {
      dispatch(fetchAuthMe());
   }, []);

   // Выберите данные из Redux store с помощью useSelector
   const patientData = useSelector((state) => {
      if (state.auth && state.auth.data) {
         return state.auth.data.patient;
      }
      return null;
   });

   const patient = useSelector((state) => {
      if (state.auth && state.auth.data) {
         return state.auth.data;
      }
      return null;
   });

   // Теперь у вас есть доступ к полю data.patient из промиса в Redux store
   console.log(patient, 10101001010);

   return (
      <>
         <Header />
         <Container maxWidth="lg">
            <Routes>
               <Route
                  path="/"
                  element={
                     patient ? (
                        <Home isPatient={patientData} patient={patient} />
                     ) : (
                        <Navigate to="/login" replace />
                     )
                  }
               />
               <Route path="/posts/:id" element={<FullPost />} />
               <Route path="/posts/:id/edit" element={<AddPost />} />
               <Route path="/add-post" element={<AddPost />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Registration />} />
            </Routes>
         </Container>
      </>
   );
}

export default App;
