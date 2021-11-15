import './App.css';
import {useState} from "react";
import { Link,Switch,Route,Redirect} from "react-router-dom"
import { UserComponentList } from './UserComponentList';
import { AddCricktersComponent } from './AddCricktersComponent';
import { EditCricketComponent } from './EditCricketComponent';

 

function App() {
  let Intialusers=[
    {
      img:"http://www.espncricinfo.com/inline/content/image/501527.html?alt=1",
      name:"Sachin Tendulkar",
      dob:"24 April 1973 (age 48 years)",
      summary:"Sachin Ramesh Tendulkar is a former international cricketer of India who served as captain of the Indian national team. He is widely regarded as one of the greatest batsmen in the history of cricket"
    },

    {
      img:"https://pbs.twimg.com/profile_images/1111240772718940160/z9loNMgZ_400x400.jpg",
      name:"Brian Lara",
      dob:"2 May 1969 (age 52 years)",
      summary:"Brian Charles Lara, TC, OCC, AM is a Trinidadian former international cricketer, widely acknowledged as one of the greatest batsmen of all time"
    },

    {
      
      img:"https://c.ndtvimg.com/2020-04/ipc1msv_shane-warne-pti_625x300_21_April_20.jpg",
      name:"Shane Warne",
      dob:"13 September 1969 (age 52 years)",
      summary:"Shane Keith Warne is an Australian cricket commentator and former international cricketer who captained the Australian national team in One Day Internationals"
    },

    {

      img:"https://images.hindustantimes.com/img/2021/09/27/1600x900/kohli-batting-getty-odi_1632233777921_1632757379528.jpg",
      name:"Virat Kohli",
      dob:" 5 November 1988 (age 33 years)",
      summary:"Virat Kohli is an Indian cricketer and captain of India national cricket team in ODIs and Tests. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman. Kohli is considered as one of the best batsmen of his era"
    },

    {
      img:"https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
      name:"MS Dhoni",
      dob:"7 July 1981 (age 40 years),",
      summary:"Mahendra Singh Dhoni, is a former international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He is currently the captain of Chennai Super Kings, a franchise based team of Indian Premier League."
    },

    {
      img:"https://images.hindustantimes.com/img/2021/11/05/1600x900/rahul_dravid_1636076214721_1636076214894.jpeg",
      name:"Rahul Dravid",
      dob:"11 January 1973 (age 48 years)",
      summary:"Rahul Sharad Dravid is a former Indian cricketer and captain of the Indian national team, currently serving as its head coach. Prior to his appointment to the senior men's national team, Dravid was the Head of Cricket at the National Cricket Academy, and the head coach of the India Under-19 and India A teams."
    },

    {

      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvSdUSK4lmVzFxllEw6YSl1aKG7u8EIK4g52iA_cGyfQiBPFPpIQN1gKaWAGdnU4Hvjc&usqp=CAU",
      name:"Virendar Shewag",
      dob:" 20 October 1978 (age 43 years)",
      summary:"Virender Sehwag is a former Indian cricketer. Widely regarded as one of the most destructive batsmen of all time, Sehwag played as an aggressive right-handed opening batsman and also bowled part-time right-arm off-spin. He played his first One Day International in 1999 and joined the Indian test side in 200"

    }
  ]
 
  const [cricket,setcricket]=useState(Intialusers);
  return (
    <div className="App">
       <nav>
       <Link to="/cricketersinfo">Cricketers Info</Link>
       <Link to="/addcrickter">Add Cricketers</Link>
       </nav>
       <Switch>

         
     
       <Route  path="/cricketersinfo">
       <UserComponentList 
         cricket={cricket}
         setcricket={setcricket}
        />
       </Route>
       <Route path="/addcrickter">
         <AddCricktersComponent 
            cricket={cricket}
            setcricket={setcricket}
         />
      </Route >
        
      <Route path="/cricket/edit/:id">
       <EditCricketComponent
        cricket={cricket}
        setcricket={setcricket}
        />
       </Route>

       <Route  path="">
       <Redirect to="/cricketersinfo"></Redirect>
       <UserComponentList 
         cricket={cricket}
         setcricket={setcricket}
       />
       </Route> 
      </Switch>        
     </div>
  );
}

export default App;


