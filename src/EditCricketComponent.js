import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from "react-router-dom";

//Editing The Cricket list
export function EditCricketComponent({ cricket, setcricket }) {
  const { id } = useParams();
  const crickets = cricket[id];
  console.log(crickets);
  const [pic, setpic] = useState(crickets.img);
  const [name, setname] = useState(crickets.name);
  const [dob, setdob] = useState(crickets.dob);
  const [details, setdetails] = useState(crickets.summary);
  return (
    <div className="addcricketers">
      <TextField id="standard-basic" label="Enter a pic url" variant="standard" value={pic} onChange={(event) => setpic(event.target.value)} />
      <TextField id="standard-basic" label="Enter cricketer name" variant="standard" value={name} onChange={(event) => setname(event.target.value)} />
      <TextField id="standard-basic" label="Enter Date of birth" variant="standard" value={dob} onChange={(event) => setdob(event.target.value)} />
      <TextField id="standard-basic" label="Enter the Details" variant="standard" value={details} onChange={(event) => setdetails(event.target.value)} />
      <Button onClick={() => {
        const updatedcricketer = {
          img:pic,
          name:name,
          dob:dob,
          summary:details
        };
        const copycricket = [...cricket];
        copycricket[id] = updatedcricketer;
        setcricket(copycricket);
      }} variant="outlined">Add Crickter</Button>
    </div>
  );
}
