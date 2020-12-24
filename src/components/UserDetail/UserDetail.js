import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import ViewComments from '../../components/ViewComments/ViewComments'

const UserDetail = () => {
  const {id} = useParams();
  const [detail, setDetail] = useState();
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
    .then(response => response.json())
    .then(data => setDetail(data))
  }, []);

  console.log(detail);
  return (
    <div>
      <ViewComments detail={detail}></ViewComments>
    </div>
  );
}

export default UserDetail;
