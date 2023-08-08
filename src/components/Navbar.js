import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{ paddingTop: '0rem', paddingBottom: '0rem', border: '3rem' }} >
                <div className="container-fluid" style={{ backgroundColor: props.mode === 'dark' ? '#011414' : '#0e6837', color: props.mode === 'dark' ? 'white' : 'black' }}>
                   <img src="TLogo.png" class="d-inline-block align-text-top" alt="" height= "30px" width="30px"/>

                  <a className="navbar-brand" href="/"  style={{ marginLeft: '10px' ,fontWeight: 'bold', color:'#00ED64'}} > <b>{props.title}</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/" style={{  fontWeight: 'bold' }}> {/* | Home */} </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/" style={{  fontWeight: 'bold' }}>{props.about.color}</a>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>*/}
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{   fontWeight: 'bold' }}> Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string }
Navbar.defaultProps = {
    title: 'Set title here',
    about: 'Set about here'

};