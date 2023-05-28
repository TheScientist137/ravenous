import React from "react";
import styles from "./Business.module.css";

const Business = ({ business }) => {
    const { name, imageSrc, address, city, state, zipCode, category, rating, reviewCount, url } = business;

    const handleImageClick = () => {
        window.open(imageSrc, "_blank");
    }

    const handleNameClick = () => {
        window.open(url, "_blank");
    }

    const handleLocationClick = () => {
        const formattedLocation = `${address}, ${city}, ${state}, ${zipCode}`;
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formattedLocation)}`;
        window.open(googleMapsUrl, "_blank");
    }

    return (
        <div className={styles.Business}>
            <div className={styles.imageContainer}>
                <img src={imageSrc} alt="" onClick={handleImageClick} />
            </div>
            <h2 onClick={handleNameClick}>{name}</h2>
            <div className={styles.BusinessInformation}>
                <div className={styles.BusinessAdress}>
                    <p onClick={handleLocationClick}>{address}</p>
                    <p onClick={handleLocationClick}>{city}</p>
                    <p onClick={handleLocationClick}>{`${state} ${zipCode}`}</p>
                </div>
                <div className={styles.BusinessReviews}>
                    <h3>{category.toUpperCase()}</h3>
                    <h3 className={styles.rating}>
                        {`${rating} stars`}
                    </h3>
                    <p>{`${reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;