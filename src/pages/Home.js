import React, { useEffect } from "react"
import Spinner from '../components/UI/Spinner/Spinner'

const Home = ({ state, dispatch }) => {

    useEffect(() => {
        // we send our requests here via 'dispatch'
    }, [])

    return (
        !"state.loading" ? <Spinner /> : <p>{"state.userName"}</p>
    )
}

export default Home