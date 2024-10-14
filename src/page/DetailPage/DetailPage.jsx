import React from 'react'
import { useSelector } from 'react-redux'

export default function DetailPage() {
    let {project_arr} = useSelector(state=>state.projectSlice);
    console.log('project_arr', project_arr)
  return (
    <div>
        <div className='container'>
            {project_arr.map((item, index) => {
                return(<div className='h-20' key={index}>
                    <img className='' src={item.img} alt="" />
                </div>)
            })}
        </div>
    </div>
  )
}
