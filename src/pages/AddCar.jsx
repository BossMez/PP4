// import { useNavigate } from "react-router-dom";
import Typography  from "@mui/material/Typography"
import CarForm from "../forms/CarForm";
import useCars from "../components/contexts/Cars/useCars.hook";

 function AddCar() {
  // const navigate = useNavigate();

  const { addCar } = useCars();

  const submitHandler = (data) => {
    addCar(data);

  };

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Add Car
      </Typography>
      <CarForm submitHandler={submitHandler} />
    </>
  )
}

export default  AddCar;