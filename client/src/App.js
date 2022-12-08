import './App.css';
import Sidebar from './components/Sidebar';
import ContentGrid from './components/ContentGrid';

const mockData = [
  {
    id: '01',
    name: 'A Strange Loop',
    isOnBroadway: true,
    isPlay: false,
  },
  {
    id: '02',
    name: 'Take Me Out',
    isOnBroadway: true,
    isPlay: true,
  },
  {
    id: '03',
    name: 'Death of A Salesman',
    isOnBroadway: true,
    isPlay: true,
  },
  {
    id: '04',
    name: 'Sleep No More',
    isOnBroadway: false,
    isPlay: false,
  },
  {
    id: '05',
    name: 'Topdog/Underdog',
    isOnBroadway: true,
    isPlay: true,
  },
  {
    id: '06',
    name: 'The Play That Goes Wrong',
    isOnBroadway: false,
    isPlay: true,
  },
  {
    id: '07',
    name: 'You Will Get Sick',
    isOnBroadway: false,
    isPlay: true,
  },
  {
    id: '08',
    name: 'Hadestown',
    isOnBroadway: true,
    isPlay: false,
  },
  {
    id: '09',
    name: 'KPOP',
    isOnBroadway: true,
    isPlay: false,
  },

]

function App() {
  return (
    <div>
    <Sidebar/>
    <ContentGrid
     data={mockData}
    >
    </ContentGrid>
    </div>
  );
}

export default App;
