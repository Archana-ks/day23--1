import "./App.css";
export default function App() {
  //props
  return (
    <div className="App">
      {
        <Details
        head="FREE"
        symbol="$0 "  p="/month"
        access="✔"
        a1="Single User"
        // access ="✔"
        a2="5GB storage"
        // access ="✔"
        a3="Unlimited Public Projects" 
        unaccess="❌"
        a4="Community Access"
        // unaccess="❌"
        a5="Unlimited Private Projects" 
        // unaccess="❌"
        a6="Dedicated Phone Support"
        // unaccess="❌"
        a7="Free SubDomain"
        // unaccess="❌"
        a8="Monthly Status Rports"
        />
      }
      {
        <Details1
        head="PLUS"
        symbol="$9 "  p="/month"
        access="✔"
        a1="5 Users"
        // access="✔"
        a2="50GB storage"
        // access="✔"
        a3="Unlimited Public Projects" 
        // access="✔"
        a4="Community Access"
        // access="✔"
        a5="Unlimited Private Projects" 
        // access="✔"
        a6="Dedicated Phone Support"
        // access="✔"
        a7="Free SubDomain"
        unaccess="❌"
        a8="Monthly Status Rports"
       />
      }
        <Details2
        head="PRO"
        symbol="$49 "  p="/month"
        // access="✔"
        a1="Unlimited Users"
        // access="✔"
        a2="150GB storage"
        // access="✔"
        a3="Unlimited Public Projects" 
        // access="✔"
        a4="Community Access"
        // access="✔"
        a5="Unlimited Private Projects" 
        // access="✔"
        a6="Dedicated Phone Support"
        // access="✔"
        a7=" Unlimited"
        a9=" Free SubDomains"
        // access="✔"
        a8="Monthly Status Rports"
       />    
            
    </div>
  );
}

function Details(props) {
  return (
    <div className="card">
      <h5 className="dol">{props.head}</h5>
      <h1 className="sym">{props.symbol}<sub>{props.p}</sub>
      <hr/>
      </h1>
      <div className="content">
      <span>{props.access}  </span>{props.a1}<br/><br/>
      <span>{props.access}  </span>{props.a2}<br/><br/>
      <span>{props.access}  </span>{props.a3}<br/><br/>
      <div className="dol">
      <span>{props.unaccess}  </span>{props.a4}<br/><br/>
      <span>{props.unaccess}  </span>{props.a5}<br/><br/>
      <span>{props.unaccess}  </span>{props.a6}<br/><br/>
      <span>{props.unaccess}  </span>{props.a7}<br/><br/>
      <span>{props.unaccess}  </span>{props.a8}<br/><br/>
      <button className="btn">BUTTON</button>
      </div>
      </div>
      </div>
  );
}

      function Details1(props) {
      return (
         <div className="card">
          <h5 className="dol">{props.head}</h5>
         <h1 className="sym">{props.symbol}<sub>{props.p}</sub>
         <hr/>
         </h1>
         <div className="content">
          <b>
         <span>{props.access}  </span>{props.a1}<br/><br/></b>
         <span>{props.access}  </span>{props.a2}<br/><br/>
         <span>{props.access}  </span>{props.a3}<br/><br/>
         <span>{props.access}  </span>{props.a4}<br/><br/>
         <span>{props.access}  </span>{props.a5}<br/><br/>
         <span>{props.access}  </span>{props.a6}<br/><br/>
         <span>{props.access}  </span>{props.a7}<br/><br/>
         <div className="dol">
         <span>{props.unaccess}  </span>{props.a8}<br/><br/>
         <button className="btn">BUTTON</button>
         </div>
         </div>

     
    </div>
  );
}

function Details2(props) {
  return (
    <div className="card">
      <h5 className="dol">{props.head}</h5>
      <h1 className="sym">{props.symbol}<sub>{props.p}</sub>
      <hr/>
      </h1>
      <div classname="content">
      <b>  
      <span>{props.access}  </span>{props.a1}<br/><br/></b>
      <span>{props.access}  </span>{props.a2}<br/><br/>
      <span>{props.access}  </span>{props.a3}<br/><br/>
      <span>{props.access}  </span>{props.a4}<br/><br/>
      <span>{props.access}  </span>{props.a5}<br/><br/>
      <span>{props.access}  </span>{props.a6}<br/><br/>
      <b>
      <span>{props.access}  </span>{props.a7}</b>{props.a9} <br/><br/>
      <span>{props.access}  </span>{props.a8}<br/><br/>
      <button className="btn">BUTTON</button> 
      </div>
      </div>
  );
}
//App.jsreact task1
//App.css
.App {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    }
  .App {
    border: 1px solid blue;
    border-radius: 7px;
    margin: 10px;
    padding: 10px;
    background-color: #007bff;
    
  }
  
  .card {
    border: 1px solid black;
    border-radius: 7px;
    width: 250px;
    height: 550px;
    margin: 10px;
    padding: 40px;
    background-color:#fff;  
  }
  .content{
    align-items: left;
  }
  h1{
      text-align: center; 
  
  }
  h5{
    text-align: center;
  }
  sub{
    font-size:small;
  }
  .card:hover {
    margin-top:0.2px;
    cursor: pointer;
  }
  .dol {
      color: #70757a;
  }
  .btn{
    border: 1px solid #007bff;
    border-radius: 10px;
    width: 200px;
    height: 40px;
    margin: 10px;
    padding: 5px;
    background-color:#007bff;
    text-align: center;
    align-items: center;
  }
  .btn:hover {
    cursor: pointer;
    background-color: blue;
  }
  