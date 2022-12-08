import './App.css';
import Sidebar from './components/Sidebar';
import ContentGrid from './components/ContentGrid';

const mockData = [
  {
    id: '01',
    name: 'A Strange Loop',
    isOnBroadway: true,
    isPlay: false,
    venue: 'Lyceum Theatre',
  },
  {
    id: '02',
    name: 'Evanston Salt Costs Climbing',
    isOnBroadway: false,
    isPlay: true,
    venue: 'The Alice Griffin Jewel Box Theater',
  },
  {
    id: '03',
    name: 'Death of A Salesman',
    isOnBroadway: true,
    isPlay: true,
    venue: 'Hudson Theater',
  },
  {
    id: '04',
    name: 'Sleep No More',
    isOnBroadway: false,
    isPlay: false,
    venue: 'Mckittrick Hotel',
  },
  {
    id: '05',
    name: 'Topdog/Underdog',
    isOnBroadway: true,
    isPlay: true,
    venue: 'John Golden Theater',
  },
  {
    id: '06',
    name: 'The Play That Goes Wrong',
    isOnBroadway: false,
    isPlay: true,
    venue: 'New World Stages',
  },
  {
    id: '07',
    name: 'You Will Get Sick',
    isOnBroadway: false,
    isPlay: true,
    venue: 'Roundabout Theater',
  },
  {
    id: '08',
    name: 'Hadestown',
    isOnBroadway: true,
    isPlay: false,
    venue: 'Walter Kerr Theatre',
  },
  {
    id: '09',
    name: 'KPOP',
    isOnBroadway: true,
    isPlay: false,
    venue: 'Circle in the Square',
  },

]

function App() {
  return (
    <div>
    <Sidebar/>
    <ContentGrid
     data={mockData}
    />
    </div>
  );
}

export default App;
