# Assignment_1_PROG2390

Assignment 1 for the Small Business Solutions class (PROG2390)

# Description

This project is an inventory management web application built for the PROG2390 - Small Business Solutions course. It provides a user interface for managing an inventory list, including Create, Read, Update, and Delete (CRUD) operations. The application uses the following technologies:

- **Backend:** Node.js, Express.js, Sequelize (ORM), PostgreSQL (hosted on Neon.tech)
- **Frontend:** EJS (templating engine)

# Installation

1.  **Clone the Repository:**
    [https://github.com/Fer-work/Assignment_1_PROG2390.git](https://github.com/Fer-work/Assignment_1_PROG2390)

    ```bash
    git clone https://github.com/Fer-work/Assignment_1_PROG2390.git
    cd Assignment_1_PROG2390
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    - Create a `.env` file in the root directory of the project.
    - Add your PostgreSQL connection URL (from Neon.tech) to the `.env` file. For example:
      ```
      DATABASE_URL=postgres://user:password@host:port/database
      ```
      _(Make sure to replace with your actual credentials.)_

4.  **Run the Application:**
    - **Development Mode (using Nodemon):**
      ```bash
      npm run dev
      ```
    - **Production Mode:**
      ```bash
      npm start
      ```
      or
      ```
      node server.js
      ```

# Usage

1.  Access the application in your web browser at `http://localhost:3000` (or the port your server is running on).
2.  You will see the inventory list page.
3.  Use the provided forms to add, edit, or delete items from the inventory.

# Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your contributions.
3.  Make your changes.
4.  Submit a pull request.

I will review pull requests and merge them if the changes are appropriate.

# Authors and Acknowledgements

- Fernando Sanchez Gutierrez
- **Inspiration and Guidance:**
  - [DCodeMania](https://www.youtube.com/watch?v=7NnBCKJTZkc)
  - [Professor Harry's Tutorials](https://www.youtube.com/watch?v=Hskz5Ex_gcQ)

# License

MIT License (See [LICENSE](LICENSE) file for details)

# Project Status

Completed for Assignment 1 submission. While the core functionality is implemented, due to time constraints, I acknowledge that there are areas for improvement, such as additional input validation and more robust error handling. I plan to revisit and enhance this project for use in a personal website in the future.
