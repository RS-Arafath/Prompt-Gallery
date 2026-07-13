import React from 'react';

const TopgenaratedDetailsPage = async({ params }) => {
  const { id } = await params
  console.log(id);
  return (
    <div className='container mx-auto'>
      to gen cont
    </div>
  );
};

export default TopgenaratedDetailsPage;