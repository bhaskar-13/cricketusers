import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { UserComponent } from "./UserComponent";
import './App.css';

//Passing data as Props to Usercomponent using map
export function UserComponentList({ cricket, setcricket }) {
  const history = useHistory();
  return (
    <div className="user-container">
      {cricket.map((ur, index) => (
        <UserComponent key={index}
          image={ur.img}
          name={ur.name}
          dob={ur.dob}
          summary={ur.summary}
        
          edit={<Button     variant="outlined" onClick={() => history.push("/cricket/edit/" + index)}>Edit</Button>}
          delete1={<Button  onClick={() => {
            const remainingcricketers = cricket.filter((cr, id) => id !== index);

            setcricket(remainingcricketers);
          }}
            variant="outlined">Delete</Button>}
       />
      ))}

    </div>
  );
}


