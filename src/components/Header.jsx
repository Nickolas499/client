import React from 'react'

export const Header = (props) => {
  return (
    <header>
        <div className="date"></div>
        <div className="title"><h1>{props.title}</h1></div>
        <div className="dropbox">
            Ezequiel Almonte
        </div>
    </header>
  )
}
