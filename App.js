import MainScreen from './src/screens/MainScreen';

const taskList = [
  {
    id: 1,
    task: "Regar plantas",
    completed: false
  },
  {
    id: 2,
    task: "Lavar platos",
    completed: false
  },{
    id: 3,
    task: "Limpiar el baño",
    completed: false
  },{
    id: 4,
    task: "Comprar carne",
    completed: true
  },{
    id: 5,
    task: "Comprar carbón",
    completed: false
  },{
    id: 6,
    task: "Lavar auto",
    completed: false
  },{
    id: 7,
    task: "Hacer ejercicios",
    completed: false
  },
]

export default function App() {
  return (
    <MainScreen taskList={taskList}/>
  );
}