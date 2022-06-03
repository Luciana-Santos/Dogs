import React, { useEffect } from 'react';
import FeedPhotoItem from './FeedPhotoItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../help/Error';
import Loading from '../help/Loading';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ user, page, setModalPhoto }) => {
  const { data, loading, request, error } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total: 3, user });
      const { json } = await request(url, options);
    }
    fetchPhotos();
  }, [request, user, page]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
