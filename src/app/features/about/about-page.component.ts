import { afterNextRender, Component, DestroyRef, ElementRef, inject, signal } from '@angular/core';
import {
  LucideArrowUpRight,
  LucideAward,
  LucideBadgeCheck,
  LucideBookOpenText,
  LucideBriefcaseBusiness,
  LucideCalendarDays,
  LucideDownload,
  LucideExternalLink,
  LucideFileText,
  LucideGraduationCap,
  LucideLayers,
  LucideMail,
  LucideMapPin,
  LucideMenu,
  LucideNewspaper,
  LucidePhone,
  LucideShieldCheck,
  LucideSparkles,
  LucideTerminal,
  LucideX
} from '@lucide/angular';
import { animate, inView, stagger } from 'motion';
import type { AnimationOptions, DOMKeyframesDefinition } from 'motion';

type LinkItem = {
  label: string;
  href: string;
};

type Metric = {
  value: string;
  label: string;
};

type ContactInfo = {
  email: string;
  linkedin: string;
  location: string;
  phone: string;
  phoneHref: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  projects: string[];
  highlights: string[];
};

type Education = {
  course: string;
  institution: string;
  period: string;
  result: string;
};

type Project = {
  name: string;
  context: string;
  details: string[];
};

type Photo = {
  src: string;
  alt: string;
  variant: 'portrait' | 'wide' | 'square';
};

type Credential = {
  label: string;
  href: string;
};

type Achievement = {
  title: string;
  details: string[];
  href?: string;
};

type PressMention = {
  publication: string;
  date: string;
  title: string;
  detail: string;
  href: string;
};

type Publication = {
  title: string;
  journal: string;
  citation: string;
  authors: string;
  keywords: string[];
  href: string;
  pdfHref: string;
};

@Component({
  selector: 'app-about-page',
  imports: [
    LucideArrowUpRight,
    LucideAward,
    LucideBadgeCheck,
    LucideBookOpenText,
    LucideBriefcaseBusiness,
    LucideCalendarDays,
    LucideDownload,
    LucideExternalLink,
    LucideFileText,
    LucideGraduationCap,
    LucideLayers,
    LucideMail,
    LucideMapPin,
    LucideMenu,
    LucideNewspaper,
    LucidePhone,
    LucideShieldCheck,
    LucideSparkles,
    LucideTerminal,
    LucideX
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  readonly menuOpen = signal(false);

  readonly navItems: LinkItem[] = [
    { label: 'About', href: '/about-me#about' },
    { label: 'Experience', href: '/about-me#experience' },
    { label: 'Skills', href: '/about-me#skills' },
    { label: 'Certifications', href: '/about-me#certifications' },
    { label: 'Media', href: '/about-me#media' },
    { label: 'Contact', href: '/about-me#contact' }
  ];

  readonly contact: ContactInfo = {
    email: 'merapureddy22@gmail.com',
    linkedin: 'https://www.linkedin.com/in/merapureddy/',
    location: 'Hyderabad, Telangana',
    phone: '7891011226',
    phoneHref: '+917891011226'
  };

  readonly metrics: Metric[] = [
    { value: '5 years 10 months', label: 'Java full stack development' },
    { value: '6', label: 'AWS and Azure certifications' },
    { value: '3', label: 'Enterprise product and engineering teams' },
    { value: '3x', label: 'Merit Scholarship Award recipient' }
  ];

  readonly focusAreas = [
    'Software Development Life Cycle',
    'Angular UI and reusable components',
    'Spring Boot and microservices',
    'Regression testing and Playwright automation'
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Technical Skills',
      items: [
        'C++',
        'Java',
        'Python',
        'SQL',
        'Spring Boot',
        'Microservices',
        'Angular',
        'UI',
        'Spring Batch',
        'Regression Testing',
        'Playwright Automation'
      ]
    },
    {
      title: 'Tools',
      items: [
        'Eclipse',
        'VS Code',
        'WinSCP',
        'SOAP UI',
        'GIT',
        'SonarQube',
        'Snyk',
        'Squirrel SQL',
        'Tortoise Git'
      ]
    },
    {
      title: 'Soft Skills',
      items: [
        'Communication',
        'Teamwork',
        'Time management',
        'Leadership',
        'Collaboration',
        'Attention to Detail'
      ]
    }
  ];

  readonly experiences: Experience[] = [
    {
      role: 'Senior Associate, Product Development Team',
      company: 'Acuiti Labs (I) Pvt. Ltd.',
      location: 'Hyderabad, Telangana',
      period: '27-02-2025 - Present',
      projects: [
        'Q2C Customer Portal (Quote-to-Cash) - FIAR, SAP BRIM and SAP Subscription Billing (XaaS)',
        'AI SmartMatch (AI-powered intelligent matching platform)'
      ],
      highlights: [
        'Implemented complex UI pages including dispute management, admin, and billing with lazy load modules and reusable components.',
        'Implemented attachment upload and download flow supporting base64 Data-URLs, ArrayBuffer fallback, MIME detection, and Blob downloads.',
        'Added modal dialogs, loading spinners, clear error messages, and date formatting using DatePipe.',
        'Integrated with shared services and central state including SharedService and EnvironmentService in an enterprise micro-frontend environment.',
        'Consumed REST APIs via HttpClient with environment-aware base URLs and error/loading states.',
        'Developed and maintained Spring Boot services including Payment, Notification, and Agreement.',
        'Managed routing through API Gateway, standardized API contracts, and managed builds and dependencies with Maven.',
        'Built email-based workflow functionalities in AI SmartMatch to handle user replies and initiate transaction and payment processing.',
        'Integrated LLM-driven content generation via bedrock-client.py to produce dynamic personalized email bodies and subject lines.',
        'Created Playwright test suites for critical user flows to automate regression testing and generated HTML test reports.'
      ]
    },
    {
      role: 'Systems Engineer',
      company: 'Tata Consultancy Services',
      location: 'Hyderabad, Telangana',
      period: '14-11-2022 - 26-02-2025',
      projects: ['DMV, BOB, AZSR2226 Processing (State Farm Insurance)'],
      highlights: [
        'Experienced in Agile Frameworks and Software Development Life Cycle, ensuring efficient project delivery.',
        'Hands-on experience in system design, application development, testing, and ensuring operational stability.',
        'Proficient in front-end technologies like HTML, CSS, JavaScript, and Angular.',
        'Familiarity with microservice architecture and building modular applications.',
        'Experience with Splunk for log monitoring and analysis.',
        'Implemented functionality in a Spring Boot application to manage retrieval and transmission of records.',
        'Spearheaded processing of intricate state files containing detailed insurance information with client-specific code modifications.',
        'Applied innovation to technical solutions and adapted learnings across business domains.'
      ]
    },
    {
      role: 'Senior Project Engineer',
      company: 'Wipro',
      location: 'Hyderabad, Telangana',
      period: '28-09-2020 to 12-11-2022',
      projects: ['CBFG & CBZG (Wells Fargo India Solutions Pvt Ltd)'],
      highlights: [
        'Designed and built scalable and robust systems with Java to drive ongoing enhancements for product teams.',
        'Maintained clean, reusable code with OOPs principles, exception handling, and generics usage.',
        'Used Git for collaborative development and Microsoft Office tools for documentation and reporting.',
        'Worked on Maven build tools for streamlined development processes.',
        'Migrated JDK8 to JDK 11.',
        'Introduced new Health Check Point with Spring Actuator dependency.',
        'Integrated Ping Federate for user authentication and Single Sign-On.'
      ]
    }
  ];

  readonly projects: Project[] = [
    {
      name: 'Q2C Customer Portal',
      context: 'Quote-to-Cash - FIAR, SAP BRIM and SAP Subscription Billing (XaaS)',
      details: ['Complex UI pages', 'Lazy load modules', 'Reusable components', 'REST APIs via HttpClient']
    },
    {
      name: 'AI SmartMatch',
      context: 'AI-powered intelligent matching platform',
      details: ['Email-based workflows', 'Transaction and payment processing', 'LLM-driven content generation']
    },
    {
      name: 'DMV, BOB, AZSR2226 Processing',
      context: 'State Farm Insurance',
      details: ['Spring Boot application', 'State file processing', 'Splunk log monitoring and analysis']
    },
    {
      name: 'CBFG & CBZG',
      context: 'Wells Fargo India Solutions Pvt Ltd',
      details: ['Java systems', 'JDK8 to JDK 11 migration', 'Spring Actuator health check', 'Ping Federate SSO']
    }
  ];

  readonly education: Education[] = [
    {
      course: 'B.Tech Computer Science',
      institution: 'GVP College for Degree and PG Courses',
      period: '2016-2020',
      result: 'First Class'
    },
    {
      course: 'Intermediate (MPC)',
      institution: 'Narayana Junior College',
      period: '2015 - 2016',
      result: '92.5%'
    },
    {
      course: 'SSC',
      institution: 'Amar Concept School',
      period: '2013 - 2014',
      result: '9.2'
    }
  ];

  readonly certifications: Credential[] = [
    {
      label: 'AWS Certified Cloud Practitioner (Validation Number: 122ZPQN2XF14Q4CN)',
      href: 'https://aws.amazon.com/verification'
    },
    {
      label: 'AWS Certified Developer - Associate (Validation Number: 74cd83ccc2b24b2baedb6b44dad9d6ee)',
      href: 'https://aws.amazon.com/verification'
    },
    {
      label: 'AWS Certified Solutions Architect - Associate (Validation Number: 05d632b2528a4efbaadb4f481383f11c)',
      href: 'https://aws.amazon.com/verification'
    },
    {
      label: 'Microsoft Certified: Azure Fundamentals AZ-900',
      href: 'https://learn.microsoft.com/api/credentials/share/en-us/ajay7777/5074660E49BF91C?sharingId'
    },
    {
      label: 'Microsoft Certified: Azure Administrator Associate AZ 104',
      href: 'https://learn.microsoft.com/api/credentials/share/en-us/ajay7777/F76CF9EACE45D77D?sharingId'
    },
    {
      label: 'Microsoft Certified: Azure Solutions Architect Expert AZ 305',
      href: 'https://learn.microsoft.com/api/credentials/share/en-us/ajay7777/E8841040150D24A5?sharingId'
    }
  ];

  readonly achievements: Achievement[] = [
    {
      title: 'DGNP(V) Merit Scholarship Awards',
      href: 'https://drive.google.com/drive/u/0/folders/1AiCDU8NURV1Y9Nt2YJycBbgILbwXE-pn',
      details: [
        'Certificate of Merit from Vice Admiral V. K. Namballa, Director General, Director General Naval Project, Naval Base Visakhapatnam, under the Educational Scholarship Scheme for academic merit. 25-Jul-2014.',
        'Certificate of Merit from Vice Admiral P. M. Deshpande, Director General, Director General Naval Project, Naval Base Visakhapatnam, under the Educational Scholarship Scheme for academic merit. Jul-2015.',
        'Certificate of Merit from Vice Admiral P. M. Deshpande, Director General, Director General Naval Project, Naval Base Visakhapatnam, under the Educational Scholarship Scheme for academic merit. 20-Jun-2016.'
      ]
    },
    {
      title: 'SWISH - Sunrise Indian Innovative Student Hackathon 2019',
      href: 'https://drive.google.com/drive/folders/1gXf7BvhzzqyNZ2ZqHcxOR-WtEncs9q30?usp=sharing',
      details: [
        'Won 3rd Prize at SWISH - Sunrise Indian Innovative Student Hackathon 2019, powered by DENSO Corporation, a global Fortune 500 Tier 1 automotive technology supplier; organized by infoBRIDGE and supported by TalentSprint and GITAM. 07-Sep 2019.'
      ]
    },
    {
      title: 'Acuiti Labs Appreciations, Awards and Recognitions',
      href: 'https://drive.google.com/drive/folders/1K3tqPYD0pHXhCy7gMmKU_O1en4ujI6V8?usp=sharing',
      details: [
        'Formally honored with an appreciation letter from Acuiti Labs for dedication, collaboration, and consistent contributions. 2026.',
        'Contributed to the Product Development Team, the only team across the company to receive the Best Team Award twice for outstanding performance and excellence. 2025 & 2026.'
      ]
    },
    {
      title: 'TCS Appreciations, Awards and Recognitions',
      href: 'https://drive.google.com/drive/folders/1z58j0U3BysurpkC4rycMV4iatet9hU-i?usp=drive_link',
      details: [
        'Appreciation Certificate from Anitha Mohan, Delivery Partner of State Farm Account, TCS, for commitment and significant contribution toward delivering great work. 18-Sep-2023.',
        'Appreciation Certificate from Chandu Chittibomma for problem-solving skills, positive attitude, and strong work ethic. 31-Oct-2023.',
        'Best Team Award from Milind Lakkad, Executive VP & Global Head, Human Resources, for outstanding contribution to the organization. 11-Mar-2024.',
        "Appreciation Certificate from Anitha Mohan, Delivery Partner of State Farm Account, TCS, for contribution toward FY'24 State Farm objectives. 03-Jun-2024.",
        'On The Spot Award from Milind Lakkad, Executive VP & Global Head, Human Resources, for outstanding contribution to the organization. 06-Aug-2024.',
        'Appreciation Certificate from Anitha Mohan, Delivery Partner of State Farm Account, TCS, for contribution toward unit performance for the quarter. 27-Aug-2024.',
        'Appreciation Certificate from Anitha Mohan, Delivery Partner of State Farm Account, TCS, for contribution toward account performance and deliverables. 16-Dec-2024.'
      ]
    }
  ];

  readonly pressMentions: PressMention[] = [
    {
      publication: 'The Times of India',
      date: 'Sep 10, 2019',
      title: 'Gitam holds Swish hackathon',
      detail: 'Covered Ajay Merapureddy from GVP among the III Prize winners for an AI Navigation app idea at SWISH Hackathon - Andhra Pradesh 2019.',
      href: 'https://timesofindia.indiatimes.com/city/visakhapatnam/gitam-holds-swish-hackathon/articleshow/71055625.cms'
    },
    {
      publication: 'The Hans India',
      date: '10 Sept 2019',
      title: 'GITAM holds SWISH Hackathon',
      detail: 'Reported the III Prize recognition for the AI Navigation app idea with Ajay Merapureddy from GVP.',
      href: 'https://www.thehansindia.com/hans/young-hans/gitam-holds-swish-hackathon-562500'
    }
  ];

  readonly publication: Publication = {
    title: 'Insurance Approval Analysis using Machine Learning Algorithms',
    journal: 'International Journal of Computer Sciences and Engineering',
    citation: 'Vol. 8, Issue 12, pp. 46-50, Dec. 2020',
    authors: 'CH. Lakshman Vinay, G. Vijay Sagar, M. Ajay, SK. Hussain, Bh Padma',
    keywords: ['Insurance', 'Machine Learning', 'Decision Tree Induction'],
    href: 'https://ijcseonline.org/index.php/j/article/view/6223',
    pdfHref: 'https://ijcseonline.org/index.php/j/article/download/6223/6212/12388'
  };

  readonly memberships = [
    'Computer Society of India (2016 - 2020)',
    'European Alliance for Innovation (2019 - Present)',
    'International Association of Engineers (2019 - Present)'
  ];

  readonly photos: Photo[] = [
    {
      src: '/assets/photos/ajay-profile-1.jpeg',
      alt: 'Ajay Merapureddy professional photo',
      variant: 'portrait'
    },
    {
      src: '/assets/photos/ajay-profile-2.jpeg',
      alt: 'Ajay Merapureddy seated portrait',
      variant: 'square'
    },
    {
      src: '/assets/photos/ajay-profile-3.jpeg',
      alt: 'Ajay Merapureddy portrait on steps',
      variant: 'wide'
    }
  ];

  constructor() {
    afterNextRender(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const root = this.host.nativeElement;
      root.classList.add('motion-ready');

      const heroItems = Array.from(root.querySelectorAll<HTMLElement>('[data-hero-reveal]'));
      const heroVisuals = Array.from(root.querySelectorAll<HTMLElement>('[data-hero-visual]'));
      const orbitItems = Array.from(root.querySelectorAll<HTMLElement>('[data-orbit-reveal]'));
      const revealItems = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
      const staggerContainers = Array.from(root.querySelectorAll<HTMLElement>('[data-stagger]'));
      const spotlightItems = Array.from(root.querySelectorAll<HTMLElement>(
        '.metric-card, .project-card, .skill-card, .timeline-item__body, .cert-list a, .achievement-list article, .achievement-list a, .credibility-card'
      ));
      const stops: Array<() => void> = [];
      const cleanupCallbacks: Array<() => void> = [];
      const scrollToCurrentHash = (): void => {
        const id = window.location.hash.slice(1);
        const target = id ? document.getElementById(id) : null;

        if (target) {
          target.scrollIntoView({ block: 'start' });
        }
      };
      const hashTimers = [
        window.setTimeout(scrollToCurrentHash, 80),
        window.setTimeout(scrollToCurrentHash, 420),
        window.setTimeout(scrollToCurrentHash, 1100)
      ];

      window.addEventListener('hashchange', scrollToCurrentHash);
      cleanupCallbacks.push(() => window.removeEventListener('hashchange', scrollToCurrentHash));

      if (prefersReducedMotion) {
        [
          ...heroItems,
          ...heroVisuals,
          ...orbitItems,
          ...revealItems,
          ...Array.from(root.querySelectorAll<HTMLElement>('[data-stagger-item]'))
        ].forEach((element) => {
          element.style.opacity = '1';
          element.style.transform = 'none';
        });
        this.destroyRef.onDestroy(() => {
          cleanupCallbacks.forEach((cleanup) => cleanup());
          hashTimers.forEach((timer) => window.clearTimeout(timer));
        });
        return;
      }

      const ease: AnimationOptions['ease'] = [0.16, 1, 0.3, 1];
      const heroKeyframes: DOMKeyframesDefinition = { opacity: [0, 1], y: [24, 0], filter: ['blur(10px)', 'blur(0px)'] };
      const visualKeyframes: DOMKeyframesDefinition = { opacity: [0, 1], x: [54, 0], scale: [0.94, 1] };
      const revealKeyframes: DOMKeyframesDefinition = { opacity: [0, 1], y: [28, 0], scale: [0.98, 1] };

      spotlightItems.forEach((element) => {
        const moveSpotlight = (event: PointerEvent): void => {
          const bounds = element.getBoundingClientRect();
          const x = ((event.clientX - bounds.left) / bounds.width) * 100;
          const y = ((event.clientY - bounds.top) / bounds.height) * 100;
          element.style.setProperty('--spotlight-x', `${Math.max(0, Math.min(100, x))}%`);
          element.style.setProperty('--spotlight-y', `${Math.max(0, Math.min(100, y))}%`);
        };

        element.addEventListener('pointermove', moveSpotlight);
        cleanupCallbacks.push(() => element.removeEventListener('pointermove', moveSpotlight));
      });

      animate(
        heroItems,
        heroKeyframes,
        { delay: stagger(0.075), duration: 0.82, ease }
      );

      animate(
        heroVisuals,
        visualKeyframes,
        { delay: 0.18, duration: 1.05, ease }
      );

      animate(
        orbitItems,
        { opacity: [0, 1], scale: [0.82, 1], y: [14, 0] },
        { delay: stagger(0.08, { startDelay: 0.56 }), duration: 0.7, ease }
      );

      revealItems.forEach((element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(28px) scale(0.98)';
      });

      const isVisibleInViewport = (element: HTMLElement): boolean => {
        const bounds = element.getBoundingClientRect();
        return bounds.top < window.innerHeight * 0.92 && bounds.bottom > window.innerHeight * 0.06;
      };

      const playReveal = (element: HTMLElement): void => {
        if (element.dataset['animated'] === 'true') {
          return;
        }

        element.dataset['animated'] = 'true';
        animate(
          element,
          revealKeyframes,
          { duration: 0.72, ease }
        );
      };

      const playStagger = (container: HTMLElement, items: HTMLElement[]): void => {
        if (container.dataset['animated'] === 'true') {
          return;
        }

        container.dataset['animated'] = 'true';
        animate(
          items,
          revealKeyframes,
          { delay: stagger(0.055), duration: 0.76, ease }
        );
      };

      stops.push(inView(
        revealItems,
        (element) => {
          playReveal(element as HTMLElement);
        },
        { amount: 0.16, margin: '0px 0px -10% 0px' }
      ));

      const staggerGroups: Array<{ container: HTMLElement; items: HTMLElement[] }> = [];

      staggerContainers.forEach((container) => {
        const items = Array.from(container.querySelectorAll<HTMLElement>('[data-stagger-item]'));
        staggerGroups.push({ container, items });

        items.forEach((item) => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(30px) scale(0.985)';
        });

        stops.push(inView(
          container,
          () => {
            playStagger(container, items);
          },
          { amount: 0.12, margin: '0px 0px -8% 0px' }
        ));
      });

      const rescueVisibleItems = (): void => {
        revealItems
          .filter(isVisibleInViewport)
          .forEach(playReveal);

        staggerGroups
          .filter(({ container }) => isVisibleInViewport(container))
          .forEach(({ container, items }) => playStagger(container, items));
      };

      const rescueTimers = [
        window.setTimeout(rescueVisibleItems, 120),
        window.setTimeout(rescueVisibleItems, 520),
        window.setTimeout(rescueVisibleItems, 1100)
      ];

      this.destroyRef.onDestroy(() => {
        stops.forEach((stop) => stop());
        cleanupCallbacks.forEach((cleanup) => cleanup());
        hashTimers.forEach((timer) => window.clearTimeout(timer));
        rescueTimers.forEach((timer) => window.clearTimeout(timer));
      });
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
