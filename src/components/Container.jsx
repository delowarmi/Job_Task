import React from 'react'

const Container = ({className,children}) => {
        return (
            <div className={ ` w-[1200px] mx-auto max-w${className}`}>{children}</div>
        )
      }

export default Container
