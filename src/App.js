import React, { Suspense } from 'react';

const PostsList = React.lazy(() => import('./components/PostsList'));

function App() {
  return (
    <div>
      <h1>Получение данных с API</h1>
      <Suspense fallback={<p>Загрузка компонента...</p>}>
        <PostsList />
      </Suspense>
    </div>
  );
}

export default App;
