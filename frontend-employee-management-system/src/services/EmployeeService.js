import axios from 'axios'; 
const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';
// const EMPLOYEE_POST_API_BASE_URL = 'http:localhost:8080/api/v1/employees'

class EmployeeService {
        getEmployees(){
            return axios.get(EMPLOYEE_API_BASE_URL);
        }
        getEmployeeById(id)
        {
            return axios.get(EMPLOYEE_API_BASE_URL+'/'+id);
        }
        createEmployee(employee){
            return axios.post(EMPLOYEE_API_BASE_URL,employee);
        }
        updateEmployee(employee){
            console.log(employee);
            return axios.put(EMPLOYEE_API_BASE_URL,employee);
        }
        deleteEmployee(id){
            return axios.delete(EMPLOYEE_API_BASE_URL+'/'+id);
        }
}   
export default new EmployeeService ();