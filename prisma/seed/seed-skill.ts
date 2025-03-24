import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function runCustomMigration() {
  await prisma.skill.createMany({
    data: [
      { name: 'JavaScript', imageUrl: '/collections/skills/javascript.png' },
      { name: 'TypeScript', imageUrl: '/collections/skills/typescript.png' },
      { name: 'NestJS', imageUrl: '/collections/skills/nestjs.png' },
      { name: 'Go', imageUrl: '/collections/skills/go.png' }, // TODO: Add image
      { name: 'GraphQL', imageUrl: '/collections/skills/graphql.png' }, // TODO: Add image
      { name: 'REST', imageUrl: '/collections/skills/rest.png' }, // TODO: Add image
      { name: 'Redis', imageUrl: '/collections/skills/redis.png' }, // TODO: Add image
      { name: 'MySQL', imageUrl: '/collections/skills/mysql.png' }, // TODO: Add image
      { name: 'MongoDB', imageUrl: '/collections/skills/mongodb.png' },
      { name: 'PostgreSQL', imageUrl: '/collections/skills/postgresql.png' },
      { name: 'PHP-Laravel', imageUrl: '/collections/skills/php-laravel.png' }, // TODO: Add image
      { name: 'Git', imageUrl: '/collections/skills/git.png' },
      { name: 'Google Pub/Sub', imageUrl: '/collections/skills/google-pubsub.png' }, // TODO: Add image
      { name: 'Kafka', imageUrl: '/collections/skills/kafka.png' }, // TODO: Add image
      { name: 'RabbitMQ', imageUrl: '/collections/skills/rabbitmq.png' }, // TODO: Add image
      { name: 'Bootstrap', imageUrl: '/collections/skills/bootstrap.png' }, // TODO: Add image
      { name: 'Tailwind CSS', imageUrl: '/collections/skills/tailwind-css.png' }, // TODO: Add image
      { name: 'React', imageUrl: '/collections/skills/react.png' },
      { name: 'Next.js', imageUrl: '/collections/skills/nextjs.png' },
      { name: 'React Native', imageUrl: '/collections/skills/react-native.png' }, // TODO: Add image
    ],
  });

  console.log('Seeded skills successfully!');
}

runCustomMigration()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
