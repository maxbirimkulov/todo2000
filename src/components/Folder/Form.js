import React from 'react';

const Form = ({setAddTask, addTask, addTaskInFolder, item, task , setTask}) => {
    return (
        <>
            <button type='button' className='sidebar__add-btn' onClick={() => setAddTask(true)}><span>+</span> Добавить
                задачу
            </button>
            <div className='folder__content' style={{display: `${addTask ? 'block' : 'none'}`}}>
                <form className='folder__form' onSubmit={(e) => addTaskInFolder(e, item.id)}>
                    <input className='folder__form-input' required value={task} type="text" placeholder='Текст задачи'
                           onChange={(e) => setTask(e.target.value)}/>
                           <br/>
                    <button className='folder__form-add' type='submit'>Добавить задачу</button>
                    <button className='folder__form-cancel' type='button' onClick={() => {
                        setAddTask(false);
                        setTask('')
                    }}>Отмена
                    </button>
                </form>


            </div>
        </>

    );
};

export default Form;