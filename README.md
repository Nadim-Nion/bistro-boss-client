# Bistro Boss Restaurant (Client Side)

Welcome to the Bistro Boss Restaurant Client-Side Repository! This repository contains the frontend code for the Bistro Boss Restaurant application, built using modern web technologies to provide a seamless and engaging user experience.

## Technologies Used

### Client Side:
1. **React** - A JavaScript library for building user interfaces.
2. **React Router** - A collection of navigational components for React.
3. **Firebase** - Used for Authentication & Hosting.
4. **Axios JS** - A promise-based HTTP client for the browser and Node.js.
5. **Tailwind CSS** - A utility-first CSS framework.
6. **Daisy UI** - A component library for Tailwind CSS.
7. **React Helmet** - A document head manager for React.
8. **React Hook Form** - A library for managing form state in React.
9. **React Icons** - Popular icons as React components.
10. **React Parallax** - Parallax scrolling effects for React.
11. **React Responsive Carousel** - Carousel component for React.
12. **React Simple Captcha** - Captcha implementation for React.
13. **React Tabs** - A React component for creating tabs.
14. **Recharts** - A composable charting library for React.
15. **Sweet Alerts** - Beautiful replacement for JavaScript's popup boxes.
16. **Swiper** - A modern touch slider.
17. **Stripe** - Payment processing platform.

### Server Side:
1. **CORS** - Middleware to enable CORS.
2. **Dotenv** - Loads environment variables from a .env file.
3. **Express.js** - Web application framework for Node.js.
4. **Node.js** - JavaScript runtime built on Chrome's V8 engine.
5. **MongoDB** - NoSQL database.
6. **JWT** - JSON Web Tokens for secure data transmission.
7. **Stripe** - Payment processing platform.

## Key Features

1. **Navigation**:
   - The website has 6 main navigation links for easy access to different sections.

2. **Home Page**:
   - Unregistered users can view a carousel, swiper, menu items with a "View Full Menu" button, a parallax section, customer reviews, and a footer.

3. **Dashboard**:
   - Regular users and admins have distinct views. Admins can see additional stats not visible to regular users.

4. **Our Menu Page**:
   - Regular users can see all menu items with descriptions and an "Order Now" button.

5. **Order Food Route**:
   - After clicking "Order Now," users navigate to the "Order Food" route to see menu categories.

6. **Protected Routes**:
   - Users must register or log in to add items to the cart, ensuring secure access to the ordering system.

7. **User Authentication**:
   - Registered users can add products to their cart and proceed with orders.

8. **Cart and Checkout**:
   - Users can view their cart, proceed to checkout, and use the Stripe payment gateway to complete their purchase.

9. **Payment History**:
   - Users can view their payment history from the dashboard.

10. **Admin Dashboard**:
    - Admins have access to additional links: Admin Home, Add Items, Manage Items, Manage Bookings, and All Users.

11. **Admin Home**:
    - Displays stats related to revenue, customers, menus, and orders with bar and pie charts.

12. **Add Items**:
    - Admins can add new menu items by filling out a form.

13. **Manage Items**:
    - Admins can view and manage all menu items.

14. **User Management**:
    - Admins can view all registered users, promote users to admin, or remove admin privileges.

15. **API Security**:
    - JWT is used to secure APIs, ensuring only valid users can access data.

16. **Admin Route Protection**:
    - Unauthorized users cannot access admin routes, even if they manually enter the URL.

17. **Stripe Integration**:
    - Stripe payment gateway is implemented for secure transactions.

18. **User Registration and Login**:
    - New users can register, and existing users can log in. Users can easily navigate between login and registration forms.

19. **Form Management**:
    - Forms are implemented using Daisy UI and React Hook Form for a smooth user experience.

Explore the repository and contribute to enhance the Bistro Boss Restaurant application!
## Live Website

* Firebase: https://bistro-boss-client-8d542.web.app/

* Netlify: https://bistro-boss-client-nion.netlify.app/

* Surge: https://waiting-lettuce.surge.sh/
## Screenshots

* Image 1: 
![Bistro-Home 1](https://github.com/Nadim-Nion/bistro-boss-client/assets/60613933/3f2a73e9-e709-4b66-a25b-807639326f8f)

* Image 2: 
![Bistro-Home 2 Admin](https://github.com/Nadim-Nion/bistro-boss-client/assets/60613933/bca8755d-65f8-42ca-9e62-3e737870ba2f)

* Image 3: 
![Bistro-Home 3 Admin](https://github.com/Nadim-Nion/bistro-boss-client/assets/60613933/b2f60e54-2a3c-4885-bc64-3ea226ab2f8b)

* Image 4: 
![Bistro-Home 4 Admin](https://github.com/Nadim-Nion/bistro-boss-client/assets/60613933/eb0fe72e-9868-4331-a032-cff16aa1255c)

* Image 5: 
![Bistro-Home 5 Admin](https://github.com/Nadim-Nion/bistro-boss-client/assets/60613933/cca574fa-7f29-43d8-9ad1-a9b927b8a8fd)

* Image 6: 
![Bistro-Menu 6 Admin](https://github.com/Nadim-Nion/bistro-boss-client/assets/60613933/68cd314c-abee-4293-8640-47ba7a99047d)

* Image 7: 
![Bistro-Order-Food 7 Admin](https://github.com/Nadim-Nion/bistro-boss-client/assets/60613933/be0ddee3-8264-4d8f-90ce-152cab62161b)

* Image 8: 
![Bistro-Boss-Restaurant 8 User](https://github.com/Nadim-Nion/bistro-boss-client/assets/60613933/98aff489-9e19-42a7-9781-5cbbbbc9b7f2)

* Image 9:
 ![Bistro-Boss-Restaurant 9 User](https://github.com/Nadim-Nion/bistro-boss-client/assets/60613933/33cf93cf-9d96-46e8-a0e8-bcdd346c092f)

* Image 10: 
![Bistro-Boss-Restaurant 10 User](https://github.com/Nadim-Nion/bistro-boss-client/assets/60613933/3f3347fc-cd7e-4869-bc23-b11b6cd806f5)

* Image 11: 
![Bistro-Sign-Up 11](https://github.com/Nadim-Nion/bistro-boss-client/assets/60613933/2932fe4a-d686-4634-89c2-dab06f71b6cc)

* Image 12: 
![Bistro-Login 12](https://github.com/Nadim-Nion/bistro-boss-client/assets/60613933/f0ae83e8-5d28-4ba5-acdd-07bafbaa8fa1)

## Getting Startted

### Prerequisites

- Node.js installed on your local machine.
- MongoDB instance (local or cloud-based) for data storage.
- SMTP service credentials for sending emails (e.g., Gmail SMTP).

## Installation


1. Clone the repository:

   ```bash
   git clone https://github.com/Nadim-Nion/bistro-boss-client.git
   ```

2. Install dependencies:

   ```bash
   cd bistro-boss-client
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory with the following variables:

   ```plaintext
   PORT=3000
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret_key>
   SMTP_HOST=<smtp_host>
   SMTP_PORT=<smtp_port>
   SMTP_USER=<smtp_username>
   SMTP_PASS=<smtp_password>
   ```

4. Start the server:

   ```bash
   npm start
   ```Absolutely, here's the section on commits with a potential improvement:

## Commits

This repository adheres to a structured commit message convention to enhance readability and maintainability. Here's an overview of the key commit types:

- **feat:** Introduces a new feature to the application.
- **fix:** Addresses a bug or issue identified in the codebase.
- **docs:** Encompasses changes made to documentation, such as updates, additions, or corrections.
- **style:** Covers formatting adjustments, whitespace changes, or fixing minor inconsistencies like missing semicolons.
- **refactor:** Represents code structure improvements without altering functionality. This can involve code organization, renaming variables or functions, or improving readability.
- **test:** Introduces new tests or updates existing tests to ensure code quality and maintainability.
- **chore:** Encompasses changes that don't directly affect the application's functionality, such as updating build tasks, package manager configurations, or dependency versions.

**Optional Improvement:**

Consider adopting a more comprehensive commit message convention like Conventional Commits ([https://www.conventionalcommits.org/en/v1.0.0-beta.4/](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)). This approach provides a standard format for commit messages, including type, scope (optional), and a clear description of the change, making it easier to generate changelogs, automate workflows, and collaborate effectively.

By following these guidelines and potentially adopting a more detailed convention, you'll ensure clear and consistent commit messages that benefit you and your team in the long run.
## Contributing

Contributions are always welcome!

Contributions are welcome! Please open a pull request for any improvements or features.

Please adhere to this project's `code of conduct`.


## License

This project is licensed under the [MIT License](LICENSE).


## Deployment

To deploy this project run

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Nadim-Nion/bistro-boss-client.git
git push -u origin main

```


## Tech Stack

**Client:** React+Vite, React Router, Firebase (Authentication & Hosting), Tailwind CSS, Daisy UI, Axios JS

**Server:** Express.js, Node.js, JWT, Stripe

**Database:** MongoDB

**Tools:** Vite, Vercel, npm, Surge, Netlify

**State Management:** Context API



## FAQ

#### Is this website reponsible?

Answer : Yes, the full website is responsive for the all devices (Desktop, Tablet and Phone)

#### Is this website store data to the database?

Answer : I have stored all the data in MongoDB.

## 🚀 About Me
Hi, I am Nadim Mahmud Nion. I have recently concluded my graduation from the department of Computer Science and Engineering (CSE) at the Daffodil International University (DIU). I have been learning MERN Stack Web Development since 2022. I am expertise in the following skills:

* React

* Express.js 

* Node.js 

* MongoDB

* JWT

* Stripe

* Vite

* React Router

* Firebase (Authentication & Hosting)

* Vercel

* JavaScript

* Advanced JavaScript

* Daisy UI 

* Bootstrap

* Tailwind

* HTML5

* CSS3

* Media Query

I have built multiple projects using these skills. You are invited to my GitHub profile to know about my projects and don't forget to give a star to my projects.

