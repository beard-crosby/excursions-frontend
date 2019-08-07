import React, { useEffect } from 'react'
import Spinner from '../components/UI/Spinner/Spinner'

const Dashboard = ({ state, dispatch }) => {

    useEffect(() => {
        // we send our requests here via 'dispatch'
    }, [])

    return (
        !"state.loading" ? <Spinner /> : <h1>Dashboard</h1>
    )
}

export default Dashboard
