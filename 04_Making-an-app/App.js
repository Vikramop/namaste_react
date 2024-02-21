import React from 'react';
import ReactDOM from 'react-dom/client';

/* 
 * Our App Structure *

* Header
* - Logo
* - Nav items
* Body
* - RestaurantContainer
*  - RestaurantCard
*   - Image
*   - Name of the Restaurant,cuisine, starts, etc
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://penji.co/wp-content/uploads/2022/08/10.-mr.-d-food-logo.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resList } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } =
    resList?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
        alt="food"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <p>{avgRating} stars</p>
      <p>{costForTwo}</p>
      <p>{areaName} </p>
    </div>
  );
};

const resList = [
  {
    info: {
      id: '684427',
      name: 'Cafe Amudham',
      cloudinaryImageId: 'e62351117b87978ba8af4c541d834053',
      locality: 'Lalbhagh  Siddapura',
      areaName: 'Jayanagar',
      costForTwo: '₹400 for two',
      cuisines: ['South Indian', 'Snacks'],
      avgRating: 4.6,
      veg: true,
      parentId: '396620',
      avgRatingString: '4.6',
      totalRatingsString: '1K+',
      promoted: true,
      adTrackingId:
        'cid=11388237~p=2~eid=0000018d-c983-3b76-14af-e659008c0253~srvts=1708482837366~45995',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 23:59:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  description: '',
                  shortDescription: 'options available',
                  fontColor: '#7E808C',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=684427',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '2415',
      name: 'Veena Stores',
      cloudinaryImageId: 'vt1mquaxmeugaf9dl5pp',
      locality: 'Malleshwaram',
      areaName: 'Malleshwaram',
      costForTwo: '₹100 for two',
      cuisines: ['South Indian'],
      avgRating: 4.7,
      parentId: '20940',
      avgRatingString: '4.7',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 6.4,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '6.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 11:45:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=2415',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '56428',
      name: 'Puliyogare Point',
      cloudinaryImageId: 'wet9zrjusmdtkk16jlrz',
      locality: 'Basavanagudi',
      areaName: 'Basavanagudi',
      costForTwo: '₹150 for two',
      cuisines: ['South Indian'],
      avgRating: 4.6,
      parentId: '8409',
      avgRatingString: '4.6',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.9,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '3.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 22:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '10% OFF',
        subHeader: 'UPTO ₹40',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=56428',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '300804',
      name: 'Jose Mess',
      cloudinaryImageId: 'bbpwtyy08vavft4vqb7s',
      locality: 'BTM Layout',
      areaName: 'Tavarekere',
      costForTwo: '₹200 for two',
      cuisines: ['Indian'],
      avgRating: 4.3,
      parentId: '20129',
      avgRatingString: '4.3',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 22:45:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '15% OFF',
        subHeader: 'UPTO ₹45',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=300804',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '322',
      name: 'Madurai Idly Shop',
      cloudinaryImageId: 'axdyb4esldjcozqu6bqr',
      locality: '7th Block',
      areaName: 'Koramangala',
      costForTwo: '₹150 for two',
      cuisines: ['South Indian'],
      avgRating: 4.3,
      veg: true,
      parentId: '613',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      promoted: true,
      adTrackingId:
        'cid=11387984~p=5~eid=0000018d-c983-3b76-14af-e65c008c0514~srvts=1708482837366~45995',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 6,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '6.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=322',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '491572',
      name: 'Kaapi Katte',
      cloudinaryImageId: 'rmssgdcxzzkkjb9aussv',
      locality: 'Gubbi Veeranna Road',
      areaName: 'Malleshwaram',
      costForTwo: '₹200 for two',
      cuisines: ['South Indian', 'Combo'],
      avgRating: 4.2,
      veg: true,
      parentId: '113011',
      avgRatingString: '4.2',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 21:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=491572',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '743427',
      name: 'Paakashala',
      cloudinaryImageId: 'bfcea2108aea7a98f2b370b78b2fdac0',
      locality: 'Chamarajpet',
      areaName: 'Basavanagudi',
      costForTwo: '₹500 for two',
      cuisines: ['Indian'],
      avgRating: 4.3,
      veg: true,
      parentId: '6959',
      avgRatingString: '4.3',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.7,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '2.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 22:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹499',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=743427',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '501190',
      name: 'New Modern Hotel',
      cloudinaryImageId: 'fsxje4rpaw7ga1lwst4w',
      locality: 'Parvathipuram',
      areaName: 'Basavanagudi',
      costForTwo: '₹300 for two',
      cuisines: ['South Indian'],
      avgRating: 4.6,
      veg: true,
      parentId: '300304',
      avgRatingString: '4.6',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.7,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '1.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 19:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=501190',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '336364',
      name: 'Third Wave Coffee',
      cloudinaryImageId: 'd96267738c19ec62acb5390e52faba41',
      locality: 'Church Street',
      areaName: 'Ashok Nagar',
      costForTwo: '₹400 for two',
      cuisines: ['Beverages', 'Bakery', 'Continental'],
      avgRating: 4.6,
      parentId: '274773',
      avgRatingString: '4.6',
      totalRatingsString: '500+',
      promoted: true,
      adTrackingId:
        'cid=11388054~p=6~eid=0000018d-c983-3b76-14af-e65d008c066e~srvts=1708482837366~45995',
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.6,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '3.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 01:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  shortDescription: 'options available',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=336364',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '10844',
      name: 'Hotel Chandrika',
      cloudinaryImageId: 'bjsywjtbostst0h5cojy',
      locality: 'Cunningham Road',
      areaName: 'Vasanth Nagar',
      costForTwo: '₹300 for two',
      cuisines: ['South Indian', 'Chinese', 'Juices', 'Chaat', 'Ice Cream'],
      avgRating: 4.4,
      parentId: '21636',
      avgRatingString: '4.4',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.8,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '3.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 21:45:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '10% OFF',
        subHeader: 'ABOVE ₹1000',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=10844',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '625034',
      name: 'Sri Vishnu Grand',
      cloudinaryImageId: 'rctrmtzcgye6h6608g1d',
      locality: 'Gandhi Nagar',
      areaName: 'Majestic',
      costForTwo: '₹200 for two',
      cuisines: ['South Indian', 'North Indian', 'Chinese'],
      avgRating: 4.2,
      veg: true,
      parentId: '5697',
      avgRatingString: '4.2',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.6,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '2.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 22:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png',
          },
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=625034',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '226779',
      name: 'Chikkanna Tiffin Room',
      cloudinaryImageId: 'bzc2wmmqdjqcv5efz9er',
      locality: 'Nagrathpet',
      areaName: 'Basavanagudi',
      costForTwo: '₹200 for two',
      cuisines: ['South Indian', 'Snacks'],
      avgRating: 4.6,
      parentId: '20095',
      avgRatingString: '4.6',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 1,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '1.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 12:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=226779',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '69274',
      name: 'Chai Point',
      cloudinaryImageId: 'zoc6jrwby69bpa8qzcxc',
      locality: 'Ashok Nagar',
      areaName: 'Church Street',
      costForTwo: '₹150 for two',
      cuisines: [
        'Bakery',
        'Beverages',
        'Maharashtrian',
        'Snacks',
        'Street Food',
        'South Indian',
        'Punjabi',
        'Chaat',
        'Indian',
        'American',
        'North Indian',
        'Fast Food',
        'Desserts',
        'Cafe',
        'Healthy Food',
        'Home Food',
      ],
      avgRating: 4.6,
      parentId: '1607',
      avgRatingString: '4.6',
      totalRatingsString: '5K+',
      promoted: true,
      adTrackingId:
        'cid=10932303~p=9~eid=0000018d-c983-3b76-14af-e660008c0952~srvts=1708482837366~45995',
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '3.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 23:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  description: '',
                  shortDescription: 'options available',
                  fontColor: '#7E808C',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=69274',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '719639',
      name: 'New Udupi Upahar',
      cloudinaryImageId: 'b14cd9fc40129fcfb97aa7e621719d07',
      locality: 'Shivashankar Plaza',
      areaName: 'Central Bangalore',
      costForTwo: '₹300 for two',
      cuisines: [
        'North Indian',
        'South Indian',
        'Chinese',
        'Tandoor',
        'Chaat',
        'Beverages',
      ],
      avgRating: 4.6,
      veg: true,
      parentId: '14579',
      avgRatingString: '4.6',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '1.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 22:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=719639',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '96527',
      name: 'Vijayalakshmi',
      cloudinaryImageId: 'r94u50lcikbaqulaofdi',
      locality: 'Bull Temple Rd',
      areaName: 'Basavanagudi',
      costForTwo: '₹150 for two',
      cuisines: ['South Indian', 'North Indian', 'Chinese'],
      avgRating: 4.3,
      veg: true,
      parentId: '20982',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.6,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '3.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 22:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹349',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=96527',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '69997',
      name: 'SLV Corner Restaurant',
      cloudinaryImageId: 'vpp0p2bjtxr3qnis6zug',
      locality: 'Basavanagudi',
      areaName: 'Basavanagudi',
      costForTwo: '₹450 for two',
      cuisines: ['Chinese', 'South Indian', 'North Indian', 'Desserts'],
      avgRating: 4.6,
      parentId: '21456',
      avgRatingString: '4.6',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-21 22:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=69997',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      {/* 
      No key(not Recomended) >>>> index >>>> unique id (Best Practice)
      */}

      <div className="res-container">
        {/* Instead of using loop, we can iterate using map  */}

        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
