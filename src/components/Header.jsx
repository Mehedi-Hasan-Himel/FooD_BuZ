import styled from "styled-components";

const Header = () => {
  return (
    <HeaderSection>
      {/* Header Search Section Start */}
      <SearchSection>
        <h1>
          F<span>oo</span>D B<span>u</span>Z
        </h1>
        <input type="text" placeholder="Search Food" />
      </SearchSection>
      {/* Header Search Section End */}

      {/* Header Filter Section Start */}
      <FilterSection>
        <ul>
          <li>
            <button href="">All</button>
          </li>
          <li>
            <button href="">Breakfast</button>
          </li>
          <li>
            <button href="">Launch</button>
          </li>
          <li>
            <button href="">Dinner</button>
          </li>
        </ul>
      </FilterSection>
      {/* Header Filter Section End */}
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.header`
  max-width: 100%;
  max-height: 240px;
`;

const SearchSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 120px 85px 54px;
  h1 {
    font-size: 2rem;
  }
  span {
    color: #f8bc45;
  }
  input {
    display: flex;
    padding: 11px 157px 10px 15px;
    align-items: center;
    border: none;
    border-radius: 5px;
    border: 1px solid #f8bc45;
    background: transparent;
    color: #fff;
    font-size: 1rem;
  }
  ::placeholder {
    color: whitesmoke;
  }

  @media screen and (max-width: 1024px) {
    padding: 80px 20px 40px;
    text-align: center;
    input {
      padding: 8px 15px;
    }
  }
`;

const FilterSection = styled.section`
  ul {
    display: flex;
    justify-content: center;
    li {
      list-style: none;
      padding: 0 20px;
    }
  }
  button {
    border: none;
    border-radius: 5px;
    background: #f8bc45;
    color: #fff;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: bolder;
  }
  padding-bottom: 30px;

  @media screen and (max-width: 1024px) {
    ul {
      justify-content: center;
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      justify-content: space-evenly;
      li {
        padding: 10px 0;
      }
    }
  }
`;
