import React from 'react';
import ListItem from "../Folder/ListItem";

const All = ({setAll,all}) => {
    return (
        <>
            {all.reduce((acc, rec)=> acc + rec.tasks.length  , 0) === 0
                ? <h2 className='zeroTask'>Задачи отсутствуют</h2>
                : <div>
                    {all.map((item)=>{
                        return (
                            <div key={item.id}>
                                <h2 className='folder__title'>{item.folder}</h2>
                                <ul className='folder__list'>
                                    {item.tasks.length ? '' : <li className='folder__list-no'>В данной папке отсутствуют задачи</li> }
                                    {item.tasks.map((el)=>(
                                        <ListItem key={el.id} item={item} el={el} setAll={setAll} all={all}/>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    );
};

export default All;