import { Injectable } from '@angular/core';
import { portfolioType } from '../utils/types';

@Injectable({
    providedIn: 'root',
})
export class PortfolioService {
    playground: portfolioType[] = [
        {
            projectName: 'STN-Ng',
            demoLink: 'https://stn-ng.vercel.app/',
            description:
                'Ship-to-naija (STN-ng) is a recreate web app for shiptonaija.com website.',
            githubLink: 'https://www.github.com/akinnez/stn-ng',
            stack: ['ang', 'ts', 'twc'],
        },
        {
            projectName: 'College Course Registration',
            demoLink: 'https://ccr-interswitch.vercel.app',
            description:
                'CCR is a student course registration platform design to give olden format of registration in a modern and convenient approach which is different from the regular online course platform.',
            githubLink: 'https://www.github.com/akinnez/ccr',
            stack: ['next', 'ts', 'twc', 'axios', 'shad', 'cs', 'sql'],
        },
        {
            projectName: 'HYBRIDZ',
            demoLink: 'https://akinnez/github.io/myCinema/html/index.html',
            description:
                'HYBRIDZ is a cinema website that bridges the gap between experiencing a cinematic view in a cinema and the cinematic view at home',
            githubLink: 'https://www.github.com/akinnez/myCinema',
            stack: ['html', 'css', 'js'],
        },
        {
            projectName: 'Spectrangle',
            icon: '/images/spectrangle.svg',
            description:
                'Spectrangle is a technological company that helps build websites, web-app and mobile-app.',
            demoLink: 'https://spectrangle.github.io',
            githubLink: 'https://www.github.com/akinnez/spectrangle',
            stack: ['ang', 'ts', 'twc'],
        },
        {
            projectName:
                'L. C. M and H. C. F calculation with real-time solution',
            demoLink: 'https://akinnez/github.io/LCM/Lcm.html',
            description:
                'This is a freestyle task worked on to help young mathematicians implement L.C.M using the H.C.F approach.',
            githubLink: 'https://www.github.com/akinnez/LCM',
            stack: ['html', 'css', 'js'],
        },
        {
            projectName: 'The Factorial Calculator',
            demoLink:
                'https://akinnez/github.io/myfactorialcalc/factorialcalculator.html',
            description:
                'The Factorial Calculator is a calculator that gets you the answers to various mathematical calculation that involves factorials like factorial, permutation, combination and pascal triangle.',
            githubLink: 'https://www.github.com/akinnez/myfactorialcalc',
            stack: ['html', 'css', 'js'],
        },
        {
            projectName: 'Matrix and Determinant',
            demoLink:
                'https://akinnez/github.io/simultaneous/simultaneous.html',
            description:
                'This is a simple app that helps to determine the determinant of matrices of either a 2 × 2 matrix or a 3 × 3 matrix. Also, it can also solve an equation of two-variable equation and three-variable equation.',
            githubLink: 'https://www.github.com/akinnez/simultaneous',
            stack: ['html', 'css', 'js'],
        },
    ];

    portfolio: portfolioType[] = [
        {
            projectName: 'Retrust MFB Landing Pages',
            icon: '/images/retrust.svg',
            description: `Retrust Microfinance Bank provides a range of financial products and services. `,
            demoLink: 'https://www.retrustmfb.com',
            githubLink: 'https://www.github.com/akinnez/retrustMFB',
            stack: ['next', 'ts', 'twc', 'shad'],
        },
        {
            projectName: 'Marcain Co-operative Dashboard',
            icon: '/images/marcain.png',
            description:
                'Marcain Co-operative is a financial cooperative group.',
            demoLink: 'https://www.macainewebadmin.vercel.app',
            githubLink: 'https://www.github.com/devsoftamos/macaine-web-admin',
            stack: ['next', 'ts', 'twc', 'shad', 'axios', 'rechart'],
        },
        {
            projectName: 'Bovpay Admin Dashboard',
            icon: '/images/bovpay-logo2.svg',
            description:
                'Bovpay is an e-commerce platform that links customer, vendor and drivers.',
            demoLink: 'https://bovpay-web-admin-five.vercel.app',
            githubLink: 'https://www.github.com/devsoftamos/bovpay-web-admin',
            stack: ['next', 'ts', 'twc', 'shad', 'axios', 'rechart'],
            iconHeight: '100',
            iconWidth: '100',
        },
        {
            projectName: 'My Portfolio',
            icon: '/welcome-removebg-preview.png',
            description:
                'My portfolio showcase all my information including all the services I render, the projects done and all arcticles written.',
            demoLink: 'https://akinnez.vercel.app',
            githubLink: 'https://www.github.com/akinnez/portfolio',
            stack: ['ana', 'ang', 'ts', 'twc'],
            iconHeight: '100',
            iconWidth: '100',
        },

        {
            projectName: 'Emerge Africa',
            icon: '/images/EMERGE-LOGO3.png',
            description:
                'Emerge Africa is a non-governmental organisation that showcases talents in writing, acting and modelling.',
            demoLink: 'https://www.emerge-web.vercel.app',
            githubLink: 'https://www.github.com/akinnez/emerge',
            stack: ['next', 'ts', 'twc', 'shad'],
            iconHeight: '120',
            iconWidth: '120',
        },
        {
            projectName: 'YOHAN Africa',
            icon: '/images/yohanlogo.svg',
            description:
                'Youth Health Action Network (YOHAN) is an NGO that is focused on building a healthier Africa through youth engagement.',
            demoLink: 'https://www.yohanafrica.org',
            githubLink: 'https://www.github.com/akinnez/yohan',
            stack: ['html', 'css', 'twc', 'js'],
        },
        {
            projectName: 'Current Price Web and Admin Pages',
            icon: '/images/currentprice.png',
            description:
                'Current Price is a web-app that captures market price trends in real-time.',
            demoLink: 'https://www.currentpriceng.com',
            githubLink:
                'https://www.https://github.com/Ozurumba/currentprice-web',
            stack: ['ang', 'ts', 'bs', 'chart'],
            iconHeight: '120',
            iconWidth: '120',
        },
        {
            projectName: 'UpNextAfrika',
            icon: '/images/upnext.PNG',
            iconHeight: '100',
            iconWidth: '100',
            description:
                'UpNextAfrika is a musical streaming web-app that showcase musician and their hit-track, the top-listening track of the week and many more...',
            demoLink: 'https://frontend-beige-one-54.vercel.app/home',
            githubLink: 'https://github.com/up-next-afrika/frontend',
            stack: ['next', 'ts', 'twc', 'axios'],
        },
        {
            projectName: 'KreateSell',
            icon: '/images/KreateSellLogo.png',
            description:
                'KreateSell is an e-commerce platform that provides seamless tools for kreators to sell their digital content. I collaborated with other developer on this project',
            demoLink: 'https://www.kreatesell.com',
            githubLink:
                'https://www.github.com/salvoAgency/kreatesell-frontend',
            stack: ['next', 'js', 'twc', 'axios', 'chart'],
        },
    ];
}
