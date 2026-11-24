import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4 page_title">About</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 section_label">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <p className="about_copy">{dataabout.aboutme}</p>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 section_label">Work</h3>
          </Col>
          <Col lg="7">
            <ul className="work_list">
              {worktimeline.map((data, i) => (
                <li className="work_item" key={i}>
                  <div className="work_head">
                    <strong>{data.jobtitle}</strong>
                    <span className="work_date muted">{data.date}</span>
                  </div>
                  <div className="work_where">{data.where}</div>
                  {data.detail ? (
                    <p className="work_detail muted">{data.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 section_label">Tools I use</h3>
          </Col>
          <Col lg="7">
            <ul className="skill_list">
              {skills.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 section_label">How I help</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => (
              <div className="service_" key={i}>
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc muted">{data.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
