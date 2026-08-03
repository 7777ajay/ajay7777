import { afterNextRender, Component, DestroyRef, ElementRef, inject, signal } from '@angular/core';
import {
  LucideArrowUpRight,
  LucideAward,
  LucideBadgeCheck,
  LucideBriefcaseBusiness,
  LucideCalendarDays,
  LucideDownload,
  LucideExternalLink,
  LucideGraduationCap,
  LucideLayers,
  LucideMail,
  LucideMapPin,
  LucideMenu,
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
};

@Component({
  selector: 'app-about-page',
  imports: [
    LucideArrowUpRight,
    LucideAward,
    LucideBadgeCheck,
    LucideBriefcaseBusiness,
    LucideCalendarDays,
    LucideDownload,
    LucideExternalLink,
    LucideGraduationCap,
    LucideLayers,
    LucideMail,
    LucideMapPin,
    LucideMenu,
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
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  readonly metrics: Metric[] = [
    { value: '5.10+ years', label: 'Java full stack development' },
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

  readonly certifications = [
    'AWS Certified Cloud Practitioner (Validation Number: 122ZPQN2XF14Q4CN)',
    'AWS Certified Developer - Associate (Validation Number: 74cd83ccc2b24b2baedb6b44dad9d6ee)',
    'AWS Certified Solutions Architect - Associate (Validation Number: 05d632b2528a4efbaadb4f481383f11c)',
    'Microsoft Certified: Azure Fundamentals AZ-900',
    'Microsoft Certified: Azure Administrator Associate AZ 104',
    'Microsoft Certified: Azure Solutions Architect Expert AZ 305'
  ];

  readonly achievements = [
    'Received the Merit Scholarship Award 3 times in a row under the Educational Scholarship Scheme from the Director General Naval Projects(V). (2014 - 2016)',
    '3rd Prize Winner in "SWISH Sunrise Indian Innovative Student Hackathon" (09/2019)',
    'Received Best Team Award and On The Spot Award from Executive Vice President and Global Head Human Resources Milind Lakkad and Appreciation Certificate from HR Chandu and Delivery Partner Anitha Mohan State Farm Account, TCS.'
  ];

  readonly memberships = [
    'Computer Society of India (2016 - 2020)',
    'European Alliance for Innovation (2019 - Present)',
    'International Association of Engineers (2019 - Present)'
  ];

  readonly photos: Photo[] = [
    { src: '/assets/photos/ajay-profile-1.jpeg', alt: 'Ajay Merapureddy professional photo' },
    { src: '/assets/photos/ajay-profile-2.jpeg', alt: 'Ajay Merapureddy seated portrait' },
    { src: '/assets/photos/ajay-profile-3.jpeg', alt: 'Ajay Merapureddy portrait on steps' }
  ];

  constructor() {
    afterNextRender(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const root = this.host.nativeElement;
      const heroItems = Array.from(root.querySelectorAll<HTMLElement>('[data-hero-reveal]'));
      const revealItems = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));

      if (prefersReducedMotion) {
        [...heroItems, ...revealItems].forEach((element) => {
          element.style.opacity = '1';
          element.style.transform = 'none';
        });
        return;
      }

      const ease: AnimationOptions['ease'] = [0.22, 0.75, 0.27, 1];
      const heroKeyframes: DOMKeyframesDefinition = { opacity: [0, 1], y: [18, 0] };
      const revealKeyframes: DOMKeyframesDefinition = { opacity: [0, 1], y: [22, 0] };

      animate(
        heroItems,
        heroKeyframes,
        { delay: stagger(0.08), duration: 0.62, ease }
      );

      revealItems.forEach((element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(22px)';
      });

      const stop = inView(
        revealItems,
        (element) => {
          animate(
            element as HTMLElement,
            revealKeyframes,
            { duration: 0.56, ease }
          );
        },
        { amount: 0.16, margin: '0px 0px -10% 0px' }
      );

      this.destroyRef.onDestroy(() => stop());
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
