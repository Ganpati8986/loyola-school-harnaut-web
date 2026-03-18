
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Heart, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { cn } from '../lib/utils';
import ProtectedImage from '../components/ProtectedImage';
import mag from '../assets/Sunil Kumar.jpeg';
import mag1 from '../assets/Richard Lakra.jpeg';
import mag2 from '../assets/Miss Sara Kisku.jpeg';
import mag3 from '../assets/mukesh jha.jpeg';
import mag4 from '../assets/safal.jpeg';
import mag5 from '../assets/Sneha kumari.jpeg';
import mag6 from '../assets/tannu tanwar.jpeg';
import mag7 from '../assets/Chirag.jpeg';
import mag8 from '../assets/pragya suman.jpeg';
import mag9 from '../assets/Ayush kumar.jpeg';
import mag10 from '../assets/Ashu kumari.jpeg';
import mag11 from '../assets/anitya kumari.jpeg';
import mag12 from '../assets/Ms Arun Kumar.jpeg';
import mag13 from '../assets/jiya.jpeg';
import mag14 from '../assets/raushan.jpeg';
import mag15 from '../assets/shreya.jpeg';
import mag16 from '../assets/vidha.jpeg';
import mag17 from '../assets/shristi.jpeg';
import mag18 from '../assets/ravi.jpeg';
import mag19 from '../assets/nisha.jpeg';
import mag20 from '../assets/sitara.jpeg';

// --- Magazine Content Data ---
const articles = [
  {
    id: 'home-ayush',
    title: 'Reflecting on a Place I Called Home',
    author: 'Ayush Kumar',
    role: 'Former Student & School Captain',
    category: 'Reflections',
    image: mag9,
    content: [
      "Our school's story begins with its founding over 25 years ago, when a small group of visionary educators set out to create an environment where learning of values and community would thrive. It had a humble beginning with just a few classrooms and a handful of teachers. Our school has now blossomed into a vibrant community of students, faculty, and staff, united by a common goal: excellence in education and wholistic development of all students.",
      "Our school wasn't just a place where we learned math, science, or literature; it was rather an environment where we learned to be ourselves. It was a lab where friendships were forged, where dreams took shape, and where every challenge helped us grow into the people we are today. From the early mornings rush through the hallways to the laughter-filled afternoons on the playground, each moment contributed to a unique tapestry of experiences.",
      "As a student leader, I had the privilege of seeing our school from a different perspective. I was given a chance to witness how much heart and dedication our teachers poured into shaping us, not just as students, but as individuals ready to face the world. Every lesson taught in the classroom was layered with lessons about life - about perseverance, empathy, and the value of hard work. The teachers here were more than just educators; they were mentors and role models who believed in us even when we sometimes doubted ourselves.",
      "I remember the sense of responsibility that came with wearing the school captain's badge. It wasn't just about being a representative; it was about upholding the values that our school instilled in us: integrity, humility, and respect. Whether leading assemblies, organizing events, or simply being a voice for my peers, I learned what it meant to serve a community and how leadership is built on listening, understanding, and taking action.",
      "The heart of our school, however, was its sense of belonging. No matter your background, interests, or abilities, everyone was welcomed. Our school was a place where diversity was celebrated, where we could express ourselves freely, and where we learned the true meaning of unity.",
      "To the current students, I would say: treasure your time here. These are the years that will shape you in ways you may not yet realize. And to the teachers, staff, and everyone who makes this school the remarkable place, Thank you. The legacy of our school lives on in every student who steps out into the world, carrying its values and spirit with them."
    ]
  },
  {
    id: 'math-sunil',
    title: 'Mathematics: An Art of Thinking',
    author: 'Mr. Sunil Kumar',
    role: 'Mathematics Teacher',
    category: 'Education',
    image: mag,
    content: [
      "Mathematics isn't just about numbers; it's a language of patterns, logic, and problem-solving that goes beyond textbooks. As a Math teacher, I see it as an art, a way of thinking that sharpens our minds and helps us approach life's challenges in creative ways.",
      "In my classroom, we don't just focus on getting the right answer. We learn to ask the right questions. Why does a formula work? How does a pattern emerge? These are the sparks that ignite curiosity and deeper understanding.",
      "Mathematics teaches us patience, perseverance, and precision. It shows us that every problem has a solution, and the journey to finding it out is where the real magic lies. Therefore, let's embrace Mathematics, not just as a subject, but as a tool for life, one that opens doors to endless possibilities."
    ]
  },
  {
    id: 'climate-richard',
    title: "India's Changing Climate: A Personal Perspective",
    author: 'Mr. Richard Lakra',
    role: 'Assistant Teacher',
    category: 'Environment',
    image: mag1,
    content: [
      "As an Indian, I've witnessed the subtle yet profound shifts in our climate over the years. It's no longer just a topic for scientists or politicians, but a reality that impacts our daily lives. From erratic rainfall patterns to rising temperatures, the effects of climate change are becoming increasingly evident.",
      "I grew up in Kansbahal, a small village in Sundargarh district of Odisha, where the monsoon rains were a predictable event. We could almost set our clocks by them. But now, the rains are very unpredictable. They are delayed for weeks, leading to droughts. These changes have disrupted our agriculture, a cornerstone of our rural economy.",
      "The summers, too, have become hotter and longer. Heatwaves, once a rare occurrence, are now a common phenomenon. The scorching temperatures can be unbearable, especially for the elderly and the poor, who lack access to adequate cooling facilities.",
      "As an individual, I feel a sense of urgency to address climate change. We need to reduce our carbon footprints by using public transportation and conserving energy. Individual actions alone are not enough — we need collective action at national and international level to address the root causes of climate change.",
      "The future of our planet depends on our ability to address climate change. As Indians, we have a responsibility to protect our environment and ensure a sustainable future for generations to come."
    ]
  },
  {
    id: 'influencer-sara',
    title: 'I AM AN INFLUENCER',
    author: 'Miss Sara Kisku',
    role: 'Assistant Teacher',
    category: 'Inspiration',
    image: mag2,
    content: [
      "Yes, I am an influencer; for I have made impact not with my words to build connection among comrades, adjacent and ally. I am effective, for my companions applaud it not with words but by deeds. Thus, I am a USB - Unique, Social and Bold.",
      "I am an influencer, for I perform my task earnestly not to be appreciated, but to be satisfied with the aim of learning for life; and I know this is attainable when I pay attention to all the Do's and Don'ts. Therefore, I use my time sparingly and my classmates call me studious.",
      "I call myself an influencer, for my actions have the power to incorporate others into the circle or separate myself from others. I perceive I am a KEYBOARD i.e., Knowledgeable, Effective, Yearning, Bearable, Obedient, Ambitious, Receptive and Dauntless.",
      "Then I shall be acclaimed proudly as an influencer, who brought changes in the society, since change is the unchangeable law of nature. Therefore, let's pledge to self, to be a chain of change influencing all hearts of society to build a peaceful and happy space as loyolites."
    ]
  },
  {
    id: 'animal-cruelty-ashu',
    title: 'Animal Cruelty',
    author: 'Ashu Kumari',
    role: 'Class VII-A',
    category: 'Social Issues',
    image: mag10,
    content: [
      "Animal cruelty refers to mistreatment of animals by human beings. Every living organism is a creation of God. We need to treat it with due respect and reverence. Animals are also part of the living organism who deserve our equal respect, love and care.",
      "These days animal cruelty has increased and has become a problem for the world at large. Animals are being beaten up and starved every day. Millions of helpless animals die each day. People throw stones on animals just for fun.",
      "Poachers mercilessly kill animals for their skin, fur, teeth etc. Several companies use animals for testing medicines and cosmetics. Moreover, animals are often ill-treated and forced into performing circus tricks and other activities for our entertainment.",
      "The only way to take animals off the inhuman treatment is by creating proper animal shelters and effective awareness about animal protection. As Mahatma Gandhi has rightly said, 'The greatness of a nation, and its moral progress can be judged by the way its animals are treated.'"
    ]
  },
  {
    id: 'family-sitara',
    title: 'परिवार का महत्त्व',
    author: 'Sitara Kumari',
    role: 'Teacher',
    category: 'Hindi Section',
    image: mag20,
    content: [
      "जब एक बीज धरती पर गिरता है, तब मिट्टी से नमी, वातावरण से वायु और सूर्य से रोशनी पाकर उस बेजान से बीज में जान आ जाती है। ठीक उसी प्रकार हमारा परिवार होता है।",
      "हमारा परिवार भी ठीक इसी पौधे के सदृश है जो अपने जीवन में भी बहुत बार उतार-चढ़ाव एवं विषम परिस्थितियों का सामना करता है।",
      "ठीक उसी प्रकार हमारा परिवार से हमें सबसे उत्तम दान मिलता है। वह है - प्यार, सम्मान और सदाचरण इत्यादि।",
      "हम अपने परिवार का कोटि-कोटि नमन करते हैं, जो इतने सारे सद्गुणों का समूह है।"
    ]
  },
  {
    id: 'naadan-arun',
    title: 'अभी वह नादान है',
    author: 'Arun Kumar',
    role: 'Teacher',
    category: 'Hindi Section',
    image: mag12,
    content: [
      "माँ जब बेटा जन्म देती है, तो वह बहुत खुश होती है। वह राहत की साँस लेती है और सोचती है कि मेरा लाडला बेटा वृद्धा होने पर मेरा सहारा बनेगा।",
      "बच्चा जब धीरे-धीरे बढ़ता है, तो घर के सामान तितर-बितर करता है। माँ कहती है, अभी मेरा बच्चा नादान है।",
      "किशोरावस्था में जब वह आता है, माँ हमेशा उसकी जरूरतें पूरी करती है। उसके बावजूद माँ को आँख दिखाता है। फिर भी माँ कहती है, अभी मेरा बच्चा नादान है।",
      "जन्म से लेकर पूरी जिन्दगी माँ अपने लाडले को नादान कहती रही। इसलिए अपने माता-पिता को कभी नजर अन्दाज नहीं करे।"
    ]
  },
  {
    id: 'school-bell-safal',
    title: 'स्कूल की घंटी',
    author: 'Safal Shreyas',
    role: 'Class VI B',
    category: 'Hindi Section',
    image: mag4,
    content: [
      "स्कूल की घंटी बजती है। हमें ये देती है संदेश। आओ बच्चो, स्कूल चलें हम, पढ़ लिखकर महान बनें हम।",
      "पहली घंटी विज्ञान की आई, शिक्षक मानव कंकाल दिखाया। दूसरी घंटी हिंदी की आई, बचपन का हमें पाठ पढ़ाया।",
      "अब आई लंच ब्रेक की बारी, हम बच्चों में खुशियाँ छाई, पेट भर के खाना खाया।",
      "अन्तिम घंटी खेल की आई, शरीर ने ली अंगड़ाई, बैग छोड़ क्लास से भागा मैदान में की चढ़ाई।"
    ]
  },
  {
    id: 'periods-sneha',
    title: 'पीरियड्स में ऐसा क्यों!',
    author: 'Sneha Kumari',
    role: 'Class XB',
    category: 'Social Issues',
    image: mag5,
    content: [
      "खूब मस्ती करने वाली लड़की भी महीने में, कुछ दिनों के लिए मुर्झा जाती है। आहें भर, तड़प-तड़प अपना दर्द छुपाती है।",
      "चार-पाँच दिनों के लिए एक प्यारी-सी हँसी खो जाती है। मस्ती मजाक करने वाली लड़की, डरी सहमी नजर आती है।",
      "क्यों? भेदभाव होता है, जब लड़की पीरियड्स में आ जाती है। मत छुपा अपने दर्द को, प्राकृतिक है, पीरियड्स है, सब से हँस कर बोला कर।"
    ]
  },
  {
    id: 'boy-wish-nisha',
    title: 'काश! मैं एक लड़का होती',
    author: 'Nisha Raj',
    role: 'Class IX B',
    category: 'Hindi Section',
    image: mag19,
    content: [
      "काश! मैं एक लड़का होती, ना होती इतनी लाड़ली शायद, पर, थोड़ी-सी आजादी मुझे भी होती!",
      "मुझे भी पढ़ने और ग्रेजुएशन करने की आजादी होती, काश! मैं एक लड़का होती!",
      "एक लड़की होने से इस समाज के लोगों से ये सब न होता, अगर मैं एक लड़का होती! काश!"
    ]
  },
  {
    id: 'classroom-tannu',
    title: 'Classroom Connections',
    author: 'Tannu Tanwar',
    role: 'Class X-B',
    category: 'Student Voice',
    image: mag6,
    content: [
      "Halls of learning, walls of friends, Where laughter echoes, memory blends. In classroom filled with dreams and cheer, We find our tribe, our hearts hold dear.",
      "From maths to arts, stories are told, Together we explore, young minds unfold.",
      "So here's to friends at school days, A time of growth by challenges face. For in these halls, we find our place."
    ]
  },
  {
    id: 'why-does-chirag',
    title: 'Why Does',
    author: 'Chirag Kumar',
    role: 'Class X-B',
    category: 'Student Voice',
    image: mag7,
    content: [
      "Why does sky appear blue, Does it give us some clue? Why at evening sky appears red, Does it show that it's time to bed?",
      "Why sometimes sky gets dark, Does it mean to show the spark? Why at horizon sky appears to bend, Does it mean it is the end?"
    ]
  },
  {
    id: 'girl-journey-anitya',
    title: 'The Journey of a Girl Student',
    author: 'Anitya Kumari',
    role: 'Class XB',
    category: 'Student Voice',
    image: mag11,
    content: [
      "In the early dawn she wakes up with dreams, Books in her hands chasing bright sunbeams.",
      "She balances marks with every test, Giving her all, doing her best. Between the studies and the endless race, She finds her strength, her own true pace."
    ]
  },
  {
    id: 'first-day-sarvagya',
    title: 'My First Day at School',
    author: 'Sarvagya Ravi',
    role: 'Class II-B',
    category: 'Student Voice',
    image: mag18,
    content: [
      "My first day at school was lovely, memorable one and full of excitement. I woke up early, brushed my teeth, then, took bath and put on my school uniform for the first time.",
      "When I entered the school, my feelings were that of wonder and excitement. As I entered the classroom, there were other students like me. Some were looking very nervous, while some were excited.",
      "I still remember and cherish the memory of the first day at school. It was such a lovely and memorable day."
    ]
  },
  {
    id: 'heart-let-go-pragya',
    title: "My Heart Can't Let It Go",
    author: 'Pragya Suman',
    role: 'Class X-B',
    category: 'Student Voice',
    image: mag8,
    content: [
      "The raindrops on my windowpane, Flowing down in their separate ways; Just like us. The hands I once held tightly is slipping away slightly.",
      "We used to sit together for lunch. The sweet memories go like flashing, We did our best for a better flourishing. I know it's time to go, Yet my heart can't let it go."
    ]
  },
  {
    id: 'meri-maa-srishti',
    title: 'मेरी माँ',
    author: 'Srishti Kumari',
    role: 'Class XA',
    category: 'Hindi Section',
    image:mag17 ,
    content: [
      "जिसके आँचल की छाया में, बचपन मेरा बीता है। जिसकी उँगली पकड़-पकड़के, चलना मैंने सीखा है।",
      "जिसने दिशा दिखाई मुझको सही मार्ग पर चलने की, सारी खुशियाँ दीं मुझको, सारे जहाँ से लाकर।",
      "धन्य हुआ मेरा जीवन, जो ऐसी माँ मैंने पाई।"
    ]
  },
  {
    id: 'van-bachao-vidya',
    title: 'वन बचाओ',
    author: 'Vidya Kumari',
    role: 'Class XB',
    category: 'Hindi Section',
    image: mag16,
    content: [
      "जीवन शब्द में ही वन है आता, बिना वन के जीवन कहाँ संभव हो पाता।",
      "मिल जुलकर सब हाथ बटाओ, वन न काटो, इसे बचाओ।",
      "वन तो है, भइ, वह खजाना, जितना लेना, उतना बचाना। वन से शुरू हुआ है संसार, यही है जीवन का आधार।"
    ]
  },
  {
    id: 'pe-teacher-mukesh',
    title: 'शारीरिक शिक्षा का शिक्षक हूँ',
    author: 'Mukesh Kumar Jha',
    role: 'Physical Education Teacher',
    category: 'Hindi Section',
    image: mag3,
    content: [
      "जी हाँ, मैं शारीरिक शिक्षा का शिक्षक हूँ। मैं अमीन नहीं हूँ, पर जमीन नापता हूँ। गलती पर बच्चों को पिता से भी ज्यादा डाँटता हूँ।",
      "मैं डॉक्टर नहीं हूँ, पर चोट पर पट्टी बाँधता हूँ। मैं न्यायाधीश नहीं हूँ, पर बच्चों के झगड़े को निपटाता हूँ।",
      "मैं कमजोर बच्चों के कंधे पर हाथ रखकर दिल बहलाता हूँ। जी हाँ, मैं एक शारीरिक शिक्षा का शिक्षक हूँ।"
    ]
  },
  {
    id: 'nari-jiya',
    title: 'मैं नारी हूँ!!',
    author: 'Jiya Raj',
    role: 'Former Student',
    category: 'Hindi Section',
    image: mag13,
    content: [
      "सदियों से चली आ रही परम्परा... सबने बेवजह निभाई। किसी ने, न जानी क्या है गहराई।",
      "वो माँ, वो देवी, वही बहन, वही तुम्हारे कुल का संस्कार। दर्ज है इतिहास में उसके नाम।",
      "बंद करो, अब तुम्हारी बकवास, मैं फिरसे रचने वाली हूँ इतिहास। मैं नारी हूँ, मैं ही विनाश! मैं ही विकास!"
    ]
  },
  {
    id: 'maa-shreya',
    title: 'माँ',
    author: 'Shreya Chaurasiya',
    role: 'Class XB',
    category: 'Hindi Section',
    image: mag15,
    content: [
      "माँ, तुम्हारी याद बहुत आती है, वो हर पल याद बहुत आती है।",
      "वो रूठना मेरा, वो मनाना तेरा, वो रोना मेरा, वो सीने से लगाना तेरा।",
      "वो हर बात याद बहुत आती है।"
    ]
  },
  {
    id: 'dastan-dwija',
    title: 'दास्ताँ',
    author: 'Dwija Roshan',
    role: 'Class IX A',
    category: 'Hindi Section',
    image: mag14,
    content: [
      "वो भी क्या दिन थे, जब हम तुम एक संग थे, वो हँसना, वो खिलखिलाना, वो एक दूसरे को सताना।",
      "अच्छा लगता था एक दूसरे के लिए रोज स्कूल आना, पर इन सब बातों का ख्याल तब आया, जब एक दूसरे से दूर होने का वक्त आया।",
      "ए दोस्त, पर बिछड़ने को ये गम मुझे अभी से सताने लगा है।"
    ]
  }
];



// ─── Sidebar Story Button ─────────────────────────────────────────
interface SideStoryBtnProps {
  art: (typeof articles)[0];
  side: 'left' | 'right';
  onClick: () => void;
}

const SideStoryBtn = ({ art, side, onClick }: SideStoryBtnProps) => (
  <button
    onClick={onClick}
    className="group flex items-center gap-0 hover:gap-2 transition-all duration-500 ease-out"
    style={{ flexDirection: side === 'right' ? 'row' : 'row-reverse' }}
  >
    {/* Avatar */}
    <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-[#FFD700] transition-all duration-300 shadow-sm group-hover:shadow-lg flex-shrink-0 group-hover:scale-110">
      <ProtectedImage watermark={''} src={art.image} alt={art.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
    {/* Sliding label */}
    <div className="overflow-hidden w-0 group-hover:w-40 transition-all duration-500 ease-out">
      <div className={cn("whitespace-nowrap", side === 'left' ? 'pr-2 text-right' : 'pl-2 text-left')}>
        <p className="text-[8px] font-bold uppercase tracking-widest text-[#FFD700]">
          {side === 'left' ? '← Prev' : 'Next →'}
        </p>
        <p className="text-[11px] font-bold text-[#003366] truncate max-w-[140px]">{art.title}</p>
      </div>
    </div>
  </button>
);

// ─── Main App ─────────────────────────────────────────────────────
const App = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [likedArticles, setLikedArticles] = useState<Set<string>>(new Set());

  const toggleLike = (id: string) => {
    setLikedArticles(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const categories = ['All', ...new Set(articles.map(a => a.category))];
  const filteredArticles = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory);

  const openReader = (article: typeof articles[0]) => {
    setSelectedArticle(article);
    setIsReaderOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeReader = () => {
    setIsReaderOpen(false);
    setTimeout(() => setSelectedArticle(null), 500);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans text-gray-900 selection:bg-[#FFD700] selection:text-[#003366]">
      <SEO
        title="Loyola Chronicles | School E-Magazine"
        description="The official e-magazine of Loyola School Harnaut, featuring student creativity, literature, and reflections."
        keywords="Loyola School Magazine, School E-Magazine Harnaut, Student creativity Nalanda, School news Bihar"
      />

      <AnimatePresence mode="wait">

        {/* ════ MAGAZINE LIST VIEW ════ */}
        {!isReaderOpen ? (
          <motion.div key="magazine-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-16 pb-20">
            <div className="max-w-7xl mx-auto px-6">

              {/* Hero */}
              <header className="text-center mb-24">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-1 bg-[#003366]/5 text-[#003366] text-[10px] font-bold tracking-[0.3em] uppercase rounded-full mb-6">
                  Est. 2000 • Loyola School Harnaut
                </motion.div>
                <h1 className="text-6xl md:text-9xl font-bold text-[#003366] mb-8 tracking-tighter leading-[0.9]">
                  The <span className="text-[#FFD700] italic serif">Magazine</span>
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                  A digital tapestry of student creativity, academic excellence, and the vibrant spirit of our school community.
                </p>
              </header>

              {/* Category Filter */}
              <div className="flex justify-center mb-16">
                <div className="inline-flex items-center p-1.5 bg-white rounded-full shadow-xl border border-gray-100 overflow-x-auto no-scrollbar max-w-full">
                  {categories.map(category => (
                    <button key={category} onClick={() => setActiveCategory(category)}
                      className={cn("px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap",
                        activeCategory === category ? "bg-[#003366] text-white shadow-lg" : "text-gray-400 hover:text-[#003366] hover:bg-gray-50")}>
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Article Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-12">
                {filteredArticles.map((article, i) => (
                  <motion.div key={article.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }} onClick={() => openReader(article)}
                    className="group cursor-pointer text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 mx-auto relative shadow-md group-hover:shadow-xl transition-all duration-500 border-4 border-white ring-1 ring-gray-100">
                      <ProtectedImage watermark={''} src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-[#003366]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <ChevronRight className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="px-2">
                      <span className="text-[8px] font-bold uppercase tracking-widest text-[#003366] mb-1 block opacity-60">{article.category}</span>
                      <h3 className="text-sm sm:text-base font-bold text-[#003366] mb-1 group-hover:text-[#FFD700] transition-colors line-clamp-2 leading-tight min-h-[2.5rem] flex items-center justify-center">
                        {article.title}
                      </h3>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider truncate">{article.author}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        /* ════ READER VIEW ════ */
        ) : (
          <motion.div key="magazine-reader" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className="min-h-screen bg-white">

            {/* Back button only */}
            <div className="fixed top-4 left-4 z-50">
              <button onClick={closeReader}
                className="flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gray-100 shadow-md rounded-full px-4 py-2 text-[#003366] font-bold text-[10px] tracking-widest uppercase hover:bg-[#003366] hover:text-white transition-all duration-300">
                <ArrowLeft size={14} /> Back
              </button>
            </div>

            {selectedArticle && (() => {
              const currentIdx = articles.findIndex(a => a.id === selectedArticle.id);
              const prevTwo = [
                articles[(currentIdx - 2 + articles.length) % articles.length],
                articles[(currentIdx - 1 + articles.length) % articles.length],
              ];
              const nextTwo = [
                articles[(currentIdx + 1) % articles.length],
                articles[(currentIdx + 2) % articles.length],
              ];

              const navigate = (idx: number) => {
                setSelectedArticle(articles[idx]);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              };

              return (
                <div className="pt-20 pb-40 max-w-4xl mx-auto px-6 relative">

                  {/* ── LEFT Sidebar: Previous stories ── */}
                  <div className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-5 pl-3">
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-blue-600 text-center mb-1">Prev</p>
                    {prevTwo.map((art, i) => (
                      <div key={art.id}>
                        <SideStoryBtn art={art} side="left"
                          onClick={() => navigate((currentIdx - (2 - i) + articles.length) % articles.length)} />
                      </div>
                    ))}
                  </div>

                  {/* ── RIGHT Sidebar: Next stories ── */}
                  <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-5 pr-3">
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-blue-600 text-center mb-1">Next</p>
                    {nextTwo.map((art, i) => (
                      <div key={art.id}>
                        <SideStoryBtn art={art} side="right"
                          onClick={() => navigate((currentIdx + i + 1) % articles.length)} />
                      </div>
                    ))}
                  </div>

                  {/* ── Article Header ── */}
                  <div className="mb-20 text-center">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#FFD700] mb-6 block">
                      {selectedArticle.category}
                    </motion.span>

                    <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      className="text-5xl md:text-7xl font-bold text-[#003366] tracking-tighter leading-[0.95] mb-10 serif">
                      {selectedArticle.title}
                    </motion.h2>

                    {/* Profile avatar */}
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                      className="flex items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#FFD700]/40 shadow-lg ring-2 ring-[#003366]/10 flex-shrink-0">
                        <ProtectedImage watermark={''} src={selectedArticle.image} alt={selectedArticle.author}
                          className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-[#003366]">{selectedArticle.author}</p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{selectedArticle.role}</p>
                      </div>
                    </motion.div>

                    {/* Decorative gold divider */}
                    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
                      className="mt-10 mx-auto w-16 h-0.5 bg-[#FFD700] rounded-full" />
                  </div>

                  {/* ── Article Content ── */}
                  <div className="space-y-12">
                    {selectedArticle.content.map((para, idx) => (
                      <p key={idx} className={cn(
                        "text-xl md:text-2xl text-gray-600 leading-relaxed font-light",
                        idx === 0 && "first-letter:text-8xl first-letter:font-bold first-letter:text-[#003366] first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-2"
                      )}>
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* ── Article Footer ── */}
                  <div className="mt-32 pt-20 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Like */}
                    <button onClick={() => toggleLike(selectedArticle.id)}
                      className={cn("flex items-center gap-3 text-xs font-bold uppercase tracking-widest transition-colors",
                        likedArticles.has(selectedArticle.id) ? "text-rose-500" : "text-[#003366] hover:text-[#FFD700]")}>
                      <Heart size={18} fill={likedArticles.has(selectedArticle.id) ? "currentColor" : "none"} />
                      {likedArticles.has(selectedArticle.id) ? 'Liked' : 'Like'}
                    </button>

                    {/* Bottom Prev / Next */}
                    <div className="flex items-center gap-6">
                      <button onClick={() => navigate((currentIdx - 1 + articles.length) % articles.length)}
                        className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#003366] transition-colors">
                        <ChevronLeft size={18} />
                        {articles[(currentIdx - 1 + articles.length) % articles.length].title.slice(0, 22)}...
                      </button>
                      <div className="w-px h-6 bg-gray-200" />
                      <button onClick={() => navigate((currentIdx + 1) % articles.length)}
                        className="flex items-center gap-2 text-sm font-bold text-[#003366] hover:text-[#FFD700] transition-colors">
                        {articles[(currentIdx + 1) % articles.length].title.slice(0, 22)}...
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;


