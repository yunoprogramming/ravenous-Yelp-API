const apiKey = '2Jr3Uk2B5v2y1P58xp-sJ7GhkBvzi7anK2-zI8VHlKErqSBAjMjqpJM_wfMRvhup0hCOHwEAiTip4wQa2Hqt7kNvRNONkqUENxO5Uvkip1Xwo7A3mMp_2Z0zHBSYYnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }

};

export default Yelp;