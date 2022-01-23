import React,{useState, useEffect} from 'react'
import './style.css'
import AllTask from "./components/AllTask/AllTask";
import AddFolder from "./components/AddFolder/AddFolder";
import All from "./components/All/All";
import Folder from "./components/Folder/Folder";
import Vanta from "./components/vanta/Vanta";

function App() {

  const [all, setAll] = useState([]);
  const [folder, setFolder] = useState('');
  const [addFolder, setAddFolder] = useState(false);
  const [status, setStatus] = useState('all');

  const deleteHandlerFolder = (id) => {
      setAll(all.filter((item)=>item.id !== id));
      setStatus('all')
  };

  useEffect(()=>{
    if (localStorage.getItem('all') !== null){
    setAll(JSON.parse(localStorage.getItem('all')))
    }
  },[]);

  useEffect(()=>{

      localStorage.setItem('all', JSON.stringify(all))

  },[all]);

  return (
    <div className="App">
      <main>

        <aside className='sidebar'>
          <AllTask setStatus={setStatus}/>

          <ul className='sidebar__list'>
            {all.map( (item)=>{
              return (
                  <li key={item.id} className='sidebar__list-item' onClick={()=>setStatus(item.folder)}>
                    <div className='sidebar__list-color' style={{backgroundColor: item.color}}> </div>
                    {item.folder}
                  <span className='folder__list-delete' onClick={(e)=>{
                    e.stopPropagation();
                    deleteHandlerFolder(item.id);
                  } }>✘</span>
                  </li>
              )
            })}
          </ul>

          <AddFolder all={all} setAll={setAll} folder={folder} setFolder={setFolder} addFolder={addFolder} setAddFolder={setAddFolder}/>
        </aside>

        <section>
          {status === 'all'
              ? <All setAll={setAll} all={all}/>
              : <Folder setStatus={setStatus} setAll={setAll} all={all} status={status}/>
              }
          <Vanta/>
        </section>
      </main>
    </div>
  );
}

export default App;

