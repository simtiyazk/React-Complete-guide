import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttpHook from './custom-hooks/http-custom-hook';

function App() {
  const [tasks, setTasks] = useState([]);
  const {isLoading, error, enterTaskHandler} = useHttpHook();

  useEffect(() => {
    const transformedTasks = (taskObj) => {
      const loadedTasks = [];
  
        for (const taskKey in taskObj) {
          loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
        }
  
        setTasks(loadedTasks);
    };

    enterTaskHandler({url: 'https://http-custom-hook-d0369-default-rtdb.firebaseio.com/tasks.json'}, transformedTasks);
  }, [enterTaskHandler]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={enterTaskHandler}
      />
    </React.Fragment>
  );
}

export default App;
