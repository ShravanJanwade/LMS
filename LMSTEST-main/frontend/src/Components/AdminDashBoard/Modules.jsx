import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function Modules({CardName}) {
    return (
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           {CardName}
          </Typography>
          <Typography>
           
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>open</Button>
        </CardFooter>
      </Card>
    );
  }