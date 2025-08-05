import React, { useState } from 'react'
import { assets } from '../../assets/assets';

const BlogTable = ({blog,fetchBlog,index}) => {

    const {title,createdAt} = blog;
    const BlogDate = new Date(createdAt)

  return (
    <tr className='border-y border-gray-300'>

        <th className='px-2 py-4'>{index}</th>
        <td className='px-2 py-4'>{title}</td>
        <td className='px-2 py-4'>{BlogDate.toDateString()}</td>
        <td className='px-2 py-4'> 
            <p className={`${blog.isPublished ? 'text-green-300' : 'text-orange-300'}`}>
                {blog.isPublished ? 'Published' : 'UnPublished'}
            </p>
        </td>

        <td className='px-2 py-4 flex text-xs gap-3'>
            <button className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>
                {blog.isPublished ? 'Unpublish' : 'Publish'}
            </button>

            <img src={assets.cross_icon} alt="" />
        </td>

    </tr>
  )
}

export default BlogTable
