import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }

  return response.json(); 
};

const PostsComponent = () => {
  const { data, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <p>Loding...</p>;
  }

  if (isError) {
    return <p>Error loading data.</p>;
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
