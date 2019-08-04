import React from 'react'
import Layout from '../../components/Layout'
// import Head from '../../components/Head'

const NotFound = () => {
    return (
        <Layout>
            {/* <Head title="Not Found" /> */}
            <div style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h1 style={{ margin: 0 }}>Page Not Found</h1>
            </div>
        </Layout>
    )
}

export default NotFound
