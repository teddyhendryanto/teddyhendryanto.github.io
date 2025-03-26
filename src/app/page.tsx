import MainLayout from '@/components/MainLayout';
import { prisma } from '@/lib/prisma';
import classNames from 'classnames/bind';
import {
  CircleCheck,
  LucideGithub,
  LucideLink,
  LucideLinkedin,
  LucideMail,
  MapPin,
} from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './page.module.scss';

const cx = classNames.bind(styles);

const Home = async () => {
  const skills = await prisma.skill.findMany();
  const experiences = await prisma.experience.findMany();
  const works = await prisma.work.findMany();

  return (
    <MainLayout>
      <div className={cx('Home')}>
        <section className="section">
          <Container fluid={'md'}>
            <Row>
              <Col xs={12} md={8} className="pe-md-5">
                <div className="d-flex flex-column justify-content-between gap-40px">
                  <div className="d-flex flex-column gap-20px">
                    <h1>Hi, I&apos;m Teddy Hendryanto</h1>
                    <p>
                      A dedicated software engineer with over {moment().year() - 2013} years of
                      experience and a strong focus on backend development, experienced in designing
                      and building scalable, high-performance systems. While backend is my core
                      expertise, I also have hands-on experience with frontend development, allowing
                      me to work seamlessly across the full stack. I excel in both leading teams and
                      working independently, always eager to explore new technologies and
                      programming languages to deliver efficient and high-quality solutions.
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
                  <div className="d-flex gap-20px">
                    <Link href="mailto:teddy.hendryanto@gmail.com">
                      <LucideMail />
                    </Link>
                    <Link href="https://www.linkedin.com/in/teddyhendryanto/" target="_blank">
                      <LucideLinkedin />
                    </Link>
                    <Link href="https://github.com/teddyhendryanto" target="_blank">
                      <LucideGithub />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} className="align-self-center">
                <Image
                  src={`/collections/profile/image.jpg`}
                  alt="teddy hendryanto"
                  width={300}
                  height={400}
                  className="rounded-4 img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section bg-gray-50">
          <Container fluid={'md'}>
            <div className="d-flex flex-column gap-40px">
              <div className="d-flex flex-column justify-content-center gap-20px">
                <h2>Skills</h2>
                <p>The skills, tools and technologies I am really good at:</p>
              </div>
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-40px">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="d-flex flex-column align-items-center gap-10px"
                    style={{ width: 100 }}>
                    <Image
                      src={skill.imageUrl as string}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className={cx('image-64')}
                    />
                    <p className="text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
        <section className="section" id="experience">
          <Container fluid={'md'}>
            <div className="d-flex flex-column gap-40px">
              <div className="d-flex flex-column justify-content-center gap-20px">
                <h2>Experiences</h2>
                <p>Summary of my most recent experiences:</p>
              </div>
              <div className="d-flex flex-column gap-20px">
                <Row className="justify-content-start g-5">
                  {experiences.map((experience) => (
                    <Col xs={12} md={12} key={experience.id}>
                      <div
                        className={cx(
                          'd-flex flex-column flex-lg-row justify-content-start align-items-start gap-60px',
                          'card-experience',
                          'p-5',
                        )}>
                        <Image
                          src={experience.companyImage as string}
                          alt={experience.companyName}
                          width={96}
                          height={96}
                          className={cx('image')}
                        />
                        <div className="d-flex flex-column gap-10px">
                          <small className="body-sm">
                            {experience.startDate} - {experience.endDate}
                          </small>
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
        <section className="section bg-gray-50" id="work">
          <Container fluid={'md'}>
            <div className="d-flex flex-column gap-40px">
              <div className="d-flex flex-column justify-content-center gap-20px">
                <h2>Work</h2>
                <p>Some of projects I have built:</p>
              </div>
              <div className="d-flex flex-column gap-20px">
                {works.map((work, index) => (
                  <Row key={work.id} className="justify-content-start g-5">
                    <Col xs={12} md={12} className={index > 0 ? 'pt-5' : undefined}>
                      <Container fluid={'md'}>
                        <Row className={cx('card-work')}>
                          <Col
                            xs={12}
                            xl={6}
                            className="d-flex align-self-center justify-content-center bg-gray-200 p-5">
                            <Image
                              src={work.imageUrl as string}
                              width={512}
                              height={288}
                              alt={work.name}
                              className={cx('image', 'img-fluid')}
                            />
                          </Col>
                          <Col xs={12} xl={6} className="align-self-center p-5">
                            <div className="d-flex flex-column gap-20px">
                              <h5 className="v-align-middle">{work.name}</h5>
                              <small className="body-sm">{work.period}</small>
                              <div
                                dangerouslySetInnerHTML={{ __html: work.description as string }}
                              />
                              <div className="d-flex flex-wrap gap-10px">
                                {work.tags.split(',')?.map((tag) => (
                                  <span key={tag} className="badge bg-gray-500 color">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              {work.externalUrl && (
                                <Link href={work.externalUrl} target="_blank" rel="noreferrer">
                                  <LucideLink />
                                </Link>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                  </Row>
                ))}
              </div>
            </div>
          </Container>
        </section>
        <section className="section" id="contact">
          <Container fluid={'md'}>
            <div className="d-flex flex-column gap-40px">
              <div className="d-flex flex-column justify-content-center gap-20px">
                <h2>Get in touch</h2>
                <p>
                  Feel free to reach out to me if you are looking for a new employee, developer,
                  have a query, or simply want to connect.
                </p>
              </div>
              <div className="d-flex flex-column justify-content-center gap-20px">
                <div className="d-flex gap-10px">
                  <LucideMail />
                  <Link href="mailto:teddy.hendryanto@gmail.com">teddy.hendryanto@gmail.com</Link>
                </div>
                <div className="d-flex gap-10px">
                  <LucideLinkedin />
                  <Link href="https://www.linkedin.com/in/teddyhendryanto/" target="_blank">
                    teddyhendryanto
                  </Link>
                </div>
                <div className="d-flex gap-10px">
                  <LucideGithub />
                  <Link href="https://github.com/teddyhendryanto" target="_blank">
                    teddyhendryanto
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
