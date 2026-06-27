import React from 'react'
import NotesCards from './NotesCards'

const Section2 = (props) => {
    console.log(props);
  return (
    <div className='h-full w-full flex-wrap flex bg-amber-500'>
        {props.cards?.length > 0 && props.cards.map((note, index) => (
            <NotesCards key={index} title={note.title} content={note.content} />
        ))}
    </div>
  )
}

export default Section2