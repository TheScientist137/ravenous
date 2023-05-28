# Ravenous

Ravenous is a React application that allows users to search for businesses based on a search term and location. The app retrieves data from the Yelp API and displays the results in a list format. Users can also sort the results based on different criteria such as "Best Match," "Highest Rated," or "Most Reviewed."

## Features

- Search for businesses by entering a search term and location.
- Sort the search results based on different criteria.
- View detailed information about each business, including images, name, address, category, rating, and review count.
- Auto-completion of addresses in the location input field.
- Pressing "Enter" or "Return" on the keyboard triggers the search.
- Footer component with a link to the creator's GitHub account.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Obtain a Yelp API key and replace the `apiKey` variable in the `Yelp.js` file with your key.
5. Run `npm start` to start the development server.
6. Open the application in your browser at `http://localhost:3000`.

## Usage

1. Enter a search term and location in the search bar.
2. Select a sorting option from the dropdown menu.
3. Press "Enter" or "Return" on the keyboard to initiate the search.
4. View the list of businesses that match the search criteria.
5. Explore detailed information about each business.
6. Click on the business name to open the Yelp page for that business.
7. Click on the business image to open a larger version of the image.
8. Click on the business address to open the location on Google Maps.

## Components

### App

The main component that renders the Ravenous application.

#### Props

- None

### BusinessList

Renders a list of business components.

#### Props

- `businesses`: An array of business objects to be displayed.

### Business

Represents a single business item in the list.

#### Props

- `business`: An object containing information about the business.

### SearchBar

Renders the search bar and sorting options.

#### Props

- `searchYelp`: A function to be called when the search button is clicked or "Enter" is pressed. It takes three parameters: `term` (the search term), `location` (the search location), and `sortBy` (the sorting option).

### Yelp

Handles the API calls to the Yelp API.

#### Methods

- `search`: Makes a request to the Yelp API to search for businesses based on the provided parameters. Returns a promise that resolves to an array of business objects.

### Footer

Displays the footer section with a link to the creator's GitHub account.

#### Props

- None

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Yelp API: Provides access to business data, ratings, reviews, and more.
- CSS Modules: Allows for modular and scoped styling of React components.
- FontAwesome: A library of icons used for displaying the heart icon.

## Credits

This project was created as part of a coding exercise and is based on the curriculum of the Full-Stack Web Development course by Codecademy.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

Feel free to contribute, report issues, or suggest improvements. Happy searching!
