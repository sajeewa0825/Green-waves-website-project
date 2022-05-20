import React from 'react'
import './BlogCard.css'

const BlogCard = () => {
  return (
    <div className="container blogSet">
      <div className='row Blogtopic'>
        <h2>Our Latest Blog</h2>
      </div>

      <div className='row'>
        <div className='BlogContent col-4 col-md-6'>
          <a href='#' className='acls'>
            <div className='Blogcard bcard1'></div>

            <div className='Blogtittle'>
              <h5>The best selection of Royalty Free News </h5>
            </div>
            <div className='Bloglorem'>
              <p>France, Germany, Hungary, Israel, Saudi Arabia, China, India enable </p>
            </div>
          </a>
        </div>

        <div className='BlogContent col-4 col-md-2'>
          <a href='#' className='acls'>
            <div className='Blogcard'></div>

            <div className='Blogtittle'>
              <h5>The best selection of Royalty Free News </h5>
            </div>
            <div className='Bloglorem'>
              <p>France, Germany, Hungary, Israel, Saudi Arabia, China, India enable </p>
            </div>
          </a>
        </div>

        <div className='BlogContent col-4 col-md-2'>
          <a href='#' className='acls'>
            <div className='Blogcard'></div>

            <div className='Blogtittle'>
              <h5>The best selection of Royalty Free News </h5>
            </div>
            <div className='Bloglorem'>
              <p>France, Germany, Hungary, Israel, Saudi Arabia, China, India enable </p>
            </div>
          </a>
        </div>

        <div className='BlogContent col-4 col-md-2'>
          <a href='#' className='acls'>
            <div className='Blogcard'></div>

            <div className='Blogtittle'>
              <h5>The best selection of Royalty Free News </h5>
            </div>
            <div className='Bloglorem'>
              <p>France, Germany, Hungary, Israel, Saudi Arabia, China, India enable </p>
            </div>
          </a>
        </div>
      </div>

    </div>
  )
}

export default BlogCard