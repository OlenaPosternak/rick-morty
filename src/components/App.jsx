import { Routes, Route } from 'react-router-dom';
import { Home } from './HomePage';
import { CharacterInfo } from './CharacterInfo';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:charactertId" element={<CharacterInfo />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
