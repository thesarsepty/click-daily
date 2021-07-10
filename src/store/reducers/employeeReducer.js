import { SET_EMPLOYEES, SET_DETAILS_FORM } from '../constant/actionType'

const initialStates = {
  employees: [],
  details: {}
}

export default function employeeReducer(state = initialStates, action){
  
  switch (action.type) {
    
    case SET_EMPLOYEES:
      return { ...state, employees: action.payload }
    
    case SET_DETAILS_FORM:
      return { ...state, details: action.payload }  

    default:
      return state
  }
}