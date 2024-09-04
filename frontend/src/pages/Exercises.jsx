import React, {useState, useEffect, useContext} from 'react';
import { Link,useNavigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from '../configs/axios';

export function Exercises() {
  const { authState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [exercises, setExercises] = useState([]);
  

  useEffect(()=>{
    const getExercises = async () => {
      const response = await axios.get('/exercises').data;

      setExercises(response);
      console.log(response);
    }


  },[authState.user.accessToken])
  return (
    <div>Exercises</div>
  )
}
