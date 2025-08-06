import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function runCustomMigration() {
  await prisma.work.createMany({
    data: [
      {
        name: 'Cedar',
        description:
          '<p>Cedar is recruitment company based in UK, specialized in recruitment and search consultancy that provides bespoke solutions to Finance, Tax, Change & Transformation and Procurement & Supply Chain and Public Sector/Not For Profit clients, within the UK and internationally.</p>',
        tags: 'NextJs, Bootstrap',
        imageUrl: '/collections/works/cedar.png',
        externalUrl: null,
        period: 'December 2023 - February 2024',
      },
      {
        name: 'Spinks',
        description: '<p>Spinks is recruitment company based in UK.</p>',
        tags: 'NextJs, Bootstrap',
        imageUrl: '/collections/works/spinks.png',
        externalUrl: 'https://www.wearespinks.com/',
        period: 'February 2024 - April 2024',
      },
      {
        name: 'McCarthy Recruitment',
        description:
          '<p>McCarthy Recruitment is a specialist recruitment agency based in UK, specialising in Head Office functions and Executive Search.</p>',
        tags: 'NextJs, Bootstrap',
        imageUrl: '/collections/works/mccarthy.png',
        externalUrl: null,
        period: 'April 2024 - May 2024',
      },
      {
        name: 'Rullion',
        description: '<p>Rullion is recruitment agency based in UK.</p>',
        tags: 'NextJs, Bootstrap',
        imageUrl: '/collections/works/rullion.png',
        externalUrl: 'https://www.rullion.co.uk/',
        period: 'June 2024 - August 2024',
      },
      {
        name: '83Zero',
        description:
          '<p>83Zero is recruitment company based in the UK, experts in tech and digital recruitment.</p>',
        tags: 'NextJs, Bootstrap',
        imageUrl: '/collections/works/83zero.png',
        externalUrl: 'https://www.83zero.com/',
        period: 'July 2024 - August 2024',
      },
      {
        name: 'Aspion',
        description:
          '<p>Aspion is recruitment company in the UK specialized in Manufacturing, Metals, Sales, Transport & Logistics, Operations, Supply Chain, Finance & Accountancy markets.</p>',
        tags: 'NextJs, Bootstrap',
        imageUrl: '/collections/works/aspion.png',
        externalUrl: 'https://aspion.co.uk/',
        period: 'August 2024 - September 2024',
      },
      {
        name: 'Digital Waffle',
        description:
          '<p>Digital Waffle is a digital recruitment agency based in Birmingham, UK specialised in recruiting for roles in marketing, tech, IT, data & operations.</p>',
        tags: 'NextJs, Bootstrap',
        imageUrl: '/collections/works/digital-waffle.png',
        externalUrl: 'https://www.digitalwaffle.co/',
        period: 'September 2024 - November 2024',
      },
      {
        name: 'Deverell Smith',
        description:
          '<p>Deverell Smith is a recruitment company based in UK specialized in property recruitment, executive search, and talent solutions.</p>',
        tags: 'NextJs, Bootstrap',
        imageUrl: '/collections/works/deverell-smith.png',
        externalUrl: 'https://www.deverellsmith.com/',
        period: 'December 2024 - February 2025',
      },
      {
        name: 'ERSG',
        description:
          '<p>ERSG is a recruitment company based in UK specialized in staffing services and workforce solutions to the green energy, renewable, engineering, power & built markets.</p>',
        tags: 'NextJs, Bootstrap, Multi Language Sites',
        imageUrl: '/collections/works/ersg.png',
        externalUrl: 'https://www.ersg-global.com/',
        period: 'January 2025 - March 2025',
      },
      {
        name: 'Vetro Recruitment',
        description:
          '<p>Vetro Recruitment is a recruitment company based in UK specialized in Health, Nursing, Support Work, Housing, Education and Social Work recruitment.</p>',
        tags: 'NextJs, Bootstrap',
        imageUrl: '/collections/works/vetro.png',
        externalUrl: 'https://www.vetrorecruitment.co.uk/',
        period: 'April 2025 - July 2025',
      },
    ],
  });

  console.log('Seeded works successfully!');
}

runCustomMigration()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
