import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import '../styles/LoggedIn.css'

function LoggedIn() {
    return (
        <div className="LoggedIn">
            <h4>You have been loged in </h4>
               <dvi className='logoutButton'>

                 <Link to="/">
               <Button circular
                color="black"
                className="btn"
                size="huge"
               >Log Out</Button>
                </Link>
               </dvi>
            <div className="errorTemplate">
                <h2>Error!</h2>
                <h2>This page is currently under maintenance<br/>
                please come back some other time.
                </h2>
            </div>
        </div>
    )
}

export default LoggedIn
