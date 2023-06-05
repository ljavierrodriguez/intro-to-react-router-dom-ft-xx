import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Users = () => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();


    console.log(location);
    console.log(params);

    useEffect(() => {
    }, [])


    return (
        <div>
            <h3>Users</h3>

            <button className="btn btn-info" onClick={() => navigate('/')}>
                Home 
            </button>

            <button className="btn btn-warning" onClick={() => navigate(-1)}>
                Regresar
            </button>
        </div>
    )
}

export default Users