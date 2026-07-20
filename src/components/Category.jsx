'use client';

import React from 'react';
import { Select, Label, ListBox } from '@heroui/react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const Category = ({ categories, selectedCategory }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (key) => {
    const value = key ?? '';
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set('category', value);
    } else {
      params.delete('category');
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      className="mt-4 w-64"
      placeholder="All Categories"
      value={selectedCategory || null}
      onChange={handleChange}
    >
      <Label className='text-xs font-light'>Select any Category</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
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
