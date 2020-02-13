import React from "react";
import styled from "styled-components";
const StyledBottom = styled.div`
  padding: 0;
  margin: 100px 90px;
  max-width: 1100px;
  position: relative;
  @media (max-width: 767px) {
    margin: 20px 30px;
  }

  h3 {
    margin: 0;
    text-align: center;
    font-size: 24px;
    line-height: 1.25;
    text-align: center;
    color: #000000;
    text-transform: uppercase;
    font-weight: 900;
  }
`;
const StyledBottomSection = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-auto-rows: minmax(550px, auto);
  grid-gap: 30px;
  max-width: 1100px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
  margin: 30px 0px 25px;
  margin-bottom: 90px;

  h3 {
    font-size: 24px;
    margin-bottom: 75px;
  }
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: repeat(6, 1fr);
    grid-row-gap: 10px;
    max-width: auto;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;
const StyledCards = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    margin: 5px;
    padding: 10px;
  }
`;
const StyledInfo = styled.div`
  display: block;
  width: 225px;
  margin: 10px;
  padding: 10px;
  @media (max-width: 767px) {
    margin: 5px;
    padding: 0px;
  }
  h4 {
    text-align: left;
    color: #333333;
    margin-bottom: 7px;
    font-weight: 900;
  }
  p {
    font-size: 14px;
    text-align: left;
    line-height: 1.428571429;
    color: #333333;
    box-sizing: border-box;
  }
  a {
    display: block;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.5px;
    text-align: left;
    color: #024d4c;
  }
`;
const StyledImg = styled.div`
  img {
    max-width: 60px;
    max-height: 40px;
    position: relative;
    top: 20px;
  }
`;
const StyledFooter = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 60px;
  position: absolute;
  left: 0;
  width: 100%;
  background-color: black;
  color: white;

  @media (max-width: 767px) {
    margin-top: 10px;
    display: flex;
    flex-flow: column;
  }
  .left-footer {
    text-align: left;
    margin-top: 20px;
    padding: 10px;
    bottom: 0px !important;

    a {
      margin: 5px;
      font-size: 15px;
      color: white;
    }
  }
  .left-footer {
    @media (max-width: 767px) {
      text-align: center;
      font-size: 10px;
      padding: 5px;
      margin-top: 10px;
    }
  }

  .center-footer {
    text-align: center;
    font-size: 10px;
    padding: 30px;
    margin-top: 34px;
    span {
      color: #337ab7;
    }
  }
  .center-footer {
    @media (max-width: 767px) {
      text-align: center;
      left: 20%;
      padding: 5px;
      margin-top: 0px;
    }
  }

  .right-footer {
    text-align: right;
    padding: 30px;
    margin-top: 50px;
    font-size: 10px;
    a {
      color: white;
    }
  }
  .right-footer {
    @media (max-width: 767px) {
      text-align: center;
      margin-top: 0px;
      padding: 5px;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <StyledBottom>
        <h3>
          Wedding Planning is a piece of cake with Weds360.We know what matters
          most and you can count on us every step of the way.
        </h3>
        <StyledBottomSection>
          <StyledCards>
            <StyledImg>
              <img
                src="https://weds360.com/assets/icons/tools-website-95bef8b478b6c85387e84ee788519776163c56e0b019ed23465792a72ca2afc4.png"
                alt="Wedding Website"
              ></img>{" "}
            </StyledImg>

            <StyledInfo>
              <h4>WEDDING WEBSITE</h4>
              <p>
                Where you will save all your wedding memories forever, where you
                will choose your own personalized template, manage every event
                detail and let your guests share their pictures, videos and
                moments with you.
              </p>
              <a href="s">Create your website</a>
            </StyledInfo>
          </StyledCards>
          <StyledCards>
            <StyledImg>
              <img
                src="https://weds360.com/assets/icons/tools-budgeter-ec7fc844bc691fe93aedce93cd23271a5a78c914f01a9a125001be262182a4e7.png"
                alt="Budgeter"
              ></img>
            </StyledImg>
            <StyledInfo>
              {" "}
              <h4>BUDGETER</h4>
              <p>
                Do you have a figure in mind? Place it in the budgeter and we
                will provide you with all the choices and possibilities you can
                think of.
              </p>
              <a href="/">Create and manage your budget</a>
            </StyledInfo>
          </StyledCards>

          <StyledCards>
            <StyledImg>
              {" "}
              <img
                src="https://weds360.com/assets/icons/tools-guestlist-f425f68309d1c60ecfbd742d0c23f6ac6e4c5f06112cc32c7f03cb44e76e46c4.png"
                alt="Guest List"
              ></img>
            </StyledImg>
            <StyledInfo>
              <h4>GUEST LIST</h4>
              <p>
                Who is coming? Who is not? Who replied with a "Maybe"? Manage
                all of this while customizing your invitations. All in one place
                and right at your fingertips.
              </p>
              <a href="/">Create your guest list</a>
            </StyledInfo>
          </StyledCards>
          <StyledCards>
            <StyledImg>
              {" "}
              <img
                src="https://weds360.com/assets/icons/tools-checklist-e124e29dd969e38098828647686c96804fe8369a8b09b6d9fc422f9a4e7b5e22.png"
                alt="Check List"
              ></img>
            </StyledImg>
            <StyledInfo>
              <h4>CHECK LIST</h4>
              <p>
                Set your tasks, create your priority list and never forget any
                wedding detail.
              </p>
              <a href="/">Get your check list</a>
            </StyledInfo>
          </StyledCards>
          <StyledCards>
            <StyledImg>
              {" "}
              <img
                src="https://weds360.com/assets/icons/tools-registry-44ab24a86952730b44ec02ae3405b2665d61471f42a631968093d3613f4f95e8.png"
                alt="Register List"
              ></img>
            </StyledImg>
            <StyledInfo>
              {" "}
              <h4>REGISTRY LIST</h4>
              <p>
                Escape the awkward moments and receiving the same gift twice by
                listing everything you've thought of and every store you love.
                Let your guests choose what to get you for the wedding and say
                goodbye to unwanted presents.
              </p>
              <a href="/">Create your dream list</a>
            </StyledInfo>
          </StyledCards>
          <StyledCards>
            <StyledImg>
              <img
                src="https://weds360.com/assets/icons/tools-vendors-ed23b60c6df77090fbdd0525fa4933dc63663550ded8c05f79e46168566f20b8.png"
                alt="Vendors"
              ></img>
            </StyledImg>
            <StyledInfo>
              {" "}
              <h4>VENDORS</h4>
              <p>
                Meet your service providers, view their profiles and make all
                the perfect choice for your wedding night.
              </p>
              <a href="/">Start your tour</a>
            </StyledInfo>
          </StyledCards>
        </StyledBottomSection>
      </StyledBottom>

      <StyledFooter>
        <div className="left-footer">
          <h1>Weds360</h1>
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="center-footer">
          <p>
            © Copyright <span>Plus360</span>. All Rights Reserved{" "}
          </p>
        </div>
        <div className="right-footer">
          <a href="/">Terms & Conditions</a>
          <br />
          <a href="/">Privacy Policy</a>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
