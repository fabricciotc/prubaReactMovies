import React from 'react'
import {Link} from 'react-router-dom'

export const Notfound = ()=>(
    <div>
<h1 className="title">404!</h1>
<h2 className="subtitle">Pagina no existe</h2>
<Link 
            className="button is-info"
            to="/"
            >
            Volver a la Portada
            </Link>
    </div>
)
