import React from 'react';

const TopGenarated = async () => {
  const res = await fetch('https://promptgallery-ai.vercel.app/data.json');
  const data = await res.json()
  console.log(data);
  return (
    <div className='container mx-auto'>
      hello
    </div>
      
    
  );
};

export default TopGenarated;