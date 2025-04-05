import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

const ApiExample: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Access environment variables using import.meta.env
    const apiUrl = import.meta.env.VITE_API_URL;
    
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${apiUrl}/posts`);
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  return (
    <div>
      <h1>{import.meta.env.VITE_SITE_TITLE}</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiExample;