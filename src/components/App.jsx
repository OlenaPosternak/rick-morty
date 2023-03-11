import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { NotFound } from '../pages/NotFound';
import { Loader } from './Loader';

const Home = lazy(() => import('../pages/Home/HomePage'));
const CharacterInfo = lazy(() =>
  import('../pages/CharacterInfo/CharacterInfo')
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:charactertId" element={<CharacterInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
