
# Comfy Sloth

This project is a web application designed to function like a furniture shop. Users have the option to create an account on the website or simply browse as a guest, allowing them to view their shopping cart, proceed to checkout, and track their orders. However, this section is not dynamic. Certain features are accessible only after logging in; for instance, purchasing a product requires a user to log in.

For the project, I utilized Redux for state management, React Router for navigation, Axios for data fetching, Tailwind CSS and DaisyUI for styling and components, React Toastify for notifications, Vite for improved performance, React Query for data fetching and caching, and Dayjs for handling dates.


## Screenshots

![App Screenshot](https://i.imgur.com/ynVEujB.png)


## Functionalities

- Dark and light theme options
- User account creation and login functionality
- Product filtering based on various criteria (price, category, company, sorting, etc.)
- View products in grid or list format
- Access detailed information about a single product
- Choose product colors
- Add products to the shopping cart
- Adjust the quantity of products in the cart
- Remove products from the cart
- View the total price of products, including shipping and tax
- Complete the order through the checkout process
- Utilize local storage to save the cart, login information, and other preferences for an enhanced user experience
## Running Locally

Clone the project

```bash
  git clone https://github.com/DevShiba/comfy-sloth-store-react
```

Navigate to the project directory

```bash
  cd comfy-sloth-store-react
```

Install the dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

