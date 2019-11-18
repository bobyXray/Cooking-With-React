import React from 'react'
import Author from './Author'

export default function AuthorList({ authors }) {
    const authorElement = authors.map(author => {
        return <Author key={author.id} {...author} />
    })
    return (
        <div className="author-grid">
            {authorElement}
        </div>
    )
}
