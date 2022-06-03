import React, { useEffect, useState } from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1, 2]);

  useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if (scroll > height * 0.75 && !wait) {
        setPages((pages) => [...pages, pages.length + 1]);
        wait = true;
        setTimeout(() => {
          wait = false;
        }, 500);
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, []);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => {
        return (
          <FeedPhotos
            key={page}
            page={page}
            user={user}
            setModalPhoto={setModalPhoto}
          />
        );
      })}
    </div>
  );
};

export default Feed;
