import React from 'react'
import Button from '../components/Button'

export const Modal = () => {
  return (
    <dialog id="my_modal_1" className="modal relative">
        <div className="modal-box">
        <div className=' bg-white p-5 rounded-2xl'>
                    <h1 className='text-2xl font-bold'>Contact us</h1>
                    <form >
                        <input required name='name' className='w-full my-4 py-2 border border-gray/40 px-3' type="text" placeholder='Full Name' />
                        <input required name='email' className='w-full my-4 py-2 border border-gray/40 px-3' type="email" placeholder='Email' />
                        <input required name='phone' className='w-full my-4 py-2 border border-gray/40 px-3' type="number" placeholder='Phone' />
                        <input required name='message' className='w-full my-4 py-2 border border-gray/40 px-3' type="text" placeholder='Comments or Questions?' />
                        <div className='flex gap-6'>
                        <button className=' bg-primary text-white py-3 px-4 rounded-md' >Send Message</button>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className=" bg-primary text-white py-3 px-4 rounded-md">Close</button>
                            </form>
                        </div>
                        </div>
                    </form>
                </div>
            
        </div>
    </dialog>
  )
}
