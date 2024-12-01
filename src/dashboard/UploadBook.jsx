import React, { useState } from 'react';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction", "Non-fiction", "Science Fiction", "Fantasy", "Biography", "Mystery", "Romance", "Thriller", "Historical Fiction", "Self-help", "Philosophy", "Poetry", "Travel", "Science", "Business", "Education", "Health & Fitness", "Cooking", "Art", "Children's", "Young Adult", "Horror", "Graphic Novels", "Religious", "Drama", "Adventure", "Comics", "Politics", "Psychology", "Spirituality"
  ];

  const [selectedBookCategories, setSelectedBookCategories] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategories(event.target.value);
  };

  const handleBooksSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const authorname = form.authorname.value;
    const imageUrl = form.imageUrl.value;
    const description = form.description.value;
    const category = form.category.value;
    const pdfUrl = form.pdfUrl.value;

    const bookObj = {
      title,
      authorname,
      imageUrl,
      description,
      category,
      pdfUrl,
    };

    // Make an API call to save the book to the database
    fetch("http://localhost:5000/upload-book", { // Fixed URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        alert("Successfully Uploaded Book");
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        alert("Failed to upload the book. Please try again.");
      });

    // Optionally, clear the form after submission
    form.reset();
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
      <form onSubmit={handleBooksSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        
        {/* First Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput id="title" name='title' type="text" placeholder="Book Name" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorname" value="Author Name" />
            </div>
            <TextInput id="authorname" name='authorname' type="text" placeholder="Author Name" required />
          </div>
        </div>

        {/* Second Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image Url" />
            </div>
            <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Book Image Url" required />
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
          <TextInput id="pdfUrl" name="pdfUrl" type="text" placeholder="Book Pdf URL" required />
        </div>

        <Button type="submit" className='mt-5 bg-blue-800'>Upload Book</Button>
      </form>
    </div>
  );
};

export default UploadBook;
