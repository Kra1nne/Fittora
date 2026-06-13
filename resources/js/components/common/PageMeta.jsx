import React from 'react'
import { Helmet } from 'react-helmet'

const PageMeta = ({title, description}) => {
  return (
    <Helmet>
        <title>{title} | Fittora</title>
        <meta name="description" content={description} />
    </Helmet>
  )
}

export default PageMeta
