This is a Next.js website built to showcase blogs with features including browsing, searching, and commenting on individual blog posts. The project comprises multiple components responsible for different functionalities.

Components Overview

Home Page (Home.jsx)
The Home component serves as the landing page of the website. It displays a hero section introducing the website and showcases the latest blog posts. Users can click on the "View All Post" button to navigate to the full blog list.


Blogs Page (Blogs.jsx)
The Blogs component presents a paginated view of all available blog posts. It includes a search bar to filter blogs by title. Each blog post is displayed using the BlogCard component. PaginationControls allow users to navigate through multiple pages of blog posts.


SingleBlog Page (SingleBlog.jsx)
The SingleBlog component displays a single blog post along with its details, including title, category, author information, publication date, image, and description. Users can leave comments on the blog post, which are displayed below the post along with user information.


Additional Components

-BlogCard: A reusable component to display individual blog cards.

-PaginationControls: Component for pagination navigation.

-SearchBox: Component for implementing search functionality.

-CommentBox: Component for user comments.

-UserCard: Component to display user information.



Data Sources

The project utilizes static data for blogs, comments, and users, which are imported from data.js file.
