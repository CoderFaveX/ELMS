import React, { Fragment } from "react";

import Script from "dangerous-html/react";
import PropTypes from "prop-types";

import "./hero17.css";

const Hero17 = (props) => {
  const { books, books2, books3, isLoading } = props;
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text7">Welcome to our E-Library</span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text8">
                  Explore a vast collection of books at your fingertips. Dive
                  into the world of literature with just a click.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button
            className="thq-button-filled hero17-button1"
            onClick={() => (location.href = location.origin + "/search")}
          >
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text6">Main action</span>
                </Fragment>
              )}
            </span>
          </button>
          <button
            className="thq-button-outline hero17-button2"
            onClick={() => (location.href = location.origin + "/register")}
          >
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text5">Secondary action</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            {isLoading && <p>Loading Books...</p>}
            {books && books.length > 0
              ? books.map((item, index) => (
                  <div className="special-book-container" key={index}>
                    <img
                      src={item.thumbnail || "placeholder-image-url"}
                      alt={item.title || "Book cover"}
                      className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
                    />
                    <span>
                      {item.title && item.title.length > 20
                        ? `${item.title.substring(0, 20)}...`
                        : item.title}{" "}
                      by{" "}
                      {item.authors &&
                        item.authors.map((author, idx) =>
                          idx === item.authors.length - 1
                            ? author
                            : `${author}, `
                        )}
                    </span>

                    <button
                      className="thq-button-outline hero17-button2"
                      onClick={() =>
                        window.open(
                          "https://books.google.com",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <span className="thq-body-small">
                        <span className="hero17-text5">
                          View book on Google
                        </span>
                      </span>
                    </button>
                  </div>
                ))
              : !isLoading && <p>No books were found</p>}
          </div>
          {/* <div className="thq-animated-group-horizontal">
            <div className="special-book-container">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
              />
              <span>Book Name</span>

              <button
                className="thq-button-outline hero17-button2"
                onClick={() => (location.href = location.origin + "/register")}
              >
                <span className="thq-body-small">
                    <Fragment>
                      <span className="hero17-text5">View books on Google</span>
                    </Fragment>
                </span>
              </button>
            </div>
            <div className="special-book-container">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
              />
              <span>Book Name</span>

              <button
                className="thq-button-outline hero17-button2"
                onClick={() => (location.href = location.origin + "/register")}
              >
                <span className="thq-body-small">
                    <Fragment>
                      <span className="hero17-text5">View books on Google</span>
                    </Fragment>
                </span>
              </button>
            </div>
            <div className="special-book-container">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
              />
              <span>Book Name</span>

              <button
                className="thq-button-outline hero17-button2"
                onClick={() => (location.href = location.origin + "/register")}
              >
                <span className="thq-body-small">
                    <Fragment>
                      <span className="hero17-text5">View books on Google</span>
                    </Fragment>
                </span>
              </button>
            </div>
            <div className="special-book-container">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
              />
              <span>Book Name</span>

              <button
                className="thq-button-outline hero17-button2"
                onClick={() => (location.href = location.origin + "/register")}
              >
                <span className="thq-body-small">
                    <Fragment>
                      <span className="hero17-text5">View books on Google</span>
                    </Fragment>
                </span>
              </button>
            </div>
            <div className="special-book-container">
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
              />
              <span>Book Name</span>

              <button
                className="thq-button-outline hero17-button2"
                onClick={() => (location.href = location.origin + "/register")}
              >
                <span className="thq-body-small">
                    <Fragment>
                      <span className="hero17-text5">View books on Google</span>
                    </Fragment>
                </span>
              </button>
            </div>
            <div className="special-book-container">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
              />
              <span>Book Name</span>

              <button
                className="thq-button-outline hero17-button2"
                onClick={() => (location.href = location.origin + "/register")}
              >
                <span className="thq-body-small">
                    <Fragment>
                      <span className="hero17-text5">View books on Google</span>
                    </Fragment>
                </span>
              </button>
            </div>
          </div>
          <div className="thq-animated-group-horizontal">
            <div className="special-book-container">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
              />
              <span>Book Name</span>

              <button
                className="thq-button-outline hero17-button2"
                onClick={() => (location.href = location.origin + "/register")}
              >
                <span className="thq-body-small">
                    <Fragment>
                      <span className="hero17-text5">View books on Google</span>
                    </Fragment>
                </span>
              </button>
            </div>
            <div className="special-book-container">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
              />
              <span>Book Name</span>

              <button
                className="thq-button-outline hero17-button2"
                onClick={() => (location.href = location.origin + "/register")}
              >
                <span className="thq-body-small">
                    <Fragment>
                      <span className="hero17-text5">View books on Google</span>
                    </Fragment>
                </span>
              </button>
            </div>
            <div className="special-book-container">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
              />
              <span>Book Name</span>

              <button
                className="thq-button-outline hero17-button2"
                onClick={() => (location.href = location.origin + "/register")}
              >
                <span className="thq-body-small">
                    <Fragment>
                      <span className="hero17-text5">View books on Google</span>
                    </Fragment>
                </span>
              </button>
            </div>
            <div className="special-book-container">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
              />
              <span>Book Name</span>

              <button
                className="thq-button-outline hero17-button2"
                onClick={() => (location.href = location.origin + "/register")}
              >
                <span className="thq-body-small">
                    <Fragment>
                      <span className="hero17-text5">View books on Google</span>
                    </Fragment>
                </span>
              </button>
            </div>
            <div className="special-book-container">
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
              />
              <span>Book Name</span>

              <button
                className="thq-button-outline hero17-button2"
                onClick={() => (location.href = location.origin + "/register")}
              >
                <span className="thq-body-small">
                    <Fragment>
                      <span className="hero17-text5">View books on Google</span>
                    </Fragment>
                </span>
              </button>
            </div>
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div> */}
        </div>
        <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            {isLoading && <p>Loading Books...</p>}
            {books2 && books2.length > 0
              ? books2.map((item, index) => (
                  <div className="special-book-container" key={index}>
                    <img
                      src={item.thumbnail || "placeholder-image-url"}
                      alt={item.title || "Book cover"}
                      className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
                    />
                    <span>
                      {item.title && item.title.length > 20
                        ? `${item.title.substring(0, 20)}...`
                        : item.title}{" "}
                      by{" "}
                      {item.authors &&
                        item.authors.map((author, idx) =>
                          idx === item.authors.length - 1
                            ? author
                            : `${author}, `
                        )}
                    </span>

                    <button
                      className="thq-button-outline hero17-button2"
                      onClick={() =>
                        window.open(
                          "https://books.google.com",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <span className="thq-body-small">
                        <span className="hero17-text5">
                          View book on Google
                        </span>
                      </span>
                    </button>
                  </div>
                ))
              : !isLoading && <p>No books were found</p>}
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            {isLoading && <p>Loading Books...</p>}
            {books3 && books3.length > 0
              ? books3.map((item, index) => (
                  <div className="special-book-container" key={index}>
                    <img
                      src={item.thumbnail || "placeholder-image-url"}
                      alt={item.title || "Book cover"}
                      className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
                    />
                    <span>
                      {item.title && item.title.length > 20
                        ? `${item.title.substring(0, 20)}...`
                        : item.title}{" "}
                      by{" "}
                      {item.authors &&
                        item.authors.map((author, idx) =>
                          idx === item.authors.length - 1
                            ? author
                            : `${author}, `
                        )}
                    </span>

                    <button
                      className="thq-button-outline hero17-button2"
                      onClick={() =>
                        window.open(
                          "https://books.google.com",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <span className="thq-body-small">
                        <span className="hero17-text5">
                          View book on Google
                        </span>
                      </span>
                    </button>
                  </div>
                ))
              : !isLoading && <p>No books were found</p>}
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  );
};

Hero17.defaultProps = {
  image3Src:
    "https://images.unsplash.com/photo-1591621839477-83880c7ec521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjkwNDI3OHw&ixlib=rb-4.0.3&q=80&w=1080",
  image8Alt: "Hero Image",
  image2Src:
    "https://images.unsplash.com/photo-1474557054156-42a84a8087c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjkwNDI3OHw&ixlib=rb-4.0.3&q=80&w=1080",
  image6Alt: "Hero Image",
  image11Src:
    "https://images.unsplash.com/photo-1716032935820-1999b23cd023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjkwNDI3OHw&ixlib=rb-4.0.3&q=80&w=1080",
  image5Alt: "Hero Image",
  image1Alt: "Library Image",
  image7Src:
    "https://images.unsplash.com/photo-1590773301114-9f93b972e0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjkwNDI3OXw&ixlib=rb-4.0.3&q=80&w=1080",
  image7Alt: "Hero Image",
  image12Alt: "Hero Image",
  image2Alt: "Hero Image",
  image6Src:
    "https://images.unsplash.com/photo-1518534106112-7e2d9b85760a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjkwNDI4MHw&ixlib=rb-4.0.3&q=80&w=1080",
  image12Src:
    "https://images.unsplash.com/photo-1598368195835-91e67f80c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjkwNDI4MXw&ixlib=rb-4.0.3&q=80&w=1080",
  image3Alt: "Hero Image",
  image9Src:
    "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjkwNDI4MXw&ixlib=rb-4.0.3&q=80&w=1080",
  image11Alt: "Hero Image",
  action2: undefined,
  action1: undefined,
  image8Src:
    "https://images.unsplash.com/photo-1559056961-1f4dbbf9d36a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjkwNDI4MXw&ixlib=rb-4.0.3&q=80&w=1080",
  image5Src:
    "https://images.unsplash.com/photo-1695654403915-875c83caf3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjkwNDI4Mnw&ixlib=rb-4.0.3&q=80&w=1080",
  image4Src:
    "https://images.unsplash.com/photo-1598618023885-19ba276b562f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjkwNDI4Mnw&ixlib=rb-4.0.3&q=80&w=1080",
  image10Alt: "Hero Image",
  image4Alt: "Hero Image",
  heading1: undefined,
  content1: undefined,
  image10Src:
    "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjkwNDI4NHw&ixlib=rb-4.0.3&q=80&w=1080",
  image9Alt: "Hero Image",
  image1Src:
    "https://images.unsplash.com/photo-1687458121319-26a7b8a80437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjkwNDI4NXw&ixlib=rb-4.0.3&q=80&w=1080",
};

Hero17.propTypes = {
  image3Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.element,
  action1: PropTypes.element,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Src: PropTypes.string,
};

export default Hero17;
