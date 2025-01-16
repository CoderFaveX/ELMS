import React, { Fragment, useEffect, useState } from "react";

import { Helmet } from "react-helmet";

import Navbar8 from "../components/navbar8";
import Hero17 from "../components/hero17";
import Features24 from "../components/features24";
import CTA26 from "../components/cta26";
import Features25 from "../components/features25";
import Pricing14 from "../components/pricing14";
import Steps2 from "../components/steps2";
import Testimonial17 from "../components/testimonial17";
import Contact10 from "../components/contact10";
import Footer4 from "../components/footer4";
import "./home.css";

import { fetchBooks } from "../functions/fetchBooks";

const Home = (props) => {
  const [books, setBooks] = useState([]);
  const [books2, setBooks2] = useState([]);
  const [books3, setBooks3] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    try {
      setIsLoading(true);
      const books = await fetchBooks("fiction", 20);
      const books2 = await fetchBooks("art", 20);
      const books3 = await fetchBooks("medicine", 20);
      setBooks(books);
      setBooks2(books2);
      setBooks3(books3);
    } catch (e) {
      console.error(e.stack);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <div className="home-container">
      <Helmet>
        <title>Radiant Mysterious Frog</title>
        <meta property="og:title" content="Radiant Mysterious Frog" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Already have an account? Log in here
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Search Books</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">Books</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Login</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Books</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Login</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Explore our collection of books
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">Discover more about each book</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">Sign Up</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Sign Up</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Create an account to access more features
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">View Account</span>
          </Fragment>
        }
        link3Url={"#"}
        link1Url={"/"}
        link2Url={"/search"}
        linkUrlPage1={"/"}
        linkUrlPage2={"/search"}
        linkUrlPage3={"/register"}
        linkUrlPage4={"/login"}
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">View Account</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Search books</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">Welcome to our E-Library</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Explore a vast collection of books at your fingertips. Dive into
              the world of literature with just a click.
            </span>
          </Fragment>
        }
        books={books}
        books2={books2}
        books3={books3}
        isLoading={isLoading}
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Detailed book information and purchase/download options for
              Feature 3
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">
              Book Details Page for Feature 3
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Brief description and &apos;View Book&apos; button for Feature 2
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">
              Interactive Home Page for Feature 1
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Grid layout of books with thumbnails, titles, and descriptions for
              Feature 1
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">
              Book Details Page for Feature 2
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Start Building Your Digital Library Today
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Browse through our collection of books and start your reading
              journey with just a click.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Explore Books</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Enable users to sign up and log in securely with simple forms and
              validation.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Engage users with a grid layout showcasing books with thumbnails,
              titles, and descriptions.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Book Details Page</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Interactive Home Page</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Provide a detailed view of each book with a larger cover, full
              description, and download/purchase links.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">User Authentication</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$29.99/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Subscribe Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Subscribe Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Unlimited downloads</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Ad-free reading experience</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Subscribe Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Access to entire library</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Priority customer support</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Exclusive author interviews</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Access to 2000+ books</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$19.99/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Personalized recommendations</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">or $200 yearly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Access to 1000+ books</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Early access to new releases</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text183">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text184">$9.99/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text185">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186">
              Sign up for a new account to access the e-library website.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187">
              Click on a book to view its detailed information, cover image, and
              download/purchase options.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188">Explore Books</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Browse through a wide selection of books with thumbnails, titles,
              and descriptions.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190">Create an Account</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191">View Book Details</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192">
              Existing users can log in to their account to access personalized
              features and preferences.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193">Login to Your Account</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194">Writer</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195">Book Lover</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197">David Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198">
              As an author, I appreciate the seamless process of publishing my
              books on this website. Great service!
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200">Teacher</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Emily Brown</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202">
              Read what our customers have to say about their experience with
              our e-library platform.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203">Student</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204">
              I love the variety of books available on this platform. It&apos;s
              easy to navigate and find new reads.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206">
              This e-library has been a lifesaver for my research projects. The
              resources are extensive and reliable.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207">
              I recommend this platform to all my students. It&apos;s
              user-friendly and enriching for educational purposes.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210">Locations</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text213">Cluj - Napoca</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text214">Privacy Policy</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215">FAQ</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216">About Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  );
};

export default Home;
