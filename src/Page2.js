import React, { useEffect } from "react";
import "./Page2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Page2 = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      className="page-2 mt-0 md:mt-12 lg:mt-0"
      style={{ backgroundColor: "#ffffff", overflowX: "hidden" }}
    >
      <div className="header2">
        <h1 className="title2">
          Mastering <span style={{ color: "#ce5e11" }}>Current Affairs</span> is
          a crucial step in conquering the UPSC CSE. Our program offers a
          streamlined approach designed for your success:
        </h1>
      </div>
      <div className="container2">
        <div
          className="content2 my-6 lg:my-0"
          style={{ fontSize: "1.2em", marginLeft: "5%" }}
        >
          <div>
            <h2>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                style={{ color: "#0e85d1", marginRight: "1%" }}
              />
              <strong>Simple Language:</strong>
              <br />
              No complex words, suitable for both freshers & veterans.
            </h2>
          </div>
          <div>
            <h2>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                style={{ color: "#ce5e11", marginRight: "1%" }}
              />
              <strong>Tabular format for pleasant reading experience:</strong>
              <br /> No more clumsy PDFs. Try our user-friendly format with
              ample space for your doodles!
            </h2>
          </div>
          <div>
            <h2>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                style={{ color: "#0e85d1", marginRight: "1%" }}
              />
              <strong>Comprehensive but not burdensome</strong>
              <br />
              Collated & edited from multiple newspapers & reputable coaching
              institutes. But we won’t overload with unnecessary info!!
            </h2>
          </div>
        </div>

        <div
          className="details2"
          style={{ fontSize: "1.2em", marginLeft: "5%" }}
        >
          <Link to="/CA" target="_blank" rel="noopener noreferrer">
            <div>
              <h2>
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  style={{ color: "#0e85d1", marginRight: "5px" }}
                />
                <strong style={{ color: "#34495E" }}>Monthly Magazine</strong>
                <strong> (Best rated by our students)</strong>
                <br />
                Released in two parts – 1st & 16th of every month.
              </h2>
            </div>
          </Link>
          <Link to="/CA" target="_blank" rel="noopener noreferrer">
            <div>
              <h2>
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  style={{ color: "#0e85d1", marginRight: "5px" }}
                />
                <strong style={{ color: "#34495E" }}>Quarterly Magazine</strong>
                <br />
                Subject wise compilation released once in three months. This is
                nothing but Yearly magazine divided into four parts.
              </h2>
            </div>
          </Link>
          <Link to="/CA" target="_blank" rel="noopener noreferrer">
            <div>
              <h2>
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  style={{ color: "#0e85d1", marginRight: "5px" }}
                />
                <strong style={{ color: "#34495E" }}>MCQ Magazine</strong>
                <br />
                For quick revision of Monthly Current Affairs presented in MCQ
                format.
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page2;
