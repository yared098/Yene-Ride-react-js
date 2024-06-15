import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { CircularProgress, Typography } from '@material-ui/core';

const CheckUser = ({ userId }) => {
  const [loading, setLoading] = useState(true);
  const [userExists, setUserExists] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserExists = async () => {
      try {
        const userQuery = query(collection(db, 'Passengers'), where('chatId', '==', '123255dfg'));
        const querySnapshot = await getDocs(userQuery);

        if (!querySnapshot.empty) {
          // User exists
          setUserExists(true);
          navigate('/NearbyDrivers');
        } else {
          // User does not exist
          setUserExists(false);
          navigate('/App1'); // Adjust this route as per your application logic
        }
      } catch (error) {
        console.error('Error checking user existence:', error);
        setUserExists(false);
      } finally {
        setLoading(false);
      }
    };

    checkUserExists();
  }, [userId, navigate]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {userExists === false && <Typography variant="h3">User not found</Typography>}
    </div>
  );
};

export default CheckUser;
