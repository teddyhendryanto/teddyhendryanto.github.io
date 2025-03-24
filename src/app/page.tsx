import MainLayout from '@/components/MainLayout';
import { prisma } from '@/lib/prisma';
import { CircleCheck, MapPin } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

const Home = async () => {
  const skills = await prisma.skill.findMany();
  const experiences = await prisma.experience.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <MainLayout>
      <section className="section">
        <Container fluid={'md'}>
          <div className="d-flex flex-column justify-content-between gap-40px">
            <div className="d-flex flex-column gap-20px">
              <h1>Hi, I&apos;m Teddy Hendryanto 👋</h1>
              <p>
                A dedicated software engineer with over {moment().year() - 2013} years of experience
                and a strong focus on backend development, experienced in designing and building
                scalable, high-performance systems. While backend is my core expertise, I also have
                hands-on experience with frontend development, allowing me to work seamlessly across
                the full stack. I excel in both leading teams and working independently, always
                eager to explore new technologies and programming languages to deliver efficient and
                high-quality solutions.
              </p>
            </div>
            <div className="d-flex flex-column gap-20px">
              <div className="d-flex gap-10px">
                <MapPin />
                <p>Jakarta, Indonesia</p>
              </div>
              <div className="d-flex gap-10px">
                <CircleCheck color="#10B981" />
                <p>Available for new job opportunity</p>
              </div>
              <div className="d-flex gap-10px">
                <CircleCheck color="#10B981" />
                <p>Available for new freelance job</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="section bg-gray-50">
        <Container fluid={'md'}>
          <div className="d-flex flex-column gap-40px">
            <div className="d-flex flex-column justify-content-center gap-40px">
              <h2>Skills</h2>
              <p>The skills, tools and technologies I am really good at:</p>
            </div>
            <div className="d-flex flex-wrap gap-20px">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="d-flex flex-column align-items-center gap-10px"
                  style={{ width: 100 }}>
                  <Image src={skill.imageUrl as string} alt={skill.name} width={64} height={64} />
                  <p className="text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container fluid={'md'}>
          <div className="d-flex flex-column gap-40px">
            <div className="d-flex flex-column justify-content-center gap-40px">
              <h2>Experiences</h2>
              <p>Summary of my most recent experiences:</p>
            </div>
            <div className="d-flex flex-column gap-20px">
              <Row className="justify-content-center g-5">
                {experiences.map((experience) => (
                  <Col xs={12} md={8} key={experience.id}>
                    <div className="d-flex justify-content-start gap-40px">
                      <Image
                        src={experience.companyImage as string}
                        alt={experience.companyName}
                        width={64}
                        height={64}
                      />
                      <div className="d-flex flex-column gap-10px">
                        <p>
                          {experience.startDate} - {experience.endDate}
                        </p>
                        <h5>
                          {experience.title} | {experience.companyName}
                        </h5>
                        <div dangerouslySetInnerHTML={{ __html: experience.description }} />
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default Home;
