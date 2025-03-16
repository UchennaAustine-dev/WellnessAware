// Mock blog data
export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  readingTime: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "the-science-of-intermittent-fasting",
    title: "The Science of Intermittent Fasting: Benefits Beyond Weight Loss",
    excerpt:
      "Discover how intermittent fasting affects your body at the cellular level and provides benefits far beyond just weight management.",
    content: `
        <p>Intermittent fasting has gained significant popularity in recent years, not just as a weight loss strategy but as a lifestyle approach that may offer numerous health benefits. Unlike traditional diets that focus on what to eat, intermittent fasting centers around when to eat.</p>
        
        <h2>What is Intermittent Fasting?</h2>
        
        <p>Intermittent fasting involves cycling between periods of eating and fasting. Common approaches include:</p>
        
        <ul>
          <li>The 16/8 method: Fasting for 16 hours and eating during an 8-hour window</li>
          <li>The 5:2 diet: Eating normally for 5 days and restricting calories for 2 non-consecutive days</li>
          <li>Eat-Stop-Eat: 24-hour fasts once or twice a week</li>
          <li>Alternate-day fasting: Alternating between fasting days and regular eating days</li>
        </ul>
        
        <h2>Cellular Benefits of Fasting</h2>
        
        <p>At the cellular level, several remarkable changes occur during fasting periods:</p>
        
        <h3>Autophagy: Cellular Cleanup</h3>
        
        <p>One of the most fascinating benefits of intermittent fasting is a process called autophagy. During extended periods without food, your cells initiate a "cleanup" process, breaking down and recycling damaged components. This cellular housekeeping may help prevent age-related diseases and extend lifespan.</p>
        
        <h3>Hormonal Changes</h3>
        
        <p>Fasting triggers beneficial hormonal changes, including:</p>
        
        <ul>
          <li>Increased human growth hormone (HGH), which aids fat burning and muscle gain</li>
          <li>Improved insulin sensitivity, reducing the risk of type 2 diabetes</li>
          <li>Normalized ghrelin levels, helping to regulate hunger</li>
        </ul>
        
        <h2>Beyond Weight Loss: Additional Health Benefits</h2>
        
        <h3>Brain Health</h3>
        
        <p>Research suggests intermittent fasting may support brain health by:</p>
        
        <ul>
          <li>Increasing production of brain-derived neurotrophic factor (BDNF), a protein that promotes neural health</li>
          <li>Reducing inflammation in the brain</li>
          <li>Potentially reducing the risk of neurodegenerative diseases like Alzheimer's</li>
        </ul>
        
        <h3>Inflammation Reduction</h3>
        
        <p>Chronic inflammation is linked to numerous diseases. Studies show intermittent fasting can reduce markers of inflammation, potentially lowering disease risk.</p>
        
        <h3>Heart Health</h3>
        
        <p>Intermittent fasting may improve various heart health markers, including:</p>
        
        <ul>
          <li>Blood pressure</li>
          <li>Cholesterol levels</li>
          <li>Triglycerides</li>
          <li>Inflammatory markers</li>
        </ul>
        
        <h3>Longevity</h3>
        
        <p>Animal studies consistently show that caloric restriction and fasting can extend lifespan. While human studies are still emerging, the cellular mechanisms triggered by fasting appear to promote longevity.</p>
        
        <h2>Is Intermittent Fasting Right for Everyone?</h2>
        
        <p>Despite its benefits, intermittent fasting isn't suitable for everyone. Those who should avoid or approach it with caution include:</p>
        
        <ul>
          <li>Pregnant or breastfeeding women</li>
          <li>People with a history of eating disorders</li>
          <li>Those with certain medical conditions, especially diabetes</li>
          <li>Children and teenagers</li>
        </ul>
        
        <p>Always consult with a healthcare provider before starting any fasting regimen.</p>
        
        <h2>Getting Started Safely</h2>
        
        <p>If you're interested in trying intermittent fasting, consider these tips:</p>
        
        <ol>
          <li>Start gradually, perhaps with a 12-hour overnight fast</li>
          <li>Stay hydrated during fasting periods</li>
          <li>Focus on nutrient-dense foods during eating windows</li>
          <li>Listen to your body and adjust as needed</li>
          <li>Consider working with a healthcare provider or nutritionist</li>
        </ol>
        
        <h2>Conclusion</h2>
        
        <p>Intermittent fasting offers a range of potential health benefits beyond weight management, from cellular repair to brain health and possibly even longevity. As research continues to evolve, this eating pattern represents a promising approach to health optimization for many individuals.</p>
        
        <p>Remember that the best health strategy is one you can maintain long-term. If intermittent fasting feels sustainable for you after consulting with a healthcare provider, it may be worth exploring as part of your wellness journey.</p>
      `,
    coverImage:
      "https://images.pexels.com/photos/4050990/pexels-photo-4050990.jpeg",
    date: "2023-11-15",
    author: {
      name: "Dr. Sarah Johnson",
      avatar:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    },
    category: "Nutrition",
    tags: [
      "intermittent fasting",
      "nutrition",
      "weight loss",
      "longevity",
      "health",
    ],
    readingTime: "8 min read",
  },
  {
    id: "2",
    slug: "mindfulness-meditation-beginners-guide",
    title: "Mindfulness Meditation: A Beginner's Guide to Mental Clarity",
    excerpt:
      "Learn how to start a mindfulness meditation practice and discover the science-backed benefits for stress reduction and mental health.",
    content: `
        <p>In our fast-paced, constantly connected world, finding moments of peace can seem impossible. Mindfulness meditation offers a practical way to cultivate mental clarity and emotional balance, even for beginners. This guide will walk you through the basics of mindfulness practice and its evidence-based benefits.</p>
        
        <h2>What is Mindfulness Meditation?</h2>
        
        <p>Mindfulness meditation is the practice of intentionally focusing your attention on the present moment—and accepting it without judgment. Unlike other meditation techniques that might involve visualization or mantras, mindfulness is about observing what arises in your experience without getting caught up in it.</p>
        
        <p>The practice has roots in Buddhist traditions but has been adapted into secular programs like Mindfulness-Based Stress Reduction (MBSR) and is now widely practiced around the world.</p>
        
        <h2>The Science-Backed Benefits</h2>
        
        <h3>Stress Reduction</h3>
        
        <p>One of the most well-documented benefits of mindfulness meditation is stress reduction. Research shows that regular practice can lower cortisol levels (the stress hormone) and reduce self-reported stress. A landmark study published in the Journal of Psychosomatic Research found that participants in an 8-week mindfulness program showed significant reductions in anxiety and depression symptoms.</p>
        
        <h3>Improved Focus and Concentration</h3>
        
        <p>Regular mindfulness practice has been shown to enhance attention and concentration. A study from the University of California found that participants who completed a 2-week mindfulness training program demonstrated improved working memory and focus compared to a control group.</p>
        
        <h3>Better Emotional Regulation</h3>
        
        <p>Mindfulness helps create space between stimuli and our responses, allowing us to respond thoughtfully rather than react automatically. Neuroimaging studies have shown that mindfulness practice can actually change brain structure in areas associated with emotional regulation, including the amygdala and prefrontal cortex.</p>
        
        <h3>Physical Health Benefits</h3>
        
        <p>Beyond mental health, mindfulness has been linked to various physical health benefits, including:</p>
        
        <ul>
          <li>Reduced blood pressure</li>
          <li>Improved sleep quality</li>
          <li>Enhanced immune function</li>
          <li>Reduced chronic pain</li>
        </ul>
        
        <h2>Getting Started: A 5-Minute Practice</h2>
        
        <p>You don't need any special equipment or extensive training to begin practicing mindfulness. Here's a simple 5-minute practice to get started:</p>
        
        <ol>
          <li><strong>Find a comfortable position</strong>: Sit in a chair or on the floor with your back straight but not rigid.</li>
          <li><strong>Set a timer</strong>: Start with just 5 minutes and gradually increase as you become more comfortable.</li>
          <li><strong>Focus on your breath</strong>: Pay attention to the sensation of breathing—perhaps the feeling of air moving through your nostrils or the rise and fall of your chest.</li>
          <li><strong>Notice when your mind wanders</strong>: When you notice your attention has drifted (and it will), gently bring your focus back to your breath without judgment.</li>
          <li><strong>Continue this process</strong>: The practice is simply noticing when your mind wanders and returning to your breath, again and again.</li>
        </ol>
        
        <h2>Common Challenges for Beginners</h2>
        
        <h3>"I Can't Stop My Thoughts"</h3>
        
        <p>The goal of mindfulness isn't to eliminate thoughts but to change your relationship with them. Success isn't measured by how few thoughts you have, but by how aware you are of your thoughts and how quickly you notice when you're caught up in them.</p>
        
        <h3>"I Don't Have Time"</h3>
        
        <p>Even 5 minutes of mindfulness practice can be beneficial. Consider integrating mindfulness into activities you already do, like brushing your teeth, walking, or washing dishes.</p>
        
        <h3>"I'm Not Doing It Right"</h3>
        
        <p>There's no "perfect" way to practice mindfulness. If you're aware of your experience in the present moment, you're practicing mindfulness, even if your mind is busy or you feel restless.</p>
        
        <h2>Building a Sustainable Practice</h2>
        
        <p>To make mindfulness a regular part of your life:</p>
        
        <ul>
          <li><strong>Start small</strong>: 5 minutes daily is better than 30 minutes once a week.</li>
          <li><strong>Be consistent</strong>: Try to practice at the same time each day to build a habit.</li>
          <li><strong>Use guided meditations</strong>: Apps like Headspace, Calm, or Insight Timer offer structured guidance.</li>
          <li><strong>Join a group</strong>: Community support can help maintain motivation.</li>
          <li><strong>Be patient and kind with yourself</strong>: Learning any new skill takes time.</li>
        </ul>
        
        <h2>Integrating Mindfulness Into Daily Life</h2>
        
        <p>Formal meditation practice is just one aspect of mindfulness. You can bring mindful awareness to any activity:</p>
        
        <ul>
          <li><strong>Mindful eating</strong>: Pay full attention to the experience of eating, noticing flavors, textures, and sensations.</li>
          <li><strong>Mindful walking</strong>: Focus on the physical sensations of walking, perhaps the feeling of your feet touching the ground.</li>
          <li><strong>Mindful listening</strong>: Give your full attention when someone is speaking, without planning your response.</li>
          <li><strong>Mindful work</strong>: Do one task at a time, giving it your full attention before moving to the next.</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>Mindfulness meditation is a simple yet powerful practice that can transform your relationship with your thoughts, emotions, and experiences. By starting with just a few minutes each day, you can begin to cultivate greater awareness, calm, and resilience in your life.</p>
        
        <p>Remember that mindfulness is a skill that develops with practice. Be patient with yourself as you begin this journey, and notice even the subtle benefits that arise as you continue to practice.</p>
      `,
    coverImage:
      "https://images.pexels.com/photos/3759661/pexels-photo-3759661.jpeg",
    date: "2023-10-28",
    author: {
      name: "Michael Chen, LMFT",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    category: "Mental Health",
    tags: [
      "meditation",
      "mindfulness",
      "stress reduction",
      "mental health",
      "wellness",
    ],
    readingTime: "7 min read",
  },
  {
    id: "3",
    slug: "strength-training-for-longevity",
    title: "Strength Training for Longevity: Why Muscle Matters As We Age",
    excerpt:
      "Explore how resistance training can slow the aging process, prevent age-related muscle loss, and improve quality of life well into your later years.",
    content: `
        <p>When we think about exercise for longevity, walking and other cardiovascular activities often come to mind first. However, emerging research suggests that strength training may be equally—if not more—important for healthy aging. This article explores why maintaining muscle mass is crucial as we age and how to incorporate effective resistance training into your life, regardless of your current fitness level.</p>
        
        <h2>The Science of Sarcopenia: Age-Related Muscle Loss</h2>
        
        <p>Beginning around age 30, we naturally lose 3-5% of our muscle mass per decade, a process that accelerates after age 60. This age-related muscle loss, known as sarcopenia, isn't just about aesthetics or athletic performance—it has profound implications for health and independence.</p>
        
        <p>Sarcopenia contributes to:</p>
        
        <ul>
          <li>Increased risk of falls and fractures</li>
          <li>Reduced mobility and independence</li>
          <li>Decreased metabolic rate and increased fat accumulation</li>
          <li>Higher risk of chronic diseases, including diabetes and osteoporosis</li>
          <li>Diminished quality of life</li>
        </ul>
        
        <p>The good news? This process isn't inevitable. Research shows that resistance training can prevent—and even reverse—age-related muscle loss at any age.</p>
        
        <h2>Beyond Muscle: The Systemic Benefits of Strength Training</h2>
        
        <h3>Metabolic Health</h3>
        
        <p>Muscle tissue is metabolically active, meaning it burns calories even at rest. More muscle mass means a higher resting metabolic rate, which helps maintain healthy body composition and prevent age-related weight gain. Additionally, strength training improves insulin sensitivity, reducing the risk of type 2 diabetes.</p>
        
        <h3>Bone Density</h3>
        
        <p>Resistance training doesn't just build muscle—it strengthens bones. The mechanical stress placed on bones during strength training stimulates bone formation, increasing density and reducing fracture risk. This is particularly important for postmenopausal women, who face accelerated bone loss.</p>
        
        <h3>Cognitive Function</h3>
        
        <p>Emerging research suggests a strong connection between muscle strength and brain health. Studies have found that resistance training can improve cognitive function, memory, and executive function in older adults. It may even reduce the risk of neurodegenerative diseases like Alzheimer's.</p>
        
        <h3>Longevity Markers</h3>
        
        <p>Several studies have linked muscle strength to longevity. Research published in the British Medical Journal found that muscle strength was associated with lower all-cause mortality, independent of cardiorespiratory fitness. Another study in the Journal of Gerontology found that grip strength (a common measure of overall muscle strength) was a better predictor of mortality than blood pressure.</p>
        
        <h2>Getting Started: Strength Training for Beginners</h2>
        
        <p>If you're new to strength training, here's how to begin safely and effectively:</p>
        
        <h3>Basic Principles</h3>
        
        <ul>
          <li><strong>Progressive overload</strong>: Gradually increase the weight, repetitions, or difficulty of exercises over time</li>
          <li><strong>Compound movements</strong>: Focus on exercises that work multiple muscle groups simultaneously</li>
          <li><strong>Consistency</strong>: Aim for at least 2-3 strength sessions per week</li>
          <li><strong>Recovery</strong>: Allow 48 hours between training the same muscle group</li>
        </ul>
        
        <h3>Essential Exercises</h3>
        
        <p>These fundamental movements target all major muscle groups:</p>
        
        <ul>
          <li><strong>Squats</strong>: Work the quadriceps, hamstrings, and glutes</li>
          <li><strong>Deadlifts</strong>: Target the posterior chain, including the back, glutes, and hamstrings</li>
          <li><strong>Push-ups or chest presses</strong>: Strengthen the chest, shoulders, and triceps</li>
          <li><strong>Rows</strong>: Build the upper back and biceps</li>
          <li><strong>Overhead presses</strong>: Develop shoulder and tricep strength</li>
          <li><strong>Planks</strong>: Engage the core muscles</li>
        </ul>
        
        <h3>Starting Equipment</h3>
        
        <p>You don't need an elaborate home gym or expensive membership to begin:</p>
        
        <ul>
          <li><strong>Bodyweight</strong>: Many effective exercises require no equipment at all</li>
          <li><strong>Resistance bands</strong>: Inexpensive, portable, and versatile</li>
          <li><strong>Dumbbells</strong>: Start with light weights and progress gradually</li>
          <li><strong>Kettlebells</strong>: Excellent for dynamic, functional movements</li>
        </ul>
        
        <h2>Strength Training Through the Decades</h2>
        
        <h3>In Your 40s</h3>
        
        <p>Focus on building a foundation of strength and preventing the initial decline in muscle mass:</p>
        
        <ul>
          <li>Aim for 2-3 full-body strength sessions per week</li>
          <li>Include both heavy strength work (6-8 repetitions) and moderate-intensity work (8-12 repetitions)</li>
          <li>Prioritize recovery with adequate sleep and nutrition</li>
        </ul>
        
        <h3>In Your 50s and 60s</h3>
        
        <p>Maintain muscle mass while addressing joint health and mobility:</p>
        
        <ul>
          <li>Continue with 2-3 weekly strength sessions</li>
          <li>Add more warm-up time and mobility work</li>
          <li>Consider working with a qualified trainer to ensure proper form</li>
          <li>Include balance training to prevent falls</li>
        </ul>
        
        <h3>In Your 70s and Beyond</h3>
        
        <p>Focus on functional strength for independence and quality of life:</p>
        
        <ul>
          <li>Emphasize movements that mimic daily activities (getting up from a chair, reaching overhead)</li>
          <li>Use seated exercises if standing is challenging</li>
          <li>Incorporate hand strengthening exercises to maintain grip strength</li>
          <li>Work with healthcare providers to address any limitations safely</li>
        </ul>
        
        <h2>Safety Considerations</h2>
        
        <p>To minimize injury risk:</p>
        
        <ul>
          <li>Start with lighter weights and focus on proper form</li>
          <li>Consider working with a qualified fitness professional initially</li>
          <li>Warm up thoroughly before each session</li>
          <li>Listen to your body and distinguish between productive discomfort and pain</li>
          <li>Consult your healthcare provider before beginning, especially if you have existing health conditions</li>
        </ul>
        
        <h2>Nutrition to Support Muscle Maintenance</h2>
        
        <p>Strength training is most effective when supported by proper nutrition:</p>
        
        <ul>
          <li><strong>Protein</strong>: Aim for 1.2-2.0 grams per kilogram of body weight daily, spread throughout the day</li>
          <li><strong>Leucine</strong>: This amino acid is particularly important for muscle protein synthesis; found in dairy, meat, and legumes</li>
          <li><strong>Vitamin D and calcium</strong>: Essential for bone health and muscle function</li>
          <li><strong>Hydration</strong>: Critical for optimal performance and recovery</li>
        </ul>
        
        <h2>Conclusion: It's Never Too Late</h2>
        
        <p>Perhaps the most encouraging aspect of strength training for longevity is that it's never too late to start. Studies have shown significant improvements in muscle mass and function in participants well into their 80s and 90s who begin resistance training.</p>
        
        <p>By incorporating regular strength training into your life, you're not just adding years to your life—you're adding life to your years, maintaining the physical capacity to fully engage in the activities that bring you joy and purpose at any age.</p>
        
        <p>Remember that consistency trumps intensity. Even modest strength training, performed regularly, can yield remarkable benefits for your health, independence, and longevity.</p>
      `,
    coverImage:
      "https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg",
    date: "2023-12-05",
    author: {
      name: "James Rodriguez, CSCS",
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    },
    category: "Fitness",
    tags: [
      "strength training",
      "longevity",
      "muscle health",
      "aging",
      "fitness",
    ],
    readingTime: "9 min read",
  },
  // Add more blog posts here
];

export async function getBlogPosts() {
  // In a real app, this would fetch from an API or database
  return blogPosts;
}

export async function getBlogPost(slug: string) {
  // In a real app, this would fetch from an API or database
  return blogPosts.find((post) => post.slug === slug) || null;
}

export async function getRelatedPosts(currentSlug: string, category: string) {
  // Get posts in the same category, excluding the current post
  const related = blogPosts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, 3); // Limit to 3 related posts

  // If we don't have enough related posts by category, add some recent posts
  if (related.length < 3) {
    const recentPosts = blogPosts
      .filter(
        (post) =>
          post.slug !== currentSlug &&
          !related.some((r) => r.slug === post.slug)
      )
      .slice(0, 3 - related.length);

    return [...related, ...recentPosts];
  }

  return related;
}
