import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../style.css'
import { useNavigate } from 'react-router-dom';

const Rick = ({setchar}) => {

  const navigate = useNavigate();

    const [data,setdata] = useState([])
    const [name, setname] = useState("");
    const [status, setstatus] = useState("");
    const [gender, setgender] = useState("");
    const url = "https://rickandmortyapi.com/api/character/";

    const handlesubmit = () =>{
        console.log(`${url}?name=${name}&status=${status}&gender=${gender}`)

        const fetchData = async () => {
            try {
              const response = await axios.get(`${url}?name=${name}&status=${status}&gender=${gender}`);
              setdata(response.data.results);
              console.log(response.data.results);
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchData();
    }


    return (
      <div>
        <form>
          <input
            type="text"
            value={name}
            onChange={(event) => setname(event.target.value)}
            placeholder="Enter name of the character"
          />
          <select value={status} onChange={(event) => setstatus(event.target.value)}>
            <option value="">Select Status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
          <select value={gender} onChange={(event) => setgender(event.target.value) }>
            <option value="">Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </form>
        <button onClick={()=>handlesubmit()}>Get Details</button>

        <div className='info'>
          {
            data.map((item)=>{
              return <div className='card' onClick={()=>{
                setchar(item);
                navigate('/info');
              }}>
                <div>
                <img src={item.image} className='img'/>
                </div>
                <div className='text'>
                    <h2><b>Name: </b>{item.name}</h2>
                    <h4><b>Species</b>: {item.species}</h4>
                    <div></div>
                    <h3><b>Status: </b>{item.status}</h3>
                </div>
              </div>
            })
          }
        </div>
        
      </div>
    );
  };


export default Rick