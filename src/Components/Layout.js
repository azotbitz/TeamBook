import React from "react";
import "../Styles/layout.css"
import { NavLink, Outlet } from "react-router-dom";



const Layout = () => {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__logo">
                        <NavLink className="header__logo-link" to="/">
                            <span className="header__logo-img">
                                <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24" cy="24" r="24" fill="#EEE9E4"/>
                                    <circle cx="24" cy="24" r="23.5" stroke="#DC6945" stroke-opacity=".5"/>
                                    <path
                                        d="M15.197 32v-.935l1.751-.14V17.413h-4.393l-.14 2.385h-1.053v-3.438h12.45v3.438H22.77l-.15-2.385h-4.383v13.514l1.751.14V32h-4.79Zm10.42 0v-.935l1.751-.14v-13.48l-1.75-.14v-.946h6.262c1.625 0 2.893.344 3.803 1.032.91.68 1.364 1.708 1.364 3.083 0 .816-.233 1.525-.698 2.127-.459.594-1.092.995-1.902 1.203.645.107 1.21.344 1.697.709.495.365.878.82 1.15 1.364a3.76 3.76 0 0 1 .419 1.762c0 1.403-.455 2.481-1.364 3.233-.903.752-2.11 1.128-3.62 1.128h-7.112Zm3.04-1.074h4.071c1.154 0 2.056-.287 2.707-.86.66-.572.989-1.375.989-2.406 0-.623-.133-1.174-.398-1.654a2.752 2.752 0 0 0-1.181-1.139c-.523-.272-1.16-.408-1.912-.408h-4.276v6.467Zm0-7.552h3.599c1.117 0 1.976-.25 2.578-.752.609-.501.913-1.232.913-2.191 0-.996-.33-1.74-.988-2.235-.652-.501-1.611-.752-2.88-.752h-3.222v5.93Z"
                                        fill="#DC6945" fill-opacity=".5"/>
                                </svg>
                            </span>
                        </NavLink>
                        <nav className="header__left-nav">
                            <NavLink className="left-nav__link" to="books">Книги</NavLink>
                            <NavLink className="left-nav__link" to="freeBooks">Бесплатные книги</NavLink>
                            <NavLink className="left-nav__link" to="genres">Жанры</NavLink>
                        </nav>
                    </div>
                    <div className="header__right">
                        <div className="header__right-search">
                            <span className="right-search__icon">
                                <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M13.199 11.608h-.835l-.295-.285a6.856 6.856 0 0 0 1.563-5.635C13.135 2.755 10.686.412 7.729.053A6.866 6.866 0 0 0 .053 7.725c.36 2.954 2.703 5.402 5.639 5.899a6.866 6.866 0 0 0 5.638-1.562l.285.295v.834l4.487 4.484c.433.433 1.14.433 1.573 0a1.114 1.114 0 0 0 0-1.572L13.2 11.608Zm-6.335 0A4.743 4.743 0 0 1 2.112 6.86 4.743 4.743 0 0 1 6.864 2.11a4.743 4.743 0 0 1 4.75 4.749 4.743 4.743 0 0 1-4.75 4.748Z"
                                          fill="#1D1D1D"/>
                                </svg>
                            </span>
                            <input type="text" className="right-search__input" id="search__input"/>
                        </div>
                        <div className="header__right-link header__right-link_color">
                            <NavLink className="right-link__item right-link__item_left" to="buySubscription">Купить подписку</NavLink>
                        </div>
                        <div className="header__right-link">
                            <NavLink className="right-link__item" to="signIn">Войти</NavLink>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet/>
            <footer>
            2022
            </footer>
        </>
    )
}

export {Layout}