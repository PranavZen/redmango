import React from 'react'
import {  useLocation } from 'react-router-dom';
import LoggedLandingD from '../components/LoggedLanding/LoggedLandingD';
function LoggedDetailsPage({match}) {
    // const {id} = useParams();
    const location = useLocation();
    // console.log(id);
    // console.log(location);
  return (
    <div className="loggedDetailsPages" id="loggedDetailsPages">
       
        {
            location.pathname === `/logged/Rings` ? <LoggedLandingD/> : null
        }
        {
            location.pathname === `/logged/Chain` ? <LoggedLandingD/> : null
        }
        {
            location.pathname === `/logged/Earings` ? <LoggedLandingD/> : null
        }
        {
            location.pathname === `/logged/Braclets` ? <LoggedLandingD/> : null
        }
        {
            location.pathname === `/logged/Pendent` ? <LoggedLandingD/> : null
        }
    </div>
  )
}

export default LoggedDetailsPage;