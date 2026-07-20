'use client';

import React from 'react';
import { Select, Label, ListBox } from '@heroui/react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const Category = ({ categories, selectedCategory }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (key) => {
    const params = new URLSearchParams(searchParams.toString());

    if (key && key !== 'all') {
      params.set('category', key);
    } else {
      params.delete('category');
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      className="mt-4 w-50"
      placeholder="All Photos"
      value={selectedCategory || 'all'}
      onChange={handleChange}
    >
      <Label className="block mb-1 text-right text-gray-500 font-medium">Search By Category</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="all" textValue="All Photos">
            All Photos
          </ListBox.Item>
          {categories.map((cat) => (
            <ListBox.Item key={cat.id} id={cat.name} textValue={cat.name}>
              {cat.name}
            </ListBox.Item>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
};

export default Category;
