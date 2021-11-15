import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory} from "react-router-dom"

//Adding the cricket List
export function AddCricktersComponent({ cricket, setcricket }) {
  const [img, setpic] = useState("");
  const [name, setname] = useState("");
  const [dob, setdob] = useState("");
  const [summary,setdetails] = useState("");
  const history=useHistory();
  return (
    <div className="addcricketers">
      <TextField id="standard-basic" label="Enter a pic url" variant="standard" value={img
      } onChange={(event) => setpic(event.target.value)} />
      <TextField id="standard-basic" label="Enter cricketer name" variant="standard" value={name} onChange={(event) => setname(event.target.value)} />
      <TextField id="standard-basic" label="Enter Date of birth" variant="standard" value={dob} onChange={(event) => setdob(event.target.value)} />
      <TextField id="standard-basic" label="Enter the Details" variant="standard" value={summary} onChange={(event) => setdetails(event.target.value)} />
      <Button onClick={() => {
        const newcricketer = {
          img:img,
          name: name,
          dob: dob,
          summary:summary
        };
        setcricket([...cricket, newcricketer]);
        history.push("/cricketersinfo");
      }} variant="outlined">Add Crickter</Button>
    </div>
  );
}
