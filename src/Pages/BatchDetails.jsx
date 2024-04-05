import {  Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const BatchDetails=()=>{
    return <div>
        <h1>Hello World</h1>
        <Link to="/lms/addUsersToBatch">
        <Button type="submit" color="lightBlue" size="lg" ripple="light">
            Add Users to Batch
          </Button>
          </Link>
    </div>
}
export default BatchDetails;