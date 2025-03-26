import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function runCustomMigration() {
  await prisma.skill.createMany({
    data: [
      { name: 'JavaScript', imageUrl: '/collections/skills/javascript.png' },
      { name: 'TypeScript', imageUrl: '/collections/skills/typescript.png' },
      { name: 'NestJS', imageUrl: '/collections/skills/nestjs.png' },
      { name: 'Go', imageUrl: '/collections/skills/go.png' },
      { name: 'GraphQL', imageUrl: '/collections/skills/graphql.png' },
      { name: 'REST', imageUrl: '/collections/skills/rest.png' },
      { name: 'Redis', imageUrl: '/collections/skills/redis.png' },
      { name: 'MySQL', imageUrl: '/collections/skills/mysql.png' },
      { name: 'MongoDB', imageUrl: '/collections/skills/mongodb.png' },
      { name: 'PostgreSQL', imageUrl: '/collections/skills/postgresql.png' },
      { name: 'PHP-Laravel', imageUrl: '/collections/skills/laravel.png' },
      { name: 'Git', imageUrl: '/collections/skills/git.png' },
      { name: 'Google Pub/Sub', imageUrl: '/collections/skills/google-pubsub.png' },
      { name: 'Kafka', imageUrl: '/collections/skills/kafka.png' },
      { name: 'RabbitMQ', imageUrl: '/collections/skills/rabbitmq.png' },
      { name: 'Bootstrap', imageUrl: '/collections/skills/bootstrap.png' },
      { name: 'Tailwind CSS', imageUrl: '/collections/skills/tailwind.png' },
      { name: 'React', imageUrl: '/collections/skills/react.png' },
      { name: 'Next.js', imageUrl: '/collections/skills/nextjs.png' },
      { name: 'React Native', imageUrl: '/collections/skills/react-native.png' },
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
