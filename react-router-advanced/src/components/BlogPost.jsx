import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams(); // Récupération de l'ID dynamique depuis l'URL.

  return <h1>Article de blog ID : {postId}</h1>;
}

export default BlogPost;
