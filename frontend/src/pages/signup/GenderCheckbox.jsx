import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex mt-2 gap-x-2'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
          <span className='label-text'>Male</span>
          {/* <input type="checkbox" className='checkbox border-slate-900' /> */}
          <input type="checkbox" className="checkbox checkbox-primary" />

        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
          <span className='label-text'>Female</span>
          {/* <input type="checkbox" className='checkbox border-slate-900' /> */}
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox


//STARTER CODE FOR GENDERCHECKBOX COMPONENT 

// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex mt-2 gap-x-2'>
//       <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className='label-text'>Male</span>
//           {/* <input type="checkbox" className='checkbox border-slate-900' /> */}
//           <input type="checkbox" className="checkbox checkbox-primary" />

//         </label>
//       </div>
//       <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className='label-text'>Female</span>
//           {/* <input type="checkbox" className='checkbox border-slate-900' /> */}
//           <input type="checkbox" className="checkbox checkbox-primary" />
//         </label>
//       </div>
//     </div>
//   )
// }

// export default GenderCheckbox





