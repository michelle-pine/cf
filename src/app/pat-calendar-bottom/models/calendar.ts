
import { DateService } from "../services/date-service.service";

//a calendar interface
export interface Calendar {
    //generates a calendar based on its unique attributes
    generateCal();
    //set the data of the calendar
    setDateData(dateService:DateService); 

}


    
