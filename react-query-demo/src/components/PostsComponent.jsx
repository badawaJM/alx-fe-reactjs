import { useQuery } from 'react-query';

// Fonction pour récupérer les données
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error(`Erreur ${response.status} : ${response.statusText}`);
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 30, 
    refetchOnWindowFocus: false,
    keepPreviousData: true, 
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Erreur : {error.message}</p>;
  }

  return (
    <div>
      <h1>List of Posts</h1>
      <button onClick={refetch}>Reload data</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
