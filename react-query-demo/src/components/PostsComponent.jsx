import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error(`Erreur ${response.status} : ${response.statusText}`);
  }

  return response.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <p>Chargement des données...</p>;
  }

  if (isError) {
    return <p>Erreur : {error.message}</p>;
  }

  return (
    <div>
      <h1>Liste des Posts</h1>
      <button onClick={refetch}>Recharger les données</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
