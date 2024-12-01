import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Application React Query</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
