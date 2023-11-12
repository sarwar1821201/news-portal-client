import React, { useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = () => {
    const {user} = useState(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;