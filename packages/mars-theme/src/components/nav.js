import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

/**
 * Two level menu (with one level of child menus)
 */
const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  // console.log('ITEMS:',items)
  return (
    <NavContainer>
      {items.map((item) => {
        if (!item.child_items) {
          return (
            <NavItem key={item.ID}>
              <Link link={item.url}>{item.title}</Link>
            </NavItem>
          );
        } else {
          const childItems = item.child_items;
          return (
            <NavItemWithChild key={item.ID}>
              <NavItem>
                <Link link={item.url}>{item.title}</Link>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" fill="rgba(87,87,87,1)"/></svg>
              </NavItem>
              <ChildMenu>
                {childItems.map((childItem) => {
                  return (
                    <NavItem key={childItem.ID}>
                      <Link link={childItem.url}>{childItem.title}</Link>
                    </NavItem>
                  );
                })}
              </ChildMenu>
            </NavItemWithChild>
          );
        }
      })}
    </NavContainer>
  );
};

/**
 * Legacy mars-theme function
 */
// const Nav = ({ state }) => (
//   <NavContainer>
//     {state.theme.menu.map(([name, link]) => {
//       // Check if the link matched the current page url
//       const isCurrentPage = state.router.link === link;
//       return (
//         <NavItem key={name}>
//           {/* If link url is the current page, add `aria-current` for a11y */}
//           <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
//             {name}
//           </Link>
//         </NavItem>
//       );
//     })}
//   </NavContainer>
// );

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  position: relative;
  
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  color: #575757;
  font-style: normal;
  font-weight: 600;
  padding: 0 16px;
  margin: 0;
  font-size: 1em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  
  box-sizing: border-box;
  flex-shrink: 0;
  position: relative;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: red;
    }

    :hover{
      color: #491F10;
    }
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;

const ChildMenu = styled.div`
  position: absolute;
  display: none;
  left: 0;
  background-color: #fff;
  width: 100%;
  z-index: 1;
  width: max-content;

  > ${NavItem}{
    border-bottom: 1px solid #eee;
  }
`;

const NavItemWithChild = styled.div`
  position: relative;
  transition: .3s;

  :hover > ${ChildMenu}{
    display:block;
  }

  :hover svg{
    transform:rotate(180deg);
    transition: .3s;
  }
`;

