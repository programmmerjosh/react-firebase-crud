import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from '../pages/AllMeetups';
import NewMeetupPage from '../pages/NewMeetup';
import FavoritesPage from '../pages/Favorites';
import Layout from './layout/Layout';

function App() {
  return <Layout>
  <Routes>
    <Route path="/" element={<AllMeetupsPage />} exact />
    <Route path="/new-meetup" element={<NewMeetupPage />} />
    <Route path="/favorites" element={<FavoritesPage />} />
  </Routes>
  </Layout>;
}

export default App;
