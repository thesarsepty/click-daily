import { SET_EMPLOYEES, SET_DETAILS_FORM } from '../constant/actionType'

export function fetchEmployees(){
  return(dispatch) => {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(response => response.json())
    .then(employees => {
      console.log(employees, 'action');
      dispatch({
        type: SET_EMPLOYEES,
        payload: employees.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function setDetailsForm(input){
  return(dispatch) => {
    dispatch({
      type: SET_DETAILS_FORM,
      payload: input
    })
  }
}