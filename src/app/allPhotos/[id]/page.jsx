import React from 'react';

const PhotoDetailsPage = async({ params }) => {
  const { id } = await params
  console.log(id);
  return (
    <div>
      
    </div>
  );
};

export default PhotoDetailsPage;