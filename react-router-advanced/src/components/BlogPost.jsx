import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); 
  return (
    <div>
      <h1>Article de blog ID : {id}</h1>
      <p>Ceci est un article dynamique chargé via l ID.</p>
    </div>
  );
}

export default BlogPost;
