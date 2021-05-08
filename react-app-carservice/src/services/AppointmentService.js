import http from './http-common';
import authHeader from "../services/auth-header"

 class AppointmentService {

    getClient(id){
        return http.get(`api/client/clientid/${id}`);
      }
      
    makeAppointment(id, data){
        // console.log(id,data);
          return http.post(`api/client/makeAppointment/`+ id, data,  { headers: authHeader() });
      }
      getAppointmentsForDate(date){
          // console.log(date);
          return http.get(`api/client/getAppointmentsForDate/${date}`,  { headers: authHeader() });
      }
}


export default new AppointmentService();
