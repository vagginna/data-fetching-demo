import React from 'react';

const PostItem = React.memo(({ post }) => {
  console.log('Рендер поста:', post.id); // Для отслеживания рендеров
  return (
    <li>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </li>
  );
});

export default PostItem;
