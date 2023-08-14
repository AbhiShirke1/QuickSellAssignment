import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Components/Card';
import Divide1 from './Components/Divide1';
import Divide2 from './Components/Divide2';
import Divide3 from './Components/Divide3';
import Divide4 from './Components/Divide4';
import Divide5 from './Components/Divide5';
import Title from './Components/Title';



function App() {
  const [start, setStart] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [usersData, setUsersData] = useState();
  const [tickets, setTickets] = useState();
  const [p1, setP1] = useState();
  const [p2, setP2] = useState();
  const [p3, setP3] = useState();
  const [p4, setP4] = useState();
  const [p5, setP5] = useState();

  const [t2, setT2] = useState();

  const [user1, setUser1] = useState();
  const [entire, setEntire] = useState();

  const [status, setStatus] = useState();

  const [userData, setUserData] = useState();
  const [map2, setMap] = useState(new Map);

  const [headerUser, setHeaderUser] = useState([])
  const [headerName, setHeaderName] = useState([])

  useEffect(() => {
    axios.get("https://apimocha.com/quicksell/data")
      .then(
        (res) => {
          setData(res.data)
          setUsersData(res.users)

        }
      )
      .catch(
        err => console.log(err)
      )

  }, [])



  const getPriority = () => {
    setT2("")
    setUser1("")
    setP1(data)
    setP2(data)
    setP3(data)
    setP4(data)
    setP5(data)
    setHeaderUser("")
    setHeaderName("")
    setStatus("")

  }


  const getTitle = () => {
    console.log("hi");
    setP1(""); setP2(""); setP3(""); setP4(""); setP5(""); setUser1(""); setStatus("")
    setT2(data);
    setHeaderUser("")
    setHeaderName("")
  }

  const getUser = () => {

    setP1(""); setP2(""); setP3(""); setP4(""); setP5(""); setT2(""); setStatus("");
    setHeaderUser("")
    setUser1(data)

    for (let i = 0; i < 10; i++) {
      let user = data.tickets[i]["userId"];
   
      map2.set(user, new Array());
    }

    for (let i = 0; i < 10; i++) {
      let user = data.tickets[i]["userId"];

      map2.get(user).push(data.tickets[i]);
    }

    setHeaderName(headerName => [...headerName, "Anoop Sharma"]);
    setHeaderName(headerName => [...headerName, "Yogesh"]);
    setHeaderName(headerName => [...headerName, "Shankar Kumar"]);
    setHeaderName(headerName => [...headerName, "Ramesh"]);
    setHeaderName(headerName => [...headerName, "Suresh"]);
    setHeaderUser("")

  }

  const getStatus = () => {
    setP1(""); setP2(""); setP3(""); setP4(""); setP5(""); setT2(""); setUser1("");
    setEntire("");
    setStatus(data);
    setHeaderName("")
    setHeaderUser(headerUser => [...headerUser, "Todo"]);
    setHeaderUser(headerUser => [...headerUser, "In Progress"]);
    setHeaderUser(headerUser => [...headerUser, "Backlog"]);
    setHeaderUser(headerUser => [...headerUser, "Done"]);
    setHeaderUser(headerUser => [...headerUser, "Cancelled"]);
    setHeaderUser(headerUser => [...headerUser, "Done"]);

  }

  return (
    <>

      <div className="mainCard">

        <div className="div1">
          <button onClick={getPriority} >Priority</button>
          <button onClick={getTitle} >Title</button>
        </div>

        <div className="div2">
          <button onClick={getStatus}>Status</button>
          <button onClick={getUser} >User</button>
        </div>


      </div>


      {
        t2 &&
        t2.tickets
          .sort((a, b) => a.title > b.title ? 1 : -1)
          .map((cval) => {
            return (
              <Card title={cval.title} tag={cval.tag[0]} />
            )
          })
      }

      <div className="columns">

        <div className="c">
          {p1 ? <div className='headers'><i class="fas fa-ellipsis-h"></i> <p style={{ margin: "0" }}>No Priority</p> </div> : ""}
          {headerUser.includes("Todo") ? <div className='headers'><i class="fas fa-tasks"></i> <p style={{ margin: "0", display: "inline-block" }}>Todo</p> </div> : ""}
          {headerName.includes("Anoop Sharma") ? <div className='headers'><i class="fas fa-tasks"></i> <p style={{ margin: "0", display: "inline-block" }}>Anoop Sharma</p> </div> : ""}
          {/* {console.log(headerUser)} */}
          {
            p1 &&
            p1.tickets
              .map((cval) => {
                return (
                  cval.priority == 0 ? <Divide1 id={cval.id} title={cval.title} tag={cval.tag[0]} header={"No Priority"} /> : ""
                )
              })
          }


          {
            status &&
            status.tickets
              .map((cval) => {
                // setHeaderUser([...headerUser, "Todo"]);
                return (
                  cval.status == "Todo" ? <Divide1 id={cval.id} title={cval.title} tag={cval.tag[0]} /> : ""
                )
              })

          }

          {
          
            user1 &&
            map2.get("usr-1")
              .map((cval) => {
                return (
                  <Card title={cval.title} id={cval.id} tag={cval.tag[0]} name={user1.users.id == "usr-1" ? user1.users.name : ""}/>
                )
              })

          }



        </div>

        <div className="c">
          {p2 ? <div className='headers'><i class="fa-regular fa-signal-weak"></i> <p style={{ margin: "0" }}>Low</p> </div> : ""}
          {headerUser.includes("In Progress") ? <div className='headers'><i class="fa-solid fa-circle-half-stroke"></i> <p style={{ margin: "0", display: "inline-block" }}>In Progress</p> </div> : ""}
          {headerName.includes("Yogesh") ? <div className='headers'> <i class="fas fa-tasks"></i> <p style={{ margin: "0", display: "inline-block" }}>Yogesh</p> </div> : ""}
          {
            p2 &&
            p2.tickets
              .map((cval) => {
                return (
                  cval.priority == 1 ? <Divide2 id={cval.id} title={cval.title} tag={cval.tag[0]} header={"Low"} /> : ""
                )
              })
          }


          {
            status &&
            status.tickets
              .map((cval) => {
                return (
                  cval.status == "In progress" ? <Divide2 id={cval.id} title={cval.title} tag={cval.tag[0]} /> : ""
                )
              })
          }


          {
            user1 &&
            map2.get("usr-2")
              .map((cval) => {
                return (
                  <Card title={cval.title} id={cval.id} tag={cval.tag[0]} />
                )
              })
          }

        </div>

        <div className="c">
          {p2 ? <div className='headers'><i class="fa-regular fa-signal-weak"></i> <p style={{ margin: "0" }}>Medium</p> </div> : ""}
          {headerUser.includes("Backlog") ? <div className='headers'><i class="fa fa-area-chart"></i> <p style={{ margin: "0", display: "inline-block" }} >Backlog</p> </div> : ""}
          {headerName.includes("Shankar Kumar") ? <div className='headers'><i class="fas fa-tasks"></i>  <p style={{ margin: "0", display: "inline-block" }}>Shankar Kumar</p> </div> : ""}
          {
            p3 &&
            p3.tickets
              .map((cval) => {
                return (
                  cval.priority == 2 ? <Divide3 id={cval.id} title={cval.title} tag={cval.tag[0]} header={"Medium"} /> : ""
                )
              })
          }

          {
            status &&
            status.tickets
              .map((cval) => {
                return (
                  cval.status == "Backlog" ? <Divide3 id={cval.id} title={cval.title} tag={cval.tag[0]} /> : ""
                )
              })
          }


          {
            user1 &&
            map2.get("usr-3")
              .map((cval) => {
                return (
                  <Card title={cval.title} id={cval.id} tag={cval.tag[0]} />
                )
              })
          }

        </div>

        <div className="c">
          {p2 ? <div className='headers'><i class="fa-solid fa-signal"></i> <p style={{ margin: "0" }}>High</p> </div> : ""}
          {headerUser.includes("Cancelled") ? <div className='headers'><i class="fa fa-times" aria-hidden="true"></i> <p style={{ margin: "0", display: "inline-block" }}>Cancelled</p> </div> : ""}
          {headerName.includes("Ramesh") ? <div className='headers'> <i class="fas fa-tasks"></i> <p style={{ margin: "0", display: "inline-block" }}>Ramesh</p> </div> : ""}
          {
            p4 &&
            p4.tickets
              .map((cval) => {
                return (
                  cval.priority == 3 ? <Divide4 id={cval.id} title={cval.title} tag={cval.tag[0]} header={"High"} /> : ""
                )
              })
          }

          {
            user1 &&
            map2.get("usr-4")
              .map((cval) => {
                return (
                  <Card title={cval.title} id={cval.id} tag={cval.tag[0]} />
                )
              })
          }
        </div>

        <div className="c">
          {p2 ? <div className='headers'><i class="fas fa-exclamation-circle"></i> <p style={{ margin: "0" }}>Urgent</p> </div> : ""}
          {headerUser.includes("Done") ? <div className='headers'><i class="fa fa-check" aria-hidden="true"></i>
            <p style={{ margin: "0", display: "inline-block" }}>Done</p> </div> : ""}
            {headerName.includes("Suresh") ? <div className='headers'><i class="fas fa-tasks"></i>  <p style={{ margin: "0", display: "inline-block" }}>Suresh</p> </div> : ""}
          {
            p5 &&
            p5.tickets
              .map((cval) => {
                return (
                  cval.priority == 4 ? <Divide5 id={cval.id} title={cval.title} tag={cval.tag[0]} header={"Urgent"} /> : ""
                )
              })
          }


          {
            user1 &&
            map2.get("usr-5")
              .map((cval) => {
                return (
                  <Card title={cval.title} id={cval.id} tag={cval.tag[0]} />
                )
              })
          }
        </div>

      </div>



    </>
  );
}

export default App;
