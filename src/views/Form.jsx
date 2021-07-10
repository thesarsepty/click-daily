import React from 'react'
import DetailsForm from '../components/DetailsForm'
import ProductForm from '../components/ProductForm'

import { useSelector, useDispatch } from 'react-redux'
import { fetchEmployees } from '../store/actionCreator'
import { useEffect } from 'react'


export default function Form() {
  const dispatch = useDispatch()
  const employees = useSelector(state => state.employees)
  const details = useSelector(state => state.details)
  useEffect(() => {
    dispatch(fetchEmployees())
  // eslint-disable-next-line
  }, [])
  // console.log(employees, 'form')
  return (
    <div className="bg-gray-200 p-2 rounded shadow-2xl w-9/12">
      
      {/* Header */}
      <div className="pb-2">
        <h2>Create Order</h2>
      </div>
      
      {/* Form Content */}
      <div className="bg-white p-2 rounded shadow-lg w-full">
        <form>
          
          {/* Details */}
          <DetailsForm 
            employees={employees}
          />
          
          {/* Separator */}
          
          
          {/* Product */}
          {details.person && details.distributionCentre && details.paymentType && (<>
              <hr className="my-4"/>
            <ProductForm />
            </>
            )
          }
          
          
          {/* Separator */}
          <hr className="mt-2"/>
          
          {/* Button Submit */}
          <div className="flex flex-row-reverse my-3 pr-1">
            <div className="pl-1">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Confirm
            </button>
            </div>
            <div>        
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}
