import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { getOne } from '../../utils/service';
import Loading from '../../components/Loading';

export default function Readmore() {
  const [post, setPost] = useState();
  const { id } = useParams();

  const getUnicPost = async () => {
    const { data } = await getOne(`/posts/${id}`);
    setPost(data);
  }

  useEffect(() => {
    getUnicPost()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      { console.log(post) }
      <Header title="LEIA MAIS" />
      {post === undefined ? (<Loading />) : (
        <Card 
          title={post.title}
          content={post.content}
        />
      )}
    </>
  )
}
