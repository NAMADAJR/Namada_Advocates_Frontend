import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Homepage = () => {
  // Client reviews data
  const reviews = [
    {
      id: 1,
      text: "Amazing service and timely communication",
      author: "Jessica M.",
      rating: 5
    },
    {
      id: 2,
      text: "They make it simple for me to maneuver through a difficult process.",
      author: "Robert L.",
      rating: 5
    },
    {
      id: 3,
      text: "The team provided exceptional legal advice that saved our business.",
      author: "Michael T.",
      rating: 5
    },
    {
      id: 4,
      text: "Responsive, knowledgeable, and professional. Highly recommended.",
      author: "Sarah W.",
      rating: 4
    },
    {
      id: 5,
      text: "They handled my case with expertise and empathy. Truly grateful.",
      author: "David K.",
      rating: 5
    },
    {
      id: 6,
      text: "Outstanding results with attention to every detail. Will use again.",
      author: "Amanda P.",
      rating: 5
    },
    {
      id: 7,
      text: "Their strategic approach made all the difference in our legal matter.",
      author: "Thomas G.",
      rating: 5
    },{
      id: 8,
      text: "They handled my case with expertise and empathy. Truly grateful.",
      author: "David K.",
      rating: 5
    },
    {
      id: 9,
      text: "Outstanding results with attention to every detail. Will use again.",
      author: "Amanda P.",
      rating: 5
    }
  ];

  // State for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Number of reviews to show at once (2 on desktop, 1 on mobile)
  const reviewsPerPage = 2;
  
  // Calculate the total number of pages
  const pageCount = Math.ceil(reviews.length / reviewsPerPage);

  // Handle navigation with animation
  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pageCount);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  const goToPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pageCount) % pageCount);
        setIsAnimating(false);
      }, 300);
    }
  };

  // Auto play functionality
  useEffect(() => {
    let interval;
    
    if (autoPlay && !isAnimating) {
      interval = setInterval(() => {
        goToNext();
      }, 5000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoPlay, currentIndex, isAnimating]);

  // Get current reviews to display
  const getCurrentReviews = () => {
    const startIndex = currentIndex * reviewsPerPage;
    return reviews.slice(startIndex, startIndex + reviewsPerPage);
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center mt-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            fill={i < rating ? "#FFD700" : "none"} 
            stroke={i < rating ? "#FFD700" : "#D1D5DB"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-300 py-4 h-auto text-[1.6rem]">
        <div className="container mx-auto px-4 flex items-center justify-between  ">
          <div className="flex items-center">
            <img src="/api/placeholder/40/40" alt="Logo" className="rounded-full bg-white p-1" />
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-800 font-bold hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-800 font-bold  hover:text-blue-600 transition-colors">Team</a>
            <a href="#" className="text-gray-800 font-bold hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-gray-800 font-bold hover:text-blue-600 transition-colors">Contact</a>
            <a href="#" className="text-gray-800 font-bold hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="bg-blue-600 text-white font-bold  px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Consultation</a>
          </nav>
        </div>
      </header>

      <section className="relative">
        <img src="src/components/Homeimage.jpg" alt="Lawyers in meeting" className="w-full h-[55rem] object-cover" />
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <button className="bg-blue-400 text-black py-4 px-16 text-lg font-medium">
            OPTIONS
          </button>
        </div>
      </section>

      {/* Client Reviews Section with Stylish Carousel */}
      <section className="container mx-auto px-4 py-16 mt-8">
        <h2 className="text-3xl font-bold text-center mb-12">Client Reviews</h2>
        
        <div className="relative px-10">
          {/* Carousel container */}
          <div className={`flex gap-6 justify-center transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {getCurrentReviews().map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 text-blue-100">
                  <Quote size={64} />
                </div>
                
                {/* Profile image */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-gray-600 rounded-full border-4 border-white shadow-md"></div>
                </div>
                
                {/* Review text */}
                <p className="text-center text-gray-700 mb-4 relative z-10">
                  "{review.text}"
                </p>
                
                {/* Rating */}
                <StarRating rating={review.rating} />
                
                {/* Author */}
                <p className="text-center font-medium text-blue-600 mt-3">
                  {review.author}
                </p>
                
                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-50 rounded-tl-full -z-10"></div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={goToPrev} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <ChevronLeft size={24} className="text-blue-600" />
          </button>
          
          <button 
            onClick={goToNext} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <ChevronRight size={24} className="text-blue-600" />
          </button>
          
          {/* Pagination indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`w-10 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-blue-600 w-12' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="bg-blue-200 p-4 w-20"></div>
            <div className="text-center">FOOTER</div>
            <div className="w-20"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;