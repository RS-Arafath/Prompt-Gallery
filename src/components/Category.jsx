import React from 'react';

const Category = async() => {
   const filePath = path.join(process.cwd(), 'public', 'category.json');
      const fileContents = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(fileContents);
      const category = data;
  return (
    <div>
      
    </div>
  );
};

export default Category;