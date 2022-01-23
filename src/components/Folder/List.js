import React from 'react';
import ListItem from "./ListItem";

const List = ({item,setAll, all}) => {



    return (
        <ul className='folder__list'>
            {item.tasks.length ? '' : <li className='folder__list-no'>Здесь будут ваши задачи</li> }
            {item.tasks.map((el)=>(
                <ListItem key={el.id} item={item} el={el} setAll={setAll} all={all}/>
            ))}
        </ul>
    );
};

export default List;