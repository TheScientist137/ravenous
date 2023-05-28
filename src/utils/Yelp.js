const apiKey = 'jV4aGsb8C9ae2gj-0FOO7oFZr8uDA9IqDYz9_V37XTejHBOL95XR6pOpG7oscssPxkMaH7bIeZEq4-P9JMDcLFa98NYihCpHBvVY4LNc5f0tjRx2lcY29wc6v2psZHYx';

const Yelp = {
  async search(term, location, sortBy) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const jsonResponse = await response.json();
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map((business) => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
        url: business.url
      }));
    }
  },
};

export default Yelp;
