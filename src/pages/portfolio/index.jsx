import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Work | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-4 mt-3 pt-md-3">
          <Col lg="9">
            <h1 className="display-4 mb-3 page_title">Selected work</h1>
            <p className="portfolio_lede muted">
              Enterprise modules that stay behind the firewall get a walkthrough
              on request. Personal tools link out where a repo exists.
            </p>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="case_list">
          {dataportfolio.map((data, i) => (
            <article className="case_item" key={i}>
              <div className="case_visual" aria-hidden={data.img ? undefined : true}>
                {data.img ? (
                  <img src={data.img} alt="" />
                ) : (
                  <div className="case_mark">{data.cover}</div>
                )}
              </div>
              <div className="case_body">
                <p className="case_meta muted">
                  <span>{data.client}</span>
                  <span className="case_dot" aria-hidden="true">
                    ·
                  </span>
                  <span>{data.period}</span>
                  {data.confidential ? (
                    <>
                      <span className="case_dot" aria-hidden="true">
                        ·
                      </span>
                      <span>Confidential</span>
                    </>
                  ) : null}
                </p>
                <h2 className="case_title">{data.title}</h2>
                <p className="case_summary">{data.summary}</p>
                <p className="case_role muted">{data.role}</p>
                <ul className="case_stack">
                  {data.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <ul className="case_points">
                  {data.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {data.link ? (
                  <a
                    className="case_link"
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.linkLabel}
                  </a>
                ) : (
                  <span className="case_link case_link--muted">
                    {data.linkLabel}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
