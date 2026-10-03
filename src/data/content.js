import { SITE } from './site'

const MEDIA = 'https://tis.edu.in/_next/static/media'

export const HERO = {
  eyebrow: 'CBSE co-educational boarding and day school, Class IV to XII',
  title: ['Tulas', 'International', 'School'],
  subtitle: 'Boarding and Day School Excellence',
  description:
    'A community in Dehradun where academic excellence, holistic development and leadership prepare students to become global citizens.',
  badge: '#1 co-ed boarding school in Dehradun, by Education Today',
}

export const ABOUT = {
  heading: 'Education through seamless opportunities',
  paragraphs: [
    `Tulas International School was established in ${SITE.established} under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.`,
    'With the right support and inspiration, creativity finds its way. For us, school is not just about lessons. It is about endless opportunities waiting to be explored.',
  ],
  statement: 'Academics, music, art or drama: we bring out the best in every student.',
  image: `${MEDIA}/AtTIS.59351600.png`,
  imageAlt: 'Students enjoying school life at Tulas International School',
}

export const STATS = [
  { value: new Date().getFullYear() - SITE.established, label: 'Years of excellence' },
  { value: 12, suffix: '+', label: 'Collaborations with universities and programmes' },
  { value: 1, prefix: '#', label: 'Co-ed boarding school in Dehradun, per Education Today' },
]

export const ACADEMICS = [
  {
    classes: 'IV–V',
    icon: 'book',
    title: 'Foundation years',
    description: 'Curiosity-led learning that builds strong fundamentals in a nurturing boarding environment.',
  },
  {
    classes: 'VI–VIII',
    icon: 'users',
    title: 'Middle school',
    description: 'Students broaden their skills and discover their strengths in academics and beyond.',
  },
  {
    classes: 'IX–X',
    icon: 'trophy',
    title: 'Secondary school',
    description: 'Focused CBSE preparation alongside sports, arts and leadership opportunities.',
  },
  {
    classes: 'XI–XII',
    icon: 'globe',
    title: 'Senior secondary',
    description: 'Guidance and support as students prepare for their next step in higher education.',
  },
]

export const FACILITIES = [
  {
    figure: '22',
    title: 'Acre campus',
    description: 'A pollution-free campus on Chakrata Road, Dehradun, made for learning, play and boarding life.',
    tone: 'bg-cobalt text-white',
    className: 'md:col-span-2 md:row-span-2',
    featured: true,
  },
  {
    figure: '16+',
    title: 'Sports',
    description: 'Archery, shooting range, horse riding, swimming, squash and more.',
    tone: 'bg-sun text-navy',
    className: 'md:col-span-2',
  },
  {
    figure: '24×7',
    title: 'Medical assistance',
    description: 'Round-the-clock care for students.',
    tone: 'bg-navy text-white',
    className: '',
  },
  {
    figure: '6:1',
    title: 'Student–teacher ratio',
    description: 'Personal attention for every learner.',
    tone: 'bg-sky text-navy',
    className: '',
  },
  {
    figure: 'IV–XII',
    title: 'Boarding and day school',
    description: 'A co-educational community for boys and girls.',
    tone: 'bg-navy text-white',
    className: 'md:col-span-2',
  },
  {
    figure: '360°',
    title: 'Take the virtual tour',
    description: 'Walk through the campus from wherever you are.',
    tone: 'bg-cobalt text-white',
    className: 'md:col-span-2',
    href: SITE.virtualTourUrl,
  },
]

export const REASONS = [
  {
    icon: 'trophy',
    title: 'Ranked #1 in Dehradun',
    description:
      'The #1 co-educational boarding school in Dehradun by Education Today, and #1 in North India by Outlook.',
    tone: 'bg-sun text-navy',
    wide: true,
  },
  {
    icon: 'users',
    title: '6:1 student–teacher ratio',
    description: 'A low ratio so every student receives personal attention and mentoring.',
  },
  {
    icon: 'activity',
    title: '16+ sports',
    description: 'From archery to horse riding, sport builds joy and discipline in everyday life.',
  },
  {
    icon: 'heart',
    title: '24×7 medical assistance',
    description: "Round-the-clock medical assistance for students' health and parents' peace of mind.",
    tone: 'bg-cobalt text-white',
    wide: true,
  },
  {
    icon: 'globe',
    title: '12+ collaborations',
    description: 'Partnerships with universities and international programmes broaden horizons.',
  },
  {
    icon: 'star',
    title: 'Inspiring role models',
    description:
      'Olympians, Arjuna awardees and national leaders have visited the campus to inspire students.',
    wide: true,
  },
]

export const ACTIVITIES = [
  { title: 'Polo', image: `${MEDIA}/polo.973ddbae.webp`, tone: 'bg-cobalt text-white' },
  { title: 'Karate', image: `${MEDIA}/karate.4020fba5.webp`, tone: 'bg-sun text-navy' },
  { title: 'Swimming', image: `${MEDIA}/swimming.6fc81e65.webp`, tone: 'bg-sky text-navy' },
  { title: 'Dance', image: `${MEDIA}/dance.88843edb.webp`, tone: 'bg-navy text-white' },
  { title: 'Pottery', image: `${MEDIA}/pot.6f7c2ee3.webp`, tone: 'bg-sun text-navy' },
]

export const SPORTS = [
  'Archery', 'Cycling', 'Hockey', 'Swimming', 'Taekwondo', 'Football', 'Shooting Range',
  'Horse Riding', 'Billiards', 'Squash', 'Volleyball', 'Basketball', 'Cricket',
  'Lawn Tennis', 'Badminton', 'Table Tennis',
]

export const TESTIMONIALS = [
  {
    name: 'Namita Agarwal',
    role: 'Mother of Krishna Agarwal',
    quote:
      'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.',
    image: `${MEDIA}/namita.86a0f799.png`,
  },
  {
    name: 'Tashi Tsering',
    role: 'Father of Jigmet Skaldon',
    quote:
      'I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.',
    image: `${MEDIA}/tashi.3807cb3c.png`,
  },
  {
    name: 'Ashu Arora',
    role: 'Mother of Manisha Changrani',
    quote:
      'It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent.',
    image: `${MEDIA}/ashu.9d447126.png`,
  },
  {
    name: 'Suresh Kumar',
    role: 'Father of Aditya Kumar',
    quote:
      'Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme.',
    image: `${MEDIA}/suresh.80d60e49.png`,
  },
  {
    name: 'Sandeep Kumar',
    role: 'Father of Aryan',
    quote:
      'Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.',
    image: `${MEDIA}/sandeep.1b22b59e.png`,
  },
  {
    name: 'Mrs Urja Bhayani',
    role: 'Mother of Shikha & Samarth Bhayani',
    quote: 'Teachers are passionate and helpful towards academics.',
    image: `${MEDIA}/urja.03e3c3f3.png`,
  },
]
