import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  
  const blogPosts = [
    {
      id: 1,
      title: "Day 1: Journeying Back in Time – Exploring Intramuros and Rizal Park",
      date: "April 7, 2025",
      summary: "Our journey started in the center of Manila, where we visited the historic sites of Intramuros and Rizal Park.",
      content: "Our journey started in the center of Manila, where we visited the historic sites of Intramuros and Rizal Park. As we explored the cobblestone lanes of Intramuros, we were captivated by the Spanish colonial architecture, ancient churches, and preserved relics that narrated tales of life during the colonial era. A key moment was touring Fort Santiago, where we wandered through the very halls that Jose Rizal occupied in his last days. Afterward, we walked through Rizal Park, savoring its expansive areas and tranquil atmosphere. Being in front of the Rizal Monument was significant, as it symbolizes our national identity. We observed tourists and families appreciating the park, which highlighted for us how history and contemporary living harmoniously coexist in this location. It was an excellent beginning that ignited our interest and admiration for Philippine culture.",
      images: [
        "/day1/day1 (1).jpeg", 
        "/day1/day1 (2).jpeg", 
        "/day1/day1 (3).jpeg",
        "/day1/day1 (4).jpeg",
        "/day1/day1 (5).jpeg",
        "/day1/day1 (6).jpeg"
      ]
    },
    {
      id: 2,
      title: "Day 2: Culture and Safety – An Innovative and Secure Exploration of Subic Bay",
      date: "April 8, 2025",
      summary: "On our second day, we visited Subic Bay, where we enjoyed a distinctive blend of artistic and practical education.",
      content: "On our second day, we visited Subic Bay, where we enjoyed a distinctive blend of artistic and practical education. We started at the Subic Bay Exhibition Hall, where vibrant artworks by local artists portrayed narratives of Filipino strength and optimism. The imagination in every artwork reminded us of the significant role art plays in conveying identity and history. Afterward, we traveled to the Subic Bay Port. It was our initial experience witnessing the management of large vessels, and we noted the logistics involved in cargo handling. It was remarkable to see how seamlessly everything was organized, from the arrival of ships to the storage and distribution. We then went to the Law Enforcement Department Annex, where we participated in a brief yet enlightening session about their efforts to uphold peace and order in the Freeport zone. We were displayed some of their instruments, and the officers described how they handle emergencies. Before concluding the day, we visited Duty Free Subic, where we sampled international products at excellent prices. It was an enjoyable way to conclude a day rich in learning and discovery.",
      images: [
        "/day2/day2 (1).jpeg",
        "/day2/day2 (2).jpeg",
        "/day2/day2 (3).jpeg",
        "/day2/day2 (4).jpeg",
        "/day2/day2 (5).jpeg",
        "/day2/day2 (6).jpeg"
      ]
    },
    {
      id: 3,
      title: "Day 3: Leadership and Legacy – A Historical Tour at Museo ni Quezon and Presidential Vehicles",
      date: "April 9, 2025",
      summary: "This day emphasized leadership and heritage, starting with a visit to the Museo ni Manuel L. Quezon.",
      content: "This day emphasized leadership and heritage. Our initial stop was the Museo ni Manuel L. Quezon. Inside, we uncovered additional details about Quezon's life that went beyond what was taught in textbooks. His struggle for Philippine independence, his commitment to the Filipino language, and even anecdotes about his family provided us a deeper insight into the person behind the title. From there, we headed to the Presidential Cars Museum. Viewing the actual automobiles utilized by past presidents gave the impression of entering various historical eras. The designs of the vehicles mirrored the periods they were part of from timeless sophistication to contemporary and fortified styles. We carefully considered each piece, envisioning the historical events they represented. This day provided us with a renewed understanding of the duties held by our leaders, and how even ordinary items like a car can transform into parts of our collective history.",
      images: [
        "/day3/day3 (1).jpeg",
        "/day3/day3 (2).jpeg",
        "/day3/day3 (3).jpeg",
        "/day3/day3 (4).jpeg",
        "/day3/day3 (5).jpeg",
        "/day3/day3 (6).jpeg"
      ]
    },
    {
      id: 4,
      title: "Day 4: Transitioning from Currency to Innovation – An Inside Look at BSP and HyTech Power",
      date: "April 10, 2025",
      summary: "On the fourth day, we explored two distinct yet equally fascinating realms: banking and technology.",
      content: "On the fourth day, we explored two distinct yet equally fascinating realms: banking and technology. At Bangko Sentral ng Pilipinas (BSP), we followed the journey of our currency. From the printing of bills using unique inks and patterns to security elements that guard against forgery, everything appeared advanced and exact. One aspect that impressed me was discovering how damaged currency is eliminated and substituted. It provided a backstage perspective of our economy functioning. Following lunch, we made our way to HyTech Power Inc. to observe how automation is revolutionizing industries. Demonstrations of robots, 3D printing, and electronic systems showcased how cutting-edge technology is assisting businesses in enhancing their products and operational efficiency. This day showed us that both established industries and emerging innovations are essential for nation-building, and they need to work together to define our future.",
      images: [
        "/day4/day4 (1).jpeg",
        "/day4/day4 (2).jpeg",
        "/day4/day4 (3).jpeg",
        "/day4/day4 (4).jpeg",
        "/day4/day4 (5).jpeg",
        "/day4/day4 (6).jpeg"
      ]
    },
    {
      id: 5,
      title: "Day 5: Advancing the Country – An In-Depth Examination of Transportation and Traffic Networks",
      date: "April 11, 2025",
      summary: "Our fifth day concentrated on the ways in which people move—and how that movement is organized.",
      content: "Our fifth day concentrated on the ways in which people move—and how that movement is organized. We initially visited the Light Rail Transit Authority (LRT) Line 2, where we gained insights into train operations, spanning from the control room to the maintenance sections. Observing the dispatchers handle the schedule in real-time was thrilling, and it highlighted the extensive coordination required to prevent delays and maintain safety. After that, we proceeded to the MMDA Traffic Engineering Center. In this section, we observed the methods used for collecting and analyzing traffic data. With the aid of big screens and real-time camera feeds, the personnel track traffic jams, collisions, and road conditions throughout Metro Manila. We even attempted a simulation of handling intersections during peak traffic it was more challenging than anticipated! It instilled in us a renewed appreciation for those diligently tackling urban traffic disorder each day.",
      images: [
        "/day5/day5 (1).jpeg",
        "/day5/day5 (2).jpeg",
        "/day5/day5 (3).jpeg",
        "/day5/day5 (4).jpeg",
        "/day5/day5 (5).jpeg",
        "/day5/day5 (6).jpeg"
      ]
    },
    {
      id: 6,
      title: "Day 6: The Allure of Baguio – Peacefulness, Order, and Beautiful Landscapes",
      date: "April 12, 2025",
      summary: "Reaching Baguio was a refreshing experience both literally and metaphorically.",
      content: "Reaching Baguio was a refreshing experience both literally and metaphorically. We began our day at the Chinese Bell Church, a peaceful haven engulfed by nature. Its elaborate patterns and tranquil ambiance provided us with moments for serene contemplation. Next, we went to the Philippine Military Academy. Observing the campus and trainees brought back the significance of discipline, honor, and service. We passed by military artifacts and even observed a portion of a drill session. It was a motivating halt that made a lasting impact. At last, we arrived at Mines View Park. The sight was stunning. We relished regional treats, purchased handmade crafts, and captured numerous pictures in traditional Ifugao attire. It struck a perfect balance between cultural exploration and relaxation, resulting in one of our most unforgettable days.",
      images: [
        "/day6/day6 (1).jpeg",
        "/day6/day6 (2).jpeg",
        "/day6/day6 (3).jpeg",
        "/day6/day6 (4).jpeg",
        "/day6/day6 (5).jpeg",
        "/day6/day6 (6).jpeg"
      ]
    },
    {
      id: 7,
      title: "Day 7: Goodbye to the Highlands – A Tranquil Conclusion at Burnham Park",
      date: "April 13, 2025",
      summary: "Our last day in Baguio was straightforward but touching, starting at Burnham Park.",
      content: "Our last day in Baguio was straightforward but touching. Our morning started at Burnham Park, where we hired boats and paddled across the tranquil lake. Some preferred cycling, strolling, or simply resting beside the flowers and trees. The leisurely tempo of the day allowed us to contemplate the whole journey. We also spent some time purchasing last-minute souvenirs like strawberry preserves, handmade crafts, and wooden products that Baguio is known for. A few of us seized the opportunity to don traditional outfits for one final photo shoot. Even though it was our final day, the mood was cheerful and brimming with joy. It was the ideal way to bid farewell to a journey rich in learning, exploration, and significant memories.",
      images: [
        "/day7/day7 (1).jpeg",
        "/day7/day7 (2).jpeg",
        "/day7/day7 (3).jpeg",
        "/day7/day7 (4).jpeg",
        "/day7/day7 (5).jpeg",
        "/day7/day7 (6).jpeg"
      ]
    }
  ];

  const handlePostClick = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <section id="blog" className="blog">
      <motion.div 
        className="header-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ background: 'rgba(32, 32, 32, 0.7)' }} 
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Blog</h2>
          <div className="underline"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="section-subtitle"
          >
            Follow my educational journey through these blog posts
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="blog-container">
        {selectedPost ? (
          <motion.div 
            className="blog-post-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button className="back-button" onClick={handleBackClick}>
              ← Back to all posts
            </button>
            <h2 className="blog-post-title">{selectedPost.title}</h2>
            <p className="blog-post-date">{selectedPost.date}</p>
            <div className="blog-post-images">
              {selectedPost.images.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`Blog post ${selectedPost.id} image ${index + 1}`} 
                  className="blog-post-image"
                />
              ))}
            </div>
            <p className="blog-post-content">{selectedPost.content}</p>
          </motion.div>
        ) : (
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <motion.div 
                key={post.id} 
                className="blog-card"
                whileHover={{ y: -10 }}
                onClick={() => handlePostClick(post)}
                style={{ position: 'relative', paddingBottom: '60px' }} // Add padding at bottom to make room for fixed button
              >
                <div className="blog-card-image">
                  <img src={post.images[0]} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <h3>{post.title}</h3>
                  <p className="blog-date">{post.date}</p>
                  <p className="blog-summary">{post.summary}</p>
                  <button 
                    className="read-more"
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '80%'
                    }}
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
