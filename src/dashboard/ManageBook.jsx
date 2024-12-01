import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import 'flowbite/dist/flowbite.min.css';
import { Link } from 'react-router-dom';

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  // Delete a book
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      fetch(`http://localhost:5000/book-delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
            alert("Book deleted successfully!");
            setAllBooks(allBooks.filter((book) => book._id !== booId));
          }
        )
    }
  };

  return (
    <div className="my-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Manage Your Book</h2>

      {/* Manage your book data */}
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>Sl No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allBooks.map((book, index) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={book._id}>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell>{book.title}</Table.Cell>
              <Table.Cell>{book.authorname}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>{`$${book.price}`}</Table.Cell>
              <Table.Cell className="flex items-center space-x-2">
                <Link
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  to={`/admin/dashboard/update-book/${book._id}`}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-red-800'
                  type='button'
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageBook;
