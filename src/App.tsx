import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from '@store';
import { ThemProvider } from '@providers';
import { router } from '@routes';

function App() {
  return (
    <Provider store={store}>
      <ThemProvider>
        <RouterProvider router={router} />
      </ThemProvider>
    </Provider>
  );
}

export default App;
