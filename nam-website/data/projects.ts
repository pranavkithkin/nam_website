export type Industry = 'healthcare' | 'education' | 'ecommerce' | 'corporate' | 'creative' | 'industrial' | 'hospitality' | 'food';
export type Region = 'UAE' | 'India' | 'KSA';

export interface Project {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    industry: Industry;
    region?: Region;
    liveUrl?: string;
    thumbnail: string;
    images: string[];
    features: string[];
    techStack: string[];
    isDemo: boolean;
    isFeatured: boolean;
    heroImage?: string;
    previewVideo?: string;
}

export const industries: { value: Industry | 'all'; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'creative', label: 'Creative' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'food', label: 'Food & Beverage' },
];

export const projects: Project[] = [
    // Delivered Client Websites
    {
        slug: 'bwmc',
        name: 'BWMC',
        tagline: 'Professional Corporate Excellence',
        description: 'A sophisticated corporate website for BWMC, featuring a modern design that reflects the company\'s professional standards and business expertise in the UAE market.',
        industry: 'corporate',
        region: 'UAE',
        liveUrl: 'https://bwmc.ae',
        thumbnail: '/images/projects/bwmc.jpg',
        images: ['/images/projects/bwmc.jpg'],
        features: [
            'Responsive corporate design',
            'Service showcase sections',
            'Contact integration',
            'Multi-language support'
        ],
        techStack: ['React', 'Next.js', 'Tailwind CSS'],
        isDemo: false,
        isFeatured: true,
        heroImage: '/images/projects/bwmc-hero.png',
    },
    {
        slug: 'payyoli-mixture',
        name: 'Payyoli Mixture',
        tagline: 'Authentic Ayurvedic Healthcare',
        description: 'An elegant healthcare website for Payyoli Mixture, showcasing their range of Ayurvedic products and traditional Indian healthcare solutions with a modern digital presence.',
        industry: 'healthcare',
        region: 'India',
        liveUrl: 'https://www.payyolimixture.co.in/',
        thumbnail: '/images/projects/payyoli.jpg',
        images: ['/images/projects/payyoli.jpg'],
        features: [
            'Product catalog',
            'Health information sections',
            'E-commerce integration',
            'Mobile-first design'
        ],
        techStack: ['WordPress', 'WooCommerce', 'Custom Theme'],
        isDemo: false,
        isFeatured: true,
        heroImage: '/images/projects/payyoli-hero.png',
    },
    {
        slug: 'alduz-trading',
        name: 'Alduz Trading',
        tagline: 'Global Trading Solutions',
        description: 'A professional trading company website for Alduz Trading, designed to showcase their services and establish credibility in the competitive UAE trading market.',
        industry: 'corporate',
        region: 'UAE',
        liveUrl: 'https://www.alduztrading.com/',
        thumbnail: '/images/projects/alduz.jpg',
        images: ['/images/projects/alduz.jpg'],
        features: [
            'Service catalog',
            'Company portfolio',
            'Contact forms',
            'Professional branding'
        ],
        techStack: ['React', 'Node.js', 'MongoDB'],
        isDemo: false,
        isFeatured: false,
        heroImage: '/images/projects/alduz-hero.png',
    },
    {
        slug: 'aurora-souq',
        name: 'Aurora Souq',
        tagline: 'Premium E-commerce Experience',
        description: 'A full-featured e-commerce platform for Aurora Souq, providing customers with a seamless shopping experience for premium products in the UAE.',
        industry: 'ecommerce',
        region: 'UAE',
        liveUrl: 'https://www.aurorasouq.com/',
        thumbnail: '/images/projects/aurora.jpg',
        images: ['/images/projects/aurora.jpg'],
        features: [
            'Full e-commerce functionality',
            'Secure payment gateway',
            'Product management',
            'Order tracking system'
        ],
        techStack: ['Shopify', 'Liquid', 'Custom Apps'],
        isDemo: false,
        isFeatured: true,
        heroImage: '/images/projects/aurora-hero.png',
    },
    {
        slug: 'alrizq',
        name: 'Al Rizq',
        tagline: 'Saudi Corporate Excellence',
        description: 'A bilingual corporate website for Al Rizq in Saudi Arabia, featuring Arabic and English language support with a professional design tailored for the KSA market.',
        industry: 'corporate',
        region: 'KSA',
        liveUrl: 'https://www.alrizq.sa/',
        thumbnail: '/images/projects/alrizq.jpg',
        images: ['/images/projects/alrizq.jpg'],
        features: [
            'Bilingual support (Arabic/English)',
            'RTL layout support',
            'Corporate branding',
            'Service showcase'
        ],
        techStack: ['Next.js', 'Tailwind CSS', 'i18n'],
        isDemo: false,
        isFeatured: true,
        heroImage: '/images/projects/alrizq-hero.png',
    },
    {
        slug: 'jaypee-dent',
        name: 'Jaypee Dent',
        tagline: 'Modern Dental Care',
        description: 'A professional healthcare website for Jaypee Dent, a dental clinic in India. Features appointment booking and comprehensive service information for patients.',
        industry: 'healthcare',
        region: 'India',
        liveUrl: 'https://jaypeedent.com/',
        thumbnail: '/images/projects/jaypee.jpg',
        images: ['/images/projects/jaypee.jpg'],
        features: [
            'Appointment booking system',
            'Service descriptions',
            'Doctor profiles',
            'Patient testimonials'
        ],
        techStack: ['WordPress', 'Custom Theme', 'PHP'],
        isDemo: false,
        isFeatured: false,
        heroImage: '/images/projects/jaypee-hero.png',
    },
    {
        slug: 'pixel-and-pepper',
        name: 'Pixel and Pepper',
        tagline: 'Creative Agency Portfolio',
        description: 'A vibrant and creative portfolio website for Pixel and Pepper, a creative agency showcasing their design work and digital marketing services.',
        industry: 'creative',
        liveUrl: 'https://pixelandpepper.com/',
        thumbnail: '/images/projects/pixelpepper.jpg',
        images: ['/images/projects/pixelpepper.jpg'],
        features: [
            'Portfolio gallery',
            'Case studies',
            'Service offerings',
            'Creative animations'
        ],
        techStack: ['React', 'GSAP', 'Styled Components'],
        isDemo: false,
        isFeatured: true,
        heroImage: '/images/projects/pixelpepper-hero.png',
    },
    {
        slug: 'learnix-education',
        name: 'Learnix Education',
        tagline: 'Empowering Digital Learning',
        description: 'An educational platform for Learnix Education, providing students with resources and information about courses and educational programs.',
        industry: 'education',
        liveUrl: 'https://learnixeducation.com/',
        thumbnail: '/images/projects/learnix.jpg',
        images: ['/images/projects/learnix.jpg'],
        features: [
            'Course catalog',
            'Student portal',
            'Enrollment system',
            'Learning resources'
        ],
        techStack: ['Next.js', 'Tailwind CSS', 'Supabase'],
        isDemo: false,
        isFeatured: false,
        heroImage: '/images/projects/learnix-hero.png',
    },
    {
        slug: 'sahara-tutors',
        name: 'Sahara Tutors',
        tagline: 'Personalized Learning Solutions',
        description: 'A tutoring platform connecting students with qualified tutors, featuring easy booking and comprehensive tutor profiles.',
        industry: 'education',
        liveUrl: 'https://saharatutors.com/',
        thumbnail: '/images/projects/sahara.jpg',
        images: ['/images/projects/sahara.jpg'],
        features: [
            'Tutor matching system',
            'Online booking',
            'Subject categories',
            'Review system'
        ],
        techStack: ['React', 'Firebase', 'Tailwind CSS'],
        isDemo: false,
        isFeatured: false,
        heroImage: '/images/projects/sahara-hero.png',
    },
    {
        slug: 'sun-tools-engineering',
        name: 'Sun Tools Engineering',
        tagline: 'Industrial Solutions Provider',
        description: 'A professional industrial website for Sun Tools Engineering, showcasing their range of engineering tools and services for the manufacturing sector.',
        industry: 'industrial',
        liveUrl: 'https://suntoolsengineering.com/',
        thumbnail: '/images/projects/suntools.jpg',
        images: ['/images/projects/suntools.jpg'],
        features: [
            'Product catalog',
            'Technical specifications',
            'Inquiry system',
            'Industry certifications'
        ],
        techStack: ['WordPress', 'Custom Theme', 'WooCommerce'],
        isDemo: false,
        isFeatured: false,
        heroImage: '/images/projects/suntools-hero.png',
    },
    {
        slug: 'ahalia-group',
        name: 'Ahalia Group',
        tagline: 'Diversified Business Excellence',
        description: 'A comprehensive corporate website for Ahalia Group, one of UAE\'s diversified business conglomerates, showcasing their various business verticals.',
        industry: 'corporate',
        region: 'UAE',
        liveUrl: 'https://ahaliagroup.com/ahh/',
        thumbnail: '/images/projects/ahalia.jpg',
        images: ['/images/projects/ahalia.jpg'],
        features: [
            'Multi-business showcase',
            'Corporate history',
            'Leadership profiles',
            'News & updates section'
        ],
        techStack: ['Next.js', 'Strapi CMS', 'Tailwind CSS'],
        isDemo: false,
        isFeatured: true,
        heroImage: '/images/projects/ahalia-hero.png',
    },
    {
        slug: 'dua-college',
        name: 'DUA College',
        tagline: 'Excellence in Education',
        description: 'An educational institution website for DUA College in India, providing prospective students with course information, admissions details, and campus updates.',
        industry: 'education',
        region: 'India',
        liveUrl: 'https://duacollege.in/',
        thumbnail: '/images/projects/dua.jpg',
        images: ['/images/projects/dua.jpg'],
        features: [
            'Course management',
            'Admissions portal',
            'Faculty profiles',
            'Event calendar'
        ],
        techStack: ['PHP', 'MySQL', 'Bootstrap'],
        isDemo: false,
        isFeatured: false,
        heroImage: '/images/projects/dua-hero.png',
    },
    {
        slug: 'ayisha-portfolio',
        name: 'Ayisha Portfolio',
        tagline: 'Creative Personal Brand',
        description: 'A stunning personal portfolio website for Ayisha, showcasing creative work and professional achievements with an elegant, modern design.',
        industry: 'creative',
        liveUrl: 'https://zorxmedia.com/ayisha/',
        thumbnail: '/images/projects/ayisha.jpg',
        images: ['/images/projects/ayisha.jpg'],
        features: [
            'Portfolio showcase',
            'About section',
            'Contact integration',
            'Smooth animations'
        ],
        techStack: ['React', 'Framer Motion', 'CSS3'],
        isDemo: false,
        isFeatured: false,
        heroImage: '/images/projects/ayisha-hero.png',
    },

    // Demo Websites
    {
        slug: 'natural-yoga',
        name: 'Natural Yoga',
        tagline: 'Wellness & Mindfulness',
        description: 'A serene and calming website design for a yoga and wellness studio, featuring class schedules, instructor profiles, and online booking capabilities.',
        industry: 'healthcare',
        liveUrl: 'https://fazilfazi991natural-yoga.vercel.app/',
        thumbnail: '/images/projects/yoga.jpg',
        images: ['/images/projects/yoga.jpg'],
        features: [
            'Class scheduling',
            'Instructor profiles',
            'Membership plans',
            'Wellness blog'
        ],
        techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        isDemo: true,
        isFeatured: false,
        heroImage: '/images/projects/yoga-hero.png',
    },
    {
        slug: 'jim-harvey',
        name: 'Jim Harvey',
        tagline: 'Professional Personal Brand',
        description: 'A professional personal portfolio website showcasing career achievements, skills, and professional journey with a clean, modern design.',
        industry: 'creative',
        liveUrl: 'https://jimharvey.vercel.app/',
        thumbnail: '/images/projects/jim.jpg',
        images: ['/images/projects/jim.jpg'],
        features: [
            'Personal branding',
            'Resume showcase',
            'Project portfolio',
            'Contact form'
        ],
        techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        isDemo: true,
        isFeatured: false,
        heroImage: '/images/projects/jimharvey-hero.png',
    },
    {
        slug: 'biovitazen',
        name: 'BioVitazen',
        tagline: 'Natural Health Products',
        description: 'A modern e-commerce concept for health and wellness products, featuring a clean design focused on natural and organic product lines.',
        industry: 'healthcare',
        liveUrl: 'https://biovitazen.vercel.app/',
        thumbnail: '/images/projects/biovita.jpg',
        images: ['/images/projects/biovita.jpg'],
        features: [
            'Product showcase',
            'Health benefits info',
            'Shopping cart',
            'Customer reviews'
        ],
        techStack: ['Next.js', 'Tailwind CSS', 'Stripe'],
        isDemo: true,
        isFeatured: false,
        heroImage: '/images/projects/biovita-hero.png',
    },
    {
        slug: 'lampsplus',
        name: 'Lamps Plus',
        tagline: 'Premium Lighting E-commerce',
        description: 'A sophisticated e-commerce platform for premium lighting solutions, featuring an elegant design and comprehensive product catalog.',
        industry: 'ecommerce',
        liveUrl: 'https://lampsplus.vercel.app/',
        thumbnail: '/images/projects/lampsplus.jpg',
        images: ['/images/projects/lampsplus.jpg'],
        features: [
            'Product catalog',
            'E-commerce functionality',
            'Modern UI design',
            'Responsive layout'
        ],
        techStack: ['Next.js', 'Tailwind CSS', 'Stripe'],
        isDemo: true,
        isFeatured: false,
        heroImage: '/images/projects/lampsplus-hero.png',
    },
    {
        slug: 'jerins-food-stuff',
        name: 'Jerins Food Stuff',
        tagline: 'Premium Food & Beverages',
        description: 'A delightful food and beverage website showcasing a variety of culinary offerings with an appetizing design and easy navigation.',
        industry: 'food',
        liveUrl: 'https://websites-jerins-food-stuff.vercel.app/',
        thumbnail: '/images/projects/jerins.jpg',
        images: ['/images/projects/jerins.jpg'],
        features: [
            'Menu showcase',
            'Food gallery',
            'Order system',
            'Special offers'
        ],
        techStack: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
        isDemo: true,
        isFeatured: false,
        heroImage: '/images/projects/jerins-hero.png',
    },
    {
        slug: 'stepvision-hotel-supplies',
        name: 'StepVision Hotel Supplies',
        tagline: 'B2B Hospitality Solutions',
        description: 'A comprehensive B2B website for hotel supplies and hospitality equipment, designed to serve the needs of hotels and restaurants.',
        industry: 'hospitality',
        liveUrl: 'https://websites-stepvision-hotel-supplies.vercel.app/',
        thumbnail: '/images/projects/stepvision.jpg',
        images: ['/images/projects/stepvision.jpg'],
        features: [
            'Product catalog',
            'B2B ordering',
            'Bulk pricing',
            'Customer accounts'
        ],
        techStack: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
        isDemo: true,
        isFeatured: false,
        heroImage: '/images/projects/stepvision-hero.png',
    },
];

export const featuredProjects = projects.filter(p => p.isFeatured);

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}

export function getProjectsByIndustry(industry: Industry | 'all'): Project[] {
    if (industry === 'all') return projects;
    return projects.filter(p => p.industry === industry);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
    const index = projects.findIndex(p => p.slug === slug);
    return {
        prev: index > 0 ? projects[index - 1] : null,
        next: index < projects.length - 1 ? projects[index + 1] : null,
    };
}
