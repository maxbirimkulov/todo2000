import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faSyncAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const Title = ({setStatus, all, setAll, item}) => {
    const [change, setChange] = useState('');

    const changeHandlerFolderTitle = (id) => {
        setAll(all.map((folder)=>{
            if (folder.id === id){
                return {...folder, change: !folder.change, folder: change.length ? change : folder.folder}
            } else {
                return folder
            }
        }));
        if (change.length){
            setStatus(change);
            setChange('')
        }
    };

    const deleteCompletedInFolder = (id) => {
        setAll(all.map((folder)=>{
            if (folder.id === id){
                return {...folder, tasks: folder.tasks.filter((item)=> !item.done)}
            } else{
                return folder
            }
        }))
    };

    return (
        <div className='folder__title-block'>
            {item.change
                ? <input value={change} type="text" className='folder__title-input'
                         maxLength='15' placeholder='Название папки'
                        onChange={(e)=> setChange(e.target.value) }
                />
                : <h2 className='folder__title'>{item.folder}</h2>
            }
            <span className='folder__title-change' onClick={() => changeHandlerFolderTitle(item.id)}>
                {item.change
                    ? <span onClick={()=> setChange('')} >
                        <FontAwesomeIcon icon={faSyncAlt} />
                    </span>
                    : <span onClick={()=> setChange(item.folder)}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </span>
                }
            </span>
            <span className='folder__deleteDone' title='Delete All Completed' onClick={()=> deleteCompletedInFolder(item.id)}>
                <FontAwesomeIcon icon={faTrashAlt}/>
            </span>
        </div>

    );
};

export default Title;