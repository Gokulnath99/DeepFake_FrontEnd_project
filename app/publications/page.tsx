import React from 'react'
import { PublicationData } from '../../sample_data/PublicationList'
import Link from 'next/link'

function PublicationsPage() {
  return (
    <div>
      <h1 className='text-4xl'>Publications</h1>
      <ul>
        {PublicationData.map((publication, idx) => 
          <li className='mt-5 border border-b-2 border-t-0 border-x-0 '>
            <div className='grid gap-y-2 grid-cols-12'>
              <p className='col-span-2'>{publication.date}</p>
              <Link href={publication.link} className='col-span-10'>
                <p className='text-lg'>{publication.title}</p>
              </Link>
              
            </div>
            
          </li>
        )}

      </ul>
    </div>
  )
}

export default PublicationsPage
