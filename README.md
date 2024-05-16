
<p>This is a Next.js website built to showcase blogs with features including browsing, searching, and commenting on individual blog posts. The project comprises multiple components responsible for different functionalities.</p></br>


<h2>Components Overview</h2>

<h3>Home Page (Home.jsx)</h3>
<p>The Home component serves as the landing page of the website. It displays a hero section introducing the website and showcases the latest blog posts. Users can click on the "View All Post" button to navigate to the full blog list.</p>

<h3>Blogs Page  (Blogs.jsx)</h3>
<p>The Blogs component presents a paginated view of all available blog posts. It includes a search bar to filter blogs by title. Each blog post is displayed using the BlogCard component. PaginationControls allow users to navigate through multiple pages of blog posts.</p>

<h3>SingleBlog Component (SingleBlog .jsx)</h3>
<p>The SingleBlog component displays a single blog post along with its details, including title, category, author information, publication date, image, and description. Users can leave comments on the blog post, which are displayed below the post along with user information.</p></br>


<h2>Additional Components</h2>
<p><b>BlogCard</b>: A reusable component to display individual blog cards.</p>
<p><b>PaginationControls</b>: Component for pagination navigation.</p>
<p><b>SearchBox</b>: Component for implementing search functionality.</p>
<p><b>CommentBox</b>: Component for user comments.</p>
<p><b>UserCard</b>: Component to display user information.</p></br>

<h2>Data Sources</h2>
<p>The project utilizes static data for blogs, comments, and users, which are imported from data.js file.</p>


