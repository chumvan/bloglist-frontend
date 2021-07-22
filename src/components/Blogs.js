import Blog from './Blog'

const Blogs = ({ blogs, handleLike }) => {
  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleLike={handleLike} />
      ))}
    </div>
  )
}

export default Blogs