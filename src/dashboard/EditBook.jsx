import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';

const EditBook = () => {
  const { id } = useParams();
  const { title, authorname, imgUrl, category, description, pdfUrl } = useLoaderData();

  const bookCategories = [
    "Fiction", "Non-fiction", "Science Fiction", "Fantasy", "Biography", 
    "Mystery", "Romance", "Thriller", "Historical Fiction", "Self-help",
    "Philosophy", "Poetry", "Travel", "Science", "Business", "Education", 
    "Health & Fitness", "Cooking", "Art", "Children's", "Young Adult", 
    "Horror", "Graphic Novels", "Religious", "Drama", "Adventure", 
    "Comics", "Politics", "Psychology", "Spirituality"
  ];

  // Set initial category from the loader data
  const [selectedBookCategories, setSelectedBookCategories] = useState(category);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategories(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const updateBookObj = {
      title: form.title.value,
      authorname: form.authorname.value,
      imageUrl: form.imageUrl.value,
      description: form.description.value,
      category: selectedBookCategories,
      pdfUrl: form.pdfUrl.value,
    };

    // Send the update request to the backend
    fetch(`http://localhost:5000/update-book/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateBookObj),
    })
      .then(res => res.json())
      .then(data => {
        alert("Book updated successfully");
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update Book</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        
        {/* First Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput id="title" name='title' defaultValue={title} type="text" placeholder="Book Name" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorname" value="Author Name" />
            </div>
            <TextInput id="authorname" name='authorname' type="text" placeholder="Author Name" required defaultValue={authorname} />
          </div>
        </div>

        {/* Second Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image Url" />
            </div>
            <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Book Image Url" required defaultValue={imgUrl} />
          </div>

          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              name="category"
              id="inputState"
              className='w-full rounded'
              value={selectedBookCategories}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea
            defaultValue={description}
            id="description"
            type="text"
            name='description'
            placeholder="Write Your Book Description......"
            required
            rows={10} 
            className='w-full'
          />
        </div>

        {/* Book PDF URL */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pdfUrl" value="Pdf URL" />
          </div>
          <TextInput id="pdfUrl" name="pdfUrl" type="text" placeholder="Book Pdf URL" required defaultValue={pdfUrl} />
        </div>

        <Button type="submit" className='mt-5 bg-blue-800'>Upload Book</Button>
      </form>
    </div>
  );
}

export default EditBook;
