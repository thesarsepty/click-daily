import React,{ useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setDetailsForm } from '../store/actionCreator'

export default function DetailsForm(props) {

  
  const [detailsData, setDetailsData] = useState({
    person: 'as',
    distributionCentre: 'a',
    paymentType: 'a',
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setDetailsForm(detailsData))
  }, [detailsData])
  return (
  <div className="grid grid-cols-4 gap-1 pr-16">
    <h6>Detail</h6>
    <div className="col-start-2 col-span-3 space-y-5 pb-3">
      
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
          <i className="text-red-500">*</i>
        </label>
        <select
          id="name"
          name="name"
          value={detailsData.person}
          onChange={(event) => setDetailsData({...detailsData, person: event.target.value})}
          className="mt-1 block w-9/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>Name</option>
          {
            props.employees.map((employeeData) => {
              
              return(
                <option value={employeeData.employee_name} key={employeeData.id}>{employeeData.employee_name}</option> 
                )
              })
          }
        </select>
      </div>
          
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="distribution" className="block text-sm font-medium text-gray-700">
          Distribution Center
          <i className="text-red-500">*</i>
        </label>
  
        <select
          id="distribution"
          name="distribution"
          value={detailsData.distributionCentre}
          onChange={(event) => setDetailsData({...detailsData, distributionCentre: event.target.value})}
          className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          
          {!detailsData.person ? (<option defaultValue="None">No data available</option>)
            : (<>
                <option value="" disabled>Select</option>
                <option value="DC Tangerang">DC Tangerang</option>
                <option value="DC Cikarang">DC Cikarang</option>
               </>)}
          
        </select>
        
      </div>
      {!detailsData.person && !detailsData.distributionCentre ? (<div></div>)
        : (<>
          <div className="flex space-x-1 grid grid-cols-4 w-full"> 
        <div className="col-start-1 col-span-2"> 
          <label htmlFor="payment-type" className="block text-sm font-medium text-gray-700">
          Payment Type
          <i className="text-red-500">*</i>
          </label>
          <select
            id="payment-type"
            name="payment-type"
            value={detailsData.paymentType}
            onChange={(event => setDetailsData({...detailsData, paymentType: event.target.value}))}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled>Select</option>
            <option value="cash H+1">Cash H+1</option>
            <option value="cash H+3">Cash H+3</option>
            <option value="cash H+7">Cash H+7</option>
            <option value="transfer H+1">Transfer H+1</option>
            <option value="transfer H+3">Transfer H+3</option>
            <option value="transfer H+7">Transfer H+7</option>
          </select>
        </div>
        
        <div className="col-start-3 col-span-2">
          <label htmlFor="date-time" className="block text-sm font-medium text-gray-700">
          Expired Date
          <i className="text-red-500">*</i>
          </label>
          <input
            type="text"
            onFocus={
             (e)=> {
               e.currentTarget.type = "date";
               e.currentTarget.focus();
              }
            }
            onBlur={
              (e)=> {
                e.currentTarget.type = "text";
                e.currentTarget.blur();
               }
             }
            placeholder="Expired Date"
            id="date-time"
            className="border p-1.5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>   
      </div>
      
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Notes
        </label>
        <div className="mt-1">
          <textarea
            id="notes"
            name="notes"
            rows={5}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-9/12 sm:text-sm border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>
      </>
      )}
      
    
    </div>
  </div>
  )
}
