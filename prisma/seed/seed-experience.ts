import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function runCustomMigration() {
  await prisma.experience.createMany({
    data: [
      {
        companyName: 'YOUTAP INDONESIA',
        companyImage: '/collections/companies/youtap-indonesia.jpeg',
        location: 'Jakarta, Indonesia',
        startDate: 'July 2023',
        endDate: 'Present',
        description: `
        <ul>
          <li>
            <p>Responsible for backend and frontend development of the Youtap POS app.</p>
          </li>
          <li>
            <p>Lead and mentor BE and FE teams.</p>
          </li>
          <li>
            <p>Analyzing requirements, designing, and developing APIs.</p>
          </li>
        </ul>
        <p>Tech Stack: NestJS, Golang, MySQL, PostgreSQL, GraphQL, GRPC & RESTAPI, Google PubSub, Redis, Microservices, AWS & GCP Environment.</p>`,
        title: 'Tech Development Section Head',
      },
      {
        companyName: 'YOUTAP INDONESIA',
        companyImage: '/collections/companies/youtap-indonesia.jpeg',
        location: 'Jakarta, Indonesia',
        startDate: 'November 2022',
        endDate: 'June 2023',
        description: `
        <ul>
          <li>
            <p>Handled day-to-day coding tasks, including analyzing requirements, designing, and developing APIs.</p>
          </li>
        </ul>
        <p>Tech Stack: NestJS, Golang, MySQL, PostgreSQL, GraphQL, GRPC & RESTAPI, Google PubSub, Redis, Microservices, AWS & GCP Environment.</p>`,
        title: 'Senior Backend Engineer',
      },
      {
        companyName: 'SOURCEFLOW',
        companyImage: '/collections/companies/sourceflow.jpeg',
        location: 'United Kingdom',
        startDate: 'November 2023',
        endDate: 'Present',
        description: `
        <ul>
          <li>
            <p>Convert Figma designs into functional web using Next.js.</p>
          </li>
          <li>
            <p>Integrate APIs and deploy recruitment websites for UK-based companies.</p>
          </li>
          <li>
            <p>Successful projects:</p>
            <ul>
              <li>
                <p>Cedar Recruitment</p>
              </li>
              <li>
                <p>Spinks</p>
              </li>
              <li>
                <p>McCarthy Recruitment</p>
              </li>
              <li>
                <p>Rullion</p>
              </li>
              <li>
                <p>83Zero</p>
              </li>
              <li>
                <p>Aspion</p>
              </li>
              <li>
                <p>Digital Waffle</p>
              </li>
              <li>
                <p>Deverell Smith</p>
              </li>
              <li>
                <p>ERSG</p>
              </li>
            </ul>
          </li>
        </ul>
        <p>Tech Stack: NextJs, Bootstrap</p>`,
        title: 'Frontend Web Developer (Freelance)',
      },
      {
        companyName: 'YUMMY CORP',
        companyImage: '/collections/companies/yummycorp.jpeg',
        location: 'Tangerang, Indonesia',
        startDate: 'January 2022',
        endDate: 'October 2022',
        description: `
        <ul>
          <li>
            <p>Manage backend services.</p>
          </li>
          <li>
            <p>Manage, lead BE and FE teams, mentor intern.</p>
          </li>
          <li>
            <p>Analyzing requirements, designing, and developing APIs</p>
          </li>
        </ul>
        <p>Tech Stack: NestJS, PHP Laravel, MySQL, NoSQL, GraphQL, REST, Kafka, RabbitMQ, Microservices, React Native, NextJS, AWS &amp; GCP Environment.</p>`,
        title: 'API Manager',
      },
      {
        companyName: 'YUMMY CORP',
        companyImage: '/collections/companies/yummycorp.jpeg',
        location: 'Tangerang, Indonesia',
        startDate: 'November 2020',
        endDate: 'December 2021',
        description: `
        <ul>
          <li>
            <p>Led a team of 14 (7 BE, 7 FE) across multiple services and integrations.</p>
          </li>
          <li>
            <p>Managed project planning and sprint ceremonies.</p>
          </li>
          <li>
            <p>Analyzing requirements, designing, and developing APIs</p>
          </li>
        </ul>
        <p>Tech Stack: NestJS, PHP Laravel, MySQL, NoSQL, GraphQL, REST, Kafka, RabbitMQ, Microservices, React Native, NextJS, AWS &amp; GCP Environment.</p>`,
        title: 'Team Lead',
      },
      {
        companyName: 'YUMMY CORP',
        companyImage: '/collections/companies/yummycorp.jpeg',
        location: 'Tangerang, Indonesia',
        startDate: 'September 2020',
        endDate: 'November 2020',
        description: `
        <ul>
          <li>
            <p>Developed backend services in PHP Laravel, NestJS, and GraphQL.</p>
          </li>
          <li>
            <p>Built mobile applications with React Native and web applications using NextJs.</p>
          </li>
        </ul>
        <p>Tech Stack: NestJS, PHP Laravel, MySQL, NoSQL, GraphQL, REST, Kafka, RabbitMQ, Microservices, React Native, NextJS, AWS &amp; GCP Environment.</p>`,
        title: 'Full Stack Engineer',
      },
      {
        companyName: 'AZURE INNOVATIONS SDN BHD',
        companyImage: '/collections/companies/azure-innovations-sdn-bhd.jpeg',
        location: 'Kuala Lumpur, Malaysia',
        startDate: 'October 2018',
        endDate: 'September 2018',
        description: `
        <ul>
          <li>
            <p>Analyzing requirement, design and develop APIs and CMS for XOX Sdn Bhd using PHP Laravel.</p>
          </li>
          <li>
            <p>Develop Android mobile app using React Native.</p>
          </li>
          <li>
            <p>Integrated payment gateways and maintained production servers.</p>
          </li>
        </ul>
        <p>Tech Stack: PHP Laravel, MySQL, REST, Microservices, React Native</p>`,
        title: 'Software Engineer',
      },
      {
        companyName: 'OTIS MALAYSIA SDN BHD',
        companyImage: '/collections/companies/otis.jpg',
        location: 'Kuala Lumpur, Malaysia',
        startDate: 'May 2018',
        endDate: 'October 2018',
        description: `<ul><li><p>Analyzing requirement, design and develop APIs and CMS for Zona Indonesia using PHP Laravel, ReactJS</p></li></ul>`,
        title: 'Software Engineer',
      },
      {
        companyName: 'PT. MULTIBOX INDAH',
        companyImage: '/collections/experiences/pt-multibox-indah.jpeg',
        location: 'Tangerang, Indonesia',
        startDate: 'October 2013',
        endDate: 'May 2018',
        description: `<ul><li><p>Led the implementation of CPS ERP for corrugated carton manufacturing.</p></li><li><p>Developed web-based reporting tools and BI solutions using PHP, CodeIgniter, Laravel and Qlikview BI.</p></li><li><p>Provided IT support and managed network infrastructure.</p></li></ul>`,
        title: 'IT Supervisor',
      },
    ],
  });

  console.log('Seeded experiences successfully!');
}

runCustomMigration()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
