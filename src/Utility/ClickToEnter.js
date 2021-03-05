import React from 'react'

export default function ClickToEnter() {
    Input = () => {
        const handleKeyDown = (event) => {
          if (event.keyCode === 13) {
            console.log('do validate')
          }
        }
      
        return <input type="text" onKeyDown={handleKeyDown} />
    }
}
