/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
        label: 'Skills',
        href: '#Skills'
    },
    {
        label: 'MyApps',
        href: '#MyApps'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/YogeshYKG'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gyogesh484/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/YogeshYKG'
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/YogeshYKG'
    },
    {
        label: 'LeetCode',
        href: 'https://leetcode.com/u/user4816XH/'
    }
  ];


const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                        Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary 
                        href="mailto:guptayogesh484.00@gmail.com"
                        label="Start Project"
                        icon="chevron_right"
                        classes="reveal-up"
                    
                    />
                </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        {/* Sitemap Section */}
                        <div>
                            <div className="grid grid-cols-2 gap-2">
                            <p className="reveal-up col-span-2 justify-self-center transform scale-x-125 scale-y-120 ">Sitemap</p>
                            <ul>
                                {sitemap.slice(0, Math.ceil(sitemap.length / 2)).map(({ label, href }, key) => (
                                <li key={key}>
                                    <a
                                    href={href}
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                    {label}
                                    </a>
                                </li>
                                ))}
                            </ul>
                            <ul>
                                {sitemap.slice(Math.ceil(sitemap.length / 2)).map(({ label, href }, key) => (
                                <li key={key}>
                                    <a
                                    href={href}
                                    className="block justify-self-end text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                    {label}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Socials Section */}
                    <div className="pl-10">
                        <p className="mb-2  reveal-up">Socials</p>
                        <ul>
                        {socials.map(({ label, href }, key) => (
                            <li key={key}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                            >
                                {label}
                            </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                    </div>


            </div>

            <div className="flex items-center justify-between pt-10 mb-8 ">
                <a 
                    href="/" 
                    className="logo reveal-up"
                >
                    <img 
                        src={"/images/Logo.svg"}
                        width={80}
                        height={80} 
                        alt="Logo"  
                    />
                </a>

                <p className="text-zinc-500 text-sm reveal-up">
                    &copy; 2024 <span className="text-zinc-200">YogeshYKG</span>
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer
