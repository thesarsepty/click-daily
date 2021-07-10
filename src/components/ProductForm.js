import React, { useEffect, useState } from 'react'

export default function ProductForm() {
  
  

  const [dataProducts, setDataProducts] = useState({
    products: [
                {
                  id: 1,
                  product_name: 'Morning Dew Milk', 
                  units:  [
                            {name: 'Pcs', price: 45000}
                          ]
                },
                {
                  id: 2,
                  product_name: 'Le Minerale 600ml', 
                  units:  [
                            {name: 'Pack', price: 95000},
                            {name: 'Pcs', price: 5000}
                          ]
                },
                {
                  id: 3,
                  product_name: 'Greenfields Full Cream Milk 1L', 
                  units:  [
                            {name: 'Pack', price: 120000},
                            {name: 'Pcs', price: 25000},
                            {name: 'Karton', price: 700000}
                          ]
                },
              ]
  })

  const [inputProductForm, setInputProductForm] = useState({
    productName: '',
    unit: {
      currentProduct: '',
      name: '',
      price: '',
    },
    quantity: '',
    

  })
  
  function renderProduct(){
    const foundUnit = dataProducts.products.find((product) => 
     product.product_name === inputProductForm.productName)
     if(foundUnit){
        // console.log('jalan')
        if(inputProductForm.unit.currentProduct !== inputProductForm.productName){
          setInputProductForm({ ...inputProductForm, unit:{...foundUnit.units[0], currentProduct: inputProductForm.productName} })
        }
       return foundUnit.units.map((unit, idx) => {
        const unitValue = { ...unit, currentProduct: inputProductForm.productName } 
        return(
          <option value={JSON.stringify(unitValue)} key={idx}>{unit.name}</option>
         )
       })
     }
  }
  
  return (
    <div className="grid grid-cols-4 gap-1 pr-16">
            <h6>Product</h6>
            
            {/* Product Input Form 1 */}
            <div className="col-start-2 col-span-3 space-y-5 pb-4">
              
              <div className="flex space-x-1 grid grid-cols-5 w-full"> 
                <div className="col-start-1 col-span-4">
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700">
                  Product
                  <i className="text-red-500">*</i>
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={inputProductForm.productName}
                    onChange={(event => setInputProductForm({...inputProductForm, productName: event.target.value}))}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                  >
                    <option value="" disabled>Product Name</option>
                    {
                      dataProducts.products.map(product => {
                        return (<option value={product.product_name} key={product.id}>{product.product_name}</option>)
                      })
                    }
                    
                  </select>
                </div>
                
                <div className="col-start-5 col-span-1">
                  <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
                  Unit
                  <i className="text-red-500">*</i>
                  </label>
                  <select
                    id="unit"
                    name="unit"
                    onChange={(event) => {
                      setInputProductForm({ ...inputProductForm, unit: JSON.parse(event.target.value)})
                    }} 
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                  >
                    {!inputProductForm.productName ? (<option defaultValue="None" disabled>No data available</option>)
                      : 
                      renderProduct()
                    }
                    
                  </select>
                </div>
              </div>

              <div className="flex space-x-1 grid grid-cols-7 border-grey-400">  
                <div className="col-start-1 col-span-2">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                      Quantity
                      <i className="text-red-500">*</i>
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      value={inputProductForm.quantity}
                      onChange={(event) => setInputProductForm({ ...inputProductForm, quantity: event.target.value })}
                      className="border p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                
                <div className="col-start-3 col-span-2">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                      Price
                      <i className="text-red-500">*</i>
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      defaultValue={inputProductForm.unit.price}
                      className="border p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                  <div>{JSON.stringify(inputProductForm)}</div>
                <div className="col-start-5 col-span-3">
                    <label htmlFor="total-price" className="block text-sm font-medium text-right text-gray-700">
                      Total Price
                      <i className="text-red-500">*</i>
                    </label>
                    <input
                      disabled
                      type="text"
                      name="total-price"
                      id="total-price"
                      value={inputProductForm.unit.price * inputProductForm.quantity}
                      className="border text-gray-400 text-right p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
              </div>
              
              <div className=" flex flex-row-reverse pt-2">
                <div className="w-5/12 border-t-2 flex justify-between text-sm font-md">
                  <p className="pt-2">Total Nett Price</p>
                  <p className="pt-2">{inputProductForm.unit.price * inputProductForm.quantity}</p>
                </div>
              </div>    
            </div>
            
            {/* Product Input Form 2 */}
            <div className="col-start-2 col-span-3 space-y-5">
              
            <div className="flex space-x-1 grid grid-cols-5 w-full"> 
                <div className="col-start-1 col-span-4">
                  <label htmlFor="product2" className="block text-sm font-medium text-gray-700">
                  Product
                  <i className="text-red-500">*</i>
                  </label>
                  <select
                    id="product2"
                    name="product2"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                  >
                    <option>Morning Dew Milk</option>
                    <option>Le Minerale 600ml</option>
                    <option>Greenfields Full Cream Milk 1L</option>
                  </select>
                </div>
                
                <div className="col-start-5 col-span-1">
                  <label htmlFor="unit2" className="block text-sm font-medium text-gray-700">
                  Unit
                  <i className="text-red-500">*</i>
                  </label>
                  <select
                    id="unit2"
                    name="unit2"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                  >
                    <option>Pack</option>
                    <option>Karton</option>
                    <option>Pcs</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-1 grid grid-cols-7 border-grey-400">  
                <div className="col-start-1 col-span-2">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                      Quantity
                      <i className="text-red-500">*</i>
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      className="border p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                
                <div className="col-start-3 col-span-2">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                      Price
                      <i className="text-red-500">*</i>
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="border p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>

                <div className="col-start-5 col-span-3">
                    <label htmlFor="total-price" className="block text-sm font-medium text-gray-700 text-right">
                      Total Price
                      <i className="text-red-500">*</i>
                    </label>
                    <input
                      disabled
                      value="70000"
                      type="text"
                      name="total-price"
                      id="total-price"
                      className="border text-gray-400 text-right p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
              </div>
              
              <div className=" flex flex-row-reverse pt-2">
                <div className="w-5/12 border-t-2 flex justify-between text-sm font-md">
                  <p className="pt-2">Total Nett Price</p>
                  <p className="pt-2">200.000</p>
                </div>
              </div> 
              <div>
              <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              New Item +
            </button>
              </div>
              <div className=" flex flex-row-reverse">
                <div className="w-5/12 flex justify-between text-sm font-semibold">
                  <p className="pt-2">Total</p>
                  <p className="pt-2">1.000.000</p>
                </div>
              </div>
            </div>
          </div>
  )
}
